import { useEffect, useState } from "react";
import { MegaNavigation } from "./components/MegaNavigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ComprehensiveServices } from "./components/ComprehensiveServices";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";
import { Customers } from "./components/Customers";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BlogDetail } from "./components/BlogDetail";
import { PortfolioDetail } from "./components/PortfolioDetail";
import { Careers } from "./components/Careers";
import { About } from "./components/About";
import { Industries } from "./components/Industries";
import { ComprehensiveIndustries } from "./components/ComprehensiveIndustries";
import { FAQ } from "./components/FAQ";
import { TechnologiesPage } from "./components/TechnologiesPage";
import { HireDevelopers } from "./components/HireDevelopers";
import { KnowledgeCenter } from "./components/KnowledgeCenter";
import type { PortfolioProject } from "./data/portfolioData";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    document.title = "Code Better World - Custom Software Development & QA Testing Services";
  }, []);

  const handleBlogClick = (post: BlogPost) => {
    setSelectedBlogPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePortfolioClick = (project: PortfolioProject) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromBlog = () => {
    setSelectedBlogPost(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromPortfolio = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <MegaNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pt-16">
        {/* Home Section */}
        {activeTab === "home" && !selectedBlogPost && !selectedProject && (
          <>
            <Hero />
            <Services />
            <ComprehensiveIndustries />
            <Portfolio onProjectClick={handlePortfolioClick} />
            <Customers />
            <Testimonials />
            <FAQ />
          </>
        )}

        {/* Team Section */}
        {activeTab === "team" && <Team />}
        {activeTab === "our-team" && <Team />}
        {activeTab === "careers" && <Careers />}
        {activeTab === "contact" && <Contact />}
        {activeTab === "tech-blog" && <Blog onBlogClick={handleBlogClick} />}
        {activeTab === "ebooks" && <KnowledgeCenter />}
        {activeTab === "journey" && <About />}

        {/* Industries Section */}
        {(activeTab === "industries" || 
          ["aviation", "banking", "insurtech", "healthcare", "finance", "pharmaceutical", 
           "ecommerce", "edtech", "legaltech", "realestate", "retail", "supplychain", 
           "travel", "automotive", "entertainment", "energy", "telecom", "lifesciences"].includes(activeTab)) && (
          <ComprehensiveIndustries />
        )}

        {/* Technologies Section */}
        {(activeTab === "technologies" || 
          ["backend", "frontend", "mobile", "devops", "ai-automation", "blockchain", 
           "platforms", "generative-ai"].includes(activeTab)) && (
          <TechnologiesPage selectedTech={
            ["backend", "frontend", "mobile", "devops", "ai-automation", "blockchain", 
             "platforms", "generative-ai"].includes(activeTab) ? activeTab : undefined
          } />
        )}

        {/* Services Section */}
        {(activeTab === "services" || 
          ["software-engineering", "ai-innovation", "quality-engineering", "testing-services", 
           "business-digitalization", "strategy-advisory", "cybersecurity", "operations-support", 
           "design-services", "iot-services"].includes(activeTab)) && (
          <ComprehensiveServices selectedService={
            ["software-engineering", "ai-innovation", "quality-engineering", "testing-services", 
             "business-digitalization", "strategy-advisory", "cybersecurity", "operations-support", 
             "design-services", "iot-services"].includes(activeTab) ? activeTab : undefined
          } />
        )}

        {/* Hire Developers Section */}
        {(activeTab === "hire-developers" || 
          ["hire-backend", "hire-frontend", "hire-mobile", "hire-ai", "hire-devops", 
           "hire-fullstack", "hire-blockchain"].includes(activeTab)) && (
          <HireDevelopers />
        )}

        {/* Portfolio Section */}
        {activeTab === "portfolio" && !selectedProject && (
          <Portfolio onProjectClick={handlePortfolioClick} />
        )}
        {selectedProject && (
          <PortfolioDetail project={selectedProject} onBack={handleBackFromPortfolio} />
        )}

        {/* Knowledge Center Section */}
        {(activeTab === "knowledge-center" || 
          ["case-studies", "blog", "webinars", "whitepapers", "guides"].includes(activeTab)) && (
          <KnowledgeCenter />
        )}

        {/* About Section */}
        {(activeTab === "about" || 
          ["leadership", "tech-talent", "culture", "faq"].includes(activeTab)) && (
          <>
            <About />
            {activeTab === "faq" && <FAQ />}
          </>
        )}

        {/* Blog Detail */}
        {selectedBlogPost && (
          <BlogDetail post={selectedBlogPost} onBack={handleBackFromBlog} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}