import  { useEffect, useState } from 'react'
import {Navigate } from 'react-router-dom';
import { addUser } from '../features/userSlice';
import { useGetCurrentUserQuery, useLoginMutation } from '../features/Api/User';
import { useDispatch, useSelector } from 'react-redux';
import { loginProps } from './pages.types';
import Button from '../Component/products/Button';
import InputFeild from '../Component/InputFeild';
import { Formik ,Form} from 'formik';
import {userDataProps} from "../features/Api/products.types"
function Login() {
   const initialValues:loginProps ={
      email: "",
      password: "",
    }
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  const { user } = useSelector((state:userDataProps) => state.user);
  console.log(user)
  const [ login,{ data: loginData, isError: loginDataIsError },] = useLoginMutation();
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
      
      <div className='flex flex-col justify-center items-center w-96  mt-32'>
        <p className="font-semibold text-gray-800 text-xl mb-5">Login to your account</p>
      <Formik
        onSubmit={(values) => login(values)} initialValues={initialValues}>
          {({ handleSubmit,values,handleBlur,handleChange }) => (
            <Form onSubmit={handleSubmit} className='w-full justify-center flex flex-col'>
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
                
              <div className='w-full '>
                <Button text="submit" type="submit" width={"32"} />
              </div>
                   
            </Form>    
                 )}
                
            </Formik>
             
      
    </div></div>
     
  )
}

export default Login
