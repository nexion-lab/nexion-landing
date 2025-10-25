"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-110">
            <span className="text-primary-foreground font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Nexion
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#how-it-works"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
          >
            Docs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="outline"
            className="border-border hover:bg-card bg-transparent transition-all duration-300 hover:border-primary/50"
          >
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
            Start Building
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-xl animate-slide-down">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#features"
              className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              How It Works
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors duration-300">
              Docs
            </a>
            <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors duration-300">
              Pricing
            </a>
            <div className="flex gap-2 pt-4">
              <ThemeToggle />
              <Button variant="outline" className="flex-1 border-border bg-transparent">
                Sign In
              </Button>
              <Button className="flex-1 bg-primary text-primary-foreground">Start Building</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
