import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Pencil, Trash2, Plus, LogOut, ImagePlus, Eye, EyeOff } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { z } from "zod";

const BlogPostSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(200, "Title must be under 200 characters"),
  excerpt: z.string().trim().max(500, "Excerpt must be under 500 characters").optional().or(z.literal("")),
  content: z.string().trim().min(1, "Content is required").max(50000, "Content must be under 50,000 characters"),
  cover_image_url: z.string().url("Invalid image URL").max(2000).optional().or(z.literal("")),
});

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  published: boolean;
  created_at: string;
}

const generateSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const BlogAdmin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingInline, setUploadingInline] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
      if (!session?.user) navigate("/admin");
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
      if (!session?.user) navigate("/admin");
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchPosts = useCallback(async () => {
    if (!user) return;
    const { data } = await supabase
      .from("blog_posts" as any)
      .select("*")
      .eq("author_id", user.id)
      .order("created_at", { ascending: false });
    if (data) setPosts(data as unknown as BlogPost[]);
  }, [user]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const resetForm = () => {
    setEditing(null);
    setIsNew(false);
    setTitle("");
    setExcerpt("");
    setContent("");
    setCoverUrl("");
    setPublished(false);
  };

  const startNew = () => {
    resetForm();
    setIsNew(true);
  };

  const startEdit = (post: BlogPost) => {
    setEditing(post);
    setIsNew(false);
    setTitle(post.title);
    setExcerpt(post.excerpt || "");
    setContent(post.content);
    setCoverUrl(post.cover_image_url || "");
    setPublished(post.published);
  };

  const uploadImage = async (file: File, type: "cover" | "inline") => {
    const setter = type === "cover" ? setUploadingCover : setUploadingInline;
    setter(true);
    const ext = file.name.split(".").pop();
    const path = `${user!.id}/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("blog-images").upload(path, file);
    if (error) {
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
      setter(false);
      return;
    }
    const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(path);
    const url = urlData.publicUrl;

    if (type === "cover") {
      setCoverUrl(url);
    } else {
      // Insert image URL on a new line in content
      setContent((prev) => prev + (prev ? "\n" : "") + url + "\n");
    }
    setter(false);
    toast({ title: "Image uploaded" });
  };

  const handleSave = async () => {
    const result = BlogPostSchema.safeParse({
      title,
      excerpt: excerpt || undefined,
      content,
      cover_image_url: coverUrl || undefined,
    });
    if (!result.success) {
      const firstError = result.error.errors[0]?.message || "Validation failed";
      toast({ title: firstError, variant: "destructive" });
      return;
    }
    setSaving(true);
    const slug = generateSlug(result.data.title);
    const payload = {
      title: result.data.title,
      slug,
      excerpt: result.data.excerpt || null,
      content: result.data.content,
      cover_image_url: result.data.cover_image_url || null,
      published,
      author_id: user!.id,
    };

    if (editing) {
      const { error } = await supabase
        .from("blog_posts" as any)
        .update(payload as any)
        .eq("id", editing.id);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else toast({ title: "Post updated" });
    } else {
      const { error } = await supabase
        .from("blog_posts" as any)
        .insert(payload as any);
      if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
      else toast({ title: "Post created" });
    }
    setSaving(false);
    resetForm();
    fetchPosts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    await supabase.from("blog_posts" as any).delete().eq("id", id);
    toast({ title: "Post deleted" });
    fetchPosts();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (authLoading || !user) return null;

  const showForm = isNew || editing;

  return (
    <Layout>
      <SEO title="Blog Admin | Eddie's Travel" description="Manage blog articles." />
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-heading text-3xl font-bold">Blog Admin</h1>
            <div className="flex gap-3">
              {!showForm && (
                <Button onClick={startNew} size="sm">
                  <Plus size={16} /> New Post
                </Button>
              )}
              <Button onClick={handleLogout} variant="ghost" size="sm">
                <LogOut size={16} /> Sign Out
              </Button>
            </div>
          </div>

          {showForm ? (
            <div className="bg-card border border-border rounded-lg p-6 space-y-5">
              <div>
                <Label>Title</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Article title" />
              </div>
              <div>
                <Label>Excerpt (short summary for listing)</Label>
                <Input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Brief summary…" />
              </div>
              <div>
                <Label>Cover Image</Label>
                <div className="flex items-center gap-3 mt-1">
                  <Input value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} placeholder="Paste URL or upload" className="flex-1" />
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium transition-colors">
                    <ImagePlus size={16} />
                    {uploadingCover ? "Uploading…" : "Upload"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && uploadImage(e.target.files[0], "cover")}
                    />
                  </label>
                </div>
                {coverUrl && (
                  <img src={coverUrl} alt="Cover preview" className="mt-3 rounded-lg max-h-48 object-cover" />
                )}
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <Label>Content</Label>
                  <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-xs font-medium transition-colors">
                    <ImagePlus size={14} />
                    {uploadingInline ? "Uploading…" : "Add Image"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && uploadImage(e.target.files[0], "inline")}
                    />
                  </label>
                </div>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your article here. Image URLs on their own line will render as images."
                  className="min-h-[300px]"
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPublished(!published)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    published
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {published ? <Eye size={16} /> : <EyeOff size={16} />}
                  {published ? "Published" : "Draft"}
                </button>
              </div>
              <div className="flex gap-3">
                <Button onClick={handleSave} disabled={saving}>
                  {saving ? "Saving…" : editing ? "Update Post" : "Create Post"}
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.length === 0 && (
                <p className="text-muted-foreground text-center py-12">No posts yet. Click "New Post" to get started.</p>
              )}
              {posts.map((post) => (
                <div key={post.id} className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading font-semibold truncate">{post.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${post.published ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{new Date(post.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button size="icon" variant="ghost" onClick={() => startEdit(post)}>
                      <Pencil size={16} />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => handleDelete(post.id)}>
                      <Trash2 size={16} className="text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogAdmin;
