import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import useFormFields from '../hooks/useFormField.js';
import { useLoginMutation } from '../features/auth/authApiSlice.js';
import { createToast } from '../helper/creaetToast.js';
import { useDispatch } from 'react-redux';
import { getUserData } from '../features/auth/authSlice.js';

const Login = () => {
  const { input, setInput, handleInputChange } = useFormFields({ email: '', password: '' });
  const [login, { data, isError, error, isSuccess, isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // <!-- login form submit -->
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!input.email || !input.password) return createToast('All fields are required!');

    login({ email: input.email, password: input.password });
  };

  useEffect(() => {
    if (isError) {
      createToast(error.data.message);
    }
    if (isSuccess) {
      setInput({ email: '', password: '' });
      createToast(data.message, 'success');
      dispatch(getUserData(data));
      navigate('/');
    }
  }, [isError, error, isSuccess, data, dispatch, navigate, setInput]);

  return (
    <div>
      <div className='flex items-center justify-center   bg-[#030822] h-screen w-screen'>
        <div className='p-8 bg-white rounded-xl  space-y-4 w-10/12 md:w-4/12'>
          <p className='text-2xl font-semibold'>Login</p>
          <hr />

          {/* <!-- Login Form start --> */}
          <form
            action=''
            onSubmit={handleFormSubmit}>
            <p className='font-semibold text-lg'>Email -</p>
            <input
              className='bg-slate-200 p-2 text-lg font-semibold outline-none border rounded-md  w-full'
              type='text'
              name='email'
              value={input.email}
              onChange={(e) => handleInputChange(e)}
            />
            <p className='font-semibold text-lg'>Password -</p>
            <input
              className='bg-slate-200 p-2 text-lg font-semibold outline-none border rounded-md  w-full'
              type='password'
              name='password'
              value={input.password}
              onChange={(e) => handleInputChange(e)}
            />

            <button
              type='submit'
              className='text-xl bg-blue-500 text-white  w-full p-1 rounded-md text-center cursor-pointer  font-semibold mt-3'>
              {isLoading ? 'Processing...' : 'Login'}
            </button>
          </form>
          {/* <!-- Login Form end --> */}

          <Link to={'/register'}>
            <p className='text-blue-500 font-semibold cursor-pointer mt-3'>Create an account ?</p>
          </Link>
          <p className='flex items-center justify-center  gap-3  font-semibold bg-gray-300 text-gray-900 py-2 rounded-md cursor-pointer '>
            <FcGoogle className='h-7 w-7  ' />
            Login with google
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
