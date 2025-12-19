import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NewsletterSheetProps {
  children: React.ReactNode;
}

const NewsletterSheet = ({ children }: NewsletterSheetProps) => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Newsletter signup:", email);
    // Reset and close
    setEmail("");
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="w-[100vw] md:w-[50vw] overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Content */}
          <div className="flex-grow flex flex-col justify-center px-4 pb-12 pt-12">
            <div className="w-full max-w-[880px] mx-auto">
              {/* Title */}
              <h2 className="font-display text-[3.6rem] md:text-[4.8rem] font-semibold leading-[1.1] mb-8">
                Newsletter
              </h2>

              {/* Description */}
              <p className="text-[1.6rem] md:text-[1.8rem] text-muted-foreground leading-relaxed mb-12">
                Sign up to receive stories, photography insights, and updates on new work delivered directly to your inbox.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="newsletter-email"
                  className="block text-[1.4rem] font-medium text-foreground mb-3"
                >
                  Email
                </label>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-4 text-[1.6rem] border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="px-12 py-4 text-[1.6rem] font-medium bg-foreground text-background hover:bg-primary hover:text-background transition-all duration-300 rounded-lg md:w-auto whitespace-nowrap"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* Footer note */}
              <p className="text-[1.3rem] text-muted-foreground leading-relaxed mt-8">
                You may unsubscribe at any time. By submitting information, you accept our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NewsletterSheet;
