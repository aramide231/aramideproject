import React from 'react';
import '../login.css';
import Logo from "./assets/unsplash_9pjBx5uVBlg.png"
import google from "./assets/1534129544 1.png"
import linkendn from "./assets/174857 1.png"
import { Link } from 'react-router-dom'

function LoginScreen() {
  return (
    <div className='loginScreen'>
      <div className="SignUpScreen">
        <img className="Unsplash9pjbx5uvblg" src={Logo} />
        <div className="Rectangle2" />
        <div className="Frame43244">
          <div className="Chatter">CHATTER</div>
          <div className="UnleashThePowerOfWordsConnectWithLikeMindedReadersAndWriters">Unleash the Power of Words, Connect with Like-minded Readers and Writers</div>
        </div>
        <div className="Frame43250">
          <div className="Frame43236">
            <div className="Registration">
              <div className="Frame49">REGISTER</div>
              <div className="jug">LOG IN</div>
            </div>
            <div className="Group14">
              <div  className="Rectangle12" />
              <button  className="Rectangle13" />
            </div>
          </div>
          <div className="RegisterAsAWriterReader">Register as a Writer/Reader</div>
          <div className="Frame43241">
          <div className="Frame43237">
            <div className="FirstName">First name</div>
            <div className="InputMedium">
              <div > <input className="InputMedium" type='name' placeholder='John' ></input> </div>
            </div>
          </div>
          <div className="Frame43238">
            <div className="LastName">Last name</div>
            <div className="InputMedium2">
              <div className="Text"> <input type='name' placeholder='Doe' className='InputMedium'  ></input></div>
            </div>
          </div>
        </div>
        <div className="Frame43239">
          <div className="YouAreJoiningAs">You are joining as?</div>
          
            <div className="AutoLayout">
              <div className="Text"> <input type='word' placeholder='Writer' className="InputMediumSelectDefault"></input> </div>
              <div className="IconsMediumChevron2">
                <div className="Vector" />
              </div>
            </div>
          
        </div>
        <div className="Frame43240">
          <div className="EmailAddress">Email address</div>
          <div className="InputMedium">
            <div className="Text"> <input type='word' placeholder='Email' className="InputMedium"  ></input></div>
          </div>
        </div>
        <div className="Frame43243">
          <div className="Password">Password</div>
          <div className="InputMedium" >
            <div  className="AutoLayout">
              <div className="Text"> <input type='word' placeholder='*********' className="InputMedium3" ></input> </div>
              <div className="IconsMediumEye">
                <div className="Vector" />
                <div className="Vector" />
              </div>
            </div>
          </div>
        </div>
        <div className="Frame43242">
          <div className="ConfirmPassword">Confirm password</div>
          <div className="InputMedium">
            <div className="AutoLayout">
              <div className="Text"><input type='word' placeholder='*********' className="InputMedium3"></input></div>
              <div className="EyeClosed">
                <div className="Vector" />
              </div>
            </div>
          </div>
        </div>
       <button className="Frame4" ><div  > 
          <div className="CreateAccount"> <span>Create account </span></div>
        </div></button>
       <button className="Frame43248" > <div >
          
          <div className="SignUpWithGoogle"><img className="one" src={google} /><span> Sign up with google </span></div>
        </div></button>
       <button className="Frame43249" > <div >
          <div className="SignUpWithLinkedin"> <img className="one" src={linkendn} /> <span> Sign up with Linkedin </span></div>
        </div></button>
      </div>
    </div>
        </div>
        
  );
  
  }

export default LoginScreen;
