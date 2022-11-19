import './App.css';
import logo1 from "./image/logo1.png"
import logo2 from "./image/logo2.png"

import logo3 from "./image/logo3.png"

function SignIn() {
  return (
    <div>
        <header>
          <img src={logo1} />
          <img src={logo2} />
        </header>

        <div className='imgC'><img src={logo3}/></div>

        <h1>Sign In</h1>

        <form>
            <input className='input1' type="text" placeholder='Email'/>
            <input className='input2'  type="password" placeholder='Password'/>

            <input className='input3' type="Submit" value="Connexion" />
        </form>





    </div>
  );
}

export default SignIn;
