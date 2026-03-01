-- Add length constraints to blog_posts to enforce server-side validation
ALTER TABLE public.blog_posts ADD CONSTRAINT blog_posts_title_length CHECK (char_length(title) <= 200);
ALTER TABLE public.blog_posts ADD CONSTRAINT blog_posts_excerpt_length CHECK (char_length(excerpt) <= 500);
ALTER TABLE public.blog_posts ADD CONSTRAINT blog_posts_content_length CHECK (char_length(content) <= 50000);
ALTER TABLE public.blog_posts ADD CONSTRAINT blog_posts_slug_length CHECK (char_length(slug) <= 250);
ALTER TABLE public.blog_posts ADD CONSTRAINT blog_posts_cover_image_url_length CHECK (char_length(cover_image_url) <= 2000);