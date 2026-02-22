import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blog_posts" as any)
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (!error && data) {
        setPost(data as unknown as Post);
      }
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="section-padding text-center text-muted-foreground">Loading…</div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  // Split content by newlines, detect image URLs
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      // Detect image URLs
      if (/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i.test(trimmed)) {
        return (
          <img
            key={i}
            src={trimmed}
            alt="Blog content image"
            className="w-full rounded-lg my-6"
          />
        );
      }
      return (
        <p key={i} className="text-foreground/90 leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <Layout>
      <SEO
        title={`${post.title} | Eddie's Travel Scotland Blog`}
        description={post.excerpt || post.content.substring(0, 155)}
      />

      <article className="section-padding">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar size={14} />
            <time>{format(new Date(post.created_at), "d MMMM yyyy")}</time>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            {post.title}
          </h1>

          {post.cover_image_url && (
            <img
              src={post.cover_image_url}
              alt={post.title}
              className="w-full rounded-lg mb-10 aspect-[16/9] object-cover"
            />
          )}

          <div className="prose-custom font-body text-base sm:text-lg">
            {renderContent(post.content)}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
