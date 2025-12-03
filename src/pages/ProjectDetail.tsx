import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { projects } from "@/data/content";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="text-2xl mb-4">Project not found</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Return to projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-light mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground">{project.description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <dt className="text-sm text-muted-foreground mb-1">Category</dt>
              <dd className="text-base">{project.category}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground mb-1">Location</dt>
              <dd className="text-base">{project.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground mb-1">Year</dt>
              <dd className="text-base">{project.year}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground mb-1">Area</dt>
              <dd className="text-base">{project.area}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground mb-1">Tags</dt>
              <dd className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {project.images.map((image, index) => (
            <div key={index} className="aspect-[16/10] bg-muted overflow-hidden">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
