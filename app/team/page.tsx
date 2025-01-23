"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TeamMember } from '@/lib/types';

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    bio: 'With over 15 years of experience in retail and e-commerce, Sarah leads our company vision and strategy.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    bio: 'Michael brings extensive technical expertise in building scalable e-commerce platforms.',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    bio: 'Emily leads our design team, ensuring a seamless and beautiful user experience across all platforms.',
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    bio: 'David oversees product development and ensures we deliver the best shopping experience to our customers.',
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Customer Success Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    bio: 'Lisa ensures our customers receive exceptional support and have the best shopping experience.',
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    bio: 'James leads our marketing initiatives and brand strategy to reach new customers globally.',
  }
];

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our diverse team of experts is dedicated to revolutionizing your online shopping experience.
          Get to know the people behind ModernShop.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-3 aspect-h-2">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-[250px]"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary mb-3">{member.role}</p>
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Join Us Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          We're always looking for talented individuals to join our growing team.
          If you're passionate about e-commerce and creating exceptional user experiences,
          we'd love to hear from you.
        </p>
        <Button size="lg" className="text-lg">
          View Open Positions
        </Button>
      </div>
    </div>
  );
}