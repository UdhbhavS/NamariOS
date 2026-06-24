export default function SectionBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 inline-flex rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-400">
      {children}
    </div>
  );
}