export default function BlogPost({ title, text, image, url }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} />
      <p>
        {text}
        {url && <a href={url}>Open</a>}
      </p>
      <hr />
    </div>
  );
}
