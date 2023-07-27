import React, { useEffect, useState, useMemo } from 'react'
// import pic1 from '../Images/reg/conferegdetail1.jpg'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Nav from '../Components/Nav'
import '../styles/registration.css'
import { Icon } from '@iconify/react';
import Footer from '../Components/HomeComponent/Footer'
import Regform from './Regform'
import Button from '@mui/material/Button';


const Registration = () => {
  const [Phone, setPhone] = useState('');
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }
  const initialstate = {
    name: '',
    phone: '',
    country: '',
    email: '',
    course: '',
    inst_name: '',
    dob: '',
    papers: '',
    International: '',
    vpInt: '',
    Indian: '',
    vpInd: ''


  }

  const [state, setstate] = useState(initialstate);
  const [dataset, setdataset] = useState([])
  // const [optionval, setoptions] = useState('')


  // localStorage.setItem('Application_form',JSON.stringify(appl_data.a_data))

  // const handleRadioChange = (e) => {
  //   const { name, rvalue } = e.target;
  //   setState((prevVal) => {
  //     return { ...prevVal, [name]: rvalue };
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setdataset((preval) => {
      return [...preval, state]
    })
    setstate(initialstate)


  };
  const handleoption = (e) => {
    setstate((preval) => {
      return { ...preval, papers: e.target.value }
    })
  }
  useEffect(() => {
    localStorage.setItem('Application_form', JSON.stringify(dataset));
  }, [dataset]);
  useEffect(() => {
    const fetchdata = localStorage.getItem('Application_form')
    // const olddata;
    if (fetchdata) {
      // console.log(JSON.parse(fetchdata))
    }

  }, [])

  return (
    <>
      <Nav />
      <div className="registration-box">
        <div className="first-box">
          <h1>Registration Details</h1>
          <h2>PAPER SUBMISSION</h2>
          <div className="adjust-box">

            <div className="detail-1">

              <div className="li">
                <ul>
                  <li>Authors from India and abroad are invited to submit manuscripts reporting original unpublished research and recent developments in the topics related to the conference.</li>
                  <li>All the papers submitted to the conference should be written in English with length six to eleven pages (6-11).</li>
                  <li>Simultaneous submissions (papers already submitted to other conferences/journals) are not allowed.</li>
                  <li>Plagiarism Check using Turnitin</li>
                  <li>Papers having more than 20% plagiarism score will be examined and those that are deemed unacceptable will be rejected/withdrawn without a formal review.</li>
                  <li>All the paper submission will be done on EasyChair conference management software.</li>
                  <li>Reviewer assignment will also be made using EasyChair.</li>
                </ul></div>
              {/* <div className="reg-box1">
                <img src={pic1} alt="" />
              </div> */}


            <div className="table">
              <table width="80%" height="500px" border="0" cellpadding="2">
                <tbody><tr>
                  <td bgcolor="#CCCCCC"><strong>Categories</strong></td>

                  <td bgcolor="#CCCCCC"><strong>International</strong></td>
                  <td bgcolor="#CCCCCC"><strong>Virtual Presentation (International Delegates)</strong></td>
                  <td bgcolor="#CCCCCC"><strong>Indian</strong></td>
                  <td bgcolor="#CCCCCC"><strong>Virtual Presentation (Indian Delegates)</strong></td>
                </tr>
                  <tr bgcolor="#b7b6ca">
                    <td>Under Graduate</td>
                    <td><input name="group100" type="radio" value="USD 200" />USD 200</td>
                    <td><input name="group100" type="radio" value="USD 150" />USD 150</td>

                    <td><input name="group100" type="radio" value="INR 5000" />INR 5000</td>
                    <td><input name="group100" type="radio" value="INR 4000" />INR 4000</td>
                  </tr>

                  <tr bgcolor="#b7b6ca">
                    <td>Under Graduate with Scopus publication</td>
                    <td><input name="group100" type="radio" value="USD 300" />USD 300</td>
                    <td><input name="group100" type="radio" value="USD 250" />USD 250</td>

                    <td><input name="group100" type="radio" value="INR 15000" />INR 15000</td>
                    <td><input name="group100" type="radio" value="INR 14000" />INR 14000</td>
                  </tr>

                  <tr bgcolor="#e4dcd5">
                    <td>Post Graduate &amp; PHD Research Scholar</td>
                    <td><input name="group100" type="radio" value="USD 250" />USD 250</td>
                    <td><input name="group100" type="radio" value="USD 200" />USD 200</td>

                    <td><input name="group100" type="radio" value="INR 6000" />INR 6000</td>
                    <td><input name="group100" type="radio" value="INR 5000" />INR 5000</td>
                  </tr>

                  <tr bgcolor="#e4dcd5">
                    <td>Post Graduate &amp; PHD Research Scholar with Scopus publication</td>
                    <td><input name="group100" type="radio" value="USD 350" />USD 350</td>
                    <td><input name="group100" type="radio" value="USD 300" />USD 300</td>

                    <td><input name="group100" type="radio" value="INR 16000" />INR 16000</td>
                    <td><input name="group100" type="radio" value="INR 15000" />INR 15000</td>
                  </tr>

                  <tr bgcolor="#b7b6ca">
                    <td>ACADEMICIAN</td>
                    <td><input name="group100" type="radio" value="USD 300" />USD 300</td>
                    <td><input name="group100" type="radio" value="USD 250" />USD 250</td>

                    <td><input name="group100" type="radio" value="INR 7000" />INR 7000</td>
                    <td><input name="group100" type="radio" value="INR 6000" />INR 6000</td>
                  </tr>

                  <tr bgcolor="#b7b6ca">
                    <td>ACADEMICIAN /INDUSTRIAL PROFESSIONALS WITH SCOPUS PUBLICATION</td>
                    <td><input name="group100" type="radio" value="USD 400" />USD 400</td>
                    <td><input name="group100" type="radio" value="USD 350" />USD 350</td>

                    <td><input name="group100" type="radio" value="INR 17000" />INR 17000</td>
                    <td><input name="group100" type="radio" value="INR 16000" />INR 16000</td>
                  </tr>

                  <tr bgcolor="#b7b6ca">
                    <td>LISTENERS</td>
                    <td><input name="group100" type="radio" value="USD 100" />USD 100</td>
                    <td><input name="group100" type="radio" value="USD 70" />USD 70</td>

                    <td><input name="group100" type="radio" value="INR 2500" />INR 2500</td>
                    <td><input name="group100" type="radio" value="INR 1500" />INR 1500</td>
                  </tr>

                </tbody></table>
                </div>
            </div>
            <div class="cont">
              <h3 >Registration Includes</h3>
              <h4 >Presentation &amp; Publication</h4>
              <ul>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Oral OR poster presentation of 15-20 minutes</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Conference Proceedings</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Attendance of the sessions</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Offering certificates of participation</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Conference kits and bag</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Conference lunch and dinner</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Coffee/tea breaks</li>

              </ul>

              <h4 >Presentation Only</h4>
              <ul>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Oral OR poster presentation of 15-20 minutes</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Attendance of the sessions</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Offering certificates of participation</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Conference kits and bag</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Conference lunch and dinner</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Coffee/tea breaks</li>

              </ul>

              <h4 >Listener</h4>
              <ul>

                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Attendance of the sessions</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Offering certificates of participation</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Conference kits and bag</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Conference lunch and dinner</li>
                <li><Icon icon="tabler:triangle-filled" color="white" rotate={1} />Coffee/tea breaks</li>

              </ul>
              <p><i class="fa fa-phone" aria-hidden="true"></i>+91 9336550460</p>
              <p><i class="fa fa-envelope-o" aria-hidden="true"></i> info@nitj.org.in</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='form-section'>
          <div className="formh2"><h2>Register</h2></div>
          <Regform Name='Name' name='name' type='text' state={state} placeholder='Name' setvalue={setstate} initialstate={initialstate} />

          <Regform Name='Date of Birth' state={state} name='dob' type='date' placeholder='Date of Birth' setvalue={setstate} initialstate={initialstate} />
          <div className="Form inp ">
            <label for="papers" style={{ padding: '10px 0 ' }}>Choose a Paper:</label>

            <select name="papers" onChange={handleoption} value={state.papers} >
              <option value="Paper1">paper 1</option>
              <option value="Paper2">paper 2</option>
              <option value="Paper3">paper 3</option>
            </select>
          </div>
          {/* <Regform Name='Phone' name='phone' type='tel' state={state} setvalue={setstate} initialstate={initialstate} /> */}
          <Regform Name='Email' state={state} name='email' type='email' placeholder='Email' setvalue={setstate} initialstate={initialstate} />
          <Regform Name='Institute Name' state={state} name='inst_name' type='text' placeholder='Institute Name' setvalue={setstate} initialstate={initialstate} />
          <Regform Name='Course' name='course' state={state} type='text' placeholder='Course' setvalue={setstate} initialstate={initialstate} />
          {/* <Regform Name='Country' name='country' state={state} type='text' placeholder='Country' setvalue={setstate} initialstate={initialstate} /> */}
          {/* {console.log('hi', dataset)} */}
          <div className='reg-sect-btn'>
            <div className="Form">
              <label htmlFor="country">Country:</label>
              <Select options={options} value={value} onChange={changeHandler} />
            </div>

            <div className="Form">
            <div className="inp">  <PhoneInput
              placeholder="Enter phone number"
              value={Phone}
              onChange={setPhone} /></div>
              </div>
            <div className="butt"><button  onClick={handleSubmit}  >
              Submit
            </button></div>
          </div>
        </form>
      </div>
     

      <div className="lastfoot">
        <Footer />
      </div>


    </>
  )
}

export default Registration; 