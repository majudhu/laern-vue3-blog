import { useState } from "react";
import SAMPLE_POSTS from "./assets/sample_posts.json";
import BlogPost from "./components/BlogPost.react";
import BlogPostCreateForm from "./components/BlogPostCreateForm.react";

export default function App() {
  const [posts, setPosts] = useState(SAMPLE_POSTS);

  const addPost = (title, text, image, url) =>
    setPosts([...posts, { title, text, image, url }]);

  return (
    <>
      <h1>Welcome to Learn Vue 3 Blog</h1>

      {posts.map((p) => (
        <BlogPost
          key={p.title}
          title={p.title}
          text={p.text}
          image={p.image}
          url={p.url}
        />
      ))}

      <BlogPostCreateForm posts={posts} addPost={addPost} />
    </>
  );
}
