import React from 'react'

import { Link } from 'react-router-dom';
import NavbarTwo from './../NavbarTwo/NavbarTwo';



export default function Navbar() {



  return <>
    <div>
    </div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid   border">


        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li class="nav-item  borders">
              <Link class="nav-link active mt-2" aria-current="page" to="#">
                <i class="fa-solid fa-user iconnn ps-3"></i>ادخل لحسابك او التسجيل الان
              </Link>
            </li>
            <li class="nav-item borders border">
              <Link class="nav-link active mt-2" aria-current="page" to="#">
                <i class="fa-solid fa-heart ps-2 iconnn">
                  
                </i >

                المفضله
              </Link>
            </li>
            <li class="nav-item borders border">
              <Link class="nav-link active mt-2" aria-current="page" to="#">
              <i class="fa-solid fa-truck iconnn ps-2"></i>طلباتن الاونلاين</Link>
            </li>

            <li class="nav-item borders border">
              <Link class="nav-link active" aria-current="page" to="#">

                <div class="dropdown">
                  <button
                    class="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false">
                      <i class="fa-solid fa-grip  ps-2"></i>
                    خدمات جرير

                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item " href="#" >خدمات التقسيط</a></li>
                    <li><a class="dropdown-item " href="#">خدمه التقسيط كوارا</a></li>
                    <li><a class="dropdown-item " href="#">تمارا</a></li>
                    <li><a class="dropdown-item" href="#">خدمه استبدال الاجهزه </a></li>
                    <li><a class="dropdown-item" href="#"> تذاكر جرير </a></li>
                    <li><a class="dropdown-item" href="#">  خدمات ما بعد البيع </a></li>
                    <li><a class="dropdown-item" href="#">  مركز صيانه ابل</a></li>
                    <li><a class="dropdown-item" href="#">  بطاقه خصم جرير</a></li>
                    <li><a class="dropdown-item" href="#">  بطاقه جرير للهديا</a></li>
                    <li><a class="dropdown-item" href="#">شركاء برنامج المكافات  </a></li>
                    <li><a class="dropdown-item" href="#">  خدمات شركه الاتصالات</a></li>
                    <li><a class="dropdown-item" href="#"> مبيعات الشركات </a></li>
                    <li><a class="dropdown-item" href="#">  خدمه + App Care</a></li>
                    <li><a class="dropdown-item" href="#">  هواوي كير </a></li>
                  </ul>
                </div>

              </Link>
            </li>
            <li class="nav-item borders border">
              <Link class="nav-link active" aria-current="page" to="#">
              <div class="dropdown">
                  <button
                    class="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false">
                      <i class="fa-solid fa-exclamation ps-2"></i>
المساعده
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#" >9897868676اتصل بنا </a></li>
                    <li><a class="dropdown-item" href="#"> راسلناmahmoud_legrnt@yahoo.com</a></li>
                    <li><a class="dropdown-item" href="#">انظمه وسياسات الضمان </a></li>
                    <li><a class="dropdown-item" href="#"> الاسترجاع والاستبدال </a></li>
                    <li><a class="dropdown-item" href="#"> اتصل بنا </a></li>
                    <li><a class="dropdown-item" href="#"> شريط الخدمه</a></li>
                    <li><a class="dropdown-item" href="#"> سياسيه الخصوصيه</a></li>
                    
                  </ul>
                </div>
              </Link>
          
            </li>
            <li class="nav-item borders border">
              <Link class="nav-link active" aria-current="page" to="#">
              <i class="fa-solid fa-location-dot mt-2 ps-2"></i>فروعنا 
              </Link>
          
            </li>
          
            <li class="nav-item borders ">
              <Link class="nav-link active" aria-current="page" to="#">
              <div class="dropdown">
                  <button
                    class="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false">
                      <i class="fa-solid fa-grip  ps-2"></i>
                    خدمات جرير

                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">خدمات التقسيط</a></li>
                    <li><a class="dropdown-item" href="#">خدمه التقسيط كوارا</a></li>
                    <li><a class="dropdown-item" href="#">تمارا</a></li>
                    <li><a class="dropdown-item" href="#">خدمه استبدال الاجهزه </a></li>
                    <li><a class="dropdown-item" href="#"> تذاكر جرير </a></li>
                  </ul>
                </div>
              </Link>
          
            </li>
            
            
          </ul>
 
        </div>
      </div>
    </nav>
    <NavbarTwo />
  </>


}