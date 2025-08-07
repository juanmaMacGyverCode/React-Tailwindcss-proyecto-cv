type Props = {
  label: string;
  primary?: boolean;
};

export default function MyButton({ label, primary }: Props) {
  return (
    <button className={`px-4 py-2 rounded font-semibold ${primary ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}`}>
      {label}
    </button>
  );
}
