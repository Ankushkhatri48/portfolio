import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js",
  "Python", "SQL", "Git", "Docker",
  "Tailwind CSS", "Figma", "REST APIs", "GraphQL",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Expertise</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-16">Skills & Tools</h2>
        </motion.div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="px-6 py-3 rounded-full border border-border font-display text-sm tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default">
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
