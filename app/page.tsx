"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteContent } from "@/lib/siteContent";
import {
  MessageSquare,
  Globe,
  CreditCard,
  Languages,
  Mail,
  Zap,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const iconMap = {
  MessageSquare,
  Globe,
  CreditCard,
  Languages,
  Mail,
  Zap,
};

export default function Home() {
  const { hero, features, howItWorks, integrations, pricing, demo, contact, footer } =
    siteContent;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            <span className="font-bold text-xl font-mono">MonstarX WhatsAppBot</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button>Start Free Trial</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
        <div className="container relative px-4 py-20 md:py-32 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="mb-2">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Powered by WhatsApp
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  {hero.headline}
                  <span className="block text-primary mt-2 font-mono">
                    {hero.subheadline}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  {hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  {hero.primaryCTA} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  {hero.secondaryCTA}
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                {hero.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-3xl font-bold font-mono">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl" />
              <div className="relative rounded-lg overflow-hidden border shadow-2xl">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 border-b">
        <div className="container px-4 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {features.headline}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {features.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.items.map((feature, idx) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <Card key={idx} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-muted/50 border-b">
        <div className="container px-4 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {howItWorks.headline}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {howItWorks.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="space-y-6">
                  <div className="relative rounded-lg overflow-hidden border shadow-lg">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="text-5xl font-bold font-mono text-primary/20">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {idx < howItWorks.steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/3 -right-8 h-8 w-8 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 md:py-32 border-b">
        <div className="container px-4 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {integrations.headline}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {integrations.subheadline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {integrations.logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-muted/50 border-b">
        <div className="container px-4 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {pricing.headline}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {pricing.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.tiers.map((tier, idx) => (
              <Card
                key={idx}
                className={`relative ${
                  tier.highlighted
                    ? "border-primary border-2 shadow-xl scale-105"
                    : "border-2"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold font-mono">{tier.price}</span>
                    {tier.period && (
                      <span className="text-muted-foreground">{tier.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {tier.notIncluded.map((feature, featureIdx) => (
                      <li
                        key={`not-${featureIdx}`}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="h-5 w-5 shrink-0 mt-0.5">×</span>
                        <span className="text-sm line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section id="demo" className="py-20 md:py-32 border-b">
        <div className="container px-4 md:px-8">
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-primary/5">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  {demo.headline}
                </h2>
                <p className="text-lg text-muted-foreground">{demo.subheadline}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg">
                    {demo.primaryCTA} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg">
                    {demo.secondaryCTA}
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl" />
                <div className="relative rounded-lg overflow-hidden border shadow-xl">
                  <Image
                    src={demo.image.src}
                    alt={demo.image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-muted/50">
        <div className="container px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {contact.headline}
              </h2>
              <p className="text-xl text-muted-foreground">
                {contact.subheadline}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <a
                        href={`tel:${contact.phone}`}
                        className="hover:text-primary transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Locations</h3>
                  <div className="flex flex-wrap gap-2">
                    {contact.locations.map((location, idx) => (
                      <Badge key={idx} variant="secondary">
                        {location}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form and we'll get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-4"
                    action={`mailto:${contact.email}`}
                    method="post"
                    encType="text/plain"
                  >
                    <div className="space-y-2">
                      <Input
                        type="text"
                        name="name"
                        placeholder={contact.form.namePlaceholder}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        name="email"
                        placeholder={contact.form.emailPlaceholder}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="tel"
                        name="phone"
                        placeholder={contact.form.phonePlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        name="message"
                        placeholder={contact.form.messagePlaceholder}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {contact.form.submitButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 py-12 md:px-8 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-6 w-6" />
                <span className="font-bold text-lg font-mono">MonstarX</span>
              </div>
              <p className="text-sm text-muted-foreground">{footer.tagline}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{footer.company.title}</h4>
              <ul className="space-y-2">
                {footer.company.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{footer.product.title}</h4>
              <ul className="space-y-2">
                {footer.product.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{footer.legal.title}</h4>
              <ul className="space-y-2">
                {footer.legal.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">{footer.copyright}</p>
            <p className="text-sm text-muted-foreground">{footer.locations}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
