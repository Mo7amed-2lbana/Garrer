import axios from 'axios'
import { useFormik } from 'formik'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export default function RegisterPro() {

  const [ahmed, setahmed] = useState('');
  const [spnnerregister, setspnnerregister] = useState(false)
  let navagate = useNavigate()
  function validate(value) {


    let error = {}

    // validata for name
    if (!value.name) {

      error.name = "Required"

    } else if (value.name.length > 2 && value.name.length < 7) {
      error.name = "minimum length 2 maxmum length 8 "
    }

    //validata for family name

    if (!value.familyName) {
      error.familyName = 'Required'
    } else if (value.familyName.length > 2 && value.familyName.length < 7) {


      error.familyName = "minimum length 2 maxmum length 8"

    }
    if (!value.phone) {
      error.phone = "Required"
    } else if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value.phone)) {
      error.phone = "Not a valid Phone Number"

    }


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





  let formik = useFormik({


    initialValues: {
      name: '',
      familyName: '',
      phone: '',
      email: '',
      password: '',
      rePassword: '',

    },

    onSubmit: async function (values) {


      try {
        setspnnerregister(true)

        const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values).catch((erroe) => {

          setahmed(`  ${erroe.response.data.errors.msg} ${erroe.response.data.message}`);

        })



        if (data.message === "success") {

          navagate('/Login')
          setspnnerregister(false)


        }


      } catch (error) {



      }



    },
    validate,


  })



  return <>
    <div className="container">
      <div className="row">

        <div className=" col-12  col-md-6 col-3 col-sm-6  col-xl-12  m-auto my-2">

          <form onSubmit={formik.handleSubmit}>
            <div className="alerty"> {ahmed ? ahmed : ''}
            </div>
            <label htmlFor="name"  ></label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} id="name" name="name" type="text" className='form-control ' placeholder="الاسم" />
            {formik.touched.name && formik.errors.name ? <div className="alert alert-danger">{formik.errors.name}</div> : null}

            <label htmlFor="familyName"></label>
            <input onChange={formik.handleChange} value={formik.values.familyName} onBlur={formik.handleBlur} id="familyName" name="familyName" type="text" className='form-control ' placeholder='اسم العائله' />
            {formik.touched.familyName && formik.errors.familyName ? <div className="alert alert-danger">{formik.errors.familyName}</div> : null}

            <label htmlFor="phone" ></label>
            <input onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} id="phone" name="phone" type="phone" className='form-control ' placeholder='رقم الجوال' />
            {formik.touched.phone && formik.errors.phone ? <div className="alert alert-danger">{formik.errors.phone}</div> : null}

            <label htmlFor="email"></label>
            <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} id="email" name="email" type="email" className='form-control ' placeholder='البريد الالكتروني ' />
            {formik.touched.email && formik.errors.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}

            <label htmlFor="password" ></label>
            <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} id="password" name="password" type="password" className='form-control ' placeholder='كلمه السر' />
            {formik.touched.password && formik.errors.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}

            <label htmlFor="rePassowrd" ></label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} id="rePassword" name="rePassword" type="password" className='form-control ' placeholder='اعاده كلمه السر' />
            {formik.touched.rePassword && formik.errors.rePassword ? <div className="alert alert-danger">{formik.errors.rePassword}</div> : null}

            <div className='d-flex'>
              <button className='btn btn-info mt-2' disabled={!(formik.dirty && formik.isValid)} type="Submit" >Submit</button>
              {spnnerregister == true ? <div class="spinner-border text-primary me-2 mt-3" role="status">
                <span class="sr-only">Loading...</span>
              </div> : null}

            </div>






          </form>
        </div>
      </div>
    </div>

  </>
}
