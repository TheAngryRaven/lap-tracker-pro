import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import NewsletterSheet from "@/components/NewsletterSheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="article-header-grid" style={{ minHeight: "72px" }}>
        <div className="article-wrapper-constrained">
          <div className="flex items-center justify-between h-full py-4">
            <Link
              to="/"
              className="font-sans text-2xl font-bold text-foreground"
            >
              Voyager
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/article/about-james"
                className="text-[1.125rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About the Author
              </Link>
              <Link
                to="/contact"
                className="text-[1.125rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in touch
              </Link>
              <NewsletterSheet>
                <button className="text-[1.125rem] font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Newsletter
                </button>
              </NewsletterSheet>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-[1.8rem] font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    to="/article/about-james"
                    onClick={() => setIsOpen(false)}
                    className="text-[1.8rem] font-medium text-foreground hover:text-primary transition-colors"
                  >
                    About the Author
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-[1.8rem] font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Get in touch
                  </Link>
                  <NewsletterSheet>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-[1.8rem] font-medium text-foreground hover:text-primary transition-colors text-left"
                    >
                      Newsletter
                    </button>
                  </NewsletterSheet>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
