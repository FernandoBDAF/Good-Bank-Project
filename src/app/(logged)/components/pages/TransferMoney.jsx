// import Card from "../components/Card";
// import { useState, useContext } from "react";
// import { AppContext } from "../utils/Context";
// import { Navigate } from "react-router-dom";
// import HorizontalBalanceCard from "../components/HorizontalBalanceCard";

// export default function Transfer() {
//   const [amount, setAmount] = useState("");
//   const [transferRecipient, setTransferRecipient] = useState("");
//   const [transferValue, setTransferValue] = useState("");
//   const {
//     balance,
//     transferLimit,
//     validateNumber,
//     handleTransfer,
//     handleWithdraw,
//     authenticated,
//     setTransferLimit,
//   } = useContext(AppContext);

//   function handleLimitChange(e) {
//     if (!validateNumber(e.target.value)) {
//       alert("Please enter a valid number");
//       return;
//     }
//     setAmount(e.target.value);
//   }

//   function handleIncreaseLimit() {
//     if (amount === "" || parseFloat(amount) <= 0) {
//       alert("Please enter a positive number");
//       return;
//     }
//     setTransferLimit(parseFloat(amount));
//     setTransferLimit(parseFloat(amount) + transferLimit);
//     setAmount("");
//     alert("Transfer limit updated!");
//   }

//   const handlePCodeChange = (e) => {
//     setTransferRecipient(e.target.value);
//   };

//   const handlePValueChange = (e) => {
//     if (!validateNumber(e.target.value)) {
//       alert("Please enter a valid number");
//       return;
//     }
//     setTransferValue(e.target.value);
//   };

//   const handlePaymentClick = () => {
//     if (!validateNumber(transferValue)) {
//       alert("Please enter a valid number");
//       return;
//     }
//     if (parseFloat(transferValue) <= 0) {
//       alert("Please enter a positive number");
//       return;
//     }
//     if (parseFloat(transferValue) > transferLimit) {
//       alert("The payment value exceeds the limit");
//       return;
//     }
//     if (parseFloat(transferValue) > balance) {
//       alert("Insufficient funds");
//       return;
//     }

//     handleTransfer(transferRecipient, parseFloat(transferValue));
//     handleWithdraw(parseFloat(transferValue));

//     alert("Payment completed!");
//     setTransferRecipient("");
//     setTransferValue("");
//   };

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
//             header="TRANSFER MONEY"
//             body={
//               <>
//                 <div className="d-flex flex-column gap-4">
//                   <div className="col-md-12 d-flex">
//                     <div className="d-flex flex-column gap-4">
//                       <div>
//                         <h6>Daily Limit: ${transferLimit}</h6>
//                       </div>

//                       <div>
//                         <label htmlFor="loanAmount" className="form-label">
//                           Change your limit
//                         </label>
//                         <input
//                           type="number"
//                           className="form-control"
//                           id="limitAmount"
//                           placeholder="New value"
//                           value={amount}
//                           onChange={handleLimitChange}
//                         />
//                       </div>
//                     </div>

//                     <div className="align-self-end">
//                       <button
//                         type="submit"
//                         className="btn btn-primary"
//                         onClick={handleIncreaseLimit}
//                       >
//                         Confirm
//                       </button>
//                     </div>
//                   </div>

//                   <div className="col-md-12 d-flex">
//                     <div className="d-flex flex-column gap-4">
//                       <div className="d-flex flex-column gap-2">
//                         <label htmlFor="loanAmount" className="form-label">
//                           Transfer now
//                         </label>

//                         <input
//                           type="input"
//                           className="form-control"
//                           id="limitAmount"
//                           placeholder="Recipient's email"
//                           value={transferRecipient}
//                           onChange={handlePCodeChange}
//                         />

//                         <input
//                           type="number"
//                           className="form-control"
//                           id="limitAmount"
//                           placeholder="Value"
//                           value={transferValue}
//                           onChange={handlePValueChange}
//                         />
//                       </div>
//                     </div>

//                     <div className="align-self-end">
//                       <button
//                         type="submit"
//                         className="btn btn-primary"
//                         onClick={handlePaymentClick}
//                       >
//                         Transfer
//                       </button>
//                     </div>
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
