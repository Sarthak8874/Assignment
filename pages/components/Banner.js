import React from "react";
import Image from "next/image";
import check from "../../styles/check.png";
import phone from "../../styles/phone.png";
import work from "../../styles/work.png";
function Banner() {
  return (
    <div className="w-full flex flex-col justify-around bg-gradient overflow-x-hidden  text-white">
      <div className="w-full flex justify-center mt-10">
        <div className="relative flex justify-center w-1332 h-569 flex-shrink-0">
          <div className="absolute w-1086 h-306 pr-30">
            <div className="flex justify-center w-full h-101 text-76 font-poppins font-600">
              Check your financial health
            </div>
            <div className="w-full flex justify-center">
              <div className="flex text-center w-550 leading-41.6 font-275 h-92 text-32  leading-130">
                Use WeathoMeter to get a free report card for your finances
                within minutes!
              </div>
            </div>
            <div className="w-full flex justify-center mt-6">
              <button className="w-256 h-68 rounded-full bg-orange shadow-btn font-600 text-32">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative top-80  left-20 w-full flex justify-center">
            <Image className="h-full" src={phone} />
          </div>
          <div className="absolute bottom-0 left-16 w-488 h-154">
            <div className="flex mb-4">
              <Image className="h-full mt-2" src={check} />
              <div className="border-b border-white text-29  w-320 font-600 font-poppins pb-3 m-1">
                Expected Retirement Age
              </div>
            </div>
            <div className="flex mb-4">
              <Image src={check} className="h-full mt-2" />
              <div className="border-b border-white text-29 w-320 font-600 font-poppins pb-3 m-1">
                Identify Mistakes
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 pl-5 w-488 h-154">
            <div className="flex mb-4">
              <Image src={check} className="h-full mt-2" />
              <div className="border-b border-white text-29 w-320 font-600 font-poppins pb-3 m-1">
                Personalised Road Map
              </div>
            </div>
            <div className="flex mb-4">
              <Image src={check} className="h-full mt-2" />
              <div className="border-b border-white text-29 w-320 font-600 font-poppins pb-3 m-1">
                Tips To Improve
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex flex-col justify-around bg-[url('/Cliping.png')] bg-cover bg-center mt-20">
        <div className="w-full flex  justify-center text-center pt-80 pb-10">
          <div className="relative w-884  px-10">
            <div className="absolute flex justify-center w-full h-101 text-76 font-poppins font-700 pr-20">
              How it works?
            </div>
            <Image src={work} />{" "}
            <div className="absolute top-80 left-[360px] text-27 text-center w-60 ">
              Register using phone and OTP
            </div>
            <div className="absolute top-80 left-6 text-27  text-center w-40 ">
              Answer few questions
            </div>
            <div className="absolute top-80 right-0 text-27 text-center w-60 ">
              Get report and personal roadmap
            </div>
            <button className="w-256 h-68 rounded-full bg-orange shadow-btn font-600 text-32">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
