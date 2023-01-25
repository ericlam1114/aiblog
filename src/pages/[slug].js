import { useRouter } from "next/router";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

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

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ReactMarkdown>{post.content}</ReactMarkdown>;
};

export default BlogPost;
