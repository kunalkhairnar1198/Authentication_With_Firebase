import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading]= useState(false)
  const emailRef = useRef('')
  const pswRef = useRef('')

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler =(e)=>{
    e.preventDefault()

    const enteredEmail = emailRef.current.value;
    const enterdPassword = pswRef.current.value;
  

    setIsLoading(true)

    if(isLogin){

    }else{
       fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhvNVuowUtmbbRdMqap6VS3S9Lz68mA4Y',{
            method: 'POST',
            body:JSON.stringify({
              email:enteredEmail,
              password:enterdPassword,
              returnSecureToken:true
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((res) =>{

            setIsLoading(false)
            
            if(res.ok){
                  //...sucess
                }else{
                  return res.json().then((data) =>{
                    //Show error modal 
                    let errorMessage = 'Authentication Failed';
                        // if(data && data.error && data.error.message){
                        // errorMessage = data.error.message;
                        //   console.log('singup failed',data)
                        // }
                        alert(errorMessage)
                  })
                }
             })
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={pswRef}
            required
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login': 'Create Account'}</button>}
          {isLoading && <p>Sending request....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
