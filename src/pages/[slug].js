import { useRouter } from "next/router";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import Header from "../components/Header";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const data = matter(fileContent);

  return {
    props: {
      post: { ...data, content: data.content, orig: data.orig.toString() },
    },
  };
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

const BlogPost = ({ post }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-8 bg-gray-100 rounded-lg shadow-lg mb-8 mt-4">
        <p className="text-gray-200"><a href="/" className="text-gray-200">Home</a> / {slug} </p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {post.data.title}
        </h1>
        <p className="text-gray-700 mb-4">{post.data.date}</p>
        <p className="text-gray-700 mb-4">{post.data.author}</p>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={"/images/" + slug + ".png"}
            alt={post.title}
            className="w-full rounded-lg object-cover"
            width={800}
            height={500}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-search text-violet-400 text-5xl"></i>
          </div>
        </div>
        <div className="prose prose-lg">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
