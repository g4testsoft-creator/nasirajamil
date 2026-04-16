"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

export default function WelcomeScreen() {
  const [visible, setVisible] = useState(true);
  const [typedTagline, setTypedTagline] = useState("");

  const welcomeTagline = "Crafting clean, scalable products.";

  useEffect(() => {
    let index = 0;
    const typeTimer = window.setInterval(() => {
      index += 1;
      setTypedTagline(welcomeTagline.slice(0, index));
      if (index >= welcomeTagline.length) {
        window.clearInterval(typeTimer);
      }
    }, 35);

    const hideTimer = window.setTimeout(
      () => setVisible(false),
      welcomeTagline.length * 35 + 800,
    );

    return () => {
      window.clearInterval(typeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="px-4 text-center"
          >
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-5xl">
              {site.name}
            </h1>
            <p className="mt-3 text-sm tracking-wide text-[var(--accent)] md:text-lg">
              {typedTagline}
              <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-[var(--accent)] align-middle" />
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
