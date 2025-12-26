import { GraduationCap, Award, Trophy, Star } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      institution: "Gandhi Institute of Technology and Management (GITAM)",
      location: "Visakhapatnam",
      year: "2022 - 2026",
      score: "9.33 CGPA",
      current: true,
    },
    {
      degree: "Senior Secondary (12th)",
      field: "Science",
      institution: "Sri Venkateshwara Classes",
      year: "2022",
      score: "85%",
    },
    {
      degree: "Secondary (10th)",
      field: "",
      institution: "Delhi Public School",
      year: "2020",
      score: "88%",
    },
  ];

  const certifications = [
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy Graduate",
      date: "June 2025",
      icon: "☁️",
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      issuer: "AWS Academy Graduate",
      date: "June 2025",
      icon: "☁️",
    },
    {
      title: "OCI Generative AI",
      issuer: "Oracle University",
      date: "October 2025",
      icon: "⭕",
    },
    {
      title: "OCI AI Foundations Associate",
      issuer: "Oracle University",
      date: "October 2025",
      icon: "⭕",
    },
  ];

  const achievements = [
    {
      title: "Smart India Hackathon",
      description: "Led team as captain through two consecutive pre-final round nominations",
      icon: Trophy,
    },
    {
      title: "Ace Award",
      description: "Received a memento on behalf of WLF Club for being recognized as the Most Collaborative Club",
      icon: Star,
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle
            title="Education & Certifications"
            subtitle="My academic journey and professional certifications"
          />

          {/* Education Timeline */}
          <div className="max-w-3xl mx-auto mb-20">
            <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-primary" />
              Academic Background
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-display text-xl font-bold">{edu.degree}</h4>
                        {edu.current && (
                          <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      {edu.field && <p className="text-primary font-medium">{edu.field}</p>}
                      <p className="text-muted-foreground mt-1">{edu.institution}</p>
                      {edu.location && <p className="text-muted-foreground text-sm">{edu.location}</p>}
                    </div>
                    <div className="text-right">
                      <p className="font-display text-2xl font-bold gradient-text">{edu.score}</p>
                      <p className="text-muted-foreground text-sm">{edu.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-3xl mx-auto mb-20">
            <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="h-7 w-7 text-primary" />
              Certifications
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-4xl mb-4 block">{cert.icon}</span>
                  <h4 className="font-display font-semibold text-lg mb-2">{cert.title}</h4>
                  <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-3">
              <Trophy className="h-7 w-7 text-primary" />
              Achievements & Awards
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover:border-accent/50 transition-all duration-300 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                    <achievement.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
