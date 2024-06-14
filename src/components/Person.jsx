const Person = ({person,index})=>{
    return (
        <li className="single_person">
            <div>
                <h3>Name: {person.name}</h3>
                <p>Designation :{person.designation}</p>
            </div>
        </li>
    )
}
export default Person