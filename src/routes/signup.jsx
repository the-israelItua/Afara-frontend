import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/form';
import { signup } from '../helpers/api';

function Signup() {
  const [error, setError] = useState();
  const navigate = useNavigate();

  function sendUserDetails(details, falseState) {
    signup(details).then((res) => {
      if (res.message === 'Email is already in use') {
        falseState();
        setError(true);
      } else {
        setTimeout(() => {
            navigate('/score')
            
        }, 2000);
      }
    });
  }

  return (

      <Form parentFunction={sendUserDetails} err={error}/>
    
  );
}

export default Signup;
