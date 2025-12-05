import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, Users, Globe, Award, TrendingUp, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const companyValues = [
  {
    icon: Users,
    title: "Team Excellence",
    description: "Our team of 50+ engineers across 15 countries brings diverse expertise and perspectives to every project."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "We serve clients worldwide with 24/7 coverage and deep understanding of different markets and cultures."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We maintain the highest standards in code quality, security, and performance through rigorous processes."
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "We stay ahead of technology trends and continuously learn new frameworks and methodologies."
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Long-term partnerships built on transparency, reliability, and delivering exceptional results."
  }
];

const stats = [
  { number: "50+", label: "Engineers" },
  { number: "15+", label: "Countries" },
  { number: "100+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "7+", label: "Years Experience" },
  { number: "24/7", label: "Support" }
];

const guarantees = [
  "100% transparent communication throughout the project lifecycle",
  "Dedicated project manager for seamless coordination",
  "Agile methodology with bi-weekly sprints and demos",
  "Code quality assurance with automated testing and reviews",
  "On-time delivery with flexible engagement models",
  "Post-launch support and maintenance included",
  "IP rights and confidentiality guaranteed",
  "Scalable team size based on project needs"
];

const leadership = [
  {
    name: "John Anderson",
    role: "CEO & Co-Founder",
    bio: "15+ years in software development and business strategy. Former CTO at Fortune 500 company."
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    bio: "Expert in AI/ML and cloud architecture. Led engineering teams at top tech companies."
  },
  {
    name: "Michael Rodriguez",
    role: "VP of Engineering",
    bio: "20+ years building and scaling engineering organizations. Passionate about team development."
  },
  {
    name: "Emily Thompson",
    role: "VP of Quality Assurance",
    bio: "QA expert with deep experience in test automation and quality processes across industries."
  }
];

export function About() {
  return (
    <section className="py-20 bg-white min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4">
        {/* Who We Are */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl mb-6">Who We Are</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              CodeBetterWorld is a global software development company specializing in custom software development and comprehensive QA testing services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl mb-6">Your Digital-Future Partner</h2>
              <p className="text-lg text-slate-700 mb-4">
                We build cutting-edge software solutions that transform businesses. Our team of expert engineers, designers, and QA professionals work together to deliver exceptional digital products.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                Founded on the principle that great software requires both technical excellence and deep business understanding, we've grown into a trusted partner for companies ranging from startups to Fortune 500 enterprises.
              </p>
              <p className="text-lg text-slate-700">
                Our remote-first culture allows us to tap into the best talent worldwide, giving our clients access to exceptional expertise regardless of geography.
              </p>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Remote development team collaboration"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center border-slate-200">
                <div className="text-3xl md:text-4xl mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="p-6 border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{value.title}</h3>
                      <p className="text-slate-600">{value.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Working With Us */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Working With Us</h2>
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-6">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center">1</div>
                    <div>
                      <h4 className="text-lg mb-1">Discovery & Planning</h4>
                      <p className="text-slate-600">We understand your business goals and technical requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center">2</div>
                    <div>
                      <h4 className="text-lg mb-1">Design & Architecture</h4>
                      <p className="text-slate-600">We create detailed technical specifications and user experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center">3</div>
                    <div>
                      <h4 className="text-lg mb-1">Development & Testing</h4>
                      <p className="text-slate-600">Agile sprints with continuous testing and quality assurance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center">4</div>
                    <div>
                      <h4 className="text-lg mb-1">Deployment & Support</h4>
                      <p className="text-slate-600">Smooth launch with ongoing maintenance and optimization</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-6">Why Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Proven track record with 100+ successful projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Expert team with average 7+ years experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Transparent communication and project management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Competitive pricing with flexible engagement models</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">Latest technologies and best practices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-slate-900 flex-shrink-0" />
                    <span className="text-slate-700">24/7 global coverage and support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Guarantee */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Our Guarantee</h2>
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-slate-900 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-700">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-6 border-slate-200 text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-slate-600" />
                </div>
                <h3 className="text-xl mb-1">{leader.name}</h3>
                <p className="text-slate-600 mb-3">{leader.role}</p>
                <p className="text-sm text-slate-600">{leader.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}
