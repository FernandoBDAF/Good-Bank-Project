// "use client";

// import { useContext } from "react";
// import { AppContext } from "../utils/Context";
// import { Navigate } from "react-router-dom";
// import HorizontalBalanceCard from "../components/HorizontalBalanceCard";

// export default function AllData() {
//   const { transactions, authenticated } = useContext(AppContext);

//   const bgColor = function (type) {
//     if (type === "Deposit") {
//       return "#E2F3E2";
//     } else {
//       return "#EBC2BC";
//     }
//   };

//   if (!authenticated) {
//     return <Navigate to="/log-in" />;
//   }

//   return (
//     <div className="container">
//       <HorizontalBalanceCard />
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">Type</th>
//             <th scope="col">Amount</th>
//             <th scope="col">Timestamp</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction) => (
//             <tr key={transaction.id}>
//               <td>
//                 <div style={{ backgroundColor: bgColor(transaction.type) }}>
//                   {transaction.type}
//                 </div>
//               </td>
//               <td>
//                 <div style={{ backgroundColor: bgColor(transaction.type) }}>
//                   ${transaction.amount}
//                 </div>
//               </td>
//               <td>
//                 <div
//                   style={{ backgroundColor: bgColor(transaction.type) }}
//                 >{`${transaction.timestamp.toLocaleDateString()} ${transaction.timestamp.toLocaleTimeString()}`}</div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
