import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  HeartPulse, 
  ShieldCheck, 
  Truck, 
  Percent, 
  Pill, 
  Baby, 
  Activity, 
  Stethoscope,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

import shopExterior1 from "@assets/Screenshot_2026-06-18_140537_1781771774963.png";
import shopInterior from "@assets/Screenshot_2026-06-18_140522_1781771774964.png";
import shopExterior2 from "@assets/Screenshot_2026-06-18_140456_1781771774964.png";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20medicines";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 tracking-tight leading-none">Susheela Medicals</h1>
              <p className="text-xs text-primary font-medium">Chemist & Druggist</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#categories" className="hover:text-primary transition-colors">Categories</a>
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2 rounded-full shadow-lg shadow-green-500/20">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Order Now</span>
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
        
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
              </span>
              Home delivery in 10–30 minutes
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Your neighborhood's <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">trusted pharmacy</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              We stock everything you need for your family's health. 
              Get genuine medicines with <strong className="text-gray-900">5–10% off</strong> on all orders, delivered straight to your door.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-lg h-14 px-8 shadow-xl shadow-green-500/25 gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Order on WhatsApp
                </Button>
              </a>
              <a href="#services" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg font-medium">
                  Learn More
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why choose Susheela Medicals?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Serving the Bangalore community with dedication, speed, and care.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your medicines delivered to your home within 10 to 30 minutes of ordering.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <Percent className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Everyday Discount</h3>
              <p className="text-gray-600">Enjoy a flat 5% to 10% discount on all your medicine purchases, every single day.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Genuine</h3>
              <p className="text-gray-600">We source directly from trusted manufacturers to guarantee the authenticity of every pill.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <HeartPulse className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600">Over 15+ years of trusted service. Our expert pharmacists are always ready to help.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What we stock</h2>
              <p className="text-gray-600 max-w-xl text-lg">A comprehensive range of medical and wellness products to keep your family healthy.</p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-full gap-2 font-semibold">
                Send prescription <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="group bg-gray-50 rounded-3xl p-6 text-center hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary group-hover:scale-110 transition-transform">
                <Pill className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900">Prescription Medicines</h4>
            </div>
            
            <div className="group bg-gray-50 rounded-3xl p-6 text-center hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900">OTC Medicines</h4>
            </div>

            <div className="group bg-gray-50 rounded-3xl p-6 text-center hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary group-hover:scale-110 transition-transform">
                <Baby className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900">Baby Nutrition</h4>
            </div>

            <div className="group bg-gray-50 rounded-3xl p-6 text-center hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary group-hover:scale-110 transition-transform">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900">Health Supplements</h4>
            </div>

            <div className="group bg-gray-50 rounded-3xl p-6 text-center hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/10">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-primary group-hover:scale-110 transition-transform">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900">Surgical Items</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About / Photos Section */}
      <section id="about" className="py-24 bg-gray-900 text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-gray-900 to-gray-900 opacity-50"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Your local pharmacy, since day one.</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Susheela Medicals has been a pillar of health in Bangalore for over 15 years. With two fully-stocked locations, we ensure that you never have to run around looking for the right medication. 
              </p>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                We know our customers by name. We care about your health journey. From simple band-aids to critical prescriptions, we keep our shelves ready so you can rest easy.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-10">
                <div>
                  <div className="text-4xl font-extrabold text-primary mb-2">15+</div>
                  <div className="text-gray-400 font-medium">Years in Service</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-primary mb-2">2</div>
                  <div className="text-gray-400 font-medium">Locations in Bangalore</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={shopExterior2} 
                alt="Susheela Medicals Storefront" 
                className="col-span-2 w-full h-[240px] md:h-[300px] object-cover rounded-3xl"
              />
              <img 
                src={shopInterior} 
                alt="Inside Susheela Medicals showing shelves of medicines" 
                className="w-full h-[200px] object-cover rounded-3xl"
              />
              <img 
                src={shopExterior1} 
                alt="Susheela Medicals Exterior Corner View" 
                className="w-full h-[200px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 text-white">
          <HeartPulse className="w-16 h-16 mx-auto mb-8 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need medicines right now?</h2>
          <p className="text-primary-foreground/90 text-xl mb-10 max-w-2xl mx-auto">
            Just send us your prescription or a list of medicines on WhatsApp. We'll pack it, apply your discount, and deliver it in 30 minutes.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full text-xl h-16 px-10 shadow-2xl font-bold gap-3">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
              Order on WhatsApp
            </Button>
          </a>
          <p className="mt-6 text-sm text-primary-foreground/80 font-medium">+91 98765 43210</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-20 pb-10 px-4 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Susheela Medicals</h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-xs">
                Your trusted neighborhood pharmacy in Bangalore. Genuine medicines, great discounts, and lightning-fast delivery.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Our Locations
              </h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex flex-col">
                  <span className="font-semibold text-gray-800">Main Branch</span>
                  <span>Bangalore, Karnataka</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-gray-800">Second Branch</span>
                  <span>Bangalore, Karnataka</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Contact & Hours
              </h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="font-semibold text-gray-800">+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>9:00 AM – 10:00 PM</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-4 text-gray-400 text-xs flex justify-center">All</span>
                  <span>Open All Days</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Susheela Medicals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-gray-900 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Order Medicines
        </span>
      </a>
    </div>
  );
}
