import Card from "../components/OperationCard";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-2">
      <Card header={"PAY BILLS"} description="">
        <form className="flex justify-around gap-3 mb-3 border border-gray-200 py-2 rounded-lg">
          <div>
            <h6>Daily Limit: paymentLimit</h6>
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
              Pay now
            </label>

            <input
              type="input"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="limitAmount"
              placeholder="16-digit code"
              // value={paymentCode}
              // onChange={handlePCodeChange}
            />

            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="limitAmount"
              placeholder="Value"
              // value={paymentValue}
              // onChange={handlePValueChange}
            />

            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="paymentTerm"
              //   onChange={handlePTypeChange}
              //   value={paymentType}
            >
              <option value="1">Electricity</option>
              <option value="2">Water</option>
              <option value="3">Internet</option>
              <option value="4">Phone</option>
              <option value="5">Credit Card</option>
              <option value="6">Insurance</option>
              <option value="7">Other</option>
            </select>
          </div>

          <div className="self-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              //   onClick={handlePaymentClick}
            >
              Pay
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
