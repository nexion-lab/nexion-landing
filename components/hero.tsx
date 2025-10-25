"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-[17.2rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-0.5 bg-gradient-to-r from-accent via-primary to-accent rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full">
                <Zap size={16} className="text-accent animate-pulse" />
                <span className="text-sm text-muted-foreground">No Code. No Limits. Just Web3.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Turn Ideas into Web3 Reality
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                — Instantly
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Ship Web3 dApps Fast — Without Writing Code. Your Gateway to No-Code Web3 Development.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12 px-8 gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105">
              Start Building <ArrowRight size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-card text-lg h-12 px-8 bg-transparent transition-all duration-300 hover:border-primary/50"
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-10 pt-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="group cursor-pointer">
              <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                500+
              </p>
              <p className="text-sm text-muted-foreground">dApps Created</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                $50M+
              </p>
              <p className="text-sm text-muted-foreground">TVL Deployed</p>
            </div>
            <div className="group cursor-pointer">
              <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                10K+
              </p>
              <p className="text-sm text-muted-foreground">Active Builders</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative p-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl group"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-300" />
          <div className="bg-card border-0 rounded-2xl p-8 backdrop-blur relative z-10 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300">
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="h-2 bg-border rounded w-24" />
              </motion.div>
              <div className="space-y-3">
                <div className="h-3 bg-border rounded w-full" />
                <div className="h-3 bg-border rounded w-5/6" />
                <div className="h-3 bg-border rounded w-4/6" />
              </div>
              <div className="pt-4 space-y-2">
                <div className="flex gap-2">
                  <motion.div
                    className="w-12 h-12 bg-primary/20 rounded-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="w-12 h-12 bg-accent/20 rounded-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
