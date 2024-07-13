"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import {
  BugAntIcon,
  FingerPrintIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        {/* Hero Section */}
        <div className="flex justify-center items-center w-full px-5 py-10 bg-gray-800">
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-4xl font-bold leading-tight">
              Your medical record,
              <br />
              but on-chain
            </h1>
            <button className="mt-4 px-6 py-3 bg-ctaButtons rounded-full text-customButtonText">Try It Now</button>
          </div>
          <div className="flex-1">
            <img src="/hero_img.png" alt="Your Medical Records" className="w-1/2 h-auto" />
          </div>
        </div>
        {/* Privacy Section */}
        <div className="w-full text-center py-12 bg-gray-900">
          <h2 className="text-3xl font-semibold mb-4">Because we all love privacy</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Medcare is an innovative blockchain-based platform designed to revolutionize the management of medical
            information while ensuring the utmost privacy and security for users{" "}
          </p>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-circleButtons text-white rounded-full p-4">
                <BugAntIcon className="h-8 w-8" />
              </div>
              <p className="mt-2">Interoperability</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-circleButtons text-white rounded-full p-4">
                <MagnifyingGlassIcon className="h-8 w-8" />
              </div>
              <p className="mt-2">Scalability</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-circleButtons text-white rounded-full p-4">
                <LockClosedIcon className="h-8 w-8" />
              </div>
              <p className="mt-2">Smart Contracts</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-circleButtons text-white rounded-full p-4">
                <ShieldCheckIcon className="h-8 w-8" />
              </div>
              <p className="mt-2">Storage</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-circleButtons text-white rounded-full p-4">
                <FingerPrintIcon className="h-8 w-8" />
              </div>
              <p className="mt-2">Privacy</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-ctaButtons text-customButtonText rounded-full">Try me now</button>
        </div>
      </div>
    </>
  );
};

export default Home;
