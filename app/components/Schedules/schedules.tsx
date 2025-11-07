"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import "./schedules.css";

export default function Schedules() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const schedules = [
    { day: "Domingo", time: "17:45–23:45" },
    { day: "Segunda-feira", time: "17:45–23:45" },
    { day: "Terça-feira", time: "17:45–23:45" },
    { day: "Quarta-feira", time: "Fechado" },
    { day: "Quinta-feira", time: "17:45–23:45" },
    { day: "Sexta-feira", time: "17:45–23:45" },
    { day: "Sábado", time: "17:45–23:45" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 bg-zinc-950 text-zinc-100 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight font-[var(--font-bebas)]">
          Horário de Funcionamento
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {schedules.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500 transition-colors rounded-2xl shadow-lg w-60">
                <CardContent className="p-6">
                  <h3 className="text-xl text-white font-semibold mb-2 font-[var(--font-bebas)]">
                    {item.day}
                  </h3>
                  <p
                    className={`text-lg font-[var(--font-inter)] ${
                      item.time === "Fechado"
                        ? "text-red-500 font-medium"
                        : "text-zinc-300"
                    }`}
                  >
                    {item.time}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
