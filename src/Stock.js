import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import Slidebar from './Slidebar';

function Stock() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-3'>
                <ProSidebarProvider>
                    <Slidebar/>
                </ProSidebarProvider>
            </div>
            <div className='col-9'>
                Avail STOCKS
            </div>
        </div>
    </div>
  )
}

export default Stock