import { useEffect } from "react";

const SITE_URL = "https://www.sadgurufoods.com";

export default function Seo({
  title = "Sadguru Foods | Wholesome Food, Thoughtfully Prepared",
  description = "Sadguru Foods creates wholesome food products rooted in tradition, thoughtful innovation, and modern nutrition.",
  keywords = "Sadguru Foods, food processing, wholesome food, Indian food products, nutritious food",
  canonical,
  image = "/og-image.jpg",
  type = "website",
  noIndex = false,
  schema = null,
}) {
  useEffect(() => {
    // -----------------------------
    // PAGE TITLE
    // -----------------------------
    document.title = title;

    // -----------------------------
    // HELPER
    // -----------------------------
    const setMeta = (attribute, key, content) => {
      if (!content) return;

      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // -----------------------------
    // BASIC SEO
    // -----------------------------
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("name", "author", "Sadguru Foods Processing Private Limited");

    setMeta(
      "name",
      "robots",
      noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    setMeta("name", "googlebot", "index, follow");

    // -----------------------------
    // THEME / MOBILE
    // -----------------------------
    setMeta("name", "theme-color", "#EF7F1A");
    setMeta("name", "mobile-web-app-capable", "yes");

    // -----------------------------
    // OPEN GRAPH
    // -----------------------------
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonical || window.location.href);
    setMeta(
      "property",
      "og:image",
      image.startsWith("http") ? image : `${SITE_URL}${image}`
    );
    setMeta("property", "og:site_name", "Sadguru Foods");

    // -----------------------------
    // TWITTER / X
    // -----------------------------
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta(
      "name",
      "twitter:image",
      image.startsWith("http") ? image : `${SITE_URL}${image}`
    );

    // -----------------------------
    // CANONICAL URL
    // -----------------------------
    const canonicalUrl =
      canonical || `${SITE_URL}${window.location.pathname}`;

    let canonicalTag = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute("href", canonicalUrl);

    // -----------------------------
    // STRUCTURED DATA
    // -----------------------------
    const existingSchema = document.head.querySelector(
      'script[data-seo-schema="true"]'
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement("script");

      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", "true");
      script.textContent = JSON.stringify(schema);

      document.head.appendChild(script);
    }

    // -----------------------------
    // CLEANUP
    // -----------------------------
    return () => {
      const schemaScript = document.head.querySelector(
        'script[data-seo-schema="true"]'
      );

      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [
    title,
    description,
    keywords,
    canonical,
    image,
    type,
    noIndex,
    schema,
  ]);

  return null;
}
