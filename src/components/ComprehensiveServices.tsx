import { Card } from "./ui/card";
import { 
  Code, Smartphone, Cloud, Palette, Database, ShieldCheck, 
  Cpu, Zap, TrendingUp, Users, FileCode, Settings,
  Globe, Lock, TestTube, Target, BarChart, Package
} from "lucide-react";

const serviceCategories = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    icon: Code,
    color: "bg-blue-50 text-blue-700 border-blue-200",
    services: [
      "Web development services",
      "Mobile development (iOS, Android, iPad)",
      "Cloud software development",
      "Custom software product development",
      "Enterprise Software Solutions",
      "Software Maintenance and Support",
      "Product Development",
      "Product Re-Engineering"
    ]
  },
  {
    id: "ai-innovation",
    title: "AI & Innovation",
    icon: Cpu,
    color: "bg-purple-50 text-purple-700 border-purple-200",
    services: [
      "AI development services",
      "ML/AI development",
      "Computer vision solutions",
      "AI Agents",
      "AI Workshop",
      "AI PoC & MVP",
      "MLOps",
      "Natural Language Processing"
    ]
  },
  {
    id: "quality-engineering",
    title: "Quality Engineering",
    icon: TestTube,
    color: "bg-orange-50 text-orange-700 border-orange-200",
    services: [
      "Accessibility Testing",
      "DevOps Testing",
      "Compatibility Testing",
      "Functional Testing",
      "Performance Testing",
      "Regression Testing",
      "Security Testing",
      "Test Automation",
      "Crowdsourced Testing",
      "End to End Testing",
      "Web & Mobile Testing"
    ]
  },
  {
    id: "digital-assurance",
    title: "Digital Assurance",
    icon: ShieldCheck,
    color: "bg-red-50 text-red-700 border-red-200",
    services: [
      "AI Testing",
      "Big Data & Analytics Testing",
      "Blockchain Testing",
      "Cloud Migration Assurance",
      "Security Assurance",
      "Internet of Things (IoT) Testing",
      "Mobile App Testing"
    ]
  },
  {
    id: "business-digitalization",
    title: "Business Digitalization",
    icon: TrendingUp,
    color: "bg-green-50 text-green-700 border-green-200",
    services: [
      "CRM Development",
      "ERP Software Development",
      "Business Intelligence Consulting",
      "Legacy Software Modernization",
      "Application Modernization",
      "Digital Transformation"
    ]
  },
  {
    id: "strategy-advisory",
    title: "Strategy & Advisory",
    icon: Target,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    services: [
      "IT Consulting",
      "Digital Transformation",
      "Software Consulting",
      "IT Project Management",
      "Agile Consulting",
      "DevOps Consulting",
      "Microsoft Consulting",
      "ServiceNow Consulting"
    ]
  },
  {
    id: "cybersecurity",
    title: "CyberSecurity",
    icon: Lock,
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    services: [
      "Cyber strategy",
      "Cyber Foundation",
      "Cyber Defense",
      "Offensive Security",
      "Compliance Services",
      "Security Testing",
      "Penetration Testing",
      "SIEM Services"
    ]
  },
  {
    id: "operations-support",
    title: "Operations & Support",
    icon: Settings,
    color: "bg-pink-50 text-pink-700 border-pink-200",
    services: [
      "IT Outsourcing",
      "Managed IT Services",
      "Infrastructure Services",
      "IT Support",
      "IT Help Desk",
      "Application Services",
      "Application Maintenance",
      "Testing and QA"
    ]
  },
  {
    id: "enterprise-application",
    title: "Enterprise Application Assurance",
    icon: Database,
    color: "bg-teal-50 text-teal-700 border-teal-200",
    services: [
      "ERP Testing",
      "Salesforce Testing",
      "Medical Devices Testing",
      "SAP Testing",
      "Oracle Testing"
    ]
  },
  {
    id: "test-management",
    title: "Test Management Services",
    icon: FileCode,
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
    services: [
      "Agile Testing",
      "Test Data Management",
      "Service Virtualization",
      "Test Environment Management"
    ]
  },
  {
    id: "advisory-transformation",
    title: "Advisory & Transformation",
    icon: Zap,
    color: "bg-rose-50 text-rose-700 border-rose-200",
    services: [
      "DevOps Transformation",
      "Test Center of Excellence",
      "Test Advisory & Transformation Services",
      "Agile Transformation"
    ]
  },
  {
    id: "design-services",
    title: "Design Services",
    icon: Palette,
    color: "bg-violet-50 text-violet-700 border-violet-200",
    services: [
      "UI/UX Design Services",
      "Software Prototyping",
      "3D Design Services",
      "Product Design",
      "User Research"
    ]
  },
  {
    id: "iot-services",
    title: "IoT Services",
    icon: Globe,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    services: [
      "Internet of Things",
      "Industrial IoT Development",
      "AIoT App Development",
      "Smart TV App Development",
      "Wearable App Development",
      "Cloud IoT Development"
    ]
  },
  {
    id: "business-process",
    title: "Business Process Management",
    icon: Users,
    color: "bg-amber-50 text-amber-700 border-amber-200",
    services: [
      "Business Analysis & Requirement Engineering",
      "Business Assurance Testing",
      "BA CoE Establishment",
      "BA Recruitment & Staffing"
    ]
  },
  {
    id: "startup-services",
    title: "Startup & MVP Services",
    icon: Zap,
    color: "bg-lime-50 text-lime-700 border-lime-200",
    services: [
      "Product Strategy",
      "Product Design",
      "Product Discovery Phase",
      "MVP Development",
      "CTO as a Service",
      "Lean Development"
    ]
  },
  {
    id: "specialized-qa",
    title: "Unique QA Services",
    icon: TestTube,
    color: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    services: [
      "QA Candidate Interview Assessment",
      "Advisory Support Subscription",
      "Application Architecture Inspection",
      "QA Environment Management",
      "Test Data Management",
      "Data Annotation",
      "Verification and Validation Services",
      "Static Testing & Inspection Artifacts",
      "Data Warehouse and ETL Testing",
      "API Testing Services",
      "Blockchain Testing Services",
      "Load and Performance Testing Services",
      "Salesforce Testing Services",
      "AI Testing Services",
      "Cloud-based Application Testing"
    ]
  }
];

interface ComprehensiveServicesProps {
  selectedService?: string;
}

export function ComprehensiveServices({ selectedService }: ComprehensiveServicesProps) {
  const filteredServices = selectedService
    ? serviceCategories.filter(cat => cat.id === selectedService)
    : serviceCategories;

  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive software development, QA testing, and digital transformation services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`border-2 ${category.color} hover:shadow-lg transition-shadow`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service, index) => (
                      <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 text-sm hover:underline">
                    Learn More →
                  </button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Engagement Models */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Engagement Models</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-slate-200">
              <h3 className="text-2xl mb-4">Fixed Price</h3>
              <p className="text-slate-600 mb-4">
                Ideal for projects with well-defined requirements and timelines. Fixed budget and scope.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Predictable costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Clear deliverables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Defined timeline</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-slate-200">
              <h3 className="text-2xl mb-4">Staff Augmentation</h3>
              <p className="text-slate-600 mb-4">
                Scale your team with our experienced developers. Flexible and adaptable to changing needs.
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Flexible scaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Direct team control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span>
                  <span>Quick onboarding</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and find the perfect solution for your business
          </p>
          <button className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
