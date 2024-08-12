export default function CryptoCard({
  name,
  value,
  image,
}: {
  name: string;
  value: number;
  image: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center border px-3 py-2 w-full">
      <div className="flex justify-between gap-2 items-center">
        <img
          className="bg-white rounded-full"
          style={{ width: "15px", height: "15px" }}
          src={image}
          alt={name}
        />
        <h6>{name}</h6>
      </div>

      <div className="">
        <p>$ {value}</p>
      </div>
    </div>
  );
}
