import { useNavigate, useParams } from 'react-router-dom';
import { useRegisterVerifyTokenQuery } from '../features/auth/authApiSlice.js';
import { useEffect } from 'react';
import { createToast } from '../helper/creaetToast.js';
import { useDispatch } from 'react-redux';
import { getUserData } from '../features/auth/authSlice.js';

const RegisterTokenVerify = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isSuccess, isError, error } = useRegisterVerifyTokenQuery(token);

  useEffect(() => {
    if (isSuccess) {
      createToast(data?.message, 'success');
      dispatch(getUserData(data));
      navigate('/');
    }
    if (isError) {
      createToast(error.data?.message);
      navigate('/login');
    }
  }, [isSuccess, data, isError, error, navigate, dispatch]);
};

export default RegisterTokenVerify;
