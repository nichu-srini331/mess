import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
export default function CatogeryRp() {
    let fdate=localStorage.getItem('fdate')
    let tdate=localStorage.getItem('tdate')
    const [data,sdata]=useState('')
    useEffect(() => {
        axios.get("http://localhost:3002/dispatch/retrive",{
            params: {
              fdate:fdate,
              tdate:tdate
            }
          }).then((response) => {
            sdata(response.data)

            console.log(response.data)
        });

    },[])
    
    console.log(fdate,tdate)
  return (
    <div>
      Category
    </div>
  )
}
