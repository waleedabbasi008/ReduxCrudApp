import React from 'react'
import { useState } from 'react';
import { addUser } from '../features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './App.scss';
const Create = () => {
  const users = useSelector((state)=> state.users);   //importe slice using useselector hook
  const navigate = useNavigate();    
  const [name, setname] = useState('')            //usestate hook for name
  const [email, setEmail] = useState('')         //usestate hook for email
  const dispatch = useDispatch();                //action has been dispatch


  // ######################### Handle submit event start #############################
  const handleSubmit = (event) => {                           
    event.preventDefault(); 
    dispatch(addUser({id: users[users.length - 1].id+1 ,name ,email}));     //user action 
    navigate('/');
  }
  // ######################### Handle submit event Ends #############################
  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
        <div className="createContainer border bg-secondary text-white p-5">
          <h2> Add new user </h2>
          <form onSubmit={handleSubmit} >
            <div className="name">
              <label htmlFor="name"> Name:  </label>
              <input type="text" name='name' className=' form-control'
                onChange={e => setname(e.target.value)}
                placeholder='enter name' />
            </div>
            <div className="email">
              <label htmlFor="email"> Email:  </label>
              <input type="email" name='email' className=' form-control'
                onChange={e => setEmail(e.target.value)}
                placeholder='enter email' />
            </div> <br />
            <div className="button">
              <button className="btn btn-info"> Submit </button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Create;