import React, { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import useFormFields from '../hooks/useFormField.js';
import { createToast } from '../helper/creaetToast.js';
import { useRegisterMutation } from '../features/auth/authApiSlice.js';

const Register = () => {
  const { input, setInput, handleInputChange } = useFormFields({ username: '', email: '', password: '' });
  const [register, { data, isError, error, isSuccess, isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  // <!-- Register form submit -->
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!input.email || !input.password || !input.username) return createToast('All fields are required!');

    register({ username: input.username, email: input.email, password: input.password });
  };

  useEffect(() => {
    if (isError) {
      createToast(error.data.message);
    }
    if (isSuccess) {
      setInput({ username: '', email: '', password: '' });
      createToast(data.message, 'success');
      navigate('/login');
    }
  }, [isError, error, isSuccess, data, navigate, setInput]);
  return (
    <div>
      {' '}
      <div className='flex items-center justify-center   bg-[#030822] h-screen w-screen'>
        <div className='p-8 bg-white rounded-xl  space-y-4 w-10/12 md:w-4/12'>
          <p className='text-2xl font-semibold'>Register</p>
          <hr />
          {/* <!-- Register form Start --> */}
          <form onSubmit={handleFormSubmit}>
            <p className='font-semibold text-lg'>Username -</p>
            <input
              className='bg-slate-200 p-2 text-lg font-semibold outline-none border rounded-md  w-full'
              type='text'
              name='username'
              value={input.username}
              onChange={(e) => handleInputChange(e)}
            />
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
              className='text-xl bg-blue-500 text-white  w-full p-1 rounded-md text-center cursor-pointer  font-semibold  mt-3 flex items-center gap-4 justify-center'>
              <p>{isLoading ? 'Processing....' : 'Register'}</p>
            </button>
          </form>
          {/* <!-- Register form End --> */}
          <Link to={'/login'}>
            <p className='text-blue-500 font-semibold cursor-pointer mt-3'>Have an account ?</p>
          </Link>
          <p className='flex items-center justify-center  gap-3  font-semibold bg-gray-300 text-gray-900 py-2 rounded-md cursor-pointer '>
            <FcGoogle className='h-7 w-7  ' />
            Register with google
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
