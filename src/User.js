import React from "react";

const User = (props) => {
  //   console.log(props.count);
  const greating = props.count;
  let greeting;
  if (greating) {
    greeting = <p>Welcome my friend </p>;
  } else {
    greeting = <p>Who are you ?</p>;
  }
  return (
    <div>
      <div>
        <h1>Greeting</h1>
        {greeting}
      </div>
      <div>
        <h1>food</h1>
        {greating ? (
          <p>I will buy food for you </p>
        ) : (
          <p>Buy food with your money huh</p>
        )}
      </div>
      <div>
        <h1>Connection</h1>
        {greating && <p>Let add you in facebook</p>}
      </div>
    </div>
  );
};

export default User;
