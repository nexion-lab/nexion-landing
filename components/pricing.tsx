'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function Pricing() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  }

  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for getting started with Web3 development",
      features: [
        "Up to 5 dApps",
        "Basic templates",
        "Community support",
        "Standard analytics"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "For serious builders and growing projects",
      features: [
        "Unlimited dApps",
        "Premium templates",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Export code"
      ],
      popular: true
    },
    {
      name: "max ",
      price: "$299",
      period: "/month",
      description: "Best value for long-term projects",
      features: [
        "Everything in Pro",
        "2 months free",
        "Dedicated account manager",
        "Early access to features",
        "Custom branding"
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Choose your plan</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Start building Web3 dApps today. Upgrade or downgrade at any time.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={plan.popular ? "md:scale-105" : ""}
          >
            <Card className={`bg-card border-border hover:border-primary/50 transition-all duration-300 group card-hover relative ${
              plan.popular ? "border-primary shadow-lg" : ""
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Zap size={14} />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
