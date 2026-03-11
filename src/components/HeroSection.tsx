import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8"
        >
          <span className="text-gradient">Ankush Khatri</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed"
        >
          B.Tech Computer Science (Data Science) student at Lovely Professional University. 
          Passionate about Data Science, Software Development, and building modern web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex gap-4 justify-center flex-wrap"
        >

          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-display font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-border text-foreground font-display font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;