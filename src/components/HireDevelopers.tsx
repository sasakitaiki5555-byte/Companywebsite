import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Code, Smartphone, Cloud, Cpu, Lock, Users, Zap } from "lucide-react";

const developerCategories = [
  {
    id: "hire-backend",
    title: "Backend Developers",
    icon: Code,
    color: "bg-blue-50 border-blue-200",
    technologies: ["Node.js", "Python", "PHP", "Golang", ".NET", "Java", "SQL", "Django", "Express.js", "Spring Boot"],
    description: "Expert backend developers for scalable server-side applications",
    rates: "Starting from $40/hr"
  },
  {
    id: "hire-frontend",
    title: "Frontend Developers",
    icon: Code,
    color: "bg-green-50 border-green-200",
    technologies: ["React.js", "Angular", "Vue.js", "JavaScript", "TypeScript", "Next.js"],
    description: "Skilled frontend developers for beautiful, responsive interfaces",
    rates: "Starting from $35/hr"
  },
  {
    id: "hire-mobile",
    title: "Mobile Developers",
    icon: Smartphone,
    color: "bg-purple-50 border-purple-200",
    technologies: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Xamarin"],
    description: "Native and cross-platform mobile app developers",
    rates: "Starting from $45/hr"
  },
  {
    id: "hire-fullstack",
    title: "Full Stack Developers",
    icon: Zap,
    color: "bg-orange-50 border-orange-200",
    technologies: ["MERN Stack", "MEAN Stack", "Python/Django", "Java/Spring", ".NET"],
    description: "Versatile full stack developers for end-to-end development",
    rates: "Starting from $50/hr"
  },
  {
    id: "hire-ai",
    title: "AI Engineers",
    icon: Cpu,
    color: "bg-pink-50 border-pink-200",
    technologies: ["Python", "TensorFlow", "PyTorch", "LangChain", "Computer Vision", "NLP", "LLM"],
    description: "AI/ML experts for intelligent solutions and automation",
    rates: "Starting from $60/hr"
  },
  {
    id: "hire-devops",
    title: "DevOps Engineers",
    icon: Cloud,
    color: "bg-cyan-50 border-cyan-200",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    description: "DevOps specialists for CI/CD and infrastructure automation",
    rates: "Starting from $55/hr"
  },
  {
    id: "hire-blockchain",
    title: "Blockchain Developers",
    icon: Lock,
    color: "bg-yellow-50 border-yellow-200",
    technologies: ["Solidity", "Web3", "Ethereum", "Smart Contracts", "NFT", "DeFi"],
    description: "Blockchain experts for decentralized applications",
    rates: "Starting from $65/hr"
  },
  {
    id: "hire-specialized",
    title: "Specialized Developers",
    icon: Users,
    color: "bg-teal-50 border-teal-200",
    technologies: ["Salesforce", "ServiceNow", "Odoo", "MS PowerApps", "Metaverse"],
    description: "Platform specialists for enterprise solutions",
    rates: "Starting from $50/hr"
  }
];

const hiringProcess = [
  {
    step: "1",
    title: "Share Requirements",
    description: "Tell us about your project needs, tech stack, and team requirements"
  },
  {
    step: "2",
    title: "Review Profiles",
    description: "We shortlist and present pre-vetted developers matching your criteria"
  },
  {
    step: "3",
    title: "Interview Candidates",
    description: "Interview selected candidates and assess their technical skills"
  },
  {
    step: "4",
    title: "Start Development",
    description: "Onboard chosen developers and kick off your project within days"
  }
];

const benefits = [
  "Pre-vetted developers with 5+ years experience",
  "Flexible engagement models (hourly, monthly, project-based)",
  "30-day risk-free trial period",
  "Direct communication with developers",
  "No hidden costs or markups",
  "Easy scaling up or down",
  "Timezone-friendly working hours",
  "Dedicated account manager"
];

export function HireDevelopers() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Hire Expert Developers</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Scale your team with pre-vetted developers. Flexible engagement, transparent pricing, and seamless integration.
          </p>
        </div>

        {/* Developer Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {developerCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`${category.color} border-2 hover:shadow-lg transition-shadow`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg">
                      <IconComponent className="h-6 w-6 text-slate-900" />
                    </div>
                    <h3 className="text-lg">{category.title}</h3>
                  </div>
                  <p className="text-sm text-slate-700 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.technologies.slice(0, 3).map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-white text-slate-700 border border-slate-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {category.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-white text-slate-700 border border-slate-300 text-xs">
                        +{category.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm mb-4">
                    <span className="text-slate-900">{category.rates}</span>
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800">
                    Hire Now
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Hiring Process */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Simple Hiring Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {hiringProcess.map((item, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center h-full border-slate-200">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </Card>
                {index < hiringProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-slate-200 rounded-full z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Why Hire Through Us?</h2>
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Language-Specific Developers */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Hire by Programming Language</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["C++", "C#", "Golang", "JavaScript", "Java", "Objective-C", "Perl", "PHP", "Python", "Ruby on Rails", "Scala", "SQL", "Swift", "XML"].map((lang, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-6 py-3 text-base hover:bg-slate-100 cursor-pointer border-slate-300"
              >
                {lang} Developers
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Build Your Team?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get matched with expert developers in 48 hours. Start with a risk-free trial.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-slate-800">
              View Developer Profiles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
