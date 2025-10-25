"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        className="relative bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-12 md:p-16 overflow-hidden group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to build your dApp?
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join thousands of builders creating the future of Web3 on Solana. Start for free today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12 px-8 gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
              Start Building Now <ArrowRight size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-lg h-12 px-8 bg-transparent transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
