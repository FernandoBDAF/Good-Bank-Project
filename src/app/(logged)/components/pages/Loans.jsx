// import Card from "../components/Card";
// import { useState, useContext } from "react";
// import { AppContext } from "../utils/Context";
// import { Navigate } from "react-router-dom";
// import HorizontalBalanceCard from "../components/HorizontalBalanceCard";

// export default function Loans() {
//   const [amount, setAmount] = useState("");
//   const [loanTerm, setLoanTerm] = useState(1);
//   const {
//     validateNumber,
//     loanLocked,
//     loanAvailable,
//     handleUnlockLoan,
//     setLoanAvailable,
//     loanDebit,
//     setLoanDebit,
//     handleDeposit,
//     authenticated,
//   } = useContext(AppContext);

//   function handleLoanChange(e) {
//     if (!validateNumber(e.target.value)) {
//       alert("Please enter a valid number");
//       return;
//     }
//     setAmount(e.target.value);
//   }

//   function takeLoan() {
//     if (amount === "" || amount <= 0) {
//       alert("Please enter a valid amount");
//       return;
//     }
//     if (amount > loanAvailable) {
//       if (amount <= loanLocked) {
//         alert(
//           `You have ${loanLocked} available, but you need to UNLOCK YOUR LIMIT FIRST.`
//         );
//         return;
//       }
//       alert("You don't have enough available limit");
//       return;
//     }

//     const loan = (parseFloat(amount) * 1.02 ** loanTerm).toFixed(2);
//     setLoanDebit(parseFloat(loanDebit + loan));
//     setLoanAvailable(loanAvailable - parseFloat(amount));
//     handleDeposit(amount);
//     setAmount("");
//     setLoanTerm(1);
//     alert(
//       `You will have to pay $${(loan / loanTerm).toFixed(
//         2
//       )} monthly for ${loanTerm} months`
//     );
//   }

//   if (!authenticated) {
//     return <Navigate to="/log-in" />;
//   }

//   return (
//     <div className="container mt-5">
//       <HorizontalBalanceCard />
//       <div className="row flex-wrap align-items-center justify-content-center">
//         <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
//           <Card
//             bgcolor="info"
//             header="LOANS"
//             body={
//               <>
//                 <div className="row mb-3">
//                   <div className="col-md-12 d-flex gap-3">
//                     <div>
//                       <h6>Locked limit: ${loanLocked}</h6>
//                       <h6>Available limit: ${loanAvailable}</h6>
//                     </div>
//                     <div className="align-self-end">
//                       <button
//                         type="submit"
//                         className="btn btn-primary"
//                         onClick={handleUnlockLoan}
//                         disabled={loanLocked === 0}
//                       >
//                         Unlock
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="d-flex gap-2">
//                     <div className="col-md-6 mb-3">
//                       <label htmlFor="loanAmount" className="form-label">
//                         Amount
//                       </label>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="loanAmount"
//                         placeholder="Enter amount"
//                         onChange={handleLoanChange}
//                         value={amount}
//                       />
//                     </div>

//                     <div className="col-md-6 mb-3">
//                       <label htmlFor="paymentTerm" className="form-label">
//                         Payment Term
//                       </label>
//                       <select
//                         className="form-select"
//                         id="paymentTerm"
//                         onChange={(e) => setLoanTerm(e.target.value)}
//                         value={loanTerm}
//                       >
//                         <option value="1">1 month</option>
//                         <option value="2">2 months</option>
//                         <option value="3">3 months</option>
//                         <option value="6">6 months</option>
//                         <option value="12">12 months</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="d-flex gap-4">
//                   <div className="mb-3">
//                     <h6>Interest rate</h6>
//                     <p>2% by month</p>
//                   </div>

//                   <div className="align-self-start">
//                     <button
//                       type="submit"
//                       className="btn btn-success"
//                       onClick={takeLoan}
//                     >
//                       Confirm Loan
//                     </button>
//                   </div>
//                 </div>
//               </>
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
