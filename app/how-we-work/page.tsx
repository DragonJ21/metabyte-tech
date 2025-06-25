import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  FileText,
  MessageSquare,
  Rocket,
  Search,
  Settings,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HowWeWorkPage() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business goals, technical requirements, and project constraints.",
      icon: Search,
      activities: [
        "Stakeholder interviews",
        "Technical requirements gathering",
        "Competitive analysis",
        "Risk assessment",
        "Timeline estimation",
      ],
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description: "Detailed project planning with clear milestones, resource allocation, and technology selection.",
      icon: FileText,
      activities: [
        "Project roadmap creation",
        "Technology stack selection",
        "Team composition planning",
        "Budget finalization",
        "Communication protocols",
      ],
    },
    {
      step: "03",
      title: "Design & Architecture",
      description: "Creating user-centric designs and robust technical architecture for scalable solutions.",
      icon: Settings,
      activities: [
        "UI/UX design mockups",
        "System architecture design",
        "Database schema planning",
        "API specification",
        "Security framework setup",
      ],
    },
    {
      step: "04",
      title: "Development & Testing",
      description: "Agile development with continuous integration, testing, and regular client feedback.",
      icon: Code,
      activities: [
        "Sprint-based development",
        "Automated testing implementation",
        "Code reviews and quality assurance",
        "Regular demo sessions",
        "Performance optimization",
      ],
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Seamless deployment with monitoring, documentation, and go-live support.",
      icon: Rocket,
      activities: [
        "Production environment setup",
        "Deployment automation",
        "Performance monitoring",
        "User training and documentation",
        "Go-live support",
      ],
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, monitoring, and continuous improvement of your solution.",
      icon: Users,
      activities: [
        "24/7 monitoring and support",
        "Regular updates and patches",
        "Performance optimization",
        "Feature enhancements",
        "Technical consultation",
      ],
    },
  ]

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative development with regular feedback and adaptability",
      features: ["2-week sprints", "Daily standups", "Sprint reviews", "Retrospectives"],
    },
    {
      title: "DevOps Integration",
      description: "Continuous integration and deployment for faster delivery",
      features: ["Automated testing", "CI/CD pipelines", "Infrastructure as Code", "Monitoring"],
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing strategy ensuring robust solutions",
      features: ["Unit testing", "Integration testing", "Performance testing", "Security testing"],
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
                How We <span className="text-[#0081FB]">Work</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our proven methodology ensures successful project delivery through structured processes and clear
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Process</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A systematic approach that has delivered success across 500+ projects
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-border hidden md:block" />
                )}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex items-center gap-4 md:w-1/3">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0081FB]/10 flex-shrink-0">
                          <step.icon className="h-8 w-8 text-[#0081FB]" />
                        </div>
                        <div>
                          <Badge className="mb-2 bg-[#0081FB]">Step {step.step}</Badge>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <div className="md:w-2/3 space-y-4">
                        <p className="text-muted-foreground">{step.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Methodologies</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Industry best practices that ensure quality, efficiency, and success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {methodologies.map((methodology, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{methodology.title}</CardTitle>
                  <CardDescription className="text-base">{methodology.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {methodology.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Communication & Tools */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transparent Communication</h2>
              <p className="text-muted-foreground md:text-lg">
                We believe in keeping you informed every step of the way with regular updates, clear documentation, and
                open communication channels.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6 text-[#0081FB]" />
                  <span>Daily progress updates via Slack/Teams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-[#0081FB]" />
                  <span>Weekly sprint reviews and demos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-[#0081FB]" />
                  <span>Comprehensive project documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-[#0081FB]" />
                  <span>Dedicated project manager assigned</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Project Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Jira/Asana</li>
                    <li>• Trello</li>
                    <li>• Monday.com</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Slack/Teams</li>
                    <li>• Zoom/Meet</li>
                    <li>• Email updates</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• GitHub/GitLab</li>
                    <li>• Docker</li>
                    <li>• AWS/Azure</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Jest/Cypress</li>
                    <li>• Selenium</li>
                    <li>• Postman</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0081FB]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Experience Our Process?
              </h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's start with a free consultation to understand your project needs.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project
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
