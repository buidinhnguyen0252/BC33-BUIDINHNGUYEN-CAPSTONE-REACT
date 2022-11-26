import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getProfileApi } from '../../redux/productReducer/userReducer';
import {useNavigate} from 'react-router-dom'
export default function Profile() {
  // const navigate = useNavigate();
  const {userProfile} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //Gọi api get profile
    const actionAsync = getProfileApi();
    dispatch(actionAsync);
    //
  },[]);

  return (
    <div className='container'>
      <h3>Profile</h3>
      <div className='row'>
        <div className='col-4'>
          <img src="https://i.pravatar.cc" style={{height:250}} alt="..." className="w-100" />
        </div>
        <div className='col-8'>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group'>
                <p>Email</p>
                <input className='form-control' name={"email"} />
              </div>
              <div className='form-group'>
                <p>name</p>
                <input className='form-control' name={"name"} />
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group'>
                <p>Email</p>
                <input className='form-control' name={"email"} />
              </div>
              <div className='form-group'>
                <p>name</p>
                <input className='form-control' name={"name"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
