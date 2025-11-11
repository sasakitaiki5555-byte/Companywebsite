import { 
  Code, Smartphone, Cloud, Palette, Database, ShieldCheck, ClipboardCheck,
  Zap, Globe, Settings, Boxes, RefreshCw, Gauge, Lock, TestTube,
  Activity, FileCode, Target, CheckCircle, GitBranch, Accessibility
} from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const customSoftwareServices = [
  {
    icon: Code,
    title: "Custom Web Applications",
    description: "Tailored web solutions built with React, Vue, Angular, and Node.js to meet your unique business requirements.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter for maximum reach.",
  },
  {
    icon: Boxes,
    title: "Enterprise Software Solutions",
    description: "Scalable enterprise-grade applications with robust architecture for large-scale business operations.",
  },
  {
    icon: Zap,
    title: "MVP & Product Development",
    description: "Rapid prototyping and MVP development to validate your ideas and get to market faster.",
  },
  {
    icon: FileCode,
    title: "API Development & Integration",
    description: "RESTful and GraphQL API design, development, and seamless third-party integrations.",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment gateways, inventory management, and analytics.",
  },
  {
    icon: Settings,
    title: "CRM & ERP Systems",
    description: "Custom CRM and ERP solutions to streamline your business processes and boost productivity.",
  },
  {
    icon: Cloud,
    title: "Cloud-based Solutions",
    description: "AWS, Azure, and GCP cloud architecture, migration, and optimization services.",
  },
  {
    icon: RefreshCw,
    title: "Legacy System Modernization",
    description: "Transform outdated systems with modern technologies while preserving critical business logic.",
  },
  {
    icon: GitBranch,
    title: "Microservices Architecture",
    description: "Design and implement scalable microservices for better performance and maintainability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design & Development",
    description: "User-centered design with beautiful interfaces that enhance engagement and conversion.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description: "Efficient database architecture with SQL and NoSQL solutions for optimal performance.",
  },
];

const qaTestingServices = [
  {
    icon: ClipboardCheck,
    title: "Manual Testing",
    description: "Comprehensive manual testing by experienced QA engineers to identify bugs and usability issues.",
  },
  {
    icon: Zap,
    title: "Test Automation",
    description: "Automated testing with Selenium, Cypress, Playwright, and custom frameworks for faster releases.",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    description: "Load, stress, and performance testing to ensure your application handles peak traffic.",
  },
  {
    icon: Lock,
    title: "Security Testing",
    description: "Vulnerability assessments, penetration testing, and security audits to protect your application.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Testing",
    description: "Comprehensive testing across devices, OS versions, and real-world conditions for iOS and Android.",
  },
  {
    icon: FileCode,
    title: "API Testing",
    description: "Automated API testing for RESTful and GraphQL endpoints to ensure reliability and performance.",
  },
  {
    icon: RefreshCw,
    title: "Regression Testing",
    description: "Continuous regression testing to catch issues early and maintain software quality.",
  },
  {
    icon: Activity,
    title: "Load & Stress Testing",
    description: "Simulate high-traffic scenarios to identify bottlenecks and optimize system performance.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Testing",
    description: "WCAG compliance testing to ensure your application is accessible to all users.",
  },
  {
    icon: TestTube,
    title: "Usability Testing",
    description: "User experience testing to optimize interface design and user satisfaction.",
  },
  {
    icon: Target,
    title: "Test Strategy & Planning",
    description: "Comprehensive test strategy development aligned with your business objectives.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Testing",
    description: "Continuous testing integration with your DevOps pipeline for automated quality gates.",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive software development and quality assurance services tailored to your business needs
          </p>
        </div>
        
        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="software">Custom Software Development</TabsTrigger>
            <TabsTrigger value="qa">QA Testing Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="software">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customSoftwareServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-slate-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="qa">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qaTestingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-slate-200">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
