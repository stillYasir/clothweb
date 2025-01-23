"use client";

import { Building2, Users, ShieldCheck, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Building2,
    title: 'Established Excellence',
    description: 'Founded in 2024, we\'ve quickly become a leader in premium online shopping experiences.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Our dedication to customer satisfaction drives every decision we make.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Shopping',
    description: 'Shop with confidence knowing your data is protected by state-of-the-art security.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Enjoy quick and reliable shipping to your doorstep, anywhere in the world.',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Modern office"
            className="w-full h-[400px] object-cover brightness-50"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center py-24">
          <h1 className="text-4xl font-bold text-white mb-6">
            Redefining Online Shopping
          </h1>
          <p className="text-xl text-gray-200">
            We're on a mission to provide the best online shopping experience with
            carefully curated products and exceptional customer service.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              ModernShop began with a simple idea: to create an online shopping
              destination that combines premium products with an exceptional user
              experience. Our journey started in 2024, and since then, we've been
              dedicated to curating the finest selection of products while
              maintaining the highest standards of customer service.
            </p>
            <p className="text-muted-foreground">
              Today, we serve customers worldwide, offering a carefully selected
              range of products across multiple categories. Our team works
              tirelessly to ensure that every purchase meets our quality standards
              and every customer interaction exceeds expectations.
            </p>
            <p className="text-muted-foreground">
              We believe in sustainable business practices and giving back to our
              community. That's why we partner with local organizations and
              maintain eco-friendly operations wherever possible.
            </p>
          </div>
        </div>
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}