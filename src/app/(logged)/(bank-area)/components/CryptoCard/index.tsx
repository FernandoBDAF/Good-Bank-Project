export default function CryptoCard({ name, value, image, address } : { name: string, value: number, image: string, address: string }) {
  return (
    <div className="d-flex flex-column align-items-start border p-2 bg-light">
      <div className="d-flex gap-2 align-content-center justify-items-center">
        <img style={{ width: "15px", height: "15px" }} src={image} alt={name} />
        <h6>{name}</h6>
      </div>

      <div className="">
        <p className="m-0">Your Address:</p>
        <input
          className="mb-1"
          type="text"
          value={address}
          disabled
          style={{ width: "100px" }}
        />
        <p className="m-0">1 {name}: </p>
        <input type="text" style={{ width: "60px" }} disabled value={value} />
      </div>
    </div>
  );
}
