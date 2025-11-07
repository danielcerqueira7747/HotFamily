"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col items-center justify-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Onde Estamos
      </motion.h2>

      <motion.div
        className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg border border-neutral-800"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0864939273843!2d-46.4644686!3d-24.0244894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa723afb9029d8a7d%3A0x3b2718ea1e047bb7!2sHot%20Family%20-%20Hotdog%20Gourmet%20e%20Hamb%C3%BArguer%20Artesanal!5e0!3m2!1spt-BR!2sbr!4v1730912472000!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      <motion.p
        className="mt-6 text-center text-neutral-400 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Venha nos visitar na{" "}
        <span className="text-white font-semibold">
          R. Dr. Napoleão Laureano, 150 - Vila Tupi, Praia Grande - SP
        </span>{" "}
        e descubra o sabor de outro mundo!
      </motion.p>
    </section>
  );
}
