import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Image from "next/image";
import About from "./about";

function Blog({ posts }) {
  return (
    <>
      <Header />
      <Hero />
      <ul className="flex flex-wrap justify-center space-x-0 md:space-x-8  ">
        {posts.map((post) => (
          <li key={post.slug} className="sm:w-full mt-40 md:w-1/3 md:mt-0 lg:w-1/4 text-white mb-8">
            <Link href="/[slug]" as={`/${post.slug}`}>
              <div className="bg-yellow-100 rounded-lg shadow-lg p-4 hover:scale-95 duration-300 transition ">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="mb-2 text-gray-700">{post.date}</p>
                <Image
                  src={
                    "/images/" + `${post.slug}` + ".png"
                  }
                  alt={post.title}
                  className="w-full h-48 rounded-lg object-scale-down"
                  width={400}
                  height={100}
                />
                <p>{post.description.substring(0, 200)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>{" "}
      <About/>
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
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
