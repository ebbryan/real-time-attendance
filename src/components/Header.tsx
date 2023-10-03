import React from 'react'

const Header = ({...props}) => {

  return (
    // <div className="font-semibold text-md text-left items-start transition-transform -translate-x-full sm:translate-x-0
    // px-3 py-2 dark:bg-blue-500 text-blue-900 dark:text-white rounded-lg border"> {props.title} </div>
    
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900 shadow-lg rounded-lg">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> Real-time and Feedback Attendance System </span>
                </a>
            </div>   
        </nav>
    </header>
    </div>
  )
}
export default Header