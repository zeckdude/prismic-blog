import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

interface PostProps {
  slug?: string;
  title: string;
  children: string;
}

export function Post({ slug, title, children }: PostProps) {
  const titleHtml = <h2 className="mb-8 text-3xl font-bold">{title}</h2>;

  return (
    <article
      key={slug}
      className="not-last:mb-8 not-last:border-b not-last:border-gray-200 not-last:pb-8"
    >
      {slug ? (
        <Link href={`/posts/${slug}`} className="text-current">
          {titleHtml}
        </Link>
      ) : (
        titleHtml
      )}

      <div className="[&>h3]:mb-4 [&>h3]:mt-8 [&>h3]:text-xl [&>h3]:font-bold [&>p]:mb-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
      </div>
    </article>
  );
}
