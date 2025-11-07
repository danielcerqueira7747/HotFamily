"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <nav ref={ref} className="navbar-container">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="navbar-content"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/logo.png"
            alt="Logo da Hamburgueria"
            width={160}
            height={160}
            className="navbar-logo"
            priority
          />
        </motion.div>
      </motion.div>
    </nav>
  );
}
