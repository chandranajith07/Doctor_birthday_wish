"use client";

import { motion } from "framer-motion";

export default function PulseHeart() {
  return (
    <svg
      viewBox="0 0 400 170"
      width="100%"
      height="auto"
      style={{ maxWidth: 420, display: "block", margin: "0 auto" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pulseGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6f9992" stopOpacity="0" />
          <stop offset="15%" stopColor="#d8a657" />
          <stop offset="50%" stopColor="#e59aa0" />
          <stop offset="85%" stopColor="#d8a657" />
          <stop offset="100%" stopColor="#6f9992" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ECG pulse line */}
      <motion.path
        d="M0,100 L120,100 L142,100 L156,50 L172,145 L188,30 L204,100 L226,100 L400,100"
        fill="none"
        stroke="url(#pulseGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 1 }}
        animate={{ pathLength: 1, opacity: [1, 1, 0] }}
        transition={{
          pathLength: { duration: 1.6, ease: "easeInOut" },
          opacity: { duration: 2.4, times: [0, 0.75, 1], delay: 0.2 },
        }}
      />

      {/* Heart, drawn then held, gentle heartbeat pulse */}
      <motion.path
        d="M200,142
           C 150,105 90,78 90,40
           C 90,12 118,-2 145,10
           C 168,20 185,42 200,60
           C 215,42 232,20 255,10
           C 282,-2 310,12 310,40
           C 310,78 250,105 200,142 Z"
        fill="none"
        stroke="#e59aa0"
        strokeWidth="2.5"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 1.9, duration: 1.1, ease: "easeInOut" }}
      />
      <motion.path
        d="M200,142
           C 150,105 90,78 90,40
           C 90,12 118,-2 145,10
           C 168,20 185,42 200,60
           C 215,42 232,20 255,10
           C 282,-2 310,12 310,40
           C 310,78 250,105 200,142 Z"
        fill="#e59aa0"
        stroke="none"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 0.9, scale: [1, 1.06, 1] }}
        style={{ transformOrigin: "200px 76px" }}
        transition={{
          opacity: { delay: 3, duration: 0.6 },
          scale: {
            delay: 3.2,
            duration: 1.15,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </svg>
  );
}
