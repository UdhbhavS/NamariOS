export default function PrimaryButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="rounded-xl bg-indigo-600 px-6 py-4 font-medium text-white transition hover:bg-indigo-500">
      {children}
    </button>
  );
}