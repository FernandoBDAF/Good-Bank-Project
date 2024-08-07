// import React, { useContext } from "react";
// import { AppContext } from "../utils/Context";

// export default function BalanceCard() {
//   const { balance, balanceBTC, balanceETH, balanceUSDC, loanDebit } =
//     useContext(AppContext);

//   return (
//     <div className="container mt-5">
//       <table className="table table-dark table-hover">
//         <thead>
//           <tr>
//             <th>Currency</th>
//             <th>Balance</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <img
//                 src="./dolar.webp"
//                 alt="USD Logo"
//                 className="currency-logo"
//                 style={{
//                   width: "15px",
//                   height: "15px",
//                   backgroundColor: "white",
//                   borderRadius: "35%",
//                 }}
//               />{" "}
//               USD
//             </td>
//             <td>${balance.toFixed(2)}</td>
//           </tr>
//           <tr>
//             <td>
//               <img
//                 src="./percent-symbol.png"
//                 alt="USD Logo"
//                 className="currency-logo"
//                 style={{
//                   width: "15px",
//                   height: "15px",
//                   backgroundColor: "white",
//                   borderRadius: "35%",
//                 }}
//               />{" "}
//               Loans
//             </td>
//             <td>${loanDebit.toFixed(2)}</td>
//           </tr>
//           <tr>
//             <td>
//               <img
//                 src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
//                 alt="BTC Logo"
//                 style={{
//                   width: "15px",
//                   height: "15px",
//                   backgroundColor: "white",
//                   borderRadius: "35%",
//                 }}
//               />{" "}
//               BTC
//             </td>
//             <td>{balanceBTC.toFixed(2)} BTC</td>
//           </tr>
//           <tr>
//             <td>
//               <img
//                 src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
//                 alt="ETH Logo"
//                 style={{
//                   width: "15px",
//                   height: "15px",
//                   backgroundColor: "white",
//                   borderRadius: "35%",
//                 }}
//               />{" "}
//               ETH
//             </td>
//             <td>{balanceETH.toFixed(2)} ETH</td>
//           </tr>
//           <tr>
//             <td>
//               <img
//                 src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
//                 alt="USDC Logo"
//                 style={{
//                   width: "15px",
//                   height: "15px",
//                   backgroundColor: "white",
//                   borderRadius: "35%",
//                 }}
//               />{" "}
//               USDC
//             </td>
//             <td>{balanceUSDC.toFixed(2)} USDC</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
