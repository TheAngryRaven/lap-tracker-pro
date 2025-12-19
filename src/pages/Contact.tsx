import CenteredContent from "@/components/CenteredContent";
import Header from "@/components/Header";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        <CenteredContent className="py-16 md:py-24">
          <article className="prose prose-lg max-w-none">
            {/* Title */}
            <h1 className="font-display text-[4rem] md:text-[6rem] font-semibold leading-[1.1] mb-12">
              Get in Touch
            </h1>

            {/* Intro */}
            <div className="mb-16">
              <p className="text-[1.8rem] md:text-[2rem] text-muted-foreground leading-relaxed">
                Have a project in mind? Let's create something beautiful together.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mb-24">
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[1.4rem] font-medium text-foreground mb-3"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-[1.6rem] border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[1.4rem] font-medium text-foreground mb-3"
                  >
                    Your Real Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-[1.6rem] border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[1.4rem] font-medium text-foreground mb-3"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 text-[1.6rem] border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[1.4rem] font-medium text-foreground mb-3"
                  >
                    Your Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={12}
                    className="w-full px-6 py-4 text-[1.6rem] border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-8">
                  <button
                    type="submit"
                    className="px-12 py-4 text-[1.6rem] font-medium bg-foreground text-background hover:bg-primary hover:text-background transition-all duration-300 rounded-lg"
                  >
                    Send Now
                  </button>
                </div>
              </div>
            </form>

            {/* FAQ Section */}
            <div className="text-[1.6rem] leading-relaxed">
              <h2 className="font-display text-[2.4rem] md:text-[3rem] font-semibold mb-8">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-display text-[2rem] md:text-[2.4rem] font-semibold text-left">
                    For Project Inquiries
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.6rem] leading-relaxed">
                    <p className="text-muted-foreground mb-4">
                      I'm always excited to discuss new projects, collaborations, and creative opportunities.
                      Whether you're a brand looking for editorial photography, a magazine planning a shoot,
                      or a creative director with a vision, I'd love to hear from you.
                    </p>
                    <p className="text-foreground">
                      <a
                        href="mailto:hello@voyager.com"
                        className="underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
                      >
                        hello@voyager.com
                      </a>
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-display text-[2rem] md:text-[2.4rem] font-semibold text-left">
                    Booking Information
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.6rem] leading-relaxed">
                    <p className="text-muted-foreground mb-4">
                      When reaching out, please include:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
                      <li>Project details and creative vision</li>
                      <li>Desired timeline and shoot dates</li>
                      <li>Budget range</li>
                      <li>Location (studio or on-location)</li>
                      <li>Any reference images or mood boards</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      I'm typically booked 2-3 months in advance, but I always try to accommodate
                      compelling projects with tighter timelines.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-display text-[2rem] md:text-[2.4rem] font-semibold text-left">
                    Press & Features
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.6rem] leading-relaxed">
                    <p className="text-muted-foreground mb-4">
                      For press inquiries, interview requests, or speaking engagements, please contact:
                    </p>
                    <p className="text-foreground">
                      <a
                        href="mailto:press@voyager.com"
                        className="underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
                      >
                        press@voyager.com
                      </a>
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-display text-[2rem] md:text-[2.4rem] font-semibold text-left">
                    Social
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.6rem] leading-relaxed">
                    <p className="text-muted-foreground mb-4">
                      Follow along for behind-the-scenes moments, recent work, and creative inspiration:
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
                      >
                        Twitter
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="font-display text-[2rem] md:text-[2.4rem] font-semibold text-left">
                    Studio Location
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.6rem] leading-relaxed">
                    <p className="text-muted-foreground">
                      Based in Vesterbro, Copenhagen, Denmark
                      <br />
                      Available for projects worldwide
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </article>
        </CenteredContent>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="article-grid py-12">
          <div className="article-hero text-center text-sm text-muted-foreground">
            <p>© 2024 Voyager Press. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
