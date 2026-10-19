import { useState } from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    // Client-side confirmation state
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050816]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[350px] ambient-glow-violet pointer-events-none -z-10 blur-3xl opacity-25" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[350px] ambient-glow-blue pointer-events-none -z-10 blur-3xl opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 rounded-full mb-3">
            INITIATE COMMUNICATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-ice-violet">Touch</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl text-base leading-relaxed">
            Whether you have an engineering role, collaboration opportunity, or questions about my projects, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Professional Profiles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="midnight-glass-card rounded-2xl p-6 sm:p-8 border border-[#19224d]">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-sm text-slate-400 mb-6">
                I typically respond within 24 hours. You can copy my direct email or initiate an email client directly.
              </p>

              {/* Email Card with Copy Action */}
              <div className="p-4 rounded-xl bg-[#090e28] border border-[#19224d] mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center flex-shrink-0 text-sky-400">
                    <img src="/img/icons8-gmail.svg" alt="Email" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs text-slate-400 font-mono">Email Address</span>
                    <span className="text-sm font-mono font-bold text-white truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/40 text-sky-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 flex-shrink-0"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? "Copied! ✓" : "Copy"}
                </button>
              </div>

              {/* Direct Mailto & Gmail Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Hello%20from%20Portfolio`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#101844] hover:bg-[#152055] border border-[#19224d] text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <span>Open Mail Client</span>
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#101844] hover:bg-[#152055] border border-[#19224d] text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <span>Open in Gmail</span>
                </a>
              </div>

              {/* Location & Status */}
              <div className="pt-4 border-t border-[#19224d] flex flex-col gap-2 text-xs font-mono text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Location:</span>
                  <span className="text-slate-200">India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Availability:</span>
                  <span className="text-emerald-400">Full-Time / Contract</span>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="midnight-glass-card rounded-2xl p-6 border border-[#19224d]">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-4">
                Professional Profiles
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#090e28] hover:bg-[#101844] border border-[#19224d] hover:border-sky-500/40 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <img src={social.icon} alt="" className="w-5 h-5 object-contain" />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-white group-hover:text-sky-300 truncate">
                        {social.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 truncate">
                        {social.handle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Polished Interactive Form */}
          <div className="lg:col-span-7">
            <div className="midnight-glass-card rounded-2xl p-6 sm:p-10 border border-[#19224d]">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-sm text-slate-400 mb-8">
                Drop your message below and let&apos;s build something exceptional together.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-2xl">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Prepared!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-emerald-300">{formData.name}</span>. You can also send this directly via email to make sure it reaches Rounit immediately:
                  </p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      formData.subject || "Portfolio Inquiry from " + formData.name
                    )}&body=${encodeURIComponent(
                      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
                    )}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25"
                  >
                    <span>Click to Send via Mail App</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      Write another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-slate-300">
                        Your Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ash Ketchum"
                        className="px-4 py-3 rounded-xl bg-[#090e28] border border-[#19224d] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-slate-300">
                        Your Email <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ash@pallettown.com"
                        className="px-4 py-3 rounded-xl bg-[#090e28] border border-[#19224d] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-slate-300">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Engineering Role / Collaboration"
                      className="px-4 py-3 rounded-xl bg-[#090e28] border border-[#19224d] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-slate-300">
                      Message <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Rounit, I came across your portfolio and wanted to discuss..."
                      className="px-4 py-3 rounded-xl bg-[#090e28] border border-[#19224d] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-500 font-mono">
                      Guarded by Dragon Sentinel 🔥
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;