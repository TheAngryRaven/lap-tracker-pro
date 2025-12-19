import { ReactNode } from "react";

interface ArticleProps {
  children: ReactNode;
  className?: string;
}

export function Article({ children, className = "" }: ArticleProps) {
  return <article className={`flex flex-col ${className}`}>{children}</article>;
}

interface ArticleContainerProps {
  children: ReactNode;
  className?: string;
}

export function ArticleContainer({ children, className = "" }: ArticleContainerProps) {
  return (
    <div className={`article-grid relative ${className}`}>
      {children}
    </div>
  );
}

interface TopSharesProps {
  facebookUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  className?: string;
}

export function TopShares({ facebookUrl, twitterUrl, linkedinUrl, className = "" }: TopSharesProps) {
  return (
    <div className={`${className}`}>
      <div className="flex gap-4 justify-center">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-[3rem] h-[3rem] rounded-full bg-[#4367b0] hover:opacity-80 transition-opacity"
          aria-label="Share on Facebook"
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M23.625 23.625H26.25L27.5625 18.375H23.625V15.75C23.625 14.3625 23.625 13.125 26.25 13.125H27.5625V8.8125C27.0281 8.74687 25.2469 8.625 23.3719 8.625C19.4625 8.625 16.875 10.8844 16.875 14.7V18.375H13.5V23.625H16.875V33.375H23.625V23.625Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-[3rem] h-[3rem] rounded-full bg-[#14171a] hover:opacity-80 transition-opacity"
          aria-label="Share on Twitter"
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M33.375 13.4719C32.625 13.7812 31.7625 14.0906 30.975 14.1656C31.8375 13.6312 32.475 12.8437 32.775 11.8312C32.0625 12.3656 31.125 12.6 30.1875 12.8437C29.4375 12.0562 28.3875 11.5969 27.1875 11.5969C24.8625 11.5969 22.95 13.5469 22.95 15.9094C22.95 16.2187 22.95 16.5281 23.025 16.8375C19.575 16.6687 16.5 15.0281 14.475 12.4406C14.1 13.0125 13.95 13.6312 13.95 14.3437C13.95 15.6187 14.5875 16.7437 15.6 17.3906C14.9625 17.3906 14.4 17.2219 13.875 16.9125V16.9781C13.875 19.0406 15.3375 20.7562 17.25 21.1406C16.875 21.2156 16.5375 21.2906 16.125 21.2906C15.8625 21.2906 15.6 21.2906 15.3375 21.2156C15.8625 22.9312 17.4375 24.1687 19.2375 24.1687C17.7375 25.3312 15.9 26.0437 13.875 26.0437C13.5 26.0437 13.2 26.0437 12.825 26.0062C14.6625 27.2437 16.875 27.9562 19.275 27.9562C27.1875 27.9562 31.5 21.3656 31.5 16.3687C31.5 16.2187 31.5 16.0312 31.5 15.8812C32.2875 15.2719 32.9625 14.4469 33.375 13.4719Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-[3rem] h-[3rem] rounded-full bg-[#3375b0] hover:opacity-80 transition-opacity"
          aria-label="Share on LinkedIn"
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M11.8125 15.75H16.875V30.1875H11.8125V15.75ZM14.34375 8.625C15.8906 8.625 17.0625 9.79688 17.0625 11.34375C17.0625 12.8906 15.8906 14.0625 14.34375 14.0625C12.7969 14.0625 11.625 12.8906 11.625 11.34375C11.625 9.79688 12.7969 8.625 14.34375 8.625ZM19.0781 15.75H23.9531V17.9531H24.0188C24.6656 16.7438 26.2125 15.5719 28.5375 15.5719C33.6 15.5719 34.5 18.6 34.5 22.6125V30.1875H29.4375V23.625C29.4375 21.7125 29.4375 19.3875 26.85 19.3875C24.2625 19.3875 23.8781 21.3375 23.8781 23.4375V30.1875H18.8156V15.75H19.0781Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

interface ArticleContentProps {
  children: ReactNode;
  className?: string;
}

export function ArticleContent({ children, className = "" }: ArticleContentProps) {
  return (
    <div
      className={`
      article-body
      [&_p]:font-normal
      [&_h2]:mt-[1.666em] [&_h2]:mb-[0.666em] [&_h2]:text-[1.125rem] [&_h2]:md:text-[1.3125rem] [&_h2]:lg:text-[1.6875rem] [&_h2]:font-display [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:leading-[1.6] [&_h2]:lg:leading-[1.4]
      [&_h2:first-child]:mt-0
      [&_h3]:mt-[1.875em] [&_h3]:mb-[0.75em] [&_h3]:font-display [&_h3]:font-bold
      [&_h3:first-child]:mt-0
      [&_h2+p]:mt-0 [&_h3+p]:mt-0
      [&_h4]:mb-[1.25rem]
      [&_p]:mt-[1.6em]
      [&_p]:mb-[1.25rem]
      [&_ul]:pl-[1.4375rem] [&_ul]:mb-[1.25rem] [&_ul]:list-disc
      [&_ol]:pl-[1.4375rem] [&_ol]:mb-[1.25rem] [&_ol]:list-decimal
      [&_ul_li]:mb-[1em]
      [&_ol_li]:mb-[1em]
      [&_blockquote]:my-[1.25rem] [&_blockquote]:text-[1.125rem] [&_blockquote]:md:text-[1.5rem] [&_blockquote]:lg:text-[1.625rem] [&_blockquote]:2xl:text-[2.25rem] [&_blockquote]:tracking-[-0.01em] [&_blockquote]:leading-[1.45]
      [&_figcaption]:max-w-[31.25rem] [&_figcaption]:mt-[0.5em] [&_figcaption]:mx-auto [&_figcaption]:mb-[1em] [&_figcaption]:text-[#545465] [&_figcaption]:text-[0.9375rem] [&_figcaption]:italic [&_figcaption]:text-center
      [&_.blockquote-big]:text-center [&_.blockquote-big]:mt-[0.78125rem] [&_.blockquote-big]:mb-[0.5859375rem] [&_.blockquote-big]:md:mt-[1.171875rem] [&_.blockquote-big]:md:mb-[1.171875rem] [&_.blockquote-big]:lg:mt-[2.34375rem] [&_.blockquote-big]:lg:mb-[2.34375rem]
      [&_.blockquote-big_blockquote]:font-sans [&_.blockquote-big_blockquote]:text-[calc(5vw+0.375rem)] [&_.blockquote-big_blockquote]:lg:text-[3.375rem] [&_.blockquote-big_blockquote]:font-extrabold [&_.blockquote-big_blockquote]:leading-[1.2]
      [&_.blockquote-big_figcaption]:text-[calc(2.5vw+0.5rem)] [&_.blockquote-big_figcaption]:lg:text-[1.875rem] [&_.blockquote-big_figcaption]:font-semibold [&_.blockquote-big_figcaption]:leading-[1.6] [&_.blockquote-big_figcaption]:md:leading-[1.4]
      [&_.blockquote-big_figcaption]:before:content-['―_']
      [&_.blockquote-indented]:my-[2.5rem] [&_.blockquote-indented]:md:my-[3.75rem] [&_.blockquote-indented]:ml-[10%]
      [&_.blockquote-indented_blockquote]:text-[calc(2.5vw+0.5rem)] [&_.blockquote-indented_blockquote]:lg:text-[1.875rem] [&_.blockquote-indented_blockquote]:leading-[1.6] [&_.blockquote-indented_blockquote]:md:leading-[1.4]
      [&_.blockquote-indented_figcaption]:text-[calc(2vw+0.5rem)] [&_.blockquote-indented_figcaption]:lg:text-[1.5rem] [&_.blockquote-indented_figcaption]:leading-[1.6] [&_.blockquote-indented_figcaption]:md:leading-[1.4]
      [&_.blockquote-indented_figcaption]:before:content-['―_']
      ${className}
    `}
    >
      {children}
    </div>
  );
}
