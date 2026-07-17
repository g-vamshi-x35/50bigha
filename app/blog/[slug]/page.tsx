import { notFound } from "next/navigation";
import Image from "next/image";
import WordReveal from "@/components/WordReveal";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center gap-3 font-body text-xs uppercase tracking-[0.15em] text-ivory/45">
          <span className="rounded-full bg-gold/10 px-3 py-1 text-gold">{post.category}</span>
          <span>{post.readTime}</span>
        </div>

        <WordReveal
          as="h1"
          text={post.title}
          className="mt-5 font-display text-4xl leading-[1.05] text-ivory sm:text-5xl"
        />
        <div className="mt-4 font-body text-sm text-ivory/55">
          By {post.author} ·{" "}
          {new Date(post.date).toLocaleDateString("en-IN", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[2rem]">
          <Image src={post.cover} alt={post.title} fill priority sizes="90vw" className="object-cover" />
        </div>

        <div className="mt-10 space-y-5">
          {post.body.map((paragraph, i) => (
            <p key={i} className="font-body text-base leading-relaxed text-ivory/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="mx-auto mt-24 max-w-6xl px-6">
          <h2 className="font-display text-3xl text-ivory">More from the blog</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
