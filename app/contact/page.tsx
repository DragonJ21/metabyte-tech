import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Layout } from "@/components/layout"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Get In <span className="text-[#0081FB]">Touch</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Ready to transform your business? Let's discuss your project and explore how we can help you achieve
                your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Let's Start a Conversation</h2>
                <p className="text-muted-foreground">
                  Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
                  Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <Mail className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">support@metabyte.tech</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 4 business hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <Phone className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM AEST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <MapPin className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Office</h3>
                    <p className="text-muted-foreground">
                      4 Columbia Court
                      <br />
                      Norwest, NSW 2153
                    </p>
                    <p className="text-sm text-muted-foreground">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0081FB]/10">
                    <Clock className="h-6 w-6 text-[#0081FB]" />
                  </div>
                  <div>
                    <h3 className="font-bold">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-sm text-muted-foreground">Emergency support available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First name *
                    </label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last name *
                    </label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input id="email" placeholder="john@company.com" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" type="tel" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="team-augmentation">Team Augmentation</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="over-250k">Over $250,000</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button className="w-full bg-[#0081FB] hover:bg-[#0066CC]">Send Message</Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you start a project?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We can typically start new projects within 1-2 weeks after contract signing, depending on project
                  complexity and team availability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you work with startups?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We work with companies of all sizes, from early-stage startups to Fortune 500 enterprises,
                  tailoring our approach to your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's your pricing model?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team
                  arrangements based on your preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer comprehensive maintenance and support packages to ensure your solution continues to perform
                  optimally after launch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
