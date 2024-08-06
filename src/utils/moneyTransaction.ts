export const moneyTransaction = async (
  clerkId: string,
  type: string,
  value: number
) => {
  console.log(
    JSON.stringify({
      clerkId,
      type,
      value,
    })
  );
  try {
    const res = await fetch(`http://localhost:3000/api/money-transaction`, {
      method: "POST",
      body: JSON.stringify({
        clerkId,
        type,
        value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Error registering the transaction");
    }

    const transaction = await res.json();
    console.log(transaction);
    return transaction;
  } catch (error) {
    console.error(error);
  }
};
