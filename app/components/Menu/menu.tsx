"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Menu() {
  const items = [
    {
      name: "Combo Gamma",
      description:
        "2 Hot Dogs, 2 Coca-Cola lata, 1 porção de Batata Via Láctea Escolha entre os hots: - Estrela - Constelação - Polaris - Galáxia.",
      price: "R$ 89,90",
      image: "/combo_gamma.jpeg",
    },
    {
      name: "Hot Estrela",
      description:
        "Pão hot de brioche, salsicha com molho, maionese, purê de batata caseiro, ketchup, ervilha, milho, bacon, mostarda, batata palha e vinagrete",
      price: "R$ 28,90",
      image: "/hot_estrela.jpeg",
    },
    {
      name: "Netuno",
      description:
        "Pão de brioche, hambúrguer artesanal de 150g, mussarela, Catupiry Original empanado, maionese, alface, tomate, cebola roxa e bacon. Acompanha molho da casa",
      price: "R$ 49,90",
      image: "/netuno.jpeg",
    },
    {
      name: "Planeta Terra",
      description:
        "Pão de brioche, maionese, ketchup, 2 hambúrgueres artesanais de 150g, mussarela, bacon, ovo, tomate, cebola roxa e alface. Acompanha molho da casa",
      price: "R$ 48,90",
      image: "/terra.jpeg",
    },
    {
      name: "Via Lactea",
      description:
        "Batata frita especial 300g, c/ bacon e catupiry original",
      price: "R$ 26,90",
      image: "/via_lactea.jpeg",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-zinc-950 to-black text-zinc-100 py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 text-center relative"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight font-[var(--font-bebas)] text-orange-500 drop-shadow-[0_2px_10px_rgba(255,115,0,0.4)]">
          Nosso Cardápio
        </h2>

        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-900/70 hover:bg-zinc-800 text-white p-3 rounded-full shadow-lg border border-zinc-700 z-30"
        >
          <ArrowLeft size={28} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-900/70 hover:bg-zinc-800 text-white p-3 rounded-full shadow-lg border border-zinc-700 z-30"
        >
          <ArrowRight size={28} />
        </button>


        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden pb-6 py-8 px-6 scrollbar-hide snap-x snap-mandatory scroll-smooth scroll-px-6"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="flex-none w-80 snap-start relative overflow-hidden rounded-3xl bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(255,115,0,0.2)] transition-all z-10"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-3 right-3 bg-orange-500 text-white font-bold px-5 py-2 rounded-full text-xl shadow-lg">
                  {item.price}
                </div>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-3xl font-[var(--font-bebas)] text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-zinc-400 text-base mb-4 font-[var(--font-inter)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


        <motion.a
          href="https://www.ifood.com.br/delivery/praia-grande-sp/hot-family-burguer--hot-dog-vila-tupi/365b7883-9862-49c6-8f01-2c55eb18c23a?UTM_Medium=share"
          target="_blank"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-500/30 transition-all font-[var(--font-inter)] relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Confira o cardápio
          <motion.div
            className="flex items-center"
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            <ArrowRight size={20} className="ml-1" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
