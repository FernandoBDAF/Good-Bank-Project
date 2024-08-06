import Card from "../components/OperationCard";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-2">
      <Card header={"LOANS"} description="Take a loan"
      >
        <form className="flex justify-around gap-3 mb-3 border border-gray-200 py-2 rounded-lg">
          <div>
            <h6>Locked limit: loanLocked</h6>
            <h6>Available limit: loanAvailable</h6>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end"
            // onClick={handleUnlockLoan}
            // disabled={loanLocked === 0}
          >
            Unlock
          </button>
        </form>

        <div className="flex flex-col gap-2 p-3 border border-gray-200 py-2 rounded-lg">
          <div className="w-full mb-3">
            <label
              htmlFor="loanAmount"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Amount
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight max-w-96 focus:outline-none focus:shadow-outline"
              id="loanAmount"
              placeholder="Enter amount"
              // onChange={handleLoanChange}
              // value={amount}
            />
          </div>

          <div className="w-full mb-3">
            <label
              htmlFor="paymentTerm"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Payment Term
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight max-w-96 focus:outline-none focus:shadow-outline"
              id="paymentTerm"
              // onChange={(e) => setLoanTerm(e.target.value)}
              // value={loanTerm}
            >
              <option value="1">1 month</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
            </select>
          </div>
          <div className="flex justify-between gap-4">
            <div>
              <p className="text-xs">Interest rate</p>
              <p className="text-xs">2% by month</p>
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded self-start"
              //   onClick={takeLoan}
            >
              Confirm Loan
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
