import Head from "next/head";
import Link from "next/link";
import { blogPosts } from "../lib/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {blogPosts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-gray-400  rounded-xl p-4 hover:border-gray-700  transition-500 ease-in-out  ">
      <div>
        <Link href={`blog/${slug}`}>
          <a className="text-lg font-bold">{title}</a>
        </Link>
      </div>
      <div>{date.toString()}</div>
      <div>{content}</div>
    </div>
  );
}
