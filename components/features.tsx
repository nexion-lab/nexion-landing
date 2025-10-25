"use client"

import { Card } from "@/components/ui/card"
import { Zap, Layers, Shield, Rocket, Code2, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const features = [
    {
      icon: Layers,
      title: "Visual Node Builder",
      description:
        "Drag and drop nodes to create complex workflows. Connect Solana programs, smart contracts, and APIs seamlessly.",
    },
    {
      icon: Shield,
      title: "Smart Contract Ready",
      description: "Deploy audited smart contracts instantly. Built-in security best practices and Solana integration.",
    },
    {
      icon: Zap,
      title: "Real-time Execution",
      description: "See your dApp come to life instantly. Test and iterate without deployment delays.",
    },
    {
      icon: Rocket,
      title: "One-Click Deploy",
      description: "Deploy to Solana mainnet or devnet with a single click. Automatic optimization and gas management.",
    },
    {
      icon: Code2,
      title: "Export Code",
      description: "Export your dApp as production-ready code. Full control and customization when you need it.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Monitor your dApp performance, user activity, and transaction metrics in real-time.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Everything you need to build</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From simple token swaps to complex multi-contract dApps, Nexion has you covered.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <motion.div key={i} variants={itemVariants} whileHover={{ y: -8 }}>
              <Card className="bg-card border-border p-10 hover:border-primary/50 transition-all duration-300 group card-hover relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <Icon size={32} className="text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
