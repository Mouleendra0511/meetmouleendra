import { useState } from "react";
import { ExternalLink, Github, Folder, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "AI-Driven Traffic Prediction and Management System",
      description: "Developed an AI system that predicts traffic disruptions with over 92% accuracy using real-time, weather, and historical incident data. Designed and implemented intelligent route-suggestion logic, reducing estimated congestion by up to 35%.",
      longDescription: "Integrated REST APIs with an interactive frontend to deliver live traffic updates and alert notifications to users.",
      technologies: ["Python", "ML Models", "REST APIs", "HTML", "JavaScript", "CSS"],
      category: "Machine Learning",
      date: "Aug 2024",
      event: "Smart India Hackathon 2024",
      featured: true,
    },
    {
      title: "AI-Powered Voice Support Agent",
      description: "Built a voice agent to handle 100+ daily support calls with context-aware conversation flow. Designed and deployed a backend with VAPI and Gemini for natural conversation flow.",
      longDescription: "Integrated ElevenLabs for speech synthesis and Twilio API for phone call management.",
      technologies: ["Node.js", "VAPI", "Gemini API", "ElevenLabs", "Webhooks", "Twilio"],
      category: "AI/Automation",
      date: "May 2025",
      event: "Revive Startup",
      featured: true,
    },
    {
      title: "CO Emission Prediction System",
      description: "ML models achieving 92% accuracy to predict CO emissions using 20K+ blast furnace records with a web interface for real-time forecasting.",
      technologies: ["Python", "Machine Learning", "Web Development", "Data Analysis"],
      category: "Machine Learning",
      date: "May-June 2024",
      event: "RINL Internship",
    },
    {
      title: "Image Sharpening with Knowledge Distillation",
      description: "Lightweight Teacher-Student model to enhance blurred images with SSIM of 0.91. Compressed model architecture for faster inference.",
      technologies: ["PyTorch", "Knowledge Distillation", "Computer Vision", "Deep Learning"],
      category: "Deep Learning",
      date: "May-July 2025",
      event: "Intel Unnati",
    },
  ];

  const categories = ["All", "Machine Learning", "AI/Automation", "Deep Learning"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle
            title="Projects"
            subtitle="Showcasing my work in AI, Machine Learning, and Software Development"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-5 py-2.5 rounded-lg font-medium transition-all duration-300",
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  "glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500 animate-fade-in-up",
                  project.featured && "ring-1 ring-primary/20"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Header */}
                <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center relative overflow-hidden">
                  <Folder className="h-20 w-20 text-primary/30 group-hover:scale-110 transition-transform duration-500" />
                  {project.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                    {project.event && (
                      <>
                        <span className="text-border">•</span>
                        <span className="text-primary">{project.event}</span>
                      </>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-2">{project.description}</p>
                  {project.longDescription && (
                    <p className="text-muted-foreground text-sm mb-4">{project.longDescription}</p>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-secondary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://github.com/Mouleendra0511"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
