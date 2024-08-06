import Card from "../components/OperationCard";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-5">
      <Card
        header="WITHDRAW"
        description="Withdraw money from your account"
      >
        <form>
          <div className="mb-3">
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="deposit"
              placeholder="Enter deposit amount"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Withdraw
          </button>
        </form>
      </Card>
    </div>
  );
}
