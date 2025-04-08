import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, LineChart, Users, Zap } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sales AI - Intelligent Sales Management System",
  description: "Transform your sales process with AI-powered insights and automation",
};

const features = [
  {
    title: "AI-Powered Analytics",
    description: "Get real-time insights and predictions to optimize your sales strategy",
    icon: BarChart3,
    image: "/features/analytics.svg",
  },
  {
    title: "Smart Lead Management",
    description: "Automatically qualify and prioritize leads using advanced AI algorithms",
    icon: Users,
    image: "/features/leads.svg",
  },
  {
    title: "Sales Performance Tracking",
    description: "Monitor team performance and identify opportunities for improvement",
    icon: LineChart,
    image: "/features/performance.svg",
  },
  {
    title: "Automated Workflows",
    description: "Streamline your sales process with intelligent automation",
    icon: Zap,
    image: "/features/automation.svg",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-dark/10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Transform Your Sales Process with AI
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Our intelligent sales management system helps you close more deals, 
              optimize your pipeline, and grow your business with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="px-8 py-6 text-base">
                <Link href="/register">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-6 text-base">
                <Link href="/dashboard">
                  View Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Powerful Features for Modern Sales Teams
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your sales process, from lead generation 
              to closing deals, all powered by artificial intelligence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="relative group rounded-lg border bg-background p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className="relative h-40 w-full overflow-hidden rounded-md">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of sales teams who have already improved their performance 
            with our AI-powered platform.
          </p>
          <Button size="lg" variant="secondary" asChild className="px-8 py-6 text-base">
            <Link href="/register">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
