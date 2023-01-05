import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import Slidebar from './Slidebar';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
function Report() {
  const [fdate,sfdate]=useState("")
  const [tdate,stdate]=useState("")
  const [data,sdata]=useState()
  const navigate = useNavigate();
  console.log(fdate)
  function category(){
    
    localStorage.setItem('fdate', fdate);
    localStorage.setItem('tdate', tdate);
    navigate("/catogery")

  }
  function pvt(e){
      e.preventDefault()
  }
  function average(){
    localStorage.setItem('fdate', fdate);
    localStorage.setItem('tdate', tdate);
    navigate("/average")
  }
  function monthly(){
    localStorage.setItem('fdate', fdate);
    localStorage.setItem('tdate', tdate);
    navigate("/monthly")

  }
  function item(){
    localStorage.setItem('fdate', fdate);
    localStorage.setItem('tdate', tdate);
    navigate("/item")

  }
  console.log(data)
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          
        <ProSidebarProvider>
      <Slidebar/>
      </ProSidebarProvider>
        </div>
        <div className='col-9'>
        <form onSubmit={pvt}>
        <input type="date" value={fdate} onChange={(e)=>sfdate(e.target.value)}/>
        <input type="date" value={tdate} onChange={(e)=>stdate(e.target.value)}/>
        <button onClick={category}>Category</button>
        <br/>
        <button onClick={average}>Average</button>
        <br/>
        <button onClick={monthly}>Monthly</button>
        <button onClick={item}>Item</button>
      </form>

        </div>
        

      </div>
      
             
    </div>
  )
}

export default Report