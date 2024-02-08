import React from "react";

const mySecrets = {
  first: "I don't have secret",
  second: "I have no secret",
  third: "I won't have secret",
};

const MySecrets = () => {
  const { first, second, third } = mySecrets;

  return (
    <div className="my-secrets">
      <h1>My 3 Secrets</h1>
      <h4>{first}</h4>
      <h4>{second}</h4>
      <h4>{third}</h4>
    </div>
  );
};

export default MySecrets;
