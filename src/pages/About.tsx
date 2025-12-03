import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-12">About Studio</h1>

          <div className="aspect-[16/9] bg-muted mb-12 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&auto=format&fit=crop"
              alt="Studio space"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Studio is a contemporary architecture and design practice founded in 2015.
              We work across scales and typologies, from residential projects to cultural
              institutions, with a focus on spatial clarity and material honesty.
            </p>

            <p className="text-base text-muted-foreground">
              Our approach emphasizes the relationship between form and function, seeking
              solutions that respond to context while maintaining conceptual rigor. We believe
              architecture should serve human needs without sacrificing aesthetic ambition.
            </p>

            <p className="text-base text-muted-foreground">
              Based in New York, we collaborate with clients, engineers, and craftspeople
              who share our commitment to excellence in design and execution.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t">
            <h2 className="text-2xl font-light mb-8">Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg mb-2">Sarah Chen</h3>
                <p className="text-sm text-muted-foreground mb-4">Principal / Architect</p>
                <p className="text-sm text-muted-foreground">
                  Licensed architect with 15 years of experience in residential and
                  cultural projects. M.Arch from Yale School of Architecture.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2">Michael Torres</h3>
                <p className="text-sm text-muted-foreground mb-4">Principal / Architect</p>
                <p className="text-sm text-muted-foreground">
                  Specializes in commercial and mixed-use developments. Former associate
                  at OMA. M.Arch from Columbia GSAPP.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2">Emily Park</h3>
                <p className="text-sm text-muted-foreground mb-4">Senior Designer</p>
                <p className="text-sm text-muted-foreground">
                  Focuses on interior architecture and adaptive reuse projects.
                  B.Arch from Cornell University.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2">James Liu</h3>
                <p className="text-sm text-muted-foreground mb-4">Project Architect</p>
                <p className="text-sm text-muted-foreground">
                  Leads technical coordination and construction documentation.
                  M.Arch from MIT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
