"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import "./hero.css";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-white overflow-hidden bg-gradient-to-b from-zinc-950 to-black text-center">

      <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-3xl mb-20"
        >

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-[var(--font-bebas)] leading-tight">
          O MELHOR <span className="text-orange-500">SABOR</span> DA CIDADE
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 mb-8 font-[var(--font-inter)]">
          Hambúrgueres artesanais e hot dogs gourmet feitos com ingredientes
          selecionados e aquele toque especial que só a casa tem.
        </p>

        <motion.a
          href="https://instadelivery.com.br/hotfamily"
          target="_blank"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-orange-500/30 transition-all font-[var(--font-inter)] relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Peça Agora
          <motion.div
            className="flex items-center"
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            <ArrowRight size={20} className="ml-1" />
          </motion.div>
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ y: 80 }}
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="relative w-full max-w-5xl mt-20 z-20 flex justify-center overflow-visible"
      >
        <div className="relative w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
          <Image
            src="/IMG_0374_compress-removebg-preview.png"
            alt="Hambúrguer artesanal"
            width={1200}
            height={1200}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_35px_55px_rgba(255,115,0,0.6)] scale-110 md:scale-125 lg:scale-135"
          />

          <div className="absolute inset-0 bg-orange-500/40 blur-[50px] rounded-full -z-10"></div>

        </div>
        
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-zinc-950 pointer-events-none"></div>
    </section>
  );
}
