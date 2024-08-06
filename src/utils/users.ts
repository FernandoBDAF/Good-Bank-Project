export const getUser = async (clerkId: string) => {
  try {
    console.log("clerkId", clerkId);
    const res = await fetch(
      `http://localhost:3000/api/user?clerkId=${clerkId}`
    );
    if (!res.ok) {
      throw new Error("User not found");
    }

    const dbUser = await res.json();
    return dbUser;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (user: any) => {
  console.log("user", user);
  try {
    const res = await fetch(`http://localhost:3000/api/user`, {
      method: "POST",
      body: JSON.stringify({
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("res", res);
    if (!res.ok) {
      throw new Error("User not created");
    }

    const dbUser = await res.json();
    return dbUser;
  } catch (error) {
    console.error(error);
  }
};
