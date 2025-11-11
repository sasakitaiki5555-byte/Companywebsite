import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const customSoftwareProjects = [
  {
    title: "Enterprise Resource Planning System",
    category: "Enterprise Software",
    description: "Cloud-based ERP solution streamlining operations for 500+ employees across multiple locations",
    image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmV8ZW58MXx8fHwxNzYyODA4MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "E-Commerce Marketplace Platform",
    category: "E-commerce Development",
    description: "Multi-vendor marketplace handling 1M+ monthly transactions with real-time inventory management",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjI3MTQwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "Stripe", "MongoDB", "Redis"],
  },
  {
    title: "Telemedicine Mobile Application",
    category: "Healthcare Solution",
    description: "HIPAA-compliant telemedicine platform connecting 10,000+ patients with healthcare providers",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI2OTc0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "Firebase", "WebRTC", "HIPAA"],
  },
  {
    title: "Digital Banking Platform",
    category: "FinTech Solution",
    description: "Secure banking application with real-time transactions, fraud detection, and AI-powered insights",
    image: "https://images.unsplash.com/photo-1726137065566-153debe32a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFwcHxlbnwxfHx8fDE3NjI3Njc5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vue.js", "Python", "Kubernetes", "AI/ML"],
  },
  {
    title: "Custom CRM for Real Estate",
    category: "CRM Development",
    description: "Tailored CRM solution automating lead management and property listing workflows",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjI3NDA1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Angular", "Django", "MySQL", "Salesforce"],
  },
  {
    title: "IoT Fleet Management System",
    category: "IoT Solution",
    description: "Real-time tracking and management platform for 5,000+ vehicles with predictive maintenance",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjI3NjIyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "MQTT", "TimescaleDB", "Azure"],
  },
  {
    title: "SaaS Project Management Tool",
    category: "SaaS Development",
    description: "Collaborative project management platform serving 50,000+ users across 100+ companies",
    image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyNzI1NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "GraphQL", "PostgreSQL", "Docker"],
  },
  {
    title: "Food Delivery Mobile App",
    category: "Mobile Development",
    description: "On-demand food delivery platform with real-time tracking and smart routing algorithms",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzk1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Flutter", "Node.js", "Google Maps", "Stripe"],
  },
  {
    title: "Legacy System Modernization",
    category: "System Migration",
    description: "Migrated legacy mainframe application to modern microservices architecture without downtime",
    image: "https://images.unsplash.com/photo-1599652749620-e45b7f38988e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVzdGluZ3xlbnwxfHx8fDE3NjI4MjYxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Java", "Spring Boot", "Docker", "Kubernetes"],
  },
];

const qaTestingProjects = [
  {
    title: "E-Commerce QA Automation Suite",
    category: "Test Automation",
    description: "Comprehensive automation framework covering 5,000+ test cases, reducing testing time by 80%",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjI3MTQwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Selenium", "Pytest", "Jenkins", "BrowserStack"],
  },
  {
    title: "Banking App Security Testing",
    category: "Security & Penetration Testing",
    description: "Identified and remediated 47 security vulnerabilities in mobile banking application",
    image: "https://images.unsplash.com/photo-1726137065566-153debe32a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFwcHxlbnwxfHx8fDE3NjI3Njc5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["OWASP", "Burp Suite", "Kali Linux", "VAPT"],
  },
  {
    title: "Healthcare App Performance Testing",
    category: "Performance & Load Testing",
    description: "Load testing for telemedicine platform handling 100,000 concurrent users during peak hours",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI2OTc0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["JMeter", "Gatling", "New Relic", "Datadog"],
  },
  {
    title: "Mobile App Cross-Platform Testing",
    category: "Mobile Testing",
    description: "Tested iOS and Android app across 50+ devices and OS versions ensuring 99.9% compatibility",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjI3NjIyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Appium", "XCTest", "Espresso", "TestFlight"],
  },
  {
    title: "API Testing Framework",
    category: "API & Integration Testing",
    description: "Automated API testing suite validating 200+ endpoints with contract testing and mocking",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjI3NDA1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Postman", "REST Assured", "Pact", "Newman"],
  },
  {
    title: "Accessibility Compliance Testing",
    category: "Accessibility Testing",
    description: "WCAG 2.1 AA compliance testing ensuring application accessibility for all users",
    image: "https://images.unsplash.com/photo-1599652749620-e45b7f38988e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVzdGluZ3xlbnwxfHx8fDE3NjI4MjYxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["axe", "WAVE", "NVDA", "WCAG"],
  },
  {
    title: "CI/CD Pipeline Integration",
    category: "Continuous Testing",
    description: "Integrated automated testing into DevOps pipeline with 15-minute build and test cycles",
    image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyNzI1NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Jenkins", "GitLab CI", "Docker", "SonarQube"],
  },
  {
    title: "Regression Testing Automation",
    category: "Regression Testing",
    description: "Built regression suite with 3,000+ test cases achieving 95% code coverage",
    image: "https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBxdWFsaXR5fGVufDF8fHx8MTc2MjgyNTczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Cypress", "Jest", "TestNG", "Allure"],
  },
  {
    title: "Usability Testing Study",
    category: "Usability Testing",
    description: "Conducted usability studies with 200+ participants improving user satisfaction by 40%",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyNzk1OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["UserTesting", "Hotjar", "Maze", "Optimal Workshop"],
  },
];

export function Portfolio() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Portfolio</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover our recent projects and success stories across software development and QA testing
          </p>
        </div>
        
        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="software">Software Development</TabsTrigger>
            <TabsTrigger value="qa">QA Testing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="software">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customSoftwareProjects.map((project, index) => (
                <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <button className="px-6 py-2 bg-white text-slate-900 rounded-lg flex items-center gap-2">
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-2">{project.category}</div>
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-slate-100 text-slate-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="qa">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qaTestingProjects.map((project, index) => (
                <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <button className="px-6 py-2 bg-white text-slate-900 rounded-lg flex items-center gap-2">
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-purple-600 mb-2">{project.category}</div>
                    <h3 className="text-xl mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-slate-100 text-slate-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
