import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import {
  Article as ArticleWrapper,
  ArticleContainer,
  ArticleContent,
  TopShares,
} from "@/components/ArticleComponents";
import ArticlePreview from "@/components/ArticlePreview";
import Section from "@/components/Section";
import {
  GridWrapper,
  GridContent,
} from "@/components/GridContainer";
import { getArticleBySlug } from "@/data/articles";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();

  // Get article data based on slug
  const articleData = slug ? getArticleBySlug(slug) : undefined;

  // If article not found, redirect to 404
  if (!articleData) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <ArticleWrapper>
        {/* Title-Dominant Hero Section */}
        <section className="article-grid relative py-20">
          {/* Main Content Container */}
          <div className="article-hero relative text-center flex flex-col items-center">
            {/* Back Button - Top Left */}
            <div className="w-full mb-4">
              <Link
                to="/blog"
                className="inline-flex items-center text-[0.875rem] font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                Back
              </Link>
            </div>

            {/* Massive Title */}
            <h1 className="font-display font-semibold text-[4rem] md:text-[6rem] leading-[1.1] mb-8">
              {articleData.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-[3.125rem] h-[3.125rem] rounded-full overflow-hidden">
                <img
                  src={articleData.author.avatar}
                  alt={articleData.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-sans text-left">
                <p className="text-[1rem] leading-none font-semibold text-foreground mb-0.5">
                  {articleData.author.name}
                </p>
                <p className="text-[0.875rem] leading-nonetext-muted-foreground">
                  {articleData.author.title}
                </p>
              </div>
            </div>

            {/* Hero Image - Full Width */}
            <div className="w-full aspect-square overflow-hidden">
              <img
                src={articleData.heroImage}
                alt={articleData.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <ArticleContainer>
          <ArticleContent>
            <time className="block text-muted-foreground text-[0.875rem] font-sans tracking-wide mb-8">
              {articleData.publishDate}
            </time>
            {articleData.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return <p key={index}>{block.content}</p>;

                case "heading":
                  return block.level === 2 ? (
                    <h2 key={index}>{block.content}</h2>
                  ) : (
                    <h3 key={index}>{block.content}</h3>
                  );

                case "image":
                  return (
                    <figure key={index} className="my-12">
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={block.src}
                          alt={block.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );

                case "blockquote-big":
                  return (
                    <figure key={index} className="blockquote-big">
                      <blockquote>{block.content}</blockquote>
                      {block.author && <figcaption>{block.author}</figcaption>}
                    </figure>
                  );

                default:
                  return null;
              }
            })}
          </ArticleContent>

          {/* Social Share Section */}
          <div className="article-hero mt-16 mb-8">
            <h3 className="font-display font-semibold text-[1.25rem] text-center mb-6 text-muted-foreground">
              Share This Article
            </h3>
            <div className="flex justify-center">
              <TopShares
                facebookUrl={`https://www.facebook.com/sharer/sharer.php?u=https://example.com/article/${articleData.slug}`}
                twitterUrl={`https://twitter.com/intent/tweet?url=https://example.com/article/${articleData.slug}`}
                linkedinUrl={`https://www.linkedin.com/shareArticle?url=https://example.com/article/${articleData.slug}`}
              />
            </div>
          </div>
        </ArticleContainer>
      </ArticleWrapper>

      {/* Related Article */}
      <Section>
        <GridWrapper>
          <GridContent>
            <div className="article-full-width">
              <h2 className="text-[2.25rem] md:text-[3rem] font-display font-bold mb-12 text-center">
                Related Article
              </h2>

              <div className="max-w-[600px] mx-auto">
                {articleData.relatedArticles.slice(0, 1).map((article) => (
                  <ArticlePreview
                    key={article.slug}
                    title={article.title}
                    slug={article.slug}
                    image={article.image}
                    imageAlt={article.title}
                    publishDate="Recent"
                  />
                ))}
              </div>
            </div>
          </GridContent>
        </GridWrapper>
      </Section>

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

export default Article;
