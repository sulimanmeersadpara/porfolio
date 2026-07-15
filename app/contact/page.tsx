"use client";

import { motion } from "framer-motion";
import { ContactDetails, GlassCard, PortfolioShell, SectionTitle } from "../components/portfolio-shell";

export default function ContactPage() {
  return (
    <PortfolioShell title="Contact" eyebrow="Let’s connect">
      <div className="grid gap-8 lg:grid-cols-[1fr]">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <SectionTitle eyebrow="Get in touch" title="Let’s connect" description="Open for opportunities and collaborations." />
          <GlassCard>
            <ContactDetails />
          </GlassCard>
        </motion.div>
      </div>
    </PortfolioShell>
  );
}
