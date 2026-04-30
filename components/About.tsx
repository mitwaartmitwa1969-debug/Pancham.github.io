'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const philosophyPoints = [
    'Continuous Learning',
    'Goal-Oriented Approach',
    'Innovation & Problem Solving',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary via-primary to-secondary/20 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Learning</span> Philosophy
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combining analytical thinking, practical expertise, and ethical responsibility
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Philosophy Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="space-y-4">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={point}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-secondary/30 border border-accent/10 hover:border-accent/30 transition-all hover:bg-secondary/50"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-accent mb-2">{point}</h3>
                    {index === 0 && (
                      <p className="text-gray-400 text-sm">
                        Growing professionally through consistent learning and skill development
                      </p>
                    )}
                    {index === 1 && (
                      <p className="text-gray-400 text-sm">
                        Setting clear objectives and working methodically to achieve excellence
                      </p>
                    )}
                    {index === 2 && (
                      <p className="text-gray-400 text-sm">
                        Finding creative solutions to complex engineering challenges
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Detailed Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Engineering Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                My learning philosophy is centered on continuous growth, practical application, and ethical responsibility. I believe engineering extends beyond theory into real-world implementation through collaboration, experimentation, and problem-solving.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I've transitioned from a strong academic foundation to developing a practical engineering mindset. This journey involves understanding structural principles, mastering modern design tools, and recognizing the broader impact of engineering decisions on communities and the environment.
              </p>
            </div>

            {/* Key Values */}
            <motion.div
              className="pt-4 space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {[
                'Safety & Public Welfare',
                'Sustainability & Responsibility',
                'Innovation & Efficiency',
              ].map((value) => (
                <motion.div key={value} variants={itemVariants} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  <span className="text-gray-300">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;