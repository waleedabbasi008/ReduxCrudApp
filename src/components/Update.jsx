import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteUser, updateUser } from '../features/UserSlice';
import './App.scss';
const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const { name, email } = existingUser[0];
    const [uname, setname] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // ################update user action ########################
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail,
        }))
        navigate('/');
    }
    return (
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="  createContainer border bg-secondary text-white p-5">
                    <h2 className='text-center'> Update User </h2>
                    <form onSubmit={handleUpdate} >
                        <div className="name">
                            <label htmlFor="name"> Name:  </label>
                            <input type="text" name='name' className=' form-control' value={uname} onChange={e => setname(e.target.value)}

                                placeholder='enter name' />
                        </div>
                        <div className="email">
                            <label htmlFor="email"> Email:  </label>
                            <input type="email" name='email' className=' form-control' value={uemail} onChange={e => setEmail(e.target.value)}

                                placeholder='enter email' />
                        </div> <br />
                        <div className="button">
                            <button className="btn btn-info"> Update </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update