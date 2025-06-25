"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Code, Menu, X } from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/" onClick={() => setMobileMenuOpen(false)}>
          <Code className="h-6 w-6 mr-2" />
          <span className="font-bold text-xl">METABYTE.TECH</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/how-we-work">
            How We Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/careers">
            Careers
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle mobile menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 md:hidden">
            <div className="flex items-center justify-between p-4 border-b bg-background">
              <Link className="flex items-center justify-center" href="/" onClick={() => setMobileMenuOpen(false)}>
                <Code className="h-6 w-6 mr-2" />
                <span className="font-bold text-xl">METABYTE.TECH</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close mobile menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4 bg-background">
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-border hover:text-[#0081FB] transition-colors"
                href="/"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-border hover:text-[#0081FB] transition-colors"
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-border hover:text-[#0081FB] transition-colors"
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-border hover:text-[#0081FB] transition-colors"
                href="/how-we-work"
                onClick={() => setMobileMenuOpen(false)}
              >
                How We Work
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-border hover:text-[#0081FB] transition-colors"
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-border hover:text-[#0081FB] transition-colors"
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-border hover:text-[#0081FB] transition-colors"
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 hover:text-[#0081FB] transition-colors"
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
        <p className="text-xs text-muted-foreground">© 2024 METABYTE.TECH. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/terms">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
