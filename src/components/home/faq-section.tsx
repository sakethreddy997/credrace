"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircleQuestion, Mail } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOME_FAQS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

function fadeUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  };
}

export function FAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 scroll-mt-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ─── Left column: Header + CTA ─── */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <motion.div {...fadeUp()}>
                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                  FAQs
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                  Got questions?
                  <br />
                  <span className="text-gray-400">We have answers.</span>
                </h2>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Everything you need to know about how Cred<span className="text-emerald-500">race</span> works, your
                  data, and the loan process.
                </p>
              </motion.div>

              {/* CTA card */}
              <motion.div
                {...fadeUp(0.15)}
                className="mt-8 rounded-2xl bg-white border border-gray-200/60 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <MessageCircleQuestion className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    Still have questions?
                  </p>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Our team typically responds within 2 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg text-xs h-9 px-4"
                  >
                    <Link href="/eligibility">
                      Check eligibility
                      <ArrowRight className="ml-1.5 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="font-semibold rounded-lg text-xs h-9 px-4 border-gray-200"
                  >
                    <a href="mailto:support@credrace.com">
                      <Mail className="mr-1.5 h-3 w-3" />
                      Email us
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ─── Right column: Accordion ─── */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {HOME_FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-xl border border-gray-200/80 bg-white px-5 sm:px-6 data-[state=open]:shadow-md data-[state=open]:border-gray-300/60 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-[15px] font-semibold text-gray-900 hover:no-underline py-5 [&[data-state=open]]:text-emerald-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
