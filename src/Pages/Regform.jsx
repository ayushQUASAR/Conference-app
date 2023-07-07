import React, { useEffect } from 'react';
import '../styles/Regform.css';

const Regform = (props) => {
  useEffect(()=>{})
  const setfunc = (e) => {
    // console.log('bro',props.state[props.name])
    props.setvalue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='Form'>
      <label>{props.Name}</label>
      <input name={props.name} type={props.type} placeholder={props.placeholder} value={props.state[props.name]}  onChange={setfunc} />
    </div>
  );
};

export default Regform;
