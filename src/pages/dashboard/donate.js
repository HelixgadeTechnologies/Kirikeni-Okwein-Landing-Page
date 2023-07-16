import Layout from "@/components/Layout";
import React from "react";
import DonateImg from "@/assets/donate.png";
import Image from "next/image";
import GiftBox from "@/assets/mdi_gift.png";
const showDonation = [
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
  {
    date: "20, Mar 2022",
    amount: "2000",
  },
];
function Donate() {
  return (
    <Layout ActivePage="donations" h="Donatoins">
      <div className="md:flex md:py-5 md:px-[50px] px-4 pt-[10px] md:space-x-10 space-y-3 mb-5">
        <div className="rounded-lg border border-gray md:w-[46.23vw] md:h-[570px] flex flex-col  items-center bg-[#F7F8F978] text-center md:px-8 px-3  py-5 pt-7">
          <Image src={DonateImg} alt="" className="w-[315px] h-[290px]" />
          <div className="px-7 pt-4">
            <h4 className="text-[#003338] font-bold text-[21px] py-1">
              Donate to preserve and promote the Wakirike language.
            </h4>
            <p className="text-[16px] pb-5 text-[#4B5768]">
              Aid prevent the extinction of the Wakirike language. Donate to
              this cause to support the continuity of the language.
            </p>
            <a href="/dashboard/donate-pay"
              className="w-[87%]  bg-[#005259] text-white  py-[10px] px-4 rounded hover:bg-white hover:border text-[16px] hover:border-[#005A58] hover:text-[#005A58]"
              type="submit"
            >
              Donate now
            </a>
          </div>
        </div>
        <div className="rounded-lg border border-gray md:w-[25.2vw] md:h-[550px] ">
          <div className="text-center py-5">
            <h5 className="">All Donations</h5>
          </div>
          {showDonation.length == 0 ? (
            <div className="flex flex-col justify-center items-center h-[500px] text-center space-y-4">
              <Image src={GiftBox} alt="" />
              <p>
                You have not made any donation, all donations made will appear
                here
              </p>
            </div>
          ) : (
            <div>
              <div className="flex justify-between px-3 border-gray border-b py-4">
                <p>Date</p>
                <p className="font-bold">Amount</p>
              </div>
              {showDonation.map((donate)=>(
                <div className="flex justify-between px-3 border-gray border-b py-4">
                <p>{donate.date}</p>
                <p className="font-bold">₦ {donate.amount}</p>
              </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Donate;
