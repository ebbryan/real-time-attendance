import React from 'react'

const Card = ({...props}) => {
    return (

        // <div  classNameclassName=" max-w-sm rounded overflow-hidden shadow-lg">
        //     <div classNameclassName="px-6 py-4">
        //             <h4 classNameclassName="text-2xl font-semibold text-gray-700"></h4>
        //               <div classNameclassName="text-gray-500"> </div>
        //                 </div>
        //                 <div classNameclassName="w-100 px-6 mt-4 sm:w-1/2 xl:w-1/3 sm:mt-0">
        //                         <div classNameclassName="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
        //                             <div classNameclassName="mx-5">
        //                                 <h4 classNameclassName="text-2xl font-semibold text-gray-700">{props.data}</h4>
        //                                 <div classNameclassName="text-gray-500">{props.card}</div>
        //                             </div>
        //                         </div>
        //                     </div>
        // </div>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"> 
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
    )
}
export default Card