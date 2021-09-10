import { useState, useMemo } from "react";

export default function BlogPostCreateForm({ posts, addPost }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  function submitForm(e) {
    e.preventDefault();
    addPost(title, text, image, url);
    setTitle("");
    setText("");
    setImage("");
    setUrl("");
  }

  const titleNotUnique = useMemo(
    () =>
      posts.some(
        (p) => p.title.trim().toLowerCase() == title.trim().toLowerCase()
      ),
    [posts, title]
  );

  return (
    <form onSubmit={submitForm}>
      <h2>Add a blog post</h2>
      <div>
        <label>
          Title:
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        {titleNotUnique && <span className="text-red">Title not unique</span>}
      </div>
      <div>
        <label>
          Text:
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
      </div>
      <button type="submit" disabled={titleNotUnique}>
        Add post
      </button>
    </form>
  );
}
