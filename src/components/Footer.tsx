import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-light mb-4">STUDIO</h3>
            <p className="text-sm text-muted-foreground">
              Contemporary architecture and design practice based in New York.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-light mb-4 tracking-wide">NAVIGATION</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-light mb-4 tracking-wide">CONNECT</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@studio.com" className="hover:text-foreground transition-colors">
                  hello@studio.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="pt-2">
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-light mb-4 tracking-wide">LOCATION</h4>
            <p className="text-sm text-muted-foreground">
              123 Broadway<br />
              New York, NY 10012<br />
              United States
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
