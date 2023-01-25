import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Image from 'next/image'

function Blog({ posts }) {
  console.log(posts)
  return (
    <>
      <Header />
      <Hero />
      <ul className="flex flex-wrap mt-10 justify-center space-x-8">
        {posts.map((post) => (
          <li key={post.slug} className="w-1/3 text-orange-500">
            <Link href="/[slug]" as={`/${post.slug}`}>
              <div className="bg-yellow-100 rounded-lg shadow-lg p-4 hover:scale-95 duration-300 transition ">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="mb-2 text-gray-700">{post.date}</p>
                <Image
                  src={"/../public/images/" + `${post.slug.toLowerCase()}` + ".png"}
                  alt={post.title}
                  className="w-full h-48 rounded-lg object-scale-down"
                  width={400}
                  height={100}
                />
                <p>{post.description.slice(0,200)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>{" "}
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      ...data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
