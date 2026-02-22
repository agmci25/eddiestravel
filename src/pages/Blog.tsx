import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import blogHero from "@/assets/blog-hero.webp";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  created_at: string;
  published: boolean;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts" as any)
        .select("id, title, slug, excerpt, cover_image_url, created_at, published")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setPosts(data as unknown as BlogPost[]);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <SEO
        title="Scottish Travel Blog | Tips, Stories & Hidden Gems | Eddie's Travel"
        description="Read Eddie's latest Scottish travel articles — insider tips, hidden gems, local events and destination guides to help you plan the perfect Scotland trip."
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 min-h-[280px] sm:min-h-[340px] flex items-center">
        <img
          src={blogHero}
          alt="Scottish highlands with heather and loch"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="container-narrow mx-auto text-center relative z-10">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4 text-white">
            Scottish <span className="text-primary">Travel</span> Blog
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Insider tips, hidden gems and stories from the road — straight from your guide Eddie.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          {loading ? (
            <div className="text-center text-muted-foreground py-12">Loading articles…</div>
          ) : posts.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              <p className="text-lg">No articles yet — check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {post.cover_image_url && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar size={14} />
                      <time>{format(new Date(post.created_at), "d MMMM yyyy")}</time>
                    </div>
                    <h2 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
