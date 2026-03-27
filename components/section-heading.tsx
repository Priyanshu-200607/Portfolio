type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: SectionHeadingProps) {
  return (
    <div className="space-y-5">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}
