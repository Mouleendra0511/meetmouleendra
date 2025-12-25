import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="container-main text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Available for Opportunities</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in-up animation-delay-100">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Mouleendra</span>
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
              Machine Learning Engineer,AI Developer, Data Engineer
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            B.Tech CSE student at GITAM University with expertise in ML, AI, and building intelligent systems.
            Passionate about solving real-world problems with technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/projects">
                View Projects
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/Mouleendra_Resume.pdf" download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact">
                <Mail className="h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-400">
            <a
              href="https://github.com/Mouleendra0511"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aithi-aditya-sai-mouleendra-b7349724b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:mouleendraaithi@gmail.com"
              className="p-3 rounded-xl bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-card/30 backdrop-blur-xl border-y border-border/50">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "9.33", label: "CGPA" },
              { value: "2+", label: "Internships" },
              { value: "5+", label: "Projects" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="section-padding">
        <div className="container-main text-center space-y-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Technologies I Work With</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "Python",
              "TensorFlow",
              "PyTorch",
              "Scikit Learn",
              "RAG",
              "YOLO",
              "AWS",
              "OpenCV",
              "Generative AI",
              "SQL",
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium 
                         hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default
                         animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
          <Button variant="outline" asChild>
            <Link to="/skills">
              View All Skills
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
