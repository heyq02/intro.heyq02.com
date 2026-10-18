import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Page } from '../layout';
import { posts } from '../posts';

export function BlogPage() {
  return (
    <Page page="blog">
      <Reveal>
        <section aria-labelledby="blog-heading">
          <SectionHeading id="blog-heading" title="Blog" />
          {posts.length === 0 ? (
            <p className="text-base leading-7 text-muted">
              Posts live on this site. None yet.
            </p>
          ) : (
            <div>
              {posts.map((post) => (
                <article className="py-3 first:pt-0 last:pb-0" key={post.slug}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="min-w-0 text-lg leading-6 font-medium break-words">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted tabular-nums">
                      {post.date}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {post.summary}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </Reveal>
    </Page>
  );
}
