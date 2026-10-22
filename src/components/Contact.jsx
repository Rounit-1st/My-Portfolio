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
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="py-24 bg-[#050816] border-t border-[#18223d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Contact
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
            Interested in working together or discussing an engineering role? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Email & Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="dev-card p-6 sm:p-7">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                Direct Contact
              </h3>
              <p className="text-base text-slate-400 mb-5">
                The quickest way to reach me is by email.
              </p>

              {/* Email Box */}
              <div className="p-3.5 rounded bg-[#070b18] border border-[#18223d] mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img src="/img/icons8-gmail.svg" alt="" className="w-5 h-5 object-contain flex-shrink-0" />
                  <span className="text-base font-mono text-slate-200 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-semibold rounded bg-[#0b1022] hover:bg-[#121936] border border-[#18223d] text-slate-300 hover:text-white transition-colors flex-shrink-0"
                >
                  {copiedEmail ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Direct Mail Actions */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Hello%20Rounit`}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded text-sm font-medium text-slate-300 bg-[#070b18] hover:bg-[#121936] border border-[#18223d] hover:border-slate-600 transition-colors"
                >
                  Mail App
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded text-sm font-medium text-slate-300 bg-[#070b18] hover:bg-[#121936] border border-[#18223d] hover:border-slate-600 transition-colors"
                >
                  Gmail Web
                </a>
              </div>

              <div className="text-sm text-slate-400 pt-4 border-t border-[#18223d]">
                <span>Location: India</span>
              </div>
            </div>

            {/* Online Links */}
            <div className="dev-card p-6 sm:p-7">
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white mb-4">
                Online Links
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded bg-[#070b18] hover:bg-[#121936] border border-[#18223d] text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    <img src={social.icon} alt="" className="w-4 h-4 object-contain" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="dev-card p-6 sm:p-8">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                Send a Message
              </h3>
              <p className="text-base text-slate-400 mb-6">
                You can write a brief note here or contact me directly via email.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded bg-[#070b18] border border-[#18223d] text-center">
                  <h4 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                    Message Prepared
                  </h4>
                  <p className="text-base text-slate-300 max-w-md mx-auto mb-5">
                    Thank you, {formData.name}. You can also open your mail client to send this message directly to {PERSONAL_INFO.email}:
                  </p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      formData.subject || "Message from " + formData.name
                    )}&body=${encodeURIComponent(
                      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
                    )}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-[#050816] transition-colors"
                  >
                    <span>Send via Mail App</span>
                    <span>→</span>
                  </a>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="text-sm text-slate-400 hover:text-white underline"
                    >
                      Reset form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {errorMessage && (
                    <div className="p-3 rounded bg-red-950/40 border border-red-900 text-sm text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm text-slate-300 font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="px-3.5 py-2.5 rounded bg-[#070b18] border border-[#18223d] text-white text-base placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm text-slate-300 font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="px-3.5 py-2.5 rounded bg-[#070b18] border border-[#18223d] text-white text-base placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-sm text-slate-300 font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Role inquiry / Collaboration"
                      className="px-3.5 py-2.5 rounded bg-[#070b18] border border-[#18223d] text-white text-base placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm text-slate-300 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Rounit, I wanted to reach out regarding..."
                      className="px-3.5 py-2.5 rounded bg-[#070b18] border border-[#18223d] text-white text-base placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded text-base font-semibold bg-sky-500 hover:bg-sky-400 text-[#050816] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
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