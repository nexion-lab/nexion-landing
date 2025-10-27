"use client"

import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <Image
                src="/nexion-icon.jpg"
                alt="Nexion Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain rounded-lg group-hover:scJoin Waiting List
ale-110 transition-transform duration-300"
              />
              <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Nexion
              </span>
            </div>
            <p className="text-muted-foreground">The no-code platform for building  DApps on Solana.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Documentation", "API"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Twitter, label: "Twitter" ,link:"https://x.com/nexionlab"},
                { icon: Github, label: "GitHub",link:"https://github.com/nexion-lab" },
                { icon: Linkedin, label: "LinkedIn",link:"https://www.linkedin.com/company/nexionfun/posts/?feedView=all" },
                { icon: Instagram, label: "Instagram",link:"https://www.instagram.com/nexion.labs/" },
              ].map(({ icon: Icon, label ,link}) => (
                <motion.a
                  key={label}
                  href={link}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">© 2025 Nexion. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
