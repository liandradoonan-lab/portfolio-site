"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

const paragraphs = [
  "I’ve spent the last 5 years recruiting for Series B tech startups, with the last 4 at Planned, helping build out one of the strongest teams in Montreal. I built out the recruitment function from scratch, from finding the right tools and implementing proper interview and hiring practices, primarily operating as the sole member of the overall talent and culture org. As is the nature of a lean startup, I’ve taken on a lot of roles, across payroll, employee relations, and office management. My favourite part has been connecting with and hiring incredible talent, finding them across the globe to help build out our product and revolutionize how corporate meetings and events are managed.",
  "My career started in sales at Bus.com, a classic entry to the tech world after university. This is where I fell in love with tech and startups. It’s also where I realized sales, at least in the direct sense, wasn’t for me (despite being a top performer). What I loved was taking on cultural initiatives while that role remained vacant, planning events for the team and improving their wellbeing. I started to build a career in people ops, with a heavy lean on recruitment, and continued to shine in lean teams, building functions from the ground up and through scaling.",
  "Before any of that there were nearly twenty years of competitive Irish dance, training 6–7 days per week and travelling the world to compete at the highest level. I’ve held part-time jobs since I was fifteen in order to afford the sport, all the while being a top student and joining every club and student org I could fit into my schedule. I learned early on how to juggle a LOT — that’s probably why I feel so at home in scrappy startups. Although I still dance, it’s now for the exercise and love of the sport — I’ve long since retired from competitions… although according to my Instagram algorithm, HYROX might be my next calling. I’m absolutely obsessed with dogs, especially my Husky and Australian Shepherd, who I’m training to live peacefully with (read: not eat) my partner’s two cats, who complete our little blended family.",
];

export default function About() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      // once: reveal on the way down, then leave it alone.
      viewport={{ once: true, amount: 0.15 }}
      className="mt-28 max-w-xl sm:mt-36"
    >
      <motion.h2 variants={fadeUp} className="text-3xl text-beige sm:text-4xl">
        About
      </motion.h2>

      <div className="mt-8 space-y-6">
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            className="text-[17px] leading-relaxed text-ash"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}
