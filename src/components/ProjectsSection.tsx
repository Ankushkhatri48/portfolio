import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Project One", description: "A brief description of your first project. What problem did it solve?", tags: ["React", "TypeScript", "Tailwind"], link: "#" },
  { title: "Project Two", description: "Describe your second project here. What technologies did you use?", tags: ["Node.js", "PostgreSQL", "Docker"], link: "#" },
  { title: "Project Three", description: "Another project showcase. What was unique about this one?", tags: ["Python", "Machine Learning", "API"], link: "#" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Work</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-16">Selected Projects</h2>
        </motion.div>
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.a key={project.title} href={project.link} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="block group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 max-w-xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-display tracking-wider uppercase px-3 py-1 rounded-full bg-secondary text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
