"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Clock } from "lucide-react";
import "./footer.css";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="footer-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="footer-content"
      >
        <div className="footer-logo">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/logo.png"
              alt="Logo da Hot Family"
              width={130}
              height={130}
              className="footer-logo-img"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="footer-info"
        >
          <div className="footer-line">
            <MapPin size={18} />
            <p>R. Dr. Napoleão Laureano, 150 - Vila Tupi, Praia Grande - SP, 11703-620</p>
          </div>
          <div className="footer-line">
            <Clock size={18} />
            <p>Seg a Dom: 17:45 às 23:45</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="footer-social"
        >
          <Link href="https://instagram.com/hotfamily_013" target="_blank">
            <Instagram size={22} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="footer-copy"
        >
          © {new Date().getFullYear()} Desenvolvido por{" "}
          <Link href="https://agenciabrazu.com.br/" target="_blank" className="underline hover:text-red-500 transition-colors">
            Agência Brazu
          </Link>.
        </motion.div>
      </motion.div>
    </footer>
  );
}
