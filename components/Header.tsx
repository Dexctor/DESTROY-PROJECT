"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Composant Header avec navigation style underground optimisé mobile
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#gallery", label: "GALERIE" },
    { href: "#about", label: "MANIFESTE" },
    { href: "/shop", label: "SHOP" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 safe-top",
          isScrolled 
            ? "bg-white border-b-2 border-black" 
            : "bg-white/90 backdrop-blur-sm md:bg-transparent"
        )}
      >
        <nav className="container-destroy section-padding py-4 sm:py-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              className="text-xl sm:text-2xl font-light tracking-wide hover:opacity-70 transition-opacity destroy-title-thin relative z-50"
            >
              DESTROY
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wider hover:strike-through transition-all"
                  style={{ fontFamily: "'Barlow Condensed', 'Oswald', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button - Style brutal avec zone de tap élargie */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 -mr-3 relative z-50 tap-target"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={cn(
                  "block w-6 h-0.5 bg-black transition-all duration-300 origin-left",
                  isMenuOpen && "rotate-45 w-7"
                )} />
                <span className={cn(
                  "block w-6 h-0.5 bg-black transition-all duration-300",
                  isMenuOpen && "opacity-0"
                )} />
                <span className={cn(
                  "block w-6 h-0.5 bg-black transition-all duration-300 origin-left",
                  isMenuOpen && "-rotate-45 w-7"
                )} />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay - Plein écran */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-40 md:hidden safe-top safe-bottom"
            >
              <div className="flex flex-col h-full pt-20 px-6 pb-8">
                {/* Navigation Links */}
                <nav className="flex-1">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="block py-4 text-2xl font-medium uppercase tracking-wider hover:strike-through transition-all tap-target"
                        onClick={() => setIsMenuOpen(false)}
                        style={{ fontFamily: "'Teko', 'Oswald', sans-serif" }}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Footer du menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="border-t-2 border-black pt-6"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-destroy-gray-600">
                    © 2024 DESTROY
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-destroy-gray-600 mt-2">
                    NO RIGHTS RESERVED
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 