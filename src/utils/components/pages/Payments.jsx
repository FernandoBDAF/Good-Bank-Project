// import Card from "../components/Card";
// import { useState, useContext } from "react";
// import { AppContext } from "../utils/Context";
// import { Navigate } from "react-router-dom";
// import HorizontalBalanceCard from "../components/HorizontalBalanceCard";

// export default function Payments() {
//   const [amount, setAmount] = useState("");
//   const [paymentCode, setPaymentCode] = useState("");
//   const [paymentValue, setPaymentValue] = useState("");
//   const [paymentType, setPaymentType] = useState(1);
//   const {
//     balance,
//     paymentLimit,
//     validateNumber,
//     increasePaymentLimit,
//     handlePayment,
//     handleWithdraw,
//     authenticated,
//   } = useContext(AppContext);

//   function handleLimitChange(e) {
//     if (!validateNumber(e.target.value)) {
//       alert("Please enter a valid number");
//       return;
//     }
//     setAmount(e.target.value);
//   }

//   function handleIncreaseLimit() {
//     if (!validateNumber(amount)) {
//       alert("Please enter a valid number");
//       return;
//     }
//     if (parseFloat(amount) <= 0) {
//       alert("Please enter a positive number");
//       return;
//     }
//     increasePaymentLimit(parseFloat(amount));
//     setAmount("");
//     alert("Payment limit updated!");
//   }

//   const handlePCodeChange = (e) => {
//     if (paymentCode.length >= 16) {
//       alert("The code max size is 16-digit. Please try again.");
//       return;
//     }
//     setPaymentCode(e.target.value);
//   };

//   const handlePValueChange = (e) => {
//     if (!validateNumber(e.target.value)) {
//       alert("Please enter a valid number");
//       return;
//     }
//     setPaymentValue(e.target.value);
//   };

//   const handlePTypeChange = (e) => {
//     setPaymentType(e.target.value);
//   };

//   const handlePaymentClick = () => {
//     if (paymentCode.length !== 16) {
//       alert("Please enter a 16-digit code");
//       return;
//     }
//     if (!validateNumber(paymentValue)) {
//       alert("Please enter a valid number");
//       return;
//     }
//     if (parseFloat(paymentValue) <= 0) {
//       alert("Please enter a positive number");
//       return;
//     }
//     if (parseFloat(paymentValue) > paymentLimit) {
//       console.log(paymentValue, paymentLimit);
//       alert("The payment value exceeds the limit");
//       return;
//     }
//     if (parseFloat(paymentValue) > balance) {
//       alert("Insufficient funds");
//       return;
//     }

//     handlePayment(paymentCode, paymentValue, paymentType);
//     handleWithdraw(parseFloat(paymentValue));

//     alert("Payment completed!");
//     setPaymentCode("");
//     setPaymentValue("");
//     setPaymentType(1);
//   };

//   if (!authenticated) {
//     return <Navigate to="/log-in" />;
//   }

//   return (
//     <div className="container mt-2">
//       <HorizontalBalanceCard />
//       <div className="row flex-wrap align-items-center justify-content-center">
//         <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
//           <Card
//             bgcolor="info"
//             header="PAY BILLS"
//             body={
//               <>
//                 <div className="d-flex flex-column gap-1">
//                   <div className="col-md-12 d-flex">
//                     <div className="d-flex flex-column gap-1">
//                       <div>
//                         <h6>Daily Limit: ${paymentLimit}</h6>
//                       </div>

//                       <div>
//                         <label htmlFor="loanAmount" className="form-label">
//                           Increase your limit
//                         </label>
//                         <input
//                           type="number"
//                           className="form-control"
//                           id="limitAmount"
//                           placeholder="Add amount"
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

//                   <div className="col-md-12 d-flex gap-2">
//                     <div className="d-flex flex-column">
//                       <div className="d-flex flex-column gap-1">
//                         <label htmlFor="loanAmount" className="form-label">
//                           Pay now
//                         </label>

//                         <input
//                           type="input"
//                           className="form-control"
//                           id="limitAmount"
//                           placeholder="16-digit code"
//                           value={paymentCode}
//                           onChange={handlePCodeChange}
//                         />

//                         <input
//                           type="number"
//                           className="form-control"
//                           id="limitAmount"
//                           placeholder="Value"
//                           value={paymentValue}
//                           onChange={handlePValueChange}
//                         />

//                         <div className="d-flex">
//                           <select
//                             className="form-select"
//                             id="paymentTerm"
//                             onChange={handlePTypeChange}
//                             value={paymentType}
//                           >
//                             <option value="1">Electricity</option>
//                             <option value="2">Water</option>
//                             <option value="3">Internet</option>
//                             <option value="4">Phone</option>
//                             <option value="5">Credit Card</option>
//                             <option value="6">Insurance</option>
//                             <option value="7">Other</option>
//                           </select>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="align-self-end">
//                       <button
//                         type="submit"
//                         className="btn btn-primary"
//                         onClick={handlePaymentClick}
//                       >
//                         Pay
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
