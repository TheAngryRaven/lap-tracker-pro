import CenteredContent from "@/components/CenteredContent";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        <CenteredContent className="py-16 md:py-24">
          <article className="prose prose-lg max-w-none">
            {/* Title */}
            <h1 className="font-display text-[4rem] md:text-[6rem] font-semibold leading-[1.1] mb-12">
              PRIVACY POLICY
            </h1>

            {/* Last Updated */}
            <div className="mb-16">
              <p className="text-[1.4rem] text-muted-foreground">
                Last Updated: October 28, 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-[1.6rem] text-muted-foreground leading-relaxed">
                At Voyager Press, we respect your privacy and are committed to protecting your personal information.
                This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website
                or interact with our services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="font-display text-[2.4rem] md:text-[3rem] font-semibold mb-6">
                Information We Collect
              </h2>
              <div className="text-[1.6rem] leading-relaxed space-y-4">
                <p className="text-muted-foreground">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
                  <li>Name and email address when you subscribe to our newsletter</li>
                  <li>Contact information when you submit inquiries through our contact form</li>
                  <li>Any other information you choose to provide when communicating with us</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="font-display text-[2.4rem] md:text-[3rem] font-semibold mb-6">
                How We Use Your Information
              </h2>
              <div className="text-[1.6rem] leading-relaxed space-y-4">
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
                  <li>Send you newsletters and updates about our programs, exhibits, and news</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="font-display text-[2.4rem] md:text-[3rem] font-semibold mb-6">
                Information Sharing
              </h2>
              <div className="text-[1.6rem] leading-relaxed space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information only in the following circumstances:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="font-display text-[2.4rem] md:text-[3rem] font-semibold mb-6">
                Cookies and Tracking
              </h2>
              <div className="text-[1.6rem] leading-relaxed space-y-4">
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance your browsing experience and
                  analyze website traffic. You can control cookie preferences through your browser settings.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="font-display text-[2.4rem] md:text-[3rem] font-semibold mb-6">
                Your Rights
              </h2>
              <div className="text-[1.6rem] leading-relaxed space-y-4">
                <p className="text-muted-foreground">
                  You have the right to:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-muted-foreground">
                  <li>Access, update, or delete your personal information</li>
                  <li>Unsubscribe from our newsletter at any time</li>
                  <li>Object to the processing of your data</li>
                  <li>Request a copy of your data</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@voyager.com"
                    className="text-foreground underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
                  >
                    privacy@voyager.com
                  </a>
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="font-display text-[2.4rem] md:text-[3rem] font-semibold mb-6">
                Data Security
              </h2>
              <div className="text-[1.6rem] leading-relaxed space-y-4">
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="font-display text-[2.4rem] md:text-[3rem] font-semibold mb-6">
                Children's Privacy
              </h2>
              <div className="text-[1.6rem] leading-relaxed space-y-4">
                <p className="text-muted-foreground">
                  Our website is not intended for children under 13 years of age. We do not knowingly collect
                  personal information from children under 13.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="font-display text-[2.4rem] md:text-[3rem] font-semibold mb-6">
                Changes to This Policy
              </h2>
              <div className="text-[1.6rem] leading-relaxed space-y-4">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by
                  posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="font-display text-[2.4rem] md:text-[3rem] font-semibold mb-6">
                Contact Us
              </h2>
              <div className="text-[1.6rem] leading-relaxed space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-foreground">
                  Email:{" "}
                  <a
                    href="mailto:privacy@voyager.com"
                    className="underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
                  >
                    privacy@voyager.com
                  </a>
                </p>
              </div>
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

export default PrivacyPolicy;
