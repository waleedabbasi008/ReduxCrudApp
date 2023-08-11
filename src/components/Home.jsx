import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteUser } from '../features/UserSlice';

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);
  // ######################## Dlete user method #################
  const handleDelete = (id) =>{
  dispatch(deleteUser({id: id}));
  } 
  return (
    <>
      <div className="container">
        <h2 className='text-center header' > Crud Operation </h2>
        <NavLink to = '/Create' className="btn btn-success my-3"> Create + </NavLink>
        <table className="table">
          <thead>
            <tr>
              <th> ID </th>
              <th> Name </th>
              <th> Email </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => {
                return (
                  <>

                    <tr key={index} >
                      <td> {user.id} </td>
                      <td> {user.name} </td>
                      <td> {user.email} </td>
                      <td> <NavLink to = {`/edit/${user.id}`} className="btn btn-primary"> Edit </NavLink> </td>
                      <td> <button onClick={() => handleDelete(user.id)} className="btn btn-danger"> Delete </button> </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home;