import { Code, Wrench, Brain, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 75 },
        { name: "Java", level: 80 },
        { name: "C", level: 85 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "OpenCV", level: 85 },
        { name: "Generative AI", level: 80 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "AWS", level: 55 },
        { name: "Flask", level: 80 },
        { name: "Streamlit", level: 85 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      icon: Sparkles,
      title: "Other Skills",
      skills: [
        { name: "YOLO", level: 80 },
        { name: "Web-Hooks", level: 85 },
        { name: "AI Agents", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Front-End Dev", level: 80 },
      ],
    },
  ];

  const softSkills = [
    "Leadership",
    "Team Collaboration",
    "Problem Solving",
    "Communication",
    "Project Management",
    "Critical Thinking",
    "Adaptability",
    "Time Management",
  ];

  const techStack = [
    { name: "Python", category: "Language" },
    { name: "TensorFlow", category: "ML" },
    { name: "PyTorch", category: "ML" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Git", category: "DevOps" },
    { name: "OpenCV", category: "Vision" },
    { name: "Pandas", category: "Data" },
    { name: "Flask", category: "Backend" },
    { name: "SQL", category: "Database" },
    { name: "Streamlit", category: "Tools" },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container-main">
          <SectionTitle
            title="Skills & Expertise"
            subtitle="A comprehensive overview of my technical abilities and proficiencies"
          />

          {/* Skills Grid with Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className="glass-card p-6 md:p-8 animate-fade-in-up"
                style={{ animationDelay: `${catIndex * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(catIndex * 5 + skillIndex) * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mb-20">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
              Tech <span className="gradient-text">Stack</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group glass-card px-5 py-3 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium group-hover:text-primary transition-colors">{tech.name}</span>
                  <span className="ml-2 text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-secondary">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
              Soft <span className="gradient-text">Skills</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-full bg-accent/10 text-accent border border-accent/20 
                           font-medium hover:bg-accent/20 transition-all duration-300 cursor-default
                           animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
