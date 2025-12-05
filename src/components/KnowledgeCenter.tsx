import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FileText, Video, BookOpen, TrendingUp, Download, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const resourceCategories = [
  {
    id: "case-studies",
    title: "Case Studies",
    icon: FileText,
    description: "Real-world success stories and project outcomes",
    count: 25
  },
  {
    id: "blog",
    title: "Dev & QA Tips",
    icon: BookOpen,
    description: "Technical insights and best practices",
    count: 150
  },
  {
    id: "webinars",
    title: "Webinars",
    icon: Video,
    description: "Live sessions and recorded presentations",
    count: 40
  },
  {
    id: "whitepapers",
    title: "White Papers",
    icon: FileText,
    description: "In-depth research and analysis",
    count: 20
  },
  {
    id: "guides",
    title: "Guides & Reports",
    icon: Download,
    description: "Comprehensive guides and industry reports",
    count: 35
  },
  {
    id: "industry-insights",
    title: "Industry Insights",
    icon: TrendingUp,
    description: "Market trends and analysis",
    count: 60
  }
];

const featuredResources = [
  {
    type: "Case Study",
    title: "AI Workflow Automation Increases Productivity by 30%",
    description: "How we helped a leading company automate workflows with AI-powered solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "AI & Automation",
    readTime: "8 min read"
  },
  {
    type: "White Paper",
    title: "The Future of Software Testing in 2025",
    description: "Comprehensive analysis of emerging QA trends and technologies",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Quality Assurance",
    readTime: "15 min read"
  },
  {
    type: "Guide",
    title: "Complete Guide to Cloud Migration",
    description: "Step-by-step strategies for successful cloud transformation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Cloud Computing",
    readTime: "12 min read"
  },
  {
    type: "Webinar",
    title: "Building Scalable Microservices Architecture",
    description: "Live session on designing and implementing microservices",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Software Architecture",
    readTime: "45 min"
  },
  {
    type: "Blog",
    title: "10 Best Practices for React Performance",
    description: "Optimize your React applications for better performance",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Frontend Development",
    readTime: "6 min read"
  },
  {
    type: "Industry Insight",
    title: "FinTech Innovation Trends 2025",
    description: "Key technological advancements shaping the financial sector",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "FinTech",
    readTime: "10 min read"
  }
];

const upcomingWebinars = [
  {
    title: "AI-Driven Test Automation Strategies",
    date: "Dec 15, 2025",
    time: "2:00 PM EST",
    speaker: "Sarah Chen, QA Lead"
  },
  {
    title: "Securing Cloud-Native Applications",
    date: "Dec 20, 2025",
    time: "3:00 PM EST",
    speaker: "Michael Rodriguez, Security Expert"
  },
  {
    title: "Building with Generative AI",
    date: "Jan 10, 2026",
    time: "1:00 PM EST",
    speaker: "Emily Thompson, AI Architect"
  }
];

export function KnowledgeCenter() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Knowledge Center</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Insights, guides, and resources to help you stay ahead in technology and software development
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {resourceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="p-6 border-slate-200 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                    {category.count}
                  </Badge>
                </div>
                <h3 className="text-xl mb-2">{category.title}</h3>
                <p className="text-slate-600 text-sm">{category.description}</p>
                <button className="mt-4 text-slate-900 hover:underline text-sm">
                  Explore →
                </button>
              </Card>
            );
          })}
        </div>

        {/* Featured Resources */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Featured Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-slate-900">
                      {resource.type}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                      {resource.category}
                    </Badge>
                    <span className="text-xs text-slate-500">{resource.readTime}</span>
                  </div>
                  <h3 className="text-lg mb-2 line-clamp-2">{resource.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{resource.description}</p>
                  <button className="text-slate-900 hover:underline text-sm">
                    Read More →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Webinars */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Upcoming Webinars</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className="p-6 border-slate-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg">
                      <Calendar className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">{webinar.title}</h3>
                      <p className="text-sm text-slate-600 mb-1">{webinar.speaker}</p>
                      <p className="text-sm text-slate-500">{webinar.date} • {webinar.time}</p>
                    </div>
                  </div>
                  <Button className="bg-slate-900 hover:bg-slate-800 whitespace-nowrap">
                    Register Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Stay Updated</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, tips, and industry trends
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900"
            />
            <Button className="bg-white text-slate-900 hover:bg-slate-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
