import Card from "../components/OperationCard";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-2">
      <Card header={"TRANSFER MONEY"} description="">
        <form className="flex justify-around gap-3 mb-3 border border-gray-200 py-2 rounded-lg">
          <div>
            <h6>Daily Limit: transferLimit</h6>
            <div>
              <label
                htmlFor="loanAmount"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Increase your limit
              </label>
              <input
                type="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="limitAmount"
                placeholder="Add amount"
                // value={amount}
                // onChange={handleLimitChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end"
            // onClick={handleUnlockLoan}
            // disabled={loanLocked === 0}
          >
            Confirm
          </button>
        </form>

        <div className="flex justify-around gap-2 p-3 border border-gray-200 py-2 rounded-lg w-full">
          <div className="flex flex-col gap-2 w-full max-w-80">
            <label
              htmlFor="loanAmount"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Transfer now
            </label>

            <input
              type="input"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="limitAmount"
              placeholder="Recipient's email"
              // value={transferRecipient}
              // onChange={handlePCodeChange}
            />

            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="limitAmount"
              placeholder="Value"
              // value={transferValue}
              // onChange={handlePValueChange}
            />
          </div>

          <div className="self-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              //   onClick={handlePaymentClick}
            >
              Transfer
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
