import React, { useEffect } from 'react';
import logo from '../../assets/logo.gif';
import { MdAccountCircle, MdBarChart, MdBookmark, MdLogout, MdOutlineToggleOn, MdRadioButtonUnchecked } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../features/auth/authApiSlice.js';
import { createToast } from '../../helper/creaetToast.js';

const ProfileModal = ({ profile, setprofle }) => {
  // <!-- logout api -->
  const [logout, { isSuccess, isError, error, data }] = useLogoutMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      createToast(data?.message, 'success');
      navigate('/login');
    }
    if (isError) {
      createToast(error?.data?.message);
    }
  }, [isSuccess, isError, error, data, navigate]);

  return (
    <>
      <div className={`absolute duration-300  ease-in-out  ${profile ? ' top-20 opacity-100' : ' top-36   opacity-0'}  right-10 p-5 w-[300px]  bg-white border rounded-3xl`}>
        <div className='space-y-3'>
          <div className='flex  items-center gap-3'>
            <div className='h-14 w-14 rounded-full bg-indigo-400'></div>
            <p className='text-base font-semibold '>Anis Ahad</p>
          </div>
          <hr />

          <Link to={'/profile'}>
            <div className='flex text-base py-2 font-semibold items-center  gap-3 cursor-pointer hover:bg-slate-200 rounded-md p-1'>
              <MdAccountCircle className='text-2xl  ' /> <p>My account</p>
            </div>
          </Link>
          <div className='flex text-base py-2 font-semibold items-center  gap-3 cursor-pointer hover:bg-slate-200 rounded-md p-1'>
            <MdBarChart className='text-2xl ' /> <p>My blogs</p>
          </div>
          <div className='flex text-base py-2 font-semibold items-center  gap-3 cursor-pointer hover:bg-slate-200 rounded-md p-1'>
            <MdBookmark className='text-2xl ' /> <p>My bockmarks</p>
          </div>
          <div className='flex text-base py-2 font-semibold items-center  gap-3 cursor-pointer hover:bg-slate-200 rounded-md p-1'>
            <MdOutlineToggleOn className='text-2xl ' /> <p>Dark mode</p>
          </div>
          <div
            onClick={() => logout()}
            className='flex text-base py-2 font-semibold items-center  gap-3 cursor-pointer hover:bg-slate-200 rounded-md p-1'>
            <MdLogout className='text-2xl ' /> <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
