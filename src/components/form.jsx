import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from '../assets';
import Spinner from './spinner';

function Form({ parentFunction, err }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //refs
  const nameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const addressRef = useRef();
  const occupationRef = useRef();
  const currentlyEmployedRef = useRef();
  const yrsEmployedRef = useRef();

  function submitHandler(e) {

    e.preventDefault();
    setIsLoading(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const date = dateRef.current.value;
    const address = addressRef.current.value;
    const occupation = occupationRef.current.value;
    const currentlyEmployed = JSON.parse(currentlyEmployedRef.current.value);
    const yrsEmployed = parseInt(yrsEmployedRef.current.value);

    const getAge = Math.floor(
      (new Date() - new Date(date).getTime()) / 3.15576e10
    );

    const userData = {
      name,
      email,
      age: getAge,
      address,
      occupation,
      currentlyEmployed,
      yrsEmployed,
    };

    parentFunction(userData, falseState);
  }

  function falseState() {
    setIsLoading(false);
  }

  return (
    <form className='form-container my-5 form-row' onSubmit={submitHandler}>
      <div className='form-group required col-md-6'>
        <button
          className='btn-style '
          type='button'
          onClick={() => navigate('/score')}
        >
          <ArrowIcon className='animate-icon' />
          View scores
        </button>

        <label htmlFor='inputName4' className='input-required'>
          Name
        </label>
        <input
          type='text'
          className='form-control'
          id='inputName4'
          ref={nameRef}
          required
        />
      </div>

      <div className='form-group required col-md-6'>
        <label htmlFor='inputEmail4' className='input-required'>
          Email
        </label>
        <input
          type='email'
          className={`${err && 'border border-danger'} form-control`}
          id='inputEmail4'
          ref={emailRef}
          required
        />
        {err && <div className='text-danger'>Email is already in use. </div>}
      </div>

      <div className='form-group col-md-6'>
        <label htmlFor='inputAge4'>Date of birth</label>
        <input
          type='date'
          className='form-control'
          id='inputAge4'
          ref={dateRef}
        />
      </div>
      <div className='form-group col-md-6'>
        <label htmlFor='inputAddress'>Address</label>
        <input
          type='text'
          className='form-control'
          id='inputAddress'
          ref={addressRef}
        />
      </div>

      <div className='form-group col-md-6'>
        <label>Currently employed </label>
        <select className='form-select mb-3' ref={currentlyEmployedRef}>
          <option value={false}></option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>

      <div className='form-group col-md-6'>
        <label htmlFor='inputOccupation4'>Occupation</label>
        <input
          type='text'
          className='form-control'
          id='inputOccupation4'
          ref={occupationRef}
        />
      </div>

      <div className='form-group col-md-6'>
        <label htmlFor='employedYears4'>How many years employed </label>
        <input
          type='Number'
          className='form-control'
          id='employedYears4'
          min='0'
          ref={yrsEmployedRef}
        />
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <button type='submit' className='btn btn-primary mt-3 w-100'>
          Sign up
        </button>
      )}
    </form>
  );
}

export default Form;
