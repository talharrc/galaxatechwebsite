"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MessageCircle, Clock, MapPin, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", company: "", service: "", budget: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.email.trim()) e.email = "Your email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.message.trim()) e.message = "Please describe your project or challenge.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "What is a free audit?",
      a: "A structured review of your digital presence — website, branding, social pages, or full ecosystem. We identify gaps and share findings. No commitment required.",
    },
    {
      q: "How long does a project take?",
      a: "Timelines vary by scope. A website typically takes 2–4 weeks. We'll give you a clear timeline after the discovery call.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes. We work with businesses across Bangladesh, the Middle East, and globally. All communication and delivery is handled remotely.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-brand-offwhite border-b border-gray-100">
          <div className="container-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">
              Get in Touch
            </span>
            <h1 className="mt-3 text-5xl lg:text-6xl font-bold text-brand-dark leading-tight tracking-tight">
              Let&apos;s Talk
            </h1>
            <p className="mt-4 text-lg text-brand-gray max-w-xl leading-relaxed">
              Whether you need an audit, a project, or just clarity — reach out. We respond within
              24 hours.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="section-py bg-white">
          <div className="container-xl grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center
                                  justify-center text-brand-primary text-3xl">
                    ✓
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-brand-dark mb-2">
                      Request Received
                    </h2>
                    <p className="text-brand-gray leading-relaxed">
                      Thanks for reaching out. We&apos;ll review your message and get back to you
                      within 24 business hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Your Name <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ahmed Raza"
                        className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors
                          focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10
                          ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Your Email <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors
                          focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10
                          ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}`}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Company / Business Name{" "}
                      <span className="text-brand-gray font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none
                                 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-colors"
                    />
                  </div>

                  {/* Service + Budget */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        What do you need help with? <span className="text-brand-primary">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className={`w-full px-4 py-3 rounded-lg border text-sm outline-none appearance-none
                            focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-colors
                            ${errors.service ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}
                            ${!form.service ? "text-gray-400" : "text-brand-dark"}`}
                        >
                          <option value="">Select a service</option>
                          <option>Free Digital Audit</option>
                          <option>Website Development</option>
                          <option>App Development</option>
                          <option>Digital Marketing</option>
                          <option>Brand &amp; Design</option>
                          <option>AI Automation</option>
                          <option>Notion System</option>
                          <option>Builders Program</option>
                          <option>Other</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Approximate Budget
                      </label>
                      <div className="relative">
                        <select
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none
                                     appearance-none focus:border-brand-primary focus:ring-2
                                     focus:ring-brand-primary/10 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option>Under $500</option>
                          <option>$500 – $2,000</option>
                          <option>$2,000 – $5,000</option>
                          <option>$5,000+</option>
                          <option>Not sure yet</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Tell us about your project or challenge{" "}
                      <span className="text-brand-primary">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe what you're working on, what's not working, or what you're trying to achieve..."
                      className={`w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none transition-colors
                        focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10
                        ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-primary text-white font-semibold py-4 rounded-lg
                               hover:bg-brand-mid transition-colors duration-200 text-sm"
                  >
                    Send My Request
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="flex flex-col gap-8">
              {/* Contact details */}
              <div className="flex flex-col gap-5">
                {[
                  { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                  { Icon: MessageCircle, label: "WhatsApp", value: SITE.whatsapp, href: `https://wa.me/${SITE.whatsapp}` },
                  { Icon: Clock, label: "Response Time", value: "Within 24 business hours" },
                  { Icon: MapPin, label: "Based In", value: "Dhaka, Bangladesh. Working globally." },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/8 flex items-center
                                    justify-center text-brand-primary flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-gray uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="text-sm text-brand-dark hover:text-brand-primary
                                                   transition-colors break-all">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-brand-dark">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <div className="flex flex-col gap-0 border-t pt-8">
                <h3 className="text-base font-bold text-brand-dark mb-4">Common Questions</h3>
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 last:border-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-4 text-left gap-3"
                    >
                      <span className="text-sm font-semibold text-brand-dark">{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-brand-gray flex-shrink-0 transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <p className="pb-4 text-sm text-brand-gray leading-relaxed">{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
