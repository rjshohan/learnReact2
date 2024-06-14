import Person from "./Person"
 const PersonsList =({list})=>{
    console.log({list})
    return(
        <div>
            <h4>Person list</h4>
            <div className="" style={{display:"flex"}}>
            <ul style={{marginBottom:"100px"}}>
                {list.map((person,index)=>(
                    <Person key={person.id} person={person} index={index} />
                ))}
            </ul>
        </div>
        </div>
    )
}
export default PersonsList