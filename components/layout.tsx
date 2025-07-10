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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95 sticky top-0 z-50 shadow-sm">
        <Link className="flex items-center justify-center" href="/" onClick={() => setMobileMenuOpen(false)}>
          <Code className="h-6 w-6 mr-2 text-[#0081FB]" />
          <span className="font-bold text-xl text-gray-900">METABYTE.TECH</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:text-[#0081FB] transition-colors text-gray-700" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-[#0081FB] transition-colors text-gray-700" href="/services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-[#0081FB] transition-colors text-gray-700" href="/projects">
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#0081FB] transition-colors text-gray-700"
            href="/how-we-work"
          >
            How We Work
          </Link>
          <Link className="text-sm font-medium hover:text-[#0081FB] transition-colors text-gray-700" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-[#0081FB] transition-colors text-gray-700" href="/careers">
            Careers
          </Link>
          <Link className="text-sm font-medium hover:text-[#0081FB] transition-colors text-gray-700" href="/contact">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <button
            className="p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
              <Link className="flex items-center justify-center" href="/" onClick={() => setMobileMenuOpen(false)}>
                <Code className="h-6 w-6 mr-2 text-[#0081FB]" />
                <span className="font-bold text-xl text-gray-900">METABYTE.TECH</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close mobile menu" className="text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col p-4 space-y-4 bg-white">
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-gray-200 hover:text-[#0081FB] transition-colors text-gray-700"
                href="/"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-gray-200 hover:text-[#0081FB] transition-colors text-gray-700"
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-gray-200 hover:text-[#0081FB] transition-colors text-gray-700"
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-gray-200 hover:text-[#0081FB] transition-colors text-gray-700"
                href="/how-we-work"
                onClick={() => setMobileMenuOpen(false)}
              >
                How We Work
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-gray-200 hover:text-[#0081FB] transition-colors text-gray-700"
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 border-b border-gray-200 hover:text-[#0081FB] transition-colors text-gray-700"
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                className="text-lg font-medium py-3 px-2 hover:text-[#0081FB] transition-colors text-gray-700"
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-600">© 2024 METABYTE.TECH. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-[#0081FB] transition-colors text-gray-600" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:text-[#0081FB] transition-colors text-gray-600" href="/terms">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
