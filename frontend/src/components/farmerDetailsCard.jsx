import { FaUser } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import axios from "axios"
import { useEffect, useState } from "react";


export const FarmerDetailCard = () => {

  async function getUser() {

    const [userData, setUserData] = useState(null)
    const response = await axios.get("http://localhost:4000/api/getUserDetails", {
      withCredentials: true
    })
    console.log("response: " + JSON.stringigy(response))
  }

  useEffect(() => {
    const response = getUser()

  }, [])

  return (

    <div className="flex ml-10 gap-10 max-h-screen  items-start w-1/4 mt-20">
      <div className="flex flex-col gap-8">

        <div className="flex flex-col gap-2 items-center text-sm">
          <div className="border border-green-500 w-24 h-24 rounded-full flex items-center justify-center">
            <FaUser size={40} className="text-green-700" />
          </div>
          <h2 className="text-lg font-semibold">Farmer Name</h2>
          <h2 className="text-gray-600">Farmer Address</h2>
        </div>


        <div className="flex flex-col gap-4 text-green-600">

          <div className="flex items-center gap-2">
            <FiMessageSquare size={20} className="text-green-700" />
            <h2 className="font-semibold hover:bg-green-700 hover:text-white rounded-lg px-2 py-1">
              OngoingTalks
            </h2>
          </div>


          <div className="flex items-center gap-2">
            <AiOutlineCheckCircle size={20} className="text-green-700" />
            <h2 className="font-semibold hover:bg-green-700 hover:text-white rounded-lg px-2 py-1">
              Completed
            </h2>
          </div>


          <div className="flex items-center gap-2">
            <MdVerified size={20} className="text-green-700" />
            <h2 className="font-semibold hover:bg-green-700 hover:text-white rounded-lg px-2 py-1">
              Confirmed
            </h2>
          </div>
        </div>
        <button className="flex justify-end items-center gap-2">
          {/* <MdVerified size={20} className="text-red-500" /> */}
          <h2 className="font-semibold hover:bg-red-700 bg-red-400 text-white rounded-lg px-2 py-1">
            Logout
          </h2>
        </button>
      </div>

    </div>
  );
};
