import { CheckCircle, Cloud, Database, Globe, Smartphone, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                Our <span className="text-[#0081FB]">Services</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Comprehensive IT outsourcing solutions designed to accelerate your business growth and digital
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Cloud Solutions */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="h-16 w-16 text-[#0081FB] mb-4" />
                <CardTitle className="text-2xl text-gray-900">Cloud Solutions</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Comprehensive cloud migration and management services to modernize your infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    AWS, Azure & Google Cloud Platform
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Cloud Migration & Architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    DevOps & CI/CD Pipelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Infrastructure as Code
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Monitoring & Optimization
                  </li>
                </ul>
                <Button className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Web Development */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-16 w-16 text-[#0081FB] mb-4" />
                <CardTitle className="text-2xl text-gray-900">Web Development</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Custom web applications built with cutting-edge technologies and modern frameworks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    React, Next.js & Vue.js
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    E-commerce Platforms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Progressive Web Apps (PWA)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    API Development & Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Performance Optimization
                  </li>
                </ul>
                <Button className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mobile Development */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-16 w-16 text-[#0081FB] mb-4" />
                <CardTitle className="text-2xl text-gray-900">Mobile Development</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Native and cross-platform mobile applications for iOS and Android platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    React Native & Flutter
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Native iOS (Swift) & Android (Kotlin)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    App Store Optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Push Notifications & Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Maintenance & Support
                  </li>
                </ul>
                <Button className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Database Solutions */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-16 w-16 text-[#0081FB] mb-4" />
                <CardTitle className="text-2xl text-gray-900">Database Solutions</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Scalable database architecture, optimization, and management for enterprise applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    PostgreSQL, MySQL & MongoDB
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Database Design & Modeling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Performance Tuning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Data Migration & ETL
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Backup & Recovery Solutions
                  </li>
                </ul>
                <Button className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Team Augmentation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-16 w-16 text-[#0081FB] mb-4" />
                <CardTitle className="text-2xl text-gray-900">Team Augmentation</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Scale your development team with our skilled professionals integrated into your workflow.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Dedicated Development Teams
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Project-based Specialists
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Flexible Scaling Options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Agile Methodology Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Quality Assurance & Testing
                  </li>
                </ul>
                <Button className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Digital Transformation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-16 w-16 text-[#0081FB] mb-4" />
                <CardTitle className="text-2xl text-gray-900">Digital Transformation</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Modernize your business processes and technology stack for competitive advantage.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Process Automation & AI
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Legacy System Modernization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Technology Strategy Consulting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Digital Workflow Optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Change Management Support
                  </li>
                </ul>
                <Button className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Need a Custom Solution?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We specialize in creating tailored solutions that fit your unique business requirements.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
