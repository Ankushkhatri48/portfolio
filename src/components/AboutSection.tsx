import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            About
          </p>

          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-8">
            A little about me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <p className="text-muted-foreground text-lg leading-relaxed">
              I am Ankush Khatri, currently pursuing B.Tech in Computer Science 
              and Engineering with a specialization in Data Science at 
              Lovely Professional University. I have a strong interest in 
              software development, data science, and modern web technologies.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I enjoy solving problems using programming and building 
              applications that combine technology and creativity. 
              My technical interests include Data Science, Big Data, 
              and full-stack web development using tools like 
              React, JavaScript, Python, and Hadoop.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;