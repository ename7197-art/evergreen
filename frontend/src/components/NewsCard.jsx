export default function NewsCard({ title, summary }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{summary}</p>
    </article>
  );
}
