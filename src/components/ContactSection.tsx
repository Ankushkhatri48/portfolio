import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
          <a href="mailto:your@email.com" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-medium rounded-lg hover:opacity-90 transition-opacity text-lg">
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          <div className="flex justify-center gap-6 mt-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub"><Github className="w-6 h-6" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:your@email.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email"><Mail className="w-6 h-6" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
