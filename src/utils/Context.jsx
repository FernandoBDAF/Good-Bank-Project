"use client"

import React, { useState, createContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [id, setId] = useState(1);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const [balance, setBalance] = useState(0);
  const [balanceBTC, setBalanceBTC] = useState(0);
  const [balanceETH, setBalanceETH] = useState(0);
  const [balanceUSDC, setBalanceUSDC] = useState(0);
  const [loginMessage, setLoginMessage] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [loanLocked, setLoanLocked] = useState(1000);
  const [loanAvailable, setLoanAvailable] = useState(0);
  const [loanDebit, setLoanDebit] = useState(0);
  const [paymentLimit, setPaymentLimit] = useState(1000);
  const [payments, setPayments] = useState([]);
  const [transferLimit, setTransferLimit] = useState(1000);
  const [transfers, setTransfers] = useState([]);
  const [cryptoTransactions, setCryptoTransactions] = useState([]);

  const handleDeposit = (amount) => {
    setBalance(balance + parseFloat(amount));
    setTransactions([
      ...transactions,
      { type: "Deposit", amount: amount, id: transactions.length + 1, timestamp: new Date()},
    ]);
  };

  const handleWithdraw = (amount) => {
    if (parseFloat(amount) > balance) {
      alert("You don't have enough balance to withdraw this amount");
      return false;
    }
    setBalance(balance - parseFloat(amount));
    setTransactions([
      ...transactions,
      { type: "Withdraw", amount: amount, id: transactions.length + 1, timestamp: new Date()},
    ]);
    alert("Withdraw successful!");
  };

  const validateNumber = (number) => {
    if (isNaN(number)) {
      return false;
    }
    return true;
  }

  const changeAuth = () => {
    setAuthenticated(!authenticated);
  };

  const addUser = (user) => {
    setUsers(() => [...users, { ...user, id: id }]);
    setId(id + 1);
  };

  const logUser = (user) => {
    if (
      users.length > 0 &&
      users.find(
        (u) => u.email === user.email && u.password === user.password
      ) !== undefined
    ) {
      setCurrentUser(user);
      setAuthenticated(true);
      setLoginMessage("You have successfully logged in!");
    } else {
      setLoginMessage("Invalid email or password. Please try again.");
    }
  };

  const handleUnlockLoan = () => {
    if (loanLocked > 0) {
      setLoanAvailable(loanLocked);
      setLoanLocked(0);
      alert("Loan unlocked!");
    }
  };

  const increasePaymentLimit = (amount) => {
    setPaymentLimit(parseFloat(paymentLimit) + amount);
  }

  const handlePayment = (code, value, type) => {
    setPayments([
      ...payments,
      { code: code, value: value, type: type, id: payments.length + 1, timestamp: new Date()},
    ]);
    setPaymentLimit(paymentLimit - parseFloat(value));
    console.log(payments);
  }

  const handleTransfer = (recipient, value) => {
    setTransfers([
      ...transfers,
      { recipient: recipient, value: value, id: transfers.length + 1, timestamp: new Date()},
    ]);
    setTransferLimit(transferLimit - parseFloat(value));
    console.log(transfers);
  }

  const handleCryptoBuy = (coin, rate, fee, value, total) => {
    handleWithdraw(total);
    if (coin === "btc") {
      setBalanceBTC(balanceBTC + parseFloat(value));
    } else if (coin === "eth") {
      setBalanceETH(balanceETH + parseFloat(value));
    } else if (coin === "usdc") {
      setBalanceUSDC(balanceUSDC + parseFloat(value));
    }
    setCryptoTransactions([
      ...cryptoTransactions,
      { type: "Buy", coin: coin, rate: rate, fee: fee, value: value, total: total, id: transactions.length + 1, timestamp: new Date()},
    ]);
  }

  const handleCryptoSell = (coin, rate, fee, value, total) => {
    handleDeposit(total);
    if (coin === "btc") {
      setBalanceBTC(balanceBTC - parseFloat(value));
    } else if (coin === "eth") {
      setBalanceETH(balanceETH - parseFloat(value));
    } else if (coin === "usdc") {
      setBalanceUSDC(balanceUSDC - parseFloat(value));
    }
    setCryptoTransactions([
      ...cryptoTransactions,
      { type: "Sell", coin: coin, value: value, id: transactions.length + 1, timestamp: new Date()},
    ]);
  }


  const value = {
    users,
    currentUser,
    authenticated,
    balance,
    transactions,
    loginMessage,
    balanceBTC,
    balanceETH,
    balanceUSDC,
    loanLocked,
    loanAvailable,
    paymentLimit,
    transferLimit,
    loanDebit,
    handleDeposit,
    handleWithdraw,
    changeAuth,
    addUser,
    logUser,
    validateNumber,
    handleUnlockLoan,
    setLoanAvailable,
    setLoanDebit,
    increasePaymentLimit,
    handlePayment,
    handleTransfer,
    handleCryptoBuy,
    handleCryptoSell,
    setTransferLimit,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};