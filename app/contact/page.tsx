"use client";

import { motion } from "framer-motion";
import { ContactDetails, GlassCard, SectionTitle } from "../components/portfolio-shell";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28">
      <div className="mx-auto w-full max-w-4xl">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-[10px]">
          <SectionTitle eyebrow="GET IN TOUCH" title="Let's Connect" description="I am open to new opportunities, interesting projects, and professional collaborations. Feel free to get in touch with me." />
          <GlassCard className="overflow-hidden">
            <ContactDetails />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <ContactSection />
  );
}
