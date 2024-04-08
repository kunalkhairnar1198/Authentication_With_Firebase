import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import { AuthContext } from '../Store/AuthContext';

const ProfileForm = () => {
  const passwordRef = useRef()
  const {token} = useContext(AuthContext)

  const ChangePassword =(e)=>{
    e.preventDefault()
    const enteredChangePsw = passwordRef.current.value;
       
    //changing psw validations how it is works
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAhvNVuowUtmbbRdMqap6VS3S9Lz68mA4Y',{
      method:'POST',
      body:JSON.stringify({
        idToken: token,
        password: enteredChangePsw,
        returnSecureToken: false,
      }),
      headers:{
        'Content-Type':'application/json',
      }
    }).then((res)=>{
      alert('succesfully changed Password', res.ok)
      // console.log(res) 
    } )
  }

  return (
    <form className={classes.form} onSubmit={ChangePassword}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={passwordRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
