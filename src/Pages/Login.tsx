import React, { useEffect, useState } from 'react'
import {Navigate } from 'react-router-dom';
import { addUser } from '../features/userSlice';
import { useGetCurrentUserQuery, useLoginMutation } from '../features/Api/User';
import { useDispatch, useSelector } from 'react-redux';
import { loginProps } from './pages.types';
import Button from '../Component/products/Button';
import InputFeild from '../Component/InputFeild';
import { Formik ,Form} from 'formik';

function Login() {
   const initialValues:loginProps ={
      email: "",
      password: "",
    }
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  const { user } = useSelector((state) => state.user);
  const [ login,{ data: loginData, isError: loginDataIsError, isLoading: loginIsLoading },] = useLoginMutation();
  const { data: userData, isError: userDataIsError, isSuccess } = useGetCurrentUserQuery(token, { skip: !token });
  
  useEffect(() => {
    if (!loginDataIsError && loginData) {
      localStorage.setItem("access_token", loginData?.token);
      setToken(loginData?.token);
    }
      }, [loginData, loginDataIsError]);

  useEffect(() => {
    if (isSuccess && userData) {
      dispatch(addUser(userData.data.user));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);
  useEffect(() => {
    if (!userDataIsError && userData) {
      dispatch(addUser(userData.data.user));
    }
  }, [dispatch, userData, userDataIsError]);

  if (user) return <Navigate to="/adminpanel" replace />;
  return (
       <div className='flex justify-center items-center w-full h-full'>
      <Formik
        onSubmit={(values) => login(values)} initialValues={initialValues}>
          {({ handleSubmit,values,handleBlur,handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <p className='font-semibold text-gray-800 '>Email</p>
              <InputFeild
              placeholder='Type email here'
              name="email"
              onBlur={handleBlur}
              value={values.email}
              onChange={handleChange}
              id="email"
              type="text" />
            
              <p className='font-semibold text-gray-800'>Password</p>
              <InputFeild
              placeholder='Type password here'
              name="password"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              id="password"
              type="text" />
                
              <div className='w-48'>
                <Button text="submit" type="submit" width={"32"} />
              </div>
                   
            </Form>    
                 )}
                
            </Formik>
             
      
    </div>
  )
}

export default Login
