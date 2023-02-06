import userdata from "../../api/models/userdata";

function deletedata() {
  function handleDelete(){
    return userdata._id 
  }

  
    return ( 
        <>
          <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((record,_id) => (
            <tr key={_id}>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td><button onClick={() => handleDelete(_id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
     );
}

export default deletedata;