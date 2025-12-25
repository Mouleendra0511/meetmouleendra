import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Rashtriya Ispat Nigam Limited (RINL)",
      location: "Onsite",
      duration: "May 2024 – June 2024",
      type: "Internship",
      description: "Computer Science Department",
      achievements: [
        "Engineered ML models with 92% accuracy to predict CO emissions using 20K+ blast furnace records",
        "Designed a web-based interface to enable shift-wise data entry and real-time emission forecasting",
        "Helping engineers monitor gas levels and improve safety planning through accurate predictions",
      ],
      technologies: ["Python", "Machine Learning", "Web Interface", "Data Analysis"],
    },
    {
      title: "Image Sharpening (Knowledge Distillation)",
      company: "Intel Unnati",
      location: "Remote",
      duration: "May 2025 – July 2025",
      type: "Internship",
      description: "Deep Learning & Computer Vision Project",
      achievements: [
        "Developed a lightweight Teacher-Student model to enhance blurred images, improving SSIM to 0.91 for seamless video quality under low-bandwidth conditions",
        "Compressed model by reducing convolution channels (128→64→32), increasing inference speed without degrading image quality",
        "Processed 18K blurred images (14.4K train, 3.6K val) to prepare and validate the sharpening pipeline",
      ],
      technologies: ["PyTorch", "Knowledge Distillation", "Computer Vision", "Deep Learning"],
    },
  ];

  const responsibilities = [
    {
      title: "Head of Design and Content",
      organization: "Women Leader's Forum",
      duration: "2024-2025",
    },
    {
      title: "Head of Operations",
      organization: "GitHub Community",
      duration: "2025-2026",
    },
    {
      title: "Directorate of Learning and Enablement",
      organization: "AWS Cloud Club",
      duration: "2025-2026",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle
            title="Experience"
            subtitle="My professional journey and work experience in the tech industry"
          />

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-12 md:pl-20 pb-12 last:pb-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-8 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 ring-4 ring-background" />

                  <div className="glass-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                          {exp.type}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex gap-3">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <p className="text-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-secondary text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Positions of Responsibility */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
              Leadership <span className="gradient-text">Roles</span>
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {responsibilities.map((role, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-display font-semibold mb-1">{role.title}</h4>
                  <p className="text-primary text-sm mb-2">{role.organization}</p>
                  <p className="text-muted-foreground text-sm">{role.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
