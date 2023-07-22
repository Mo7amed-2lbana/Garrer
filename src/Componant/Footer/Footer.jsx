import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="mb-0 position-relative">
        
        {/* links  */}
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="item">
                <h5 className="fw-bold text-white ">رعاية العميل</h5>
                <ul className=" list-unstyled p-0">
                  <li>
                    <Link className=" text-decoration-none text-white">
                      اتصل بنا <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      أسئلة مكررة <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      سياسة الضمان <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      سياسة الاسترجاع والاستبدال{" "}
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      شروط الخدمة <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      سياسة الخصوصية <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="item">
                <h5 className="fw-bold text-white ">اكتشف جرير</h5>
                <ul className=" list-unstyled p-0">
                  <li>
                    <Link className=" text-decoration-none text-white">
                      دليل التسوق
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      قارئ جرير
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      مواقعنا
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      إصدارات جرير <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      مسابقة السرد القصصي
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="item">
                <h5 className="fw-bold text-white ">خدمات جرير</h5>
                <ul className=" list-unstyled p-0">
                  <li>
                    <Link className=" text-decoration-none text-white">
                      خدمة التقسيط إمكان
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      خدمة التقسيط كوارا
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      تمارا
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      خدمة استبدال الأجهزة
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      تذاكر جرير
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      خدمة الحماية الشاملة
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      خدمة تمديد الضمان
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      خدمة ما بعد البيع
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      مركز صيانة ابل
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      بطاقة خصم جرير
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      بطاقة جرير للهدايا
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      شركاء برامج المكافآت
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      خدمات شركات الإتصالات
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      مبيعات الشركات
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      Apple Care + خدمة
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      هواوي كير
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="item border-0">
                <h5 className="fw-bold text-white ">عن جرير</h5>
                <ul className=" list-unstyled p-0">
                  <li>
                    <Link className=" text-decoration-none text-white">
                      عن الشركة
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      حوكمة الشركة
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      تقارير
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      الأرباح الموزعة
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      تواصل مع علاقات المستثمرين
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      الاستدامة
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      المسؤولية الاجتماعية للشركة
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      فرص العمل
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className=" text-decoration-none text-white">
                      أخبار وأحداث
                      <i className="fa fa-angle-left"></i>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* copyright */}
        <div className="copyright">
          <div className="container">
            <p className="py-2 m-0 text-center text-white">
              تم التصميم بواسطة م/ محمد البنا && م/ محمود توفيق
            </p>
          </div>
        </div>

        {/* arrow top  */}
        <div className="arrow-top position-absolute bg-white d-flex justify-content-center align-items-center">
            <i className="fa fa-angle-up text-dark"></i>
        </div>
      </footer>
    </>
  );
}
