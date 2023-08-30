import React from 'react'
import { Link } from 'react-router-dom'
import garrer from "../../Images/مكتبة جرير.png";

export default function NavbarTwo() {
  return <>
    <nav class="navbar navbar-expand-lg bg-white  ">
      <div class="container">
        < Link class="navbar-brand" to="" className='me-5'><img className='navbartwo ' src={garrer} alt="" /></ Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className='whateee'>
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="البحث ..." />
              </div>
            </li>

            <li>
              <div className='dropdownone-father'>
              <div class="dropdown  dropdownone">
                <button
                  class="btn  dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  تصفح الاقسام
                </button>
                <ul class="dropdown-menu  " aria-labelledby="dropdownMenuButton">

                  <li className='ahmed' >
                    <div >
                      <a class="dropdown-item" href="#" > <i class="fa-regular fa-folder iconone"></i>الادوات المكتبيه
                      </a>
                    </div>
                    <i class="fa-solid fa-arrow-left left" ></i>
                  </li>
                  <li className='ahmed' >
                    <div >
                      <a class="dropdown-item" href="#" > <i class="fa-solid fa-school icontwo "></i> الادوات المدرسيه
                      </a>
                    </div>
                    <i class="fa-solid fa-arrow-left left"></i>
                  </li>
               
                
                  <li className='ahmed' >
                    <div >
                      <a class="dropdown-item" href="#" > <i class="fa-solid fa-gamepad iconthrees "></i>العاب ووسائل تعليم الاطفال  
                      </a>
                    </div>
                    <i class="fa-solid fa-arrow-left left"></i>
                  </li>
                  <li className='ahmed' >
                    <div >
                      <a class="dropdown-item" href="#" > <i class="fa-solid fa-compass-drafting iconfour "></i>مستلزمات الرسم والاشغال اليدويه 
                      </a>
                    </div>
                    <i class="fa-solid fa-arrow-left left "></i>
                  </li>
                  <li className='ahmed' >
                    <div >
                      <a class="dropdown-item" href="#" > <i class="fa-solid fa-book iconfive"></i>الكتب العربيه
                      </a>
                    </div>
                    <i class="fa-solid fa-arrow-left left"></i>
                  </li>
                  <li className='ahmed' >
                    <div >
                      <a class="dropdown-item" href="#" > <i class="fa-solid fa-computer iconseven"></i> الكمبيوتر والتابلت 
                      </a>
                    </div>
                    <i class="fa-solid fa-arrow-left left"></i>
                  </li>
                  <li className='ahmed' >
                    <div >
                      <a class="dropdown-item" href="# " > <i class="fa-solid fa-print iconeight"></i> الطابعات والماسحات الضوئيه
                      </a>
                    </div>
                    <i class="fa-solid fa-arrow-left left"></i>
                  </li>
                  <li className='ahmed' >
                    <div >
                      <a class="dropdown-item" href="# " > <i class="fa-solid fa-diagram-project  iconnine"></i> البوجكتور وشاشات العرض 
                      </a>
                    </div>
                    <i class="fa-solid fa-arrow-left left"></i>
                  </li>
                  <li className='ahmed' >
                    <div >
                      <a class="dropdown-item" href="# " > <i class="fa-regular fa-clock iconten "></i> الساعات الاجهزه الذكيه
                      </a>
                    </div>
                    <i class="fa-solid fa-arrow-left left"></i>
                  </li>
                  <li className='ahmed' >
                    <div >
                      <a class="dropdown-item" href="# " > <i class="fa-solid fa-music iconeleven"></i>مكبرات الصوت والسماعات ولالكتورنيات
                      </a>
                    </div>
                    <i class="fa-solid fa-arrow-left left"></i>
                  </li>


                </ul>



              </div>
              </div>
            
            </li>



          
            <li>
              <div class="dropdown">
                <button
                  class="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
                    العلامات التجاريه
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#" >ابل </a></li>
                  <li><a class="dropdown-item" href="#" >سامسونج</a></li>
                  <li><a class="dropdown-item" href="#" > انكر </a></li>
                  <li><a class="dropdown-item" href="#" > مايكور سفت</a></li>
                  <li><a class="dropdown-item" href="#" > روكو</a></li>
                  <li><a class="dropdown-item" href="#" > فيفو</a></li>
                  <li><a class="dropdown-item" href="#" >ابسون</a></li>
                </ul>


              </div>
            </li>



            <div>
            <i class="fa-solid fa-cart-shopping iconshopping"></i>
            </div>
          </ul>

        </div>
      </div>
    </nav>

  </>
}
