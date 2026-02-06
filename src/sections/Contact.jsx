import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Copy,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAIL = "neilabraham101@gmail.com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please complete all fields before sending.",
      });
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 6000);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 6000);
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 6000);
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
      setTimeout(() => setSubmitStatus({ type: null, message: "" }), 6000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="pb-16 pt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6 text-secondary-foreground">
            Got an idea?{" "}
            <span className="font-serif italic font-normal text-white">
              let’s bring it to life.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Have something in mind? Drop me a message and let’s build it together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Form */}
          <div className="glass p-5 rounded-xl border border-primary/25">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[11px] font-medium mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 text-[13px] bg-surface rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 text-[13px] bg-surface rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3 py-2 text-[13px] bg-surface rounded-md border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                />
              </div>

              <Button className="w-full h-10 text-sm" disabled={isLoading}>
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-md text-[13px] ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-3.5 h-3.5" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5" />
                  )}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 ">
            <div className="glass rounded-xl p-4 border-primary/25 border">
              <h3 className="text-[15px] font-semibold mb-4">
                Contact Information
              </h3>

              <div className="space-y-3">
                {/* Email (copyable) */}
                <div
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between gap-3 p-3 rounded-md cursor-pointer hover:bg-surface transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-[11px] text-muted-foreground">
                        Email
                      </div>
                      <div className="text-[13px] font-medium">
                        {EMAIL}
                      </div>
                    </div>
                  </div>

                  {copied ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>

                {/* Location (static) */}
                <div className="flex items-center gap-3 p-3 rounded-md">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground">
                      Location
                    </div>
                    <div className="text-[13px] font-medium">
                      Bangalore, Karnataka, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-xl p-5 border border-primary/25">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[13px] font-medium">
                  Currently Available
                </span>
              </div>
              <p className="text-[12px] text-muted-foreground">
                Currently open to new opportunities and exciting projects — feel free to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
