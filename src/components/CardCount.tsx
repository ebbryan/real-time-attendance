import { cardCountProps } from '@/props/cardCountProps.type'
import React, { FunctionComponent } from 'react'
import { HiUserGroup } from "react-icons/hi2";

export const CardCount: FunctionComponent<cardCountProps> = ({cardData, title}) => {
  return (
    <div className="bg-white shadow-lg w-80 grid col-span-2 grid-cols-3">
          <div className="flex items-center justify-center"><HiUserGroup className="text-6xl"/></div>
          <div>
            <h1>Total Number of {title}:</h1>
          </div>
          <h1 className="flex items-center justify-center text-xl font-bold">{cardData !== null
              ? `${cardData}`
              : "Loading..."}</h1>
        </div>
  )
}

export default CardCount