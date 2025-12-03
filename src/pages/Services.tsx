import Layout from "@/components/Layout";

const services = [
  {
    title: "Architecture",
    description: "Complete architectural services from concept through construction administration. We handle residential, commercial, and cultural projects with equal attention to detail and design integrity."
  },
  {
    title: "Interior Design",
    description: "Spatial planning and interior architecture that creates cohesive environments. We work on both new construction and renovation projects, focusing on material selection and spatial quality."
  },
  {
    title: "Master Planning",
    description: "Strategic site planning and urban design for mixed-use developments. We analyze context, program requirements, and regulatory constraints to develop feasible design solutions."
  },
  {
    title: "Adaptive Reuse",
    description: "Transformation of existing structures for contemporary use. We balance preservation requirements with modern functionality, respecting original character while meeting current needs."
  },
  {
    title: "Consultation",
    description: "Design review and advisory services for developers, institutions, and private clients. We provide expertise in feasibility studies, design direction, and project evaluation."
  },
  {
    title: "Research",
    description: "Investigation into building systems, materials, and design methodologies. We develop prototypes and test new approaches to advance architectural practice."
  }
];

export default function Services() {
  return (
    <Layout>
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Services</h1>
          <p className="text-lg text-muted-foreground mb-16">
            We offer comprehensive design services across multiple scales and project types.
          </p>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="border-b pb-12 last:border-0">
                <h2 className="text-2xl font-light mb-4">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t">
            <h2 className="text-2xl font-light mb-6">Process</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg mb-2">01. Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  Initial consultation to understand project goals, site conditions, budget,
                  and timeline. We establish project parameters and identify key challenges.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2">02. Schematic Design</h3>
                <p className="text-sm text-muted-foreground">
                  Development of conceptual design direction through sketches, diagrams, and
                  preliminary models. We explore multiple approaches before refining a solution.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2">03. Design Development</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed development of the approved concept, including material selection,
                  system coordination, and technical resolution.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2">04. Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Preparation of construction drawings and specifications for bidding and
                  permitting. Coordination with consultants and authorities.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2">05. Construction</h3>
                <p className="text-sm text-muted-foreground">
                  Construction administration to ensure design intent is maintained. Regular
                  site visits, contractor coordination, and issue resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
