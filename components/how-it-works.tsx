"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function HowItWorks() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const steps = [
    {
      number: "01",
      title: "Securely Connect Your Solana Wallet",
      description:
        "Seamlessly connect your Solana wallet for instant access. Secure, non-custodial, and lightning-fast setup.",
    },
    {
      number: "02",
      title: "Visually Design Your dApp Flow",
      description:
        "Craft your dApp logic visually with our intuitive builder. Drag, drop, and connect nodes effortlessly.",
    },
    {
      number: "03",
      title: "Integrate Smart Contracts Effortlessly",
      description:
        "Choose from pre-built smart contracts or deploy custom ones. Enjoy automatic integration and rigorous testing.",
    },
    {
      number: "04",
      title: "Deploy and Monitor Instantly",
      description:
        "Deploy to Solana mainnet with a single click. Track performance, user activity, and analytics in real-time.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Build in 4 Simple Steps</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From idea to deployed dApp in minutes, not months.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, i) => (
          <motion.div key={i} className="relative flex flex-col" variants={itemVariants} whileHover={{ y: -12 }}>
            {i < steps.length - 1 && (
              <motion.div
                className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
              />
            )}
            <Card className="bg-card border-border relative z-10 transition-all duration-300 hover:border-primary/50 p-10 group h-full flex flex-col overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col h-full">
                <motion.div
                  className="text-5xl font-bold text-primary/20 mb-6 group-hover:text-primary/40 transition-all duration-300"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{step.description}</p>
                <motion.div
                  className="flex items-center gap-2 text-primary transition-all duration-300 group-hover:gap-3 mt-auto"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle2 size={24} className="group-hover:scale-110 transition-all duration-300" />
                  <span className="text-sm font-medium">Ready to go</span>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
