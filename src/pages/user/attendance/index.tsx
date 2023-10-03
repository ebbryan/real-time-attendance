import AttendanceTable from '@/components/AttendanceTable'
import Button from '@/components/Button';
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import RegistrationModal from '@/components/RegistrationModal';
import React, { useState} from 'react'


export default function index() {

  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Layout>
    {/* <Header title='Attendance Here'/> */}
   
    <div className='flex flex-col text-2xl font-bold whitespace-nowrap mt-8 ml-8'> 
            <h1> Attendance Lists </h1>
          </div>
          <div className="flex w-100 justify-end mr-4">
          <Button onClick={showModalHandler} text="Scan for Attendance"/>
        </div>
        <AttendanceTable />
        {showModal && (<RegistrationModal onClose={hideModalHandler}/>)} 
   </Layout>

  )
}


