import { User, MapPin, GraduationCap, Briefcase, Award, Users } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech CSE at GITAM University with 9.33 CGPA",
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "ML Intern at RINL & Intel Unnati",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Smart India Hackathon Pre-Finalist",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Director of Learning and Enablement and Head of Operations in GitHub",
    },
  ];

  const journey = [
    {
      year: "2020",
      title: "Secondary Education",
      description: "Completed 10th at Delhi Public School with 88%",
    },
    {
      year: "2022",
      title: "Senior Secondary",
      description: "Passed 12th at Sri Venkateshwara Classes with 85%",
    },
    {
      year: "2022",
      title: "Started B.Tech",
      description: "Joined GITAM University for CSE",
    },
    {
      year: "2023",
      title: "Smart India Hackathon 2023",
      description: "Led team to pre-final rounds as captain",
    },
    {
      year: "2024",
      title: "ML Internship",
      description: "Worked at RINL on CO emission prediction",
    },
    {
      year: "2024",
      title: "Smart India Hackathon 2024",
      description: "Led team to pre-final rounds as captain",
    },
    {
      year: "2025",
      title: "Intel Unnati",
      description: "Image Sharpening project with Knowledge Distillation",
    },
    {
      year: "2025",
      title: "DRDO Intern",
      description: "Implemented a offline chatbot on DRDO missiles",
    },
    {
      year: "2025",
      title: "Revive EcoTech Intern",
      description: "Implemented AI voice call agent",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle title="About Me" subtitle="Get to know me better - my journey, passions, and what drives me" />

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Image Placeholder */}
            <div className="relative animate-fade-in-up">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass-card p-1">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <User className="w-32 h-32 text-primary/50" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>

            {/* Bio Content */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Hello! I'm <span className="gradient-text">Aithi Aditya Sai Mouleendra</span>
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Visakhapatnam, India</span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate Computer Science student at GITAM University, specializing in Machine Learning and
                Full-Stack Development. With a strong foundation in Python, TensorFlow, and modern web technologies, I
                love building intelligent systems that solve real-world problems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey includes impactful internships at RINL and Intel Unnati, where I developed ML models
                achieving 92% accuracy and created image sharpening solutions using knowledge distillation techniques. I
                thrive in collaborative environments and have led teams in prestigious competitions like the Smart India
                Hackathon.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Beyond coding, I serve as Head of Design at Women Leaders Forum and Head of Operations at GitHub
                Community, where I contribute to building inclusive tech communities.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Career Journey Timeline */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
              My <span className="gradient-text">Journey</span>
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

              {journey.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 animate-fade-in-up ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5 mt-2 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h4 className="font-display font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
