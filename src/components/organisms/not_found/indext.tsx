"use client";

import Button from "@/components/atoms/button";
import dynamic from "next/dynamic";
import notFoundAnimation from "../../../../public/not_found.json";


import { useRouter } from "next/navigation";
import React from "react";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const NotFoundUi = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="flex justify-center  w-full  p-4">
      <div className="flex flex-col items-center">
        <Lottie
          loop
          animationData={notFoundAnimation}
          play
          className="w-[300px] h-[300px] opacity-90"
        />
        <Button variant="primary" label="Back" onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default NotFoundUi;
