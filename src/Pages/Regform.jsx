import React from 'react';
import '../styles/Regform.css';

const Regform = (props) => {
  const setfunc = (e) => {
    // console.log(e.target.name)
    props.setvalue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='Form'>
      <label>{props.Name}</label>
      <input name ={props.name}type={props.type} placeholder={props.placeholder} value={props.initialstate[props.type]} onChange={setfunc} />
    </div>
  );
};

export default Regform;
