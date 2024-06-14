const MyPersionList = ({personDetails}) => {
  // console.log({ props });
  const {name,age,profession} = personDetails;

  return (
    <div>
      {/* <h1>Hello - {props.name}</h1>
      {props.age ? <p>Your Age : {props.age}</p> : <p>Your age is not given</p>}

      {props.age && <p>Your Age : {props.age}</p>} */}


      {/* <h3>Name: {props.personDetails.name} </h3>
      <h5>Age: {props.personDetails.age}</h5>
      <h5>Profession: {props.personDetails.profession}</h5>
      <h5>Material Status: {props.personDetails.isMarried? "Yes":"No"}</h5> */}
      {/* <h3>Name: {personDetails.name} </h3>
      <h5>Age: {personDetails.age}</h5>
      <h5>Profession: {personDetails.profession}</h5>
      <h5>Material Status: {personDetails.isMarried? "Yes":"No"}</h5> */}
      <h3>Name: {name} </h3>
      <h5>Age: {age}</h5>
      <h5>Profession: {profession}</h5>

    </div>
  );
};

export default MyPersionList;

//conditional rendering

// 1. ternary operator
//2. short circuits


const myObj ={
  id:2,
  name:"aksasj",
  age:"29",
  roll:"1000"
}

const {id,name,age,roll} =myObj


console.log(id)