import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout } from "@/components/layout"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of Cloud Computing: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends in cloud computing and how they're shaping the future of business technology.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Cloud Computing",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      title: "Building Scalable Web Applications with Next.js",
      excerpt:
        "A comprehensive guide to building high-performance, scalable web applications using Next.js and modern development practices.",
      author: "Michael Chen",
      date: "December 10, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt:
        "Comparing the pros and cons of native and cross-platform mobile development approaches for your next project.",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Mobile Development",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "DevOps Best Practices for Small Teams",
      excerpt:
        "Essential DevOps practices that small development teams can implement to improve efficiency and deployment reliability.",
      author: "David Kim",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "DevOps",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Digital Transformation: A Step-by-Step Guide",
      excerpt:
        "How to successfully navigate digital transformation in your organization with practical strategies and real-world examples.",
      author: "Sarah Johnson",
      date: "November 20, 2024",
      readTime: "10 min read",
      category: "Digital Transformation",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Database Optimization Techniques for Better Performance",
      excerpt: "Proven techniques to optimize database performance and handle growing data loads efficiently.",
      author: "Michael Chen",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Database",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = [
    "All",
    "Cloud Computing",
    "Web Development",
    "Mobile Development",
    "DevOps",
    "Digital Transformation",
    "Database",
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Tech <span className="text-[#0081FB]">Insights</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Stay updated with the latest trends, best practices, and insights from the world of technology and
                software development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-8 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-[#0081FB] hover:bg-[#0066CC]" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4 bg-[#0081FB]">{blogPosts[0].category}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <Button className="bg-[#0081FB] hover:bg-[#0066CC]">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-[#0081FB]">{post.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0081FB]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Subscribe to our newsletter and get the latest tech insights delivered to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <div className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
              <p className="text-xs text-white/80">No spam, unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
