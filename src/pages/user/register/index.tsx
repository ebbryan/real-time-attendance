import Header from '@/components/Header'
import Layout from '@/components/Layout'
import RegistrationForm from '@/components/RegistrationForm'
import React from 'react'

export default function index() {
  return (
    <Layout>
      <Header title='Registration Form'/>
      <RegistrationForm />
      
   </Layout>
  )
}
