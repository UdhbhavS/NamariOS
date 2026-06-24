export default function SecondaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="rounded-xl border border-slate-700 px-6 py-4 font-medium text-white transition hover:bg-slate-900">
      {children}
    </button>
  );
}