import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({name, email, gen, id, removeUser}) => {
    const handleClick = () => {
        removeUser(id)
    }
    return (
        <div>
        <h4>name: {name}</h4>
        <h4>email:{email}</h4>
        <h4>gen:{gen}</h4>  
        <button onClick={handleClick}>Remove user</button> 
        <Link to={`/edit/${id}`}>Edit user</Link>
        <hr/>  
                    
        </div>
    );
}

export default UserInfo;
