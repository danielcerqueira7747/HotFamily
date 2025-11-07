"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./CallToAction.css";

export default function CallToAction() {
  return (
    <section className="calltoaction relative text-white py-24 px-6 flex flex-col items-center justify-center overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold font-[var(--font-bebas)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
          Tá esperando o quê?
        </h2>
        <p className="mt-4 text-lg md:text-xl font-[var(--font-inter)] text-orange-50">
          Peça agora o seu hambúrguer artesanal e sinta o verdadeiro sabor da
          cidade.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10"
        >
          <Button
            asChild
            className="bg-black hover:bg-zinc-900 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-black/40 font-[var(--font-inter)] transition-all"
          >
            <a href="https://instadelivery.com.br/hotfamily" target="_blank" className="inline-flex items-center gap-3">
              Fazer Pedido Agora
              <ArrowRight size={22} />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
