"use client";

import { motion } from "framer-motion";
import PulseHeart from "./PulseHeart";
import FloatingHearts from "./FloatingHearts";

const LETTER = [
  "Some people just make a room feel warmer the second they walk into it. You've been doing that to me since the day we met.",
  "Today, it's simple. I just want you to feel exactly how loved you are.",
  "You care for everyone around you without even trying to. Gently, endlessly, like it's just who you are, not something you do. So sweet it almost doesn't seem fair to the rest of us. So genuine, so innocent in the best way, that it still amazes me — how someone this soft-hearted is real, and mine.",
  "You make people feel safe. You make me feel lucky.",
  "So today, let go of everyone else's day for a second. No fixing, no worrying, no taking care of anyone but yourself. Close your eyes, make a wish, and just let yourself be celebrated.",
  "Happy birthday, Doctor. Here's to another year of your kindness ruining every other definition of \"gentle\" for me.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function Page() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <motion.p
          className="mono-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          HEARTBEAT — YOURS&nbsp;&nbsp;·&nbsp;&nbsp;LOVE — INFINITE
        </motion.p>

        <PulseHeart />

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.7 }}
        >
          Happy Birthday
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.55, duration: 0.8 }}
        >
          Doctor.
        </motion.h1>

        <motion.div
          className="scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.4, duration: 1 }}
        >
          <span />
          <p>read on</p>
        </motion.div>
      </section>

      {/* ---------- LETTER ---------- */}
      <section className="letter">
        <div className="vital-rule" aria-hidden="true" />
        <div className="letter-inner">
          {LETTER.map((para, i) => (
            <motion.p
              key={i}
              className={i === LETTER.length - 1 ? "closing-line" : undefined}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ---------- CLOSING ---------- */}
      <section className="closing">
        <FloatingHearts />
        <motion.p
          className="signoff"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
        >
          — completely yours, today and always
        </motion.p>
      </section>
    </main>
  );
}
