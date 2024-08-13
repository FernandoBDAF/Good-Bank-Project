export default function Card(props: {
  header: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xl bg-amber-500 border border-white rounded-xl">
      <div className="bg-amber-400 text-white py-2 px-4 font-semibold w-full rounded-xl">
        {props.header}
      </div>
      <div className="p-4 w-full">
        {props.description && (
          <p className="text-base mb-2">{props.description}</p>
        )}
        {props.children}
      </div>
    </div>
  );
}
