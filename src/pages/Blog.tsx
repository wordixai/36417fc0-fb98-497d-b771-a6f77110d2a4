import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/content";

const categories = ["All", "Design Philosophy", "Urban Design", "Case Studies"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory);

  return (
    <Layout>
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Journal</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Insights on design, process, and the built environment.
          </p>

          <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm tracking-wide whitespace-nowrap px-4 py-2 transition-colors ${
                  selectedCategory === category
                    ? "text-foreground border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {filteredPosts.map((post) => (
              <article key={post.id} className="border-b pb-12 last:border-0">
                <Link to={`/blog/${post.id}`} className="group">
                  <div className="aspect-[16/9] bg-muted mb-6 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{post.category}</span>
                      <span>•</span>
                      <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-light group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
