"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialIcons } from "@/components/social-icons";
import { portfolio } from "@/data/portfolio";

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const { person, social } = portfolio;
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // No backend required: compose a pre-filled email the visitor can send.
    // Swap this for a real API route or service (Resend, Formspree, etc.).
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 800);
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: person.email, href: `mailto:${person.email}` },
    { icon: MapPin, label: "Location", value: person.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project, role or idea in mind? I'd love to hear about it."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <Reveal className="flex flex-col gap-6">
            <p className="text-lg text-muted-foreground">
              Whether it&apos;s a website, a video, a design or an AI workflow —
              reach out and let&apos;s make it happen.
            </p>

            <div className="flex flex-col gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                Find me online
              </p>
              <SocialIcons links={social} />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="gradient-border space-y-5 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                  rows={6}
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={status !== "idle"}
              >
                {status === "idle" && (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
                {status === "sending" && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Opening your email…
                  </>
                )}
              </Button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-accent"
                >
                  Thanks! Your email client should open with the message ready to
                  send.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
