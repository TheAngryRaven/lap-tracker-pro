import { Link } from "react-router-dom";

interface BlogHeroProps {
  title: string;
  description: string;
}

const BlogHero = ({ title, description }: BlogHeroProps) => {
  return (
    <div className="article-full-width text-center flex flex-col items-center">
      {/* Title - Full Width */}
      <h1 className="font-display font-semibold fluid-title mb-12">
        {title.split(" ").map((word, index) => (
          <span key={index} className="block">
            {word}
          </span>
        ))}
      </h1>

      <p className="text-muted-foreground text-[1.125rem] md:text-[1.5rem] leading-relaxed max-w-[60ch]">
        {description}
      </p>
    </div>
  );
};

export default BlogHero;
