import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { apiLoginCarrer } from './../../Store/apiSlice';
import { Navigate, useNavigate } from 'react-router-dom';



export default function Login({ saveUser}) {


  const [err, setErr] = useState(null);
  const Dispatc = useDispatch();
  const nav = useNavigate();
  function validate (value){

    let error = {}


    if (!value.email) {
      error.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.email)) {
      error.email = "  Invalid email address "
    }
    if (!value.password) {

      error.password = " Required "

    } else if (!/^[A-Z][a-z 0-9]{5,10}$/i.test(value.password)) {
      error.password = "Invalid password address"
    }
    return error
  }
  const formik = useFormik({


    initialValues: {

      email: '',
      password: '',
  
    },

    onSubmit : (mahmoud)=>{
      // console.log(mahmoud);
        Dispatc(apiLoginCarrer(mahmoud)).then(({payload})=>{
          console.log(payload);
          if(payload.message === "success")
            localStorage.setItem("token" , payload.token );
            
          
         
            if(payload === undefined){
            setErr("Error ! please cheack Email Or Password");
          }

          
         
          
        })
    }
,

validate

,

  })





  return <>


  
    <div className="container">
      {err?<>
        <h4 className='text-danger'>{err}</h4>
      </>:''}
      <div className="row">
        <div className="col-md-12">
          <form action="" onSubmit={formik.handleSubmit}>
           
          <label htmlFor="email"></label>
            <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} id="email" name="email" type="email" className='form-control ' placeholder='البريد الالكتروني ' />
            {formik.touched.email && formik.errors.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}

            <label htmlFor="password" ></label>
            <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} id="password" name="password" type="password" className='form-control ' placeholder='كلمه السر' />
            {formik.touched.password && formik.errors.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}

          
              <button className='btn btn-info mt-2'  type="Submit" >Submit</button>

            {/* <div class="spinner-border text-primary me-2 mt-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>  */}


          </form>
        </div>
      </div>
    </div>


  </>
}




