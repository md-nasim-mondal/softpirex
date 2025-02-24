import Projects from "@/components/projectsPage/Projects";
import React from "react";

export const metadata = {
  title: "SoftPirex Web Development Projects | Our Portfolio & Case Studies",
  description: "Explore SoftPirex's portfolio of professional web development projects. See how we transform ideas into successful websites, e-commerce platforms, and web applications with cutting-edge technology.",
  keywords: "web development projects, website portfolio, custom web development, e-commerce websites, responsive web design, SoftPirex projects",
  
  openGraph: {
    title: "SoftPirex Web Development Projects | Professional Portfolio Showcase",
    description: "Discover our expertise through SoftPirex's web development portfolio. View case studies of successful websites, web apps, and digital solutions we've created for clients.",
    url: "https://www.softpirex.com/projects",
    siteName: "SoftPirex",
    images: [
      {
        url: "/icons/logo.png",
        width: 1200,
        height: 630,
        alt: "SoftPirex Web Development Projects Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "SoftPirex Web Development Projects | Latest Portfolio Updates",
    description: "Explore our collection of successful web development projects including corporate websites, SaaS platforms, and e-commerce solutions.",
    images: ["/icons/logo.png"],
  },
  
  alternates: {
    canonical: "https://www.softpirex.com/projects",
  },
};

const page = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SoftPirex Projects Portfolio",
    "description": "Professional web development projects portfolio showcasing custom website development, e-commerce solutions, and web application development.",
    "publisher": {
      "@type": "Organization",
      "name": "SoftPirex",
      "logo": {
        "@type": "ImageObject",
        "url": "/icons/logo.png"
      }
    },
    "image": "/icons/logo.png"
  };

  return (
    <main className="min-h-screen container mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <section className="text-center my-16 space-y-5">
        <p className="text-xl text-blue-600 underline underline-offset-8">
          Web Development Success Stories
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          Transforming Digital Ideas Into Successful Websites with <strong className="text-blue-600">SoftPirex</strong>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explore our curated collection of web development projects showcasing custom website solutions, 
          e-commerce platforms, and enterprise web applications. As a leading web development agency, 
          we specialize in creating responsive, user-friendly websites that drive business growth and 
          enhance digital presence across various industries.
        </p>
      </section>

      <Projects />
      
      <section className="my-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Choose SoftPirex for Web Development?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our portfolio demonstrates expertise in modern web technologies including React, Next.js, 
          Node.js, and headless CMS implementations. We deliver:
        </p>
        <ul className="grid md:grid-cols-3 gap-4 mt-6 text-left">
          <li className="p-4 bg-gray-50 rounded-lg">Custom Web Application Development</li>
          <li className="p-4 bg-gray-50 rounded-lg">E-commerce & Marketplace Solutions</li>
          <li className="p-4 bg-gray-50 rounded-lg">Enterprise-grade Website Development</li>
          <li className="p-4 bg-gray-50 rounded-lg">Mobile-First Responsive Design</li>
          <li className="p-4 bg-gray-50 rounded-lg">API Integration & Microservices</li>
          <li className="p-4 bg-gray-50 rounded-lg">Performance Optimization</li>
        </ul>
      </section>
    </main>
  );
};

export default page;