import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Cloud, Globe, Mail, MapPin, Phone, Smartphone, Users, Zap } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Scale Your Business with
                  <span className="text-[#0081FB]"> METABYTE</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We provide comprehensive IT services including cloud solutions, web development, mobile
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
                  src="/placeholder.svg?height=400&width=600&text=Hero+Technology+Image"
                  alt="Technology and Innovation"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#0081FB]/20">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=300&text=Cloud+Solutions"
                    alt="Cloud Solutions"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Cloud className="h-12 w-12 text-[#0081FB] mb-4" />
                <CardTitle>Cloud Solutions</CardTitle>
                <CardDescription>
                  Migrate to the cloud with confidence. We provide AWS, Azure, and Google Cloud services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#0081FB]/20">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=300&text=Web+Development"
                    alt="Web Development"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Globe className="h-12 w-12 text-[#0081FB] mb-4" />
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Custom web applications built with modern technologies and best practices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-[#0081FB]/20">
              <CardHeader>
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=300&text=Mobile+Development"
                    alt="Mobile Development"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Smartphone className="h-12 w-12 text-[#0081FB] mb-4" />
                <CardTitle>Mobile Development</CardTitle>
                <CardDescription>Native and cross-platform mobile apps for iOS and Android platforms.</CardDescription>
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
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose METABYTE?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With over a decade of experience in IT solutions, we've helped hundreds of businesses scale their
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
                    <h3 className="font-bold">Proven Track Record</h3>
                    <p className="text-sm text-muted-foreground">
                      Successfully delivered 500+ projects across various industries
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <Users className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Expert Team</h3>
                    <p className="text-sm text-muted-foreground">100+ certified developers and IT professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <Zap className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Agile Methodology</h3>
                    <p className="text-sm text-muted-foreground">
                      Fast delivery with continuous communication and feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", image: "CEO+Portrait" },
              { name: "Michael Chen", role: "CTO", image: "CTO+Portrait" },
              { name: "Emily Rodriguez", role: "Head of Development", image: "Developer+Portrait" },
              { name: "David Kim", role: "Head of Design", image: "Designer+Portrait" },
            ].map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=200&text=${member.image}`}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-[#0081FB] font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                  <h3 className="font-bold">Email</h3>
                  <p className="text-muted-foreground">contact@metabyte.tech</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                  <Phone className="h-6 w-6 text-[#0081FB]" />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                  <MapPin className="h-6 w-6 text-[#0081FB]" />
                </div>
                <div>
                  <h3 className="font-bold">Office</h3>
                  <p className="text-muted-foreground">123 Tech Street, Silicon Valley, CA 94000</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" placeholder="john@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
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
