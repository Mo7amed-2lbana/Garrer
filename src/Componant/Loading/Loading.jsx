import React, { useEffect, useLayoutEffect } from 'react';
import './_loading.scss';
import { useSelector } from 'react-redux';


export default function Loading() {

  const { value } = useSelector((state) => {
    return state.handleLoading;
  });
  console.log(value);
  

  return<>
  
  
    <div className='parent position-relative'>
        <div style={{width:`${value}%`}} className='child'></div>
    </div>
  
  
  </>
}
