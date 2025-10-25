"use client"

import { motion } from "framer-motion"

export function Stats() {
  const stats = [
    {
      value: "10x",
      label: "Faster Development",
      description: "Build in days, not months",
    },
    {
      value: "0",
      label: "Smart Contract Knowledge",
      description: "Required to get started",
    },
    {
      value: "100+",
      label: "Pre-built Components",
      description: "Ready to use nodes",
    },
    {
      value: "24/7",
      label: "Community Support",
      description: "Active builder community",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
      <motion.div
        className="grid md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="text-center group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.p
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
            >
              {stat.value}
            </motion.p>
            <p className="text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
              {stat.label}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
