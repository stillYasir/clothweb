import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ShoppingBag,
  Truck,
  Shield,
  Clock,
  CreditCard,
  Heart,
  Award,
  Gift,
  Headphones,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Modern shopping experience"
          />
          <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to ModernShop
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Discover our curated collection of premium products. From electronics to fashion,
            find everything you need with our seamless shopping experience.
          </p>
          <div className="mt-10">
            <Link href="/products">
              <Button size="lg" className="text-lg">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Free Shipping', description: 'On orders over $50' },
              { icon: Shield, title: 'Secure Payment', description: '100% secure checkout' },
              { icon: Clock, title: '24/7 Support', description: 'Always here to help' },
              { icon: CreditCard, title: 'Easy Returns', description: '30-day return policy' },
            ].map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
    Featured Categories
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        name: 'Shirts',
        image:
          'https://i.pinimg.com/736x/c4/4c/42/c44c42645f92d10ce06b815485d3cab6.jpg',
        href: '/products?category=shirts',
      },
      {
        name: 'Fashion',
        image:
          'https://i.pinimg.com/736x/92/09/ea/9209ea9a163af54ae802e859ef1ac14a.jpg',
        href: '/products?category=fashion',
      },
      {
        name: 'Pants',
        image:
          'https://i.pinimg.com/736x/54/b7/60/54b76021d0162388f61f32b02819f3f4.jpg',
        href: '/products?category=pants',
      },
    ].map((category) => (
      <Link
        key={category.name}
        href={category.href}
        className="group relative rounded-lg overflow-hidden"
      >
        <div className="aspect-w-3 aspect-h-2">
          <img
            src={category.image}
            alt={category.name}
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>


      {/* Why Choose Us section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best shopping experience with premium products
              and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Curated Selection',
                description: 'Hand-picked products that meet our high standards of quality and design.',
              },
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'Every product is verified to ensure it meets premium quality standards.',
              },
              {
                icon: Gift,
                title: 'Special Offers',
                description: 'Regular promotions and exclusive deals for our valued customers.',
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-offset-2 focus:ring-current"
              />
              <Button className="rounded-l-none">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Support */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Our dedicated support team is here to assist you with any questions or concerns.
                We're committed to ensuring your shopping experience is smooth and enjoyable.
              </p>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">24/7 Customer Support</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Customer support"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}