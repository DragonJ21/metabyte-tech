"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Layout } from "@/components/layout"
import { ArrowLeft, Upload } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function GeneralApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your interest! We'll review your resume and contact you if there's a suitable opportunity.")
    setIsSubmitting(false)
  }

  return (
    <Layout>
      {/* Header */}
      <section className="w-full py-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex items-center space-x-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link href="/careers">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Careers
              </Link>
            </Button>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              General <span className="text-[#0081FB]">Application</span>
            </h1>
            <p className="text-gray-500 text-lg">Submit your resume for future opportunities at METABYTE</p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Submit Your Resume</CardTitle>
                <CardDescription>
                  Don't see a specific position that matches your skills? Submit your resume and we'll contact you when
                  suitable opportunities arise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name *
                        </label>
                        <Input id="first-name" name="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name *
                        </label>
                        <Input id="last-name" name="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input id="email" name="email" placeholder="john.doe@email.com" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number *
                      </label>
                      <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium">
                        Current Location *
                      </label>
                      <Input id="location" name="location" placeholder="City, State/Country" required />
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Professional Information</h3>
                    <div className="space-y-2">
                      <label htmlFor="experience" className="text-sm font-medium">
                        Years of Experience *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select experience level</option>
                        <option value="0-1">0-1 years</option>
                        <option value="2-3">2-3 years</option>
                        <option value="4-5">4-5 years</option>
                        <option value="6-8">6-8 years</option>
                        <option value="9-12">9-12 years</option>
                        <option value="13+">13+ years</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="current-role" className="text-sm font-medium">
                        Current Role/Title
                      </label>
                      <Input id="current-role" name="currentRole" placeholder="Senior Software Developer" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="areas-of-interest" className="text-sm font-medium">
                        Areas of Interest *
                      </label>
                      <Textarea
                        id="areas-of-interest"
                        name="areasOfInterest"
                        placeholder="What types of roles or technologies are you most interested in? (e.g., Full-Stack Development, Cloud Architecture, Mobile Development, etc.)"
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Skills & Experience</h3>
                    <div className="space-y-2">
                      <label htmlFor="technical-skills" className="text-sm font-medium">
                        Technical Skills *
                      </label>
                      <Textarea
                        id="technical-skills"
                        name="technicalSkills"
                        placeholder="List your technical skills, programming languages, frameworks, tools, etc."
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="experience-summary" className="text-sm font-medium">
                        Brief Experience Summary *
                      </label>
                      <Textarea
                        id="experience-summary"
                        name="experienceSummary"
                        placeholder="Briefly describe your professional background and key achievements..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Resume & Portfolio</h3>
                    <div className="space-y-2">
                      <label htmlFor="resume" className="text-sm font-medium">
                        Resume/CV *
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop your resume</p>
                        <p className="text-xs text-gray-500">PDF, DOC, or DOCX (max 5MB)</p>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#0081FB] file:text-white hover:file:bg-[#0066CC]"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="portfolio" className="text-sm font-medium">
                        Portfolio/LinkedIn URL
                      </label>
                      <Input
                        id="portfolio"
                        name="portfolio"
                        placeholder="https://linkedin.com/in/yourprofile"
                        type="url"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="github" className="text-sm font-medium">
                        GitHub Profile
                      </label>
                      <Input id="github" name="github" placeholder="https://github.com/yourusername" type="url" />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    <div className="space-y-2">
                      <label htmlFor="availability" className="text-sm font-medium">
                        Availability *
                      </label>
                      <select
                        id="availability"
                        name="availability"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select availability</option>
                        <option value="immediately">Immediately</option>
                        <option value="2-weeks">2 weeks notice</option>
                        <option value="1-month">1 month</option>
                        <option value="2-months">2 months</option>
                        <option value="3-months">3+ months</option>
                        <option value="open-to-opportunities">Open to future opportunities</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="remote-preference" className="text-sm font-medium">
                        Remote Work Preference *
                      </label>
                      <select
                        id="remote-preference"
                        name="remotePreference"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select preference</option>
                        <option value="fully-remote">Fully Remote</option>
                        <option value="hybrid">Hybrid (Remote + Office)</option>
                        <option value="office-based">Office-based</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="additional-info" className="text-sm font-medium">
                        Additional Comments
                      </label>
                      <Textarea
                        id="additional-info"
                        name="additionalInfo"
                        placeholder="Any additional information you'd like to share..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="terms" name="terms" className="mt-1" required />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the processing of my personal data for recruitment purposes and confirm that all
                        information provided is accurate. *
                      </label>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#0081FB] hover:bg-[#0066CC]"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Resume"}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      We'll keep your resume on file and contact you when suitable opportunities arise.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}
