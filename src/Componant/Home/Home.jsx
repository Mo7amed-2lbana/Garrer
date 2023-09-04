import React from "react";
import { Link, Outlet } from "react-router-dom";
import Login from "./../Login/Login";
import RegisterPro from "./../RegisterPro/RegisterPro";

export default function Home() {
  return (
    <>
      <div className="home">This is my Home</div>

      {/* <div className="container">
        <div className="row my-5">
          <div className="col-md-6 one-md">
            <div className="div-div-login">
              <Link to="login">
                <button className="btn  button-login">
                  <div className="">
                    <h3> تسجيل الدخول</h3>
                    <p>اذا كان لديك حساب</p>
                  </div>
                </button>
              </Link>

              <hr />

              <Link to="RegisterPro">
                <button className="btn  button-login">
                  <div className="">
                    <h3> انشاء حساب </h3>
                    <p>اذا لم يكن لديك حساب . فانشى حساب جديد</p>
                  </div>
                </button>
              </Link>

              <hr />

              <Link to="CreateBusinessAccount">
                <button className="btn  button-login">
                  <div className="">
                    <h3> انشاء حساب اعمال مجاني </h3>
                    <p>اذا كنت تشتري لشركتك او عملك</p>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <Outlet />
          </div>
        </div>
      </div> */}
    </>
  );
}
