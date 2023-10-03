import React from "react";

const Datatable = ({ ...props }) => {
  <>
    <div className="">
      <p className="text-gray-700 text-base"> {props.datatable}</p>
      <table className="w-full">
        <thead>
          <tr className="border-2 border-solid-black border-l-0 border-r-0">
            <th className="w-24 text-md px-6 py-2"> Student's ID </th>
            <th className="w-32 text-left text-md px-6 py-2"> Name </th>
            <th className="w-32 text-md px-6 py-2"> Status </th>
            <th className="w-24 text-md px-6 py-2"> QR Code </th>
            <th className="w-32 text-md px-6 py-2"> Update </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-md text-center py-2"> 001</td>
            <td className="text-md text-left mt-5 px-6 py-2">
              {" "}
              Vinch Gabriel{" "}
            </td>
            <td className="text-md text-center py-2">Enrolled </td>
            <td className="text-center">
              <button className="w-auto mt-2 mb-2">
                <span> </span>
              </button>
            </td>
            <td className="text-center">
              <button className="w-auto mt-2 mb-2">
                <span></span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-md text-center py-2"> 002</td>
            <td className="text-md text-left px-6 py-2"> Erik Davis</td>
            <td className="text-md text-center py-2">Enrolled </td>
            <td className="text-center">
              <button className="w-auto mt-2 mb-2">
                <span> </span>
              </button>
            </td>
            <td className="text-center">
              <button className="w-auto mt-2 mb-2">
                <span></span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-md text-center py-2"> 003</td>
            <td className="text-md text-left px-6 py-2"> Patrick Casuyon</td>
            <td className="text-md text-center py-2">Enrolled</td>
            <td className="text-center">
              <button className="w-auto mt-2 mb-2">
                <span> </span>
              </button>
            </td>
            <td className="text-center">
              <button className="w-auto mt-2 mb-2">
                <span></span>
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-md text-center py-2"> 004</td>
            <td className="text-md text-left px-6 py-2">
              {" "}
              John Anthony Arroza
            </td>
            <td className="text-md text-center py-2">Enrolled </td>
            <td className="text-center">
              <button className="w-auto mt-2 mb-2">
                <span> </span>
              </button>
            </td>
            <td className="text-center">
              <button className="w-auto mt-2 mb-2">
                <span></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>;
};
export default Datatable;
