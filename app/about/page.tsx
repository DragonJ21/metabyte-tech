import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"
import { ArrowRight, Award, Globe, Heart, Lightbulb, Shield, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust and results.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex challenges.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Dependable delivery, transparent communication, and consistent quality you can count on.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      experience: "15+ years",
      expertise: "Technology Strategy, Business Development",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      role: "CTO",
      experience: "12+ years",
      expertise: "Cloud Architecture, DevOps, System Design",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Vivaswaan Sanghani",
      role: "Head of Development",
      experience: "5+ years",
      expertise: "Full-Stack Development, Team Leadership",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Kuldip Bhuva",
      role: "CFO",
      experience: "8+ years",
      expertise: "Financial Planning, Risk Management, Budgeting, Strategic Forecasting",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "100+", label: "Team Members" },
    { number: "10+", label: "Years Experience" },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About <span className="text-[#0081FB]">METABYTE.TECH</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Empowering businesses through innovative technology solutions and expert IT outsourcing services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2014, METABYTE.TECH began with a simple mission: to help businesses leverage technology for
                  growth and innovation. What started as a small team of passionate developers has grown into a
                  comprehensive IT outsourcing partner serving clients worldwide.
                </p>
                <p>
                  Over the years, we've evolved from a development shop to a full-service technology partner, offering
                  everything from cloud migration and web development to mobile apps and digital transformation
                  consulting.
                </p>
                <p>
                  Today, we're proud to have delivered over 500 successful projects, helping businesses across
                  industries achieve their digital goals and stay competitive in an ever-changing technological
                  landscape.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-[#0081FB] mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <Target className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower businesses of all sizes by providing innovative, scalable, and reliable technology
                  solutions that drive growth, efficiency, and competitive advantage in the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <Globe className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the global leader in IT outsourcing, recognized for our technical excellence, innovative
                  solutions, and unwavering commitment to client success and long-term partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0081FB]/10">
                      <value.icon className="h-8 w-8 text-[#0081FB]" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Leadership Team</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the experienced leaders driving our vision forward
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-[#0081FB] font-medium mb-2">{member.role}</p>
                  <Badge variant="secondary" className="mb-3">
                    {member.experience}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Certifications & Recognition</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Industry recognition and certifications that validate our expertise
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-[#0081FB] mx-auto mb-4" />
                <h3 className="font-bold mb-2">AWS Partner</h3>
                <p className="text-sm text-muted-foreground">Certified AWS Solutions Partner</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-[#0081FB] mx-auto mb-4" />
                <h3 className="font-bold mb-2">Microsoft Partner</h3>
                <p className="text-sm text-muted-foreground">Gold Cloud Platform Partner</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-[#0081FB] mx-auto mb-4" />
                <h3 className="font-bold mb-2">ISO 27001</h3>
                <p className="text-sm text-muted-foreground">Information Security Certified</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-[#0081FB] mx-auto mb-4" />
                <h3 className="font-bold mb-2">Top Developer</h3>
                <p className="text-sm text-muted-foreground">Clutch.co Recognition 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0081FB]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work Together?</h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how our expertise can help transform your business.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
