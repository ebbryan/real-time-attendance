import Header from '@/components/Header'
import Layout from '@/components/Layout'
import QRCodeGenerate from '@/components/QRCode'
import React from 'react'

export default function index() {
  return (
    <>
    
    <div className='flex items-center justify-center p-5 bg-red-500'>
      QR Scanner
    </div>
    <div className='flex items-center justify-center p-5'>
      <QRCodeGenerate/>
    </div>

    </>
    
  )
}
