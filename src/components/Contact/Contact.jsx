import React from 'react'
import './Contact.css'
import icon from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/loc-icon.png'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "199c642b-b4ed-4adb-8c01-0c27a85d6c82");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    }
    else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className='contact' id='Contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={icon} alt="" /></h3>
            <p>The more time you spend scrolling through agencies, the more revenue you’re leaving on the table. 
                Speak to the Bluleadz inbound specialists now for a free consultation, where our team will 
                collaboratively set goals with you and build a customized strategy. 
                This roadmap will show you what growth looks like and how you will get to where you want to be.
            </p>
            <ul>
                <li><img src={mail} alt="" />bmw2006@gmail.com</li>
                <li><img src={phone} alt="" />+24 49238 78743</li>
                <li><img src={location} alt="" />77 Massachusetts Ave, America<br /> MA 075226, USA</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name='name' placeholder='Enter your Name' required/>
            <label htmlFor="">Phone Number</label>
            <input type="tel" name="phone" id="" placeholder='Enter Your Mobile Number' required/>
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" rows="6" placeholder='Enter your Message'></textarea>
            <button type="submit" className='btn dark-btn'>Submit Now</button>
          </form>
          <span>{result}</span>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact


// .contact{
//   margin: 80px;
//   max-width: 90%;
//   display: flex;
//   align-content: center;
//   justify-content: space-between;
// }
// .contact-col{
//   flex-basis: 48%;
//   color: #676767;
// }
// .contact-col h3{
//   color: #000F38;
//   font-weight: 500;
//   font-size: 25px;
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// }
// .contact-col h3 img{
//   width: 45px;
//   margin-left: 10px;
// }
// .contact-col p{
//   max-width: 450px;
//   list-style: 0.3;
// }
// .contact-col ul li{
//   display: flex;
//   align-items: center;
//   margin: 20px 0;
// }
// .contact-col ul li img{
//   width: 50px;
//   margin-right: 20px;
// }
// .contact form input, .contact form textarea{
//   display: block;
//   width: 100%;
//   background: #EBECFE;
//   padding: 15px;
//   border: 0;
//   outline: 0;
//   margin-bottom: 15px;
//   margin-top: 50px;
//   resize: none;
// }
// .contact-col span{
//   display: block;
//   margin: 20px 0;
// }
// @media(max-width: 700px){
//   .contact{
//       display: block;
//   }
//   .contact-col{
//       padding: 20px;
//   }
// }