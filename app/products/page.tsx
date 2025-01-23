"use client";

import { useState } from 'react';
import { Product, ProductFilters, PriceRange } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useCart } from '@/components/cart-provider';
import { Star, Plus, ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Enhanced product data
const products: Product[] = [
 
  {
    id: '2',
    name: 'Slim Fit Chinos',
    description: 'Stylish and comfortable slim fit chinos made with stretchable fabric.',
    price: 49.99,
    category: 'fashion',
    image: 'https://steals.com/cdn/shop/files/4003_NAVY_5.jpg?v=1711393128',
    rating: 4.5,
  },
  {
    id: '3',
    name: 'V-Neck T-Shirt',
    description: 'Lightweight v-neck t-shirt designed for a modern and sleek look.',
    price: 24.99,
    category: 'fashion',
    image: 'https://i.pinimg.com/736x/2f/f8/04/2ff80448d3195e77d97023a92e254ffd.jpg',
    rating: 4.3,
  },
  {
    id: '4',
    name: 'Casual Denim Jeans',
    description: 'Classic straight-fit jeans crafted with premium denim fabric.',
    price: 59.99,
    category: 'fashion',
    image: 'https://i.pinimg.com/736x/1d/75/ce/1d75cef460cb9a443c34f6fb5d102914.jpg',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Graphic Print T-Shirt',
    description: 'Trendy graphic print t-shirt made with eco-friendly materials.',
    price: 29.99,
    category: 'fashion',
    image: 'https://i.pinimg.com/736x/81/ab/e6/81abe6de75705fc3fddd44eaac814c68.jpg',
    rating: 4.4,
  },
  {
    id: '6',
    name: 'Relaxed Fit Cargo Pants',
    description: 'Durable and practical cargo pants with multiple utility pockets.',
    price: 69.99,
    category: 'fashion',
    image: 'https://i.pinimg.com/736x/fc/b2/e3/fcb2e3e9a4b3d970cd5f3341cf8f6243.jpg',
    rating: 4.5,
  },
  {
    id: '7',
    name: 'Oversized Hoodie',
    description: 'Cozy oversized hoodie with a kangaroo pocket and adjustable hood.',
    price: 39.99,
    category: 'fashion',
    image: 'https://i.pinimg.com/736x/3e/a9/6a/3ea96abd1d90717cadb5af7d426c5849.jpg',
    rating: 4.7,
  },
  {
    id: '8',
    name: 'Stretchable Skinny Jeans',
    description: 'Modern skinny jeans designed with comfort stretch technology.',
    price: 64.99,
    category: 'fashion',
    image: 'https://i.pinimg.com/736x/b4/08/7a/b4087a802204f1a46a5288648f3bd5ba.jpg',
    rating: 4.4,
  },
  {
    id: '9',
    name: 'Plain Cotton Polo Shirt',
    description: 'Classic polo shirt made with 100% organic cotton fabric.',
    price: 34.99,
    category: 'fashion',
    image: 'https://i.pinimg.com/736x/9b/56/8c/9b568c6af9bbfaf075e2269237696c59.jpg',
    rating: 4.3,
  },
  {
    id: '10',
    name: 'Jogger Pants',
    description: 'Lightweight jogger pants with an elastic waistband and ankle cuffs.',
    price: 44.99,
    category: 'fashion',
    image: 'https://i.pinimg.com/736x/40/7c/c5/407cc570d1f6af59c6057a6175491257.jpg',
    rating: 4.5,
  },
  {
    id: '11',
    name: 'Striped Long Sleeve T-Shirt',
    description: 'Stylish long sleeve t-shirt with a timeless striped pattern.',
    price: 39.99,
    category: 'fashion',
    image: 'https://i.pinimg.com/736x/29/a8/5d/29a85d48adc9a6006cc57eb00200fcbf.jpg',
    rating: 4.2,
  },
  {
    id: '12',
    name: 'Tailored Fit Suit Pants',
    description: 'Elegant tailored fit pants ideal for formal occasions.',
    price: 89.99,
    category: 'fashion',
    image: 'https://i.pinimg.com/736x/3f/76/64/3f7664445f68f3f63bcff08eac56c827.jpg',
    rating: 4.6,
  }
];

const categories = ['All', 'Shirts', 'Fashion', 'Home'];
const priceRanges: PriceRange[] = [
  { min: 0, max: 50, label: '$0 - $50' },
  { min: 50, max: 100, label: '$50 - $100' },
  { min: 100, max: 200, label: '$100 - $200' },
  { min: 200, max: 500, label: '$200+' },
];

export default function ProductsPage() {
  const [filters, setFilters] = useState<ProductFilters>({});
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const { dispatch } = useCart();
  const { toast } = useToast();

  const filteredProducts = products.filter((product) => {
    if (filters.category && filters.category !== 'All' && 
        product.category.toLowerCase() !== filters.category.toLowerCase()) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    if (filters.rating && product.rating < filters.rating) {
      return false;
    }
    return true;
  });

  const addToCart = (product: Product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      },
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our curated collection of premium products. From cutting-edge electronics
          to fashionable accessories, find everything you need.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filters.category === category ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setFilters({ ...filters, category })}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Price Range</h3>
            <Slider
              defaultValue={[0, 500]}
              max={500}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="my-4"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <Button
                  key={rating}
                  variant={filters.rating === rating ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setFilters({ ...filters, rating })}
                >
                  <div className="flex items-center">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-2">& Up</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-[200px] group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => addToCart(product)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0"
                      size="lg"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <span className="text-lg font-bold">${product.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  

                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground capitalize">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}