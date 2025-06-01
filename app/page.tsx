"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import Header from "@/components/Header";

// Données mockup pour la galerie - style plus underground
const mockArtworks = [
  {
    id: 1,
    title: "MECHANICAL SOUL",
    category: "TATTOO",
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=400&h=600&fit=crop&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    id: 2,
    title: "INDUSTRIAL THREAD",
    category: "COUTURE",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    id: 3,
    title: "URBAN DECAY",
    category: "INSTALLATION",
    image: "https://images.unsplash.com/photo-1561059488-916d69792237?w=400&h=700&fit=crop&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    id: 4,
    title: "SKIN POETRY",
    category: "TATTOO",
    image: "https://images.unsplash.com/photo-1598371611234-b9e5b9a0e8e5?w=400&h=550&fit=crop&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    id: 5,
    title: "DECONSTRUCTED",
    category: "COUTURE",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=450&fit=crop&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    id: 6,
    title: "RAW EXPRESSION",
    category: "TATTOO",
    image: "https://images.unsplash.com/photo-1567701554261-fcc4efeb4e13?w=400&h=600&fit=crop&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Utilisation du composant Header */}
      <Header />

      {/* Hero Section - Style metal/underground optimisé mobile */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background avec lignes brutales - simplifiées sur mobile */}
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-20 left-0 right-0 h-1 bg-black rotate-random" />
          <div className="absolute bottom-40 left-0 right-0 h-1 bg-black rotate-random-reverse" />
          <div className="absolute top-1/3 left-0 w-1 h-2/3 bg-black" />
          <div className="absolute top-0 right-10 w-1 h-full bg-black" />
        </div>

        <div className="container-destroy section-padding text-center relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Titre principal avec effet glitch */}
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-light mb-6 glitch destroy-title-thin"
              data-text="DESTROY"
              initial={{ letterSpacing: "0.15em" }}
              animate={{ letterSpacing: "0.08em" }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              DESTROY
            </motion.h1>
            
            {/* Sous-titre style DIY */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-light tracking-widest mb-3">
                <span className="strike-through">CRÉATEUR</span> ALTERNATIF
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-base sm:text-lg uppercase tracking-wider font-light">
                <span>TATTOO</span>
                <span className="text-destroy-gray-400">✦</span>
                <span>COUTURE</span>
                <span className="text-destroy-gray-400">✦</span>
                <span>ART</span>
              </div>
            </motion.div>
            
            {/* Boutons style brutal - optimisés mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md mx-auto"
            >
              <Button variant="primary" size="lg" className="w-full sm:w-auto rotate-random-sm">
                VOIR LES ŒUVRES
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto rotate-random-sm-reverse">
                MANIFESTE
              </Button>
            </motion.div>
          </motion.div>

          {/* Citation style punk - visible sur mobile */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-destroy-gray-600">
              &quot;EAT THE RICH&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Manifeste - optimisée mobile */}
      <section className="section-spacing relative" id="about">
        <div className="absolute top-0 left-0 right-0 brutal-line" />
        
        <div className="container-destroy section-padding">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <h2 className="text-5xl sm:text-6xl md:text-6xl font-light mb-2 rotate-random-sm">
                  NO
                </h2>
                <h2 className="text-5xl sm:text-6xl md:text-6xl font-light mb-6 md:mb-8 rotate-random-sm-reverse">
                  FUTURE
                </h2>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <p className="text-base sm:text-lg font-light leading-relaxed">
                  DESTROY n&apos;est pas qu&apos;un nom. C&apos;est une déclaration de guerre 
                  contre la normalité, un cri de rébellion gravé dans la peau et cousu 
                  dans le tissu.
                </p>
                <p className="text-base sm:text-lg font-light leading-relaxed">
                  Chaque œuvre est un acte de résistance. Chaque trait, chaque point, 
                  chaque déchirure raconte l&apos;histoire d&apos;une génération qui refuse 
                  de se conformer.
                </p>
              </div>

              <div className="pt-6 md:pt-8">
                <p className="text-lg sm:text-xl font-medium uppercase tracking-wider">
                  Art Brut. Sans Compromis. Sans Retour.
                </p>
              </div>
            </motion.div>
            
            {/* Placeholder artistique style DIY - caché sur mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[600px] hidden md:block"
            >
              <div className="absolute inset-0 border-2 border-black rotate-random">
                <div className="absolute inset-4 border border-black rotate-random-reverse">
                  <div className="absolute inset-8 bg-black flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="text-6xl font-bold mb-4">✦</p>
                      <p className="text-2xl uppercase tracking-widest">DESTROY</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Annotations style DIY */}
              <div className="absolute -top-4 -left-4 bg-white px-2">
                <p className="text-xs uppercase">Fig.01</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-2">
                <p className="text-xs uppercase">Manifeste visuel</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galerie - Style plus brutal optimisée mobile */}
      <section className="section-spacing bg-white relative" id="gallery">
        <div className="absolute top-0 left-0 right-0 brutal-line" />
        
        <div className="container-destroy section-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 md:mb-8">ŒUVRES</h2>
            
            {/* Filtres style brutal - scroll horizontal sur mobile */}
            <div className="flex gap-4 sm:gap-8 justify-start sm:justify-center overflow-x-auto no-scrollbar pb-2">
              <button className="text-base sm:text-xl uppercase tracking-wider border-b-2 sm:border-b-4 border-black pb-1 sm:pb-2 font-bold whitespace-nowrap flex-shrink-0">
                TOUT
              </button>
              <button className="text-base sm:text-xl uppercase tracking-wider text-destroy-gray-400 hover:text-black transition-colors font-medium whitespace-nowrap flex-shrink-0">
                TATTOO
              </button>
              <button className="text-base sm:text-xl uppercase tracking-wider text-destroy-gray-400 hover:text-black transition-colors font-medium whitespace-nowrap flex-shrink-0">
                COUTURE
              </button>
              <button className="text-base sm:text-xl uppercase tracking-wider text-destroy-gray-400 hover:text-black transition-colors font-medium whitespace-nowrap flex-shrink-0">
                INSTALLATION
              </button>
            </div>
          </motion.div>

          {/* Grille Masonry - Style underground */}
          <div className="masonry-grid">
            {mockArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="masonry-item image-hover group"
              >
                <div className="relative bg-black">
                  {/* Cadre brutal */}
                  <div className="border-2 border-black">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        className="object-cover transition-all duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                  </div>
                  
                  {/* Info brutale - toujours visible sur mobile */}
                  <div className="md:absolute md:bottom-0 md:left-0 md:right-0 bg-white p-3 sm:p-4 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg sm:text-xl font-bold uppercase">{artwork.title}</h3>
                    <p className="text-xs sm:text-sm uppercase tracking-wider text-destroy-gray-600">{artwork.category}</p>
                  </div>
                  
                  {/* Numéro style archive */}
                  <div className="absolute top-2 left-2 bg-white px-1 sm:px-2 py-0.5 sm:py-1">
                    <p className="text-xs font-bold">#{artwork.id.toString().padStart(3, '0')}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Services - Style DIY optimisée mobile */}
      <section className="section-spacing relative">
        <div className="absolute top-0 left-0 right-0 brutal-line" />
        
        <div className="container-destroy section-padding">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-center mb-8 md:mb-16">SERVICES</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* TATTOO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-2 border-black p-6 sm:p-8 hover:bg-black hover:text-white transition-colors group tap-target"
            >
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="text-5xl sm:text-6xl font-bold mb-3 sm:mb-4">✦</div>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase">TATTOO</h3>
                <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-current mx-auto" />
                <p className="text-base sm:text-lg uppercase tracking-wide">
                  Encre noire<br />
                  Traits bruts<br />
                  Sans retour
                </p>
              </div>
            </motion.div>

            {/* COUTURE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-2 border-black p-6 sm:p-8 hover:bg-black hover:text-white transition-colors group tap-target"
            >
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="text-5xl sm:text-6xl font-bold mb-3 sm:mb-4">◈</div>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase">COUTURE</h3>
                <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-current mx-auto" />
                <p className="text-base sm:text-lg uppercase tracking-wide">
                  Tissu déchiré<br />
                  Forme déconstruite<br />
                  Anti-fashion
                </p>
              </div>
            </motion.div>

            {/* INSTALLATION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-2 border-black p-6 sm:p-8 hover:bg-black hover:text-white transition-colors group tap-target sm:col-span-2 md:col-span-1"
            >
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="text-5xl sm:text-6xl font-bold mb-3 sm:mb-4">⬡</div>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase">INSTALLATION</h3>
                <div className="h-0.5 sm:h-1 w-12 sm:w-16 bg-current mx-auto" />
                <p className="text-base sm:text-lg uppercase tracking-wide">
                  Espace occupé<br />
                  Message brut<br />
                  Art éphémère
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Style manifeste optimisé mobile */}
      <section className="section-spacing bg-black text-white relative">
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-white opacity-20" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-white opacity-20" />
        </div>
        
        <div className="container-destroy section-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 sm:mb-8">
              CREATE<br />
              <span className="text-offset">OR DIE</span>
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-12 font-light uppercase tracking-wider">
              Prêt à marquer ton existence ?
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-black hover:bg-transparent hover:text-white border-white w-full sm:w-auto max-w-xs mx-auto"
            >
              COMMENCER UN PROJET
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer - Style underground optimisé mobile */}
      <footer className="py-12 sm:py-16 relative safe-bottom">
        <div className="absolute top-0 left-0 right-0 brutal-line" />
        
        <div className="container-destroy section-padding">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center sm:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">DESTROY</h3>
              <p className="uppercase tracking-wider text-xs sm:text-sm">
                Art alternatif<br />
                Sans compromis<br />
                Depuis toujours
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-5xl sm:text-6xl font-bold mb-3 sm:mb-4">✦</p>
              <p className="uppercase tracking-wider text-xs sm:text-sm">
                Paris, France<br />
                Monde entier
              </p>
            </div>
            
            <div className="text-center sm:text-right">
              <div className="space-y-2">
                <a href="#" className="block uppercase tracking-wider hover:strike-through tap-target">Instagram</a>
                <a href="#" className="block uppercase tracking-wider hover:strike-through tap-target">Contact</a>
                <a href="#" className="block uppercase tracking-wider hover:strike-through tap-target">Shop</a>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-6 sm:pt-8 border-t-2 sm:border-t-4 border-black">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              © 2024 DESTROY - NO RIGHTS RESERVED - COPY EVERYTHING
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
