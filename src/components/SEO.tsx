import { useEffect } from "react";

const SITE_URL = "https://eddiestravel.lovable.app";
const SITE_NAME = "Eddie's Travel Scotland";
const DEFAULT_OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6cfe1839-77f6-48ad-bcc5-53b1677b6552/id-preview-b006c207--71a8cb83-d0c4-4a54-a3d0-38ecfe098b8e.lovable.app-1771247806058.png";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const SEO = ({ title, description, canonical, ogImage, ogType = "website" }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const url = canonical || `${SITE_URL}${window.location.pathname}`;
    const image = ogImage || DEFAULT_OG_IMAGE;

    // Standard meta
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image", image);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    return () => {
      document.title = "Eddie's Travel Scotland | Small-Group Tours & Bespoke Scottish Experiences";
    };
  }, [title, description, canonical, ogImage, ogType]);

  return null;
};

export default SEO;
