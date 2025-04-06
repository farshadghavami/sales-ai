import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm py-4 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Sales AI</h1>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/login" className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200">
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                  Intelligent Lead Generation System
                </h1>
                <p className="text-xl text-white/90">
                  Transform your business with AI-powered outbound calls that intelligently 
                  diagnose and qualify leads for your business.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link href="/register" className="px-6 py-3 rounded-md bg-white text-blue-600 hover:bg-gray-100 text-center font-medium">
                    Get Started
                  </Link>
                  <Link href="/demo" className="px-6 py-3 rounded-md border border-white text-white hover:bg-white/10 text-center font-medium">
                    Book a Demo
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20">
                <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center">
                  <span className="px-4 py-2 rounded-md bg-white text-blue-600 font-medium">
                    Demo Video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Powerful AI-Driven Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform provides everything you need to generate and qualify leads efficiently
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Calls",
                  description: "Engage leads with intelligent, natural-sounding voice conversations"
                },
                {
                  title: "Smart Qualification",
                  description: "Automatically qualify leads based on conversation context"
                },
                {
                  title: "Personalized Follow-ups",
                  description: "Send customized questionnaires via WhatsApp or Email"
                }
              ].map((feature, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mb-4 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your lead generation?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses using Sales AI to intelligently engage and qualify leads.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register" className="px-6 py-3 rounded-md bg-white text-blue-600 hover:bg-gray-100 text-center font-medium">
                Start Free Trial
              </Link>
              <Link href="/contact" className="px-6 py-3 rounded-md border border-white text-white hover:bg-white/10 text-center font-medium">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sales AI</h3>
              <p className="text-gray-600">
                Intelligent lead generation powered by AI
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
                <li><Link href="/careers" className="hover:text-gray-900">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/features" className="hover:text-gray-900">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/integrations" className="hover:text-gray-900">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/support" className="hover:text-gray-900">Support</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
                <li><a href="mailto:info@salesai.example.com" className="hover:text-gray-900">info@salesai.example.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Sales AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-gray-900">Twitter</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}