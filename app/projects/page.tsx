import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Platform Modernization",
      description: "Complete digital transformation of a legacy e-commerce system serving 100K+ users",
      image: "E-commerce+Platform",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Redis"],
      category: "Web Development",
      results: ["300% performance improvement", "50% reduction in server costs", "99.9% uptime achieved"],
    },
    {
      title: "Healthcare Mobile App",
      description: "HIPAA-compliant mobile application for patient management and telemedicine",
      image: "Healthcare+Mobile+App",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Socket.io"],
      category: "Mobile Development",
      results: ["10K+ active users", "4.8 App Store rating", "HIPAA compliance certified"],
    },
    {
      title: "Financial Services Cloud Migration",
      description: "Migrated critical financial systems to AWS with zero downtime",
      image: "Cloud+Migration+Dashboard",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
      category: "Cloud Solutions",
      results: ["Zero downtime migration", "60% cost reduction", "Enhanced security compliance"],
    },
    {
      title: "Manufacturing IoT Dashboard",
      description: "Real-time monitoring dashboard for industrial equipment and production metrics",
      image: "IoT+Dashboard+Analytics",
      technologies: ["Vue.js", "Python", "InfluxDB", "Grafana", "MQTT"],
      category: "Digital Transformation",
      results: ["Real-time monitoring", "25% efficiency increase", "Predictive maintenance enabled"],
    },
    {
      title: "EdTech Learning Platform",
      description: "Scalable online learning platform with video streaming and interactive content",
      image: "EdTech+Learning+Platform",
      technologies: ["Next.js", "Express.js", "PostgreSQL", "AWS S3", "WebRTC"],
      category: "Web Development",
      results: ["50K+ students enrolled", "Interactive video streaming", "Multi-language support"],
    },
    {
      title: "Logistics Management System",
      description: "End-to-end logistics and supply chain management solution",
      image: "Logistics+Management+System",
      technologies: ["Angular", "Spring Boot", "MySQL", "Docker", "Microservices"],
      category: "Enterprise Solutions",
      results: ["40% operational efficiency", "Real-time tracking", "Automated reporting"],
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our <span className="text-[#0081FB]">Projects</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our portfolio of successful projects across various industries and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow overflow-hidden border-2 hover:border-[#0081FB]/20"
              >
                <div className="aspect-video bg-muted relative">
                  <img
                    src={`/placeholder.svg?height=300&width=500&text=${project.image}`}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#0081FB]">{project.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Results:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#0081FB] rounded-full mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#0081FB]">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#0081FB]">150+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#0081FB]">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#0081FB]">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how we can bring your vision to life with our proven expertise.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/how-we-work">Learn Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
