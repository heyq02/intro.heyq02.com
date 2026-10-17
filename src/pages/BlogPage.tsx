import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { Page } from '../layout';
import { posts } from '../posts';

export function BlogPage() {
  return (
    <Page page="blog">
      <Reveal>
        <section aria-labelledby="blog-heading">
          <SectionHeading id="blog-heading" title="博客" />
          {posts.length === 0 ? (
            <p className="text-base leading-7 text-muted">
              文章写在这个站点里。现在还没有篇目。
            </p>
          ) : (
            <div className="divide-y divide-border">
              {posts.map((post) => (
                <article className="py-5 first:pt-0" key={post.slug}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="min-w-0 text-2xl font-medium break-words">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted tabular-nums">
                      {post.date}
                    </p>
                  </div>
                  <p className="mt-5 text-base leading-7 text-muted">
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
