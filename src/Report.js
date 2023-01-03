import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar';
import Slidebar from './Slidebar';

function Report() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-3'>
          <ProSidebarProvider>
            <Slidebar/>
          </ProSidebarProvider>
        </div>
        <div className='col-9'>
          REPORTS
        </div>
      </div>
    </div>
  )
}

export default Report