import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"
import { ArrowRight, Clock, DollarSign, Globe, GraduationCap, Heart, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-leading compensation packages with performance bonuses",
    },
    {
      icon: Globe,
      title: "Remote Work",
      description: "Flexible remote work options with global team collaboration",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities and certification support",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible hours and generous PTO to maintain healthy balance",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with talented professionals",
    },
  ]

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      description: "Lead development of complex web applications and mentor junior developers.",
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Remote / New York",
      type: "Full-time",
      experience: "7+ years",
      skills: ["AWS", "Azure", "Kubernetes", "Terraform", "DevOps"],
      description: "Design and implement scalable cloud architectures for enterprise clients.",
    },
    {
      title: "Mobile App Developer",
      department: "Mobile",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      skills: ["React Native", "Swift", "Kotlin", "Firebase", "Redux"],
      description: "Build high-performance mobile applications for iOS and Android platforms.",
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Seattle",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Monitoring"],
      description: "Automate deployment processes and maintain CI/CD pipelines.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      description: "Create intuitive user experiences and beautiful interface designs.",
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "5+ years",
      skills: ["Agile", "Scrum", "Jira", "Stakeholder Management", "Risk Assessment"],
      description: "Lead cross-functional teams to deliver projects on time and within budget.",
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
                Join <span className="text-[#0081FB]">METABYTE.TECH</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Build your career with a team that values innovation, growth, and making a real impact in the tech
                industry.
              </p>
            </div>
            <Button size="lg" className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
              <Link href="#positions">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Work With Us?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join a company that invests in your growth and success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10 mb-4">
                    <benefit.icon className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Culture</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At METABYTE.TECH, we believe that great technology comes from great people. Our culture is built on
                  collaboration, innovation, and continuous learning.
                </p>
                <p>
                  We foster an environment where every team member can contribute their unique perspectives, grow their
                  skills, and make meaningful contributions to projects that impact businesses worldwide.
                </p>
                <p>
                  Whether you're working remotely or in one of our offices, you'll be part of a supportive community
                  that celebrates achievements, learns from challenges, and always strives for excellence.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#0081FB] mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#0081FB] mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#0081FB] mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#0081FB] mb-2">4.8</div>
                  <div className="text-sm text-muted-foreground">Glassdoor Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Open Positions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find your next opportunity with us
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold">{position.title}</h3>
                        <Badge className="bg-[#0081FB]">{position.department}</Badge>
                      </div>
                      <p className="text-muted-foreground">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button className="bg-[#0081FB] hover:bg-[#0066CC]" asChild>
                        <Link
                          href={`/apply?position=${encodeURIComponent(position.title)}&department=${encodeURIComponent(position.department)}`}
                        >
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Application Process</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our streamlined hiring process designed to find the best fit
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0081FB] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold mb-2">Apply</h3>
                <p className="text-sm text-muted-foreground">Submit your application and resume through our portal</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0081FB] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold mb-2">Screen</h3>
                <p className="text-sm text-muted-foreground">
                  Initial screening call to discuss your background and interests
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0081FB] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold mb-2">Interview</h3>
                <p className="text-sm text-muted-foreground">Technical and cultural fit interviews with our team</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0081FB] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-bold mb-2">Offer</h3>
                <p className="text-sm text-muted-foreground">Receive your offer and join our amazing team</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Join Our Team?</h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't see a position that fits? We're always looking for talented individuals.
              </p>
            </div>
            <div className="space-x-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/general-application">
                  Send Your Resume
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
