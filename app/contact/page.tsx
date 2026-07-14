"use client";

import { motion } from "framer-motion";
import { ContactDetails, GlassCard, PortfolioShell, SectionTitle } from "../components/portfolio-shell";

export default function ContactPage() {
  return (
    <PortfolioShell title="Contact" eyebrow="Let’s connect">
      <div className="grid gap-8 lg:grid-cols-[1fr]">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <SectionTitle eyebrow="Get in touch" title="Open for freelance work, contract projects, and full-time opportunities." description="I’m based in Lahore and enjoy building modern products with strong design and engineering fundamentals." />
          <GlassCard>
            <ContactDetails />
          </GlassCard>
        </motion.div>
      </div>
    </PortfolioShell>
  );
}
