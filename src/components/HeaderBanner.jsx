import React from "react";
import gambar from '../../src/images/Software-bro.png';
import { BiSearchAlt} from "react-icons/bi";


const HeaderBanner = () => {

  return (
    <div className="w-full h-18 flex flex-row justify-between bg-white ">
      <div className="w-full  justify-around flex flex-row p-4 ">
        <div className="w-1/2 flex flex-col  items-center ">
          <div className="p-4 mt-10">
            <div><h3 className="text-2xl font-bold text-black mx-auto mb-2">Cloud Hosting Indonesia dengan pelayanan terbaik</h3></div>
            <div><h4 className="text-base text-gray-500 ">Cloud Hosting Indonesia dengan pelayanan terbaik dan harga murah serta diskon nama domain.</h4></div>
          </div>
          <div className="p-6 flex flex-row items-center w-5/6">
            <div className="flex flex-row justify-around gap-4 bg-orange-200  rounded-lg w-full p-4">
                <input type="text" placeholder="cari nama domain...." className="bg-white text-gray-800 w-5/6 p-4 rounded-xl"/>
                <button className="bg-red-700 text-white font-bold text-base p-4 flex flex-row justify-between items-center gap-2 rounded-xl">Cari  <BiSearchAlt size="24" /> </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-rows   items-center ">
          <img src={gambar} alt="ini gambar" className="h-80 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
