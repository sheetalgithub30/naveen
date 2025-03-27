import React from "react";
import Navbar from "../components/Navbar";
import name from "../assets/nameBlack.svg";
import line from "../assets/contactUs_Line.svg";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

function ContactUs() {
  return (
    <div>
      <Navbar color={"black"} name={name} />
      <div className="flex w-[75%] m-auto h-[70vh] justify-between items-center max-md:inline">
        <div className="w-[60%] max-md:w-[90%] max-md:m-auto">
          <p className="font-Sora text-base font-normal my-4">
            Get in touch with <strong>Influcent</strong>
          </p>
          <p className="font-Sora text-6xl font-semibold">
            We are always ready to help you and answer your questions
          </p>
          <p className="font-Sora text-base font-normal my-4">
            If you have any query or facing any issue you can reach out to us on
          </p>
        </div>
        <div className="max-md:hidden">
          <img src={line} />
        </div>
        <div className="w-[30%] max-md:w-[90%] max-md:my-14 max-md:mx-4">
          <div className="flex items-start my-4">
            <MdOutlineEmail className=" text-xl mx-2" />
            <div>
              <p className="font-Sora text-base font-semibold">Email</p>
              <p className="font-Sora font-normal text-base">
                Shubhamg@influcent.com
              </p>
            </div>
          </div>
          <div className="flex  items-start my-4">
            <IoLocationOutline className="text-xl mx-2" />
            <div>
              <p className="font-Sora text-base font-semibold">Address</p>
              <p className="font-Sora font-normal text-base">
                GH 2, Pashchim Vihar
              </p>
              <p className="font-Sora font-normal text-base"> New Delhi</p>
            </div>
          </div>
          <div className="flex items-start my-4">
            <FaRegHeart className="text-xl mx-2" />
            <div>
              <p className="font-Sora text-base font-semibold">
                Social Networks
              </p>
              <div className="flex my-4  ">
                <a href="https://www.instagram.com/influcent/"
                 target="_blank">
                  <img src={instagram} className="hover:scale-110" />
                </a>
                <a
                  href="https://www.linkedin.com/company/influcent/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BGMG7ojBESImFgZ%2F%2B%2BbwEkQ%3D%3D"
                  target="_blank"
                >
                  <img src={linkedin} className="ml-3 hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
