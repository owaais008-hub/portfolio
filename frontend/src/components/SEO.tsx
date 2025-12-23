import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'MERN Portfolio - Full Stack Developer',
  description = 'Professional portfolio of a skilled full-stack developer specializing in MERN stack technologies. Explore projects, skills, and contact information.',
  keywords = 'MERN, portfolio, full-stack developer, React, Node.js, MongoDB, Express, JavaScript, TypeScript',
  author = 'Your Name',
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl = window.location.href
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={ogUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default SEO;