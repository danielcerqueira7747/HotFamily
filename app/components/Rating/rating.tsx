"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./rating.css";

const reviews = [
  {
    name: "Douglas Metta",
    photo: "/reviews/douglas.jpg",
    rating: 5,
    text: "Ótimos lanches! Atendimento rápido e cordial. Excelente opção para comer no local ou delivery. Recomendo!",
  },
  {
    name: "Gislainne Tunes Ferreira",
    photo: "/reviews/gislainne.jpg",
    rating: 5,
    text: "Melhor hot dog de Praia Grande! Vale muito a experiência. Uma pena que o lugar é pequeno, mas o delivery é ótimo!",
  },
  {
    name: "Camilla Aguiar",
    photo: "/reviews/camilla.jpg",
    rating: 5,
    text: "Lugar ótimo, agradável e com funcionários educados. Lanches excelentes, bem servidos e saborosos!",
  },
  {
    name: "Luciana Tucci Boschetti",
    photo: "/reviews/luciana.jpg",
    rating: 5,
    text: "Ambiente super agradável, atendimento excelente e comida maravilhosa! Hot dog com ingredientes de qualidade!",
  },
  {
    name: "José William Miranda de Jesus",
    photo: "/reviews/jose.jpg",
    rating: 5,
    text: "Atendimento espetacular. Entrega muito rápida e o lanche estava muito saboroso. Excelente hamburgueria.",
  },
  {
    name: "Lívia Anunciação",
    photo: "/reviews/jose.jpg",
    rating: 5,
    text: "Lugar perfeito, super lindo, fiquei apaixonada naquela lua da entrada. Os lanches com produtos de ótima qualidade, recomendo muito o Polaris😋😋😋😋😋",
  }
];

export default function Rating() {
  return (
    <section className="rating-section py-20 bg-zinc-950 text-white text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-10 font-[var(--font-bebas)]"
      >
        O que nossos clientes dizem
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center mx-auto max-w-6xl"
        >

        {reviews.map((rev, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-zinc-900 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <h3 className="text-lg font-semibold mb-1">{rev.name}</h3>

            <div className="flex mb-3">
              {Array.from({ length: rev.rating }).map((_, i) => (
                <span key={i} className="text-orange-500 text-xl">★</span>
              ))}
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed font-[var(--font-inter)]">
              {rev.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <a
          href="https://www.google.com/search?q=hot+family&oq=hot+family&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGIAEMggIAhAAGBYYHjIICAMQABgWGB4yCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEIMTQwNmowajSoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0xa723afb9029d8a7d:0x3b2718ea1e047bb7,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md"
        >
          Ver mais avaliações no Google
        </a>
      </motion.div>
    </section>
  );
}
