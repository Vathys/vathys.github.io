export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-2 border-foreground/10 p-4 hover:bg-muted/10 transition">
      <div className="h-48 bg-white/10 mb-4" />
      <h3 className="font-mono mb-2">{title}</h3>
      <p className="text-sm text-foreground/60">{description}</p>
    </div>
  );
}
