import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext';
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
import '../stylesheet/Signin.css';
import { Link } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const { loginUser } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      const userData = { email, password };
      const user = await loginUser(userData);
      console.log('User signed in:', user);

      // Navigate to the UserProfile page
      navigate('/user-profile');
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };
  
  return (
    <CDBContainer className="d-flex align-items-center justify-content-center min-vh-100">
      <CDBCard style={{ width: '25rem' }} className="form-container">
        <CDBCardBody className="mx-4">
          <div className="text-center text-black mt-4 mb-2" style={{ marginBottom: '20px'}}>
            <p className="h3 font-weight-bold"> Sign in </p>
          </div>
          <div className="mb-2" style={{ marginTop: '40px'}}>
          <CDBInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <CDBInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <p className="mt-n3 text-end ">
            <CDBLink className="p-0" to="#">
              Forgot Password ?
            </CDBLink>
          </p>
          <CDBBtn color="dark" className="btn-block my-4 mx-0" onClick={handleSignin}>
            Sign in
          </CDBBtn>
          <p className="text-center"> or sign in with</p>

          <div className="my-3 d-flex justify-content-center">
            <CDBBtn style={{ backgroundColor: 'DodgerBlue', color: 'white', border: 'none', marginRight: '10px' }} className="m-0">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>

            <CDBBtn style={{ backgroundColor: 'DeepSkyBlue', color: 'white', border: 'none', marginRight: '10px' }} className="m-0">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn color="white" className="m-0">
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </div>
          <hr />
          <p className="text-center">
            Not a member?{' '}
            <Link to="/sign-up">Sign Up</Link>
          </p>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};

export default Signin;




