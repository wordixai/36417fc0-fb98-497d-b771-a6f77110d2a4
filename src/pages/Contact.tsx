import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your inquiry. We'll respond within 48 hours.",
    });
  };

  return (
    <Layout>
      <div className="container py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Contact</h1>
          <p className="text-lg text-muted-foreground mb-16">
            Let's discuss your project. We welcome inquiries for new commissions and collaborations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm mb-2 block">
                    Name
                  </label>
                  <Input id="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm mb-2 block">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm mb-2 block">
                    Subject
                  </label>
                  <Input id="subject" required />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm mb-2 block">
                    Message
                  </label>
                  <Textarea id="message" rows={6} required />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-light mb-4">Office</h3>
                <p className="text-sm text-muted-foreground">
                  123 Broadway<br />
                  New York, NY 10012<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="text-lg font-light mb-4">Contact</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <a href="mailto:hello@studio.com" className="text-muted-foreground hover:text-foreground">
                      hello@studio.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground">
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-light mb-4">Social</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Instagram
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      LinkedIn
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      Pinterest
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-light mb-4">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
