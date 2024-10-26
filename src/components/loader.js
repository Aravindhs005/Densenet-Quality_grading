import React, { useEffect } from 'react'
import './loader.css'
import { preLoaderAnim } from './animation';

export const Loader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[]);
  return (
    <div className='loader'>
        <div className='words'>
            <span>Fresh . &nbsp;</span>
            <span>Sight . &nbsp;</span>
            <span>AI . &nbsp;</span>
            <span>🍎 &nbsp;</span>
        </div>
    </div>
  )
}
