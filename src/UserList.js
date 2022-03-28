import React, {useEffect, useState} from 'react';
import axios from 'axios';

function UserList(){

    const [data, setData]=useState([]);

    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(result=> setData(result.data));
    }, [])

    return (
        <div>
            <h1> Liste des Utilisateurs</h1>
            <table className="container" border="1">
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>username</th>
                    <th>PhoneNumber</th>
                </tr>

        {data.map(item => (
             
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.phone}</td>
                </tr>
    
            ))}
          </table>
        </div>
      );
}


export default UserList;