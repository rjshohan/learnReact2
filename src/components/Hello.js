import React from "react";

const Myname = (props) => {
  return (
    <div>
        <h1>
      Hello my name is {props.name} and I like {props.passion}{" "}
    </h1>
    {props.children}
    </div>
  );
};
export default Myname;

// export const Welcome = (props) => {
//   return;
//   <h2>Welcome to my {props.Age}.</h2>;
// };

// export const Watch = () => (
//   <h1>You can watch my Project in my github account.</h1>
// );
