import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { Gender } from "@/types/gender.type";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";
import { Track } from "@/types/track.types";

const RegistrationModal = ({ ...props }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [address, setAddress] = useState("");

  const handleQrCodeGenerator = () => {
    if (!lastName && !firstName) {
      return;
    }
    setQrIsVisible(true);
  };

  const combinedValue = `${lastName}, ${firstName}`;
  // add the student Track and Strand Details

  const qrCodeRef = useRef(null);
  const downloadQRCode = () => {
    const qrCodeElement = qrCodeRef.current;

    if (qrCodeElement) {
      // Check if qrCodeElement is not null
      htmlToImage
        .toPng(qrCodeElement)
        .then(function (dataUrl) {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `${lastName}, ${firstName} ${middleName}.png`;
          // "qr-code.png"
          link.click();
        })
        .catch(function (error) {
          console.error("Error generating QR code:", error);
        });
    } else {
      console.error("QR code element not found.");
    }
  };

  const [genderData, setGenderData] = useState<Array<Gender>>([]);
  const [gender, setGender] = useState("");

  const getGender = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const result = await axios.get("http://localhost:5000/gender", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setGenderData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGender();
  }, []);

  const genderMapData = () => {
    return genderData.map((gender) => {
      return (
        <option key={gender.id} value={gender.id}>
          {gender.name}
        </option>
      );
    });
  };

  const [birthDate, setBirthDate] = useState("");
  const [qrIsVisible, setQrIsVisible] = useState(false);

  const [trackData, setTrackData] = useState<Array<Track>>([]);
  const [track, setTrack] = useState("");

  const handlePost = async () => {
    handleQrCodeGenerator()
    try {
      const accessToken = localStorage.getItem("accessToken");
      await axios.post(
        "http://localhost:5000/students",
        {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          suffix: suffix,
          contactNumber: contactNumber,
          contactPerson: contactPerson,
          address: address,
          gender: gender,
          isActive: true,
          birthDate: birthDate,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      alert("success !");
    } catch (error) {
      console.log(error, "error !");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[1000px]">
        <div className="bg-white p-3 rounded">
          <div className="flex flex-col">
            <div className="flex items-start justify-between" >
              <h1 className="font-semibold block mt-9 mb-5 text-3xl">
                {" "}
                Student Information{" "}
              </h1>
              {/* QR CODE FRAME */}
              <div id="qrfr">
                {qrIsVisible && (
                  <div className="box-border border-black h-32 w-32 p-4 border-2 mb-2">
                    <div ref={qrCodeRef} className="qrcode__image">
                      <QRCode value={combinedValue} size={100} />
                    </div>
                    <button onClick={downloadQRCode}>Download QR Code</button>
                  </div>
                )}
              </div>
            </div>

            {/* TRACK || STRAND */}
            <div className="grid grid-flow-col-dense gap-3 justify-start mb-3">
              <div>
                <label
                  htmlFor="track"
                  className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
                >
                  Track
                </label>
                <input
                  type="text"
                  id="track"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-40 p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Track"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="strand"
                  className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
                >
                  Strand
                </label>
                <input
                  type="text"
                  id="strand"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-40 p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Strand"
                  required
                />
              </div>
            </div>

            {/* ACTUAL FORM */}
            <div className="grid grid-flow-col w-full justify-auto gap-2 mb-3">
              <div>
                <label
                  htmlFor="first_name"
                  className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                  required
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="middle_name"
                  className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
                >
                  Middle name
                </label>
                <input
                  type="text"
                  id="middle_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Middle Name"
                  onChange={(e) => {
                    setMiddleName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last Name"
                  required
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="suffix"
                  className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
                >
                  Suffix
                </label>
                <input
                  type="text"
                  id="suffix"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Suffix"
                  required
                  onChange={(e) => {
                    setSuffix(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="grid grid-flow-col gap-2 mb-3">
              <label
                htmlFor="gender"
                className="flex items-center font-semibold mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Gender
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                {genderMapData()}
              </select>
              <label
                htmlFor="contact-no"
                className="flex items-center font-semibold ml-5 mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Birthdate
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="date"
                name=""
                id=""
                onChange={(e) => {
                  setBirthDate(e.target.value);
                }}
              />

              <label
                htmlFor="contact-no"
                className="flex items-center font-semibold ml-5 mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact-no"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-64 p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Contact Number"
                required
                onChange={(e) => {
                  setContactNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <hr className="mb-3" />

          <div>
            <h2 className="font-bold block mb-2 text-lg font-small text-gray-900 dark:text-black">
              Present Address
            </h2>
          </div>

          <div className="grid grid-flow-col items-justify gap-3">
            <div>
              <label
                htmlFor="address"
                className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Address
              </label>
              <input
                type="text"
                id="house-no"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Address"
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Lot No
              </label>
              <input
                type="text"
                id="lot-no"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Lot No."
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Street
              </label>
              <input
                type="text"
                id="street"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Street"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Barangay
              </label>
              <input
                type="text"
                id="barangay"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Barangay"
                required
              />
            </div>
          </div>
          <div className="grid grid-flow-col items-justify gap-3">
            <div>
              <label
                htmlFor="address"
                className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Municipality
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Municipality"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Province
              </label>
              <input
                type="text"
                id="province"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Province"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                ZIP Code
              </label>
              <input
                type="code"
                id="zip"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ZIP Code"
                required
              />
            </div>
          </div>

          <hr className="mb-3 mt-3" />
          <div className="flex flex-row w-full gap-4">
            <div>
              <label
                htmlFor="name"
                className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Person to be contacted in case of Emergency
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name of Parent/Guardian"
                required
                onChange={(e) => {
                  setContactPerson(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="confirm_password"
                className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
              >
                Contact No.
              </label>
              <input
                type="tel"
                id="c-number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Contact Number"
                required
              />
            </div>
          </div>

          {/* FOR QR GENERATION */}
          <div className="flex flex-row mt-2">
            <div className="flex mt-2 w-1/6 items-center">
              {/* <Button
                onChange={setQrCode}
                type="submit"
                text="Generate QR Code"
              /> */}

              <button
                onClick={() => {
                   handlePost(), downloadQRCode();
                }}
              >
                Save !
              </button>
            </div>

            {/* SAVE TO DATABASE */}
            {/* <div className="flex mt-2 w-1/6 items-center">
              <Button type="submit" text="Submit" onCLick={handlePost} />
            </div> */}
            <button onClick={props.onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
