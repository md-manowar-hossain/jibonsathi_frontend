import * as React from "react";
import style from "../assests/css/Register.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Register(){
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
    return(
        <section>
      <div className={style.signupContainer}>
        <div className={style.signup}>
          <div className={style.title}>
            <div>Create Your Account</div>
          </div>
          <div className={style.labelWithInput}>
            <label>Full Name:</label>
            <input type="text" name="name" placeholder="Enter Your Full Name" />
          </div>
          <div className={style.labelWithInput}>
            <label>Gender:</label>
            <div className={style.genderContainer}>
              <input type="radio" name="gender" id="male"/>
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female"/>
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className={style.labelWithInput}>
            <label>Email:</label>
            <input type="email" name="email" placeholder="example@gmail.com" />
          </div>
          {/* <div className={style.labelWithInput}>
            <label>Phone Number:</label>
            <input type="text" name="phone" placeholder="01xxxxxxxxx" />
          </div> */}
          <div className={style.labelWithInput}>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className={style.labelWithInput}>
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" />
          </div>
          <div className={style.terms}>          
            <input type="checkbox" name="terms" id="termCheck"/>
            <label htmlFor="termCheck">By clicking you agree to our <span><Link to={"/terms"}>Terms & Conditions</Link></span>.</label>
          </div>

          <div className={style.login}>
            <button>Register</button>
          </div>
          <div className={style.or}>
            or
          </div>
          <div className={style.google}>
            <button>Continue With Google</button>
          </div>
          <div className={style.noAccount}>
           Already have an account?
          </div>
          <div className={style.create}>
            <button onClick={login}>Login</button>
          </div>
        </div>
      </div>
    </section>
    )
}