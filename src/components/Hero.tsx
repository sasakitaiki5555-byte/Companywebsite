import { Button } from "./ui/button";
import { ArrowRight, Award, Users, Code2, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-900">Award-Winning Custom Software Development</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-slate-900">
                Building Tomorrow's
                <span className="block text-blue-600">Software Solutions</span>
                <span className="block">Today</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-xl">
                Transform your business with custom software development, QA testing, and digital solutions designed to drive growth and innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-50">
                Schedule a Consultation
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-2xl text-slate-900">500+</span>
                </div>
                <p className="text-sm text-slate-600">Projects Completed</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-2xl text-slate-900">200+</span>
                </div>
                <p className="text-sm text-slate-600">Happy Clients</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-purple-600" />
                  <span className="text-2xl text-slate-900">15+</span>
                </div>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyODI2Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional Software Development"
                  className="w-full h-[600px] object-cover rounded-xl"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl text-slate-900">98%</div>
                    <p className="text-sm text-slate-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
