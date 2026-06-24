export default function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-8 text-lg leading-8 text-slate-400">
        {description}
      </p>
    </>
  );
}