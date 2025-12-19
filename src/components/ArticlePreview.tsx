import { Link } from "react-router-dom";

interface ArticlePreviewProps {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  publishDate: string;
  description?: string;
  category?: string;
  className?: string;
}

export default function ArticlePreview({
  title,
  slug,
  image,
  imageAlt,
  publishDate,
  description,
  category,
  className = "",
}: ArticlePreviewProps) {
  return (
    <article className={`relative flex flex-col ${className}`}>
      <figure className="relative order-[-1] mb-[1.25rem] pb-[100%] overflow-hidden bg-muted group/image">
        <Link to={`/article/${slug}`} title={imageAlt}>
          <img
            alt={imageAlt}
            src={image}
            className="absolute w-full h-full object-cover transition-transform duration-500 ease-out group-hover/image:scale-105"
          />
        </Link>
      </figure>

      <div className="flex items-center gap-3 order-[-1] mb-[0.5rem]">
        {category && (
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[0.6875rem] font-sans font-medium uppercase tracking-wide">
            {category}
          </span>
        )}
        <time className="uppercase text-muted-foreground text-[0.75rem] font-sans">
          {publishDate}
        </time>
      </div>

      <h3 className="mt-[0.1875rem] text-[1.375rem] md:text-[1.6875rem] leading-[1.4] font-display font-semibold tracking-[-0.02em]">
        <Link
          to={`/article/${slug}`}
          className="inline-block transition-colors duration-300 text-foreground hover:text-primary"
        >
          {title}
        </Link>
      </h3>

      {description && (
        <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-muted-foreground italic">
          {description}
        </p>
      )}
    </article>
  );
}
