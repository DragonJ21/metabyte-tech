import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Cloud, Globe, Mail, MapPin, Smartphone, Users, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                  Scale Your Business with
                  <span className="text-[#0081FB]"> Expert IT Outsourcing</span>
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  We provide comprehensive IT outsourcing services including cloud solutions, web development, mobile
                  apps, and more. Focus on your core business while we handle the technology.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src="/home_page.jpg?height=400&width=600&text=Modern+Office+Team+Collaboration"
                  alt="Modern office team working on technology solutions"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Services</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#0081FB]/20">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/cloud_solution.jpg?height=200&width=300&text=Cloud+Infrastructure+Dashboard"
                    alt="Cloud Solutions Dashboard"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Cloud className="h-12 w-12 text-[#0081FB] mb-4" />
                <CardTitle className="text-gray-900">Cloud Solutions</CardTitle>
                <CardDescription className="text-gray-600">
                  Migrate to the cloud with confidence. We provide AWS, Azure, and Google Cloud services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#0081FB]/20">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/web_development.jpg?height=200&width=300&text=Modern+Web+Application+Interface"
                    alt="Web Development Interface"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Globe className="h-12 w-12 text-[#0081FB] mb-4" />
                <CardTitle className="text-gray-900">Web Development</CardTitle>
                <CardDescription className="text-gray-600">
                  Custom web applications built with modern technologies and best practices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#0081FB]/20">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/mobile_development.jpg?height=200&width=300&text=Mobile+App+Development+Mockup"
                    alt="Mobile App Development"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Smartphone className="h-12 w-12 text-[#0081FB] mb-4" />
                <CardTitle className="text-gray-900">Mobile Development</CardTitle>
                <CardDescription className="text-gray-600">
                  Native and cross-platform mobile apps for iOS and Android platforms.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0081FB]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how we can help you achieve your technology goals.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Why Choose METABYTE.TECH?
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With over a decade of experience in IT outsourcing, we've helped hundreds of businesses scale their
                operations and achieve their technology goals through cutting-edge solutions.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <CheckCircle className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Proven Track Record</h3>
                    <p className="text-sm text-gray-600">
                      Successfully delivered 500+ projects across various industries
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <Users className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Expert Team</h3>
                    <p className="text-sm text-gray-600">100+ certified developers and IT professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <Zap className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Agile Methodology</h3>
                    <p className="text-sm text-gray-600">Fast delivery with continuous communication and feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Meet Our Team</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
  { name: "Sarah Johnson", role: "CEO & Founder", image: "sarah.jpg" },
  { name: "Michael Chen", role: "CTO", image: "michael.jpg" },
  { name: "Emily Rodriguez", role: "Head of Development", image: "emily.jpg" },
  { name: "David Kim", role: "Head of Design", image: "david.jpg" },
].map((member, index) => (
  <Card key={index} className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6 text-center">
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="font-bold text-lg mb-1 text-gray-900">{member.name}</h3>
      <p className="text-[#0081FB] font-medium">{member.role}</p>
    </CardContent>
  </Card>
))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Get In Touch</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to transform your business? Contact us today for a free consultation.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                  <Mail className="h-6 w-6 text-[#0081FB]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@metabyte.tech</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                  <MapPin className="h-6 w-6 text-[#0081FB]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Office</h3>
                  <p className="text-gray-600">
                    Nexus Norwest
                    <br />4 Columbia Ct, Norwest NSW 2153
                  </p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900">Send us a message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input id="email" placeholder="john@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-[#0081FB] hover:bg-[#0066CC]">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
