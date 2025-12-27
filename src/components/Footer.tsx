import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-xl">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-display text-2xl font-bold gradient-text">
              Mouleendra
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              B.Tech CSE student passionate about Machine Learning, AI, and building impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/education" className="text-muted-foreground hover:text-primary transition-colors">
                Education
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Mouleendra0511"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aithi-aditya-sai-mouleendra-b7349724b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:mouleendraaithi@gmail.com"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Mouleendra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
