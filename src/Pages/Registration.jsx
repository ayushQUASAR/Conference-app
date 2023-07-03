import React from 'react'
import pic1 from '../Images/reg/conferegdetail1.jpg'
import pic2 from '../Images/reg/confregdetail2.jpg'
import Nav from '../Components/Nav'
import '../styles/registration.css'
import Footer from '../Components/HomeComponent/Footer'

const Registration = () => {
  return (
    <>
    <Nav/>
    <div className="registration-box">
      <div className="first-box">
      <h1>Registration Details</h1>
      <h2>PAPER SUBMISSION</h2>
      <div class="cont">
    <h3 >Registration Includes</h3>
    <h4 >Presentation &amp; Publication</h4>
    <ul>
        <li>Oral OR poster presentation of 15-20 minutes</li>
        <li>Conference Proceedings</li>
        <li>Attendance of the sessions</li>
        <li>Offering certificates of participation</li>
        <li>Conference kits and bag</li>
        <li>Conference lunch and dinner</li>
        <li>Coffee/tea breaks</li>

    </ul>

    <h4 >Presentation Only</h4>
    <ul>
        <li>Oral OR poster presentation of 15-20 minutes</li>
        <li>Attendance of the sessions</li>
        <li>Offering certificates of participation</li>
        <li>Conference kits and bag</li>
        <li>Conference lunch and dinner</li>
        <li>Coffee/tea breaks</li>

    </ul>

    <h4 >Listener</h4>
    <ul>
        
        <li>Attendance of the sessions</li>
        <li>Offering certificates of participation</li>
        <li>Conference kits and bag</li>
        <li>Conference lunch and dinner</li>
        <li>Coffee/tea breaks</li>

    </ul>
    <p><i class="fa fa-phone" aria-hidden="true"></i>+91 9344550460</p>
    <p><i class="fa fa-envelope-o" aria-hidden="true"></i> info@iser.org.in</p> 
  </div>
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
        <div className="reg-box1">
        <img src={pic1} alt="" />
      </div>
    
      </div>
      
      <table width="70%" height="427" border="0" cellpadding="2">
 <tbody><tr>
    <td bgcolor="#CCCCCC"><strong>Categories</strong></td>
   
    <td bgcolor="#CCCCCC"><strong>International</strong></td>
	<td bgcolor="#CCCCCC"><strong>Virtual Presentation (International Delegates)</strong></td>
	<td bgcolor="#CCCCCC"><strong>Indian</strong></td>
	<td bgcolor="#CCCCCC"><strong>Virtual Presentation (Indian Delegates)</strong></td>
  </tr>
   <tr bgcolor="#b7b6ca">
    <td>Under Graduate</td>
	<td><input name="group100" type="radio" value="USD 200"/>USD 200</td>
	<td><input name="group100" type="radio" value="USD 150"/>USD 150</td>				
    
    <td><input name="group100" type="radio" value="INR 5000"/>INR 5000</td>
	<td><input name="group100" type="radio" value="INR 4000"/>INR 4000</td>
  </tr>
  
     <tr bgcolor="#b7b6ca">
    <td>Under Graduate with Scopus publication</td>
	<td><input name="group100" type="radio" value="USD 300"/>USD 300</td>
	<td><input name="group100" type="radio" value="USD 250"/>USD 250</td>				
    
    <td><input name="group100" type="radio" value="INR 15000"/>INR 15000</td>
	<td><input name="group100" type="radio" value="INR 14000"/>INR 14000</td>
  </tr>
  
  <tr bgcolor="#e4dcd5">
    <td>Post Graduate &amp; PHD Research Scholar</td>
	<td><input name="group100" type="radio" value="USD 250"/>USD 250</td>
	<td><input name="group100" type="radio" value="USD 200"/>USD 200</td>				
    
    <td><input name="group100" type="radio" value="INR 6000"/>INR 6000</td>
	<td><input name="group100" type="radio" value="INR 5000"/>INR 5000</td>
  </tr>
  
   <tr bgcolor="#e4dcd5">
    <td>Post Graduate &amp; PHD Research Scholar with Scopus publication</td>
	<td><input name="group100" type="radio" value="USD 350"/>USD 350</td>
	<td><input name="group100" type="radio" value="USD 300"/>USD 300</td>				
    
    <td><input name="group100" type="radio" value="INR 16000"/>INR 16000</td>
	<td><input name="group100" type="radio" value="INR 15000"/>INR 15000</td>
  </tr>
 
   <tr bgcolor="#b7b6ca">
    <td>ACADEMICIAN</td>
	<td><input name="group100" type="radio" value="USD 300"/>USD 300</td>
	<td><input name="group100" type="radio" value="USD 250"/>USD 250</td>				
    
    <td><input name="group100" type="radio" value="INR 7000"/>INR 7000</td>
	<td><input name="group100" type="radio" value="INR 6000"/>INR 6000</td>
  </tr>
  
   <tr bgcolor="#b7b6ca">
    <td>ACADEMICIAN /INDUSTRIAL PROFESSIONALS WITH SCOPUS PUBLICATION</td>
	<td><input name="group100" type="radio" value="USD 400"/>USD 400</td>
	<td><input name="group100" type="radio" value="USD 350"/>USD 350</td>				
    
    <td><input name="group100" type="radio" value="INR 17000"/>INR 17000</td>
	<td><input name="group100" type="radio" value="INR 16000"/>INR 16000</td>
  </tr>
  
  <tr bgcolor="#b7b6ca">
    <td>LISTENERS</td>
	<td><input name="group100" type="radio" value="USD 100"/>USD 100</td>
	<td><input name="group100" type="radio" value="USD 70"/>USD 70</td>				
    
    <td><input name="group100" type="radio" value="INR 2500"/>INR 2500</td>
	<td><input name="group100" type="radio" value="INR 1500"/>INR 1500</td>
  </tr>
  
</tbody></table>
</div>
   </div>
   <div className="lastfoot">
   <Footer/>
   </div>
    </>
  )
}

export default Registration;