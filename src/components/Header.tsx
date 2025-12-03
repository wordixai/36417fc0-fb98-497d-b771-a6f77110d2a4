import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-light tracking-tight hover:opacity-70 transition-opacity">
          STUDIO
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-light tracking-wide hover:text-muted-foreground transition-colors">
            PROJECTS
          </Link>
          <Link to="/about" className="text-sm font-light tracking-wide hover:text-muted-foreground transition-colors">
            ABOUT
          </Link>
          <Link to="/services" className="text-sm font-light tracking-wide hover:text-muted-foreground transition-colors">
            SERVICES
          </Link>
          <Link to="/blog" className="text-sm font-light tracking-wide hover:text-muted-foreground transition-colors">
            JOURNAL
          </Link>
          <Link to="/contact" className="text-sm font-light tracking-wide hover:text-muted-foreground transition-colors">
            CONTACT
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-auto md:ml-0"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}
