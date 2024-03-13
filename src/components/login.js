import React from 'react'
import Logo from "./assets/unsplash_9pjBx5uVBlg.png"

function Login() {
  return (
    <div> 
<div> 
  <div className="CustomSignIn">
    <img className="CustomUnsplash9pjbx5uvblg" src={Logo} />
    <div className="CustomRectangle2"></div>
    <div className="CustomFrame43244">
      <div className="CustomChatter">CHATTER</div>
      <div className="CustomUnleashThePowerOfWordsConnectWithLikeMindedReadersAndWriters">Unleash the Power of Words, Connect with Like-minded Readers and Writers</div>
    </div>
    <div className="CustomFrame43250">
      <div className="CustomFrame43236">
        <div className="CustomRegistration">
          <div className="CustomFrame49">
            <div className="CustomRegister">REGISTER</div>
            <div className="CustomLogIn">LOG IN</div>
          </div>
          <div className="CustomGroup14">
            <div className="CustomRectangle12"></div>
            <div className="CustomRectangle13"></div>
          </div>
        </div>
        <div className="CustomWelcomeBack">Welcome back</div>
      </div>
    </div>
    <div className="CustomFrame43264">
      <div className="CustomFrame43240">
        <div className="CustomEmailAddress">Email address</div>
        <input type='word' placeholder='johndoe@gmail.com' className="CustomInputMedium"></input>
      </div>
      <div className="CustomFrame43243">
        <div className="CustomPassword">Password</div>
        <input type='word' placeholder='*********' className="CustomInputMedium"></input>
      </div>
      <button className="Frame4" ><div  > 
          <div className="CreateAccount"> <span>Log in</span></div>
        </div></button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login