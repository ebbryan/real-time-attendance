import { useState } from 'react'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import React from 'react'
import Table from '@/components/Table'
import Button from '@/components/Button'
import RegistrationModal from '@/components/RegistrationModal'

export default function Student() {

  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Layout>
       {/* <Header header="Lists of Students"/> */}
       <div className='flex flex-col text-2xl font-bold whitespace-nowrap mt-8 ml-8'> 
            <h1> Lists of Students </h1>
          </div>
          <div className="flex w-100 justify-end mr-4">
          <Button onClick={showModalHandler} text="Enroll Student"/>
        </div>
        <Table />
        {showModal && (<RegistrationModal onClose={hideModalHandler}/>)} 
       
      </Layout>
      
  )
}
