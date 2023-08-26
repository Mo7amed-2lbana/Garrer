import { useFormik } from 'formik'
import React from 'react'

export default function Login() {


  const formik = useFormik({


    initialValues: {

      email: 'email',
      password: 'password',
  
    }


    ,
    
  })





  return <>
    <div className="container">
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
