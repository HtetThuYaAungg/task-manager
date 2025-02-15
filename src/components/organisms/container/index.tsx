"use client";

import React, { useState } from "react";
import { Home, LucideProps, Settings,CirclePlus } from "lucide-react"; 
import "./styles.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Breadcrumb from "../bread_crumb";
import AddTask from "../add_task";


const NAV_ITEMS = [
  { path: "/", label: "Home", Icon: Home },
  { path: "#", label: "", Icon: CirclePlus, showIcon: true }, 
  { path: "/setting", label: "Setting", Icon: Settings },
];

const NavigationLink = ({
  path,
  label,
  Icon,
  showIcon,
  handleClickAdd,
}: {
  path: string;
  label: string;
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  showIcon?: boolean;
  handleClickAdd?: () => void;
}) => {
  const pathname = usePathname();

  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  const isActive = pathname === path || pathname.startsWith(path + "/");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple effect after animation ends
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    
    }, 600);
    if (handleClickAdd) {
      handleClickAdd();
    }
  };

  return (
    <Link
      href={path}
      className="relative flex flex-col items-center justify-center overflow-hidden w-full p-2 h-[4rem] max-sm:rounded-t-xl rounded-xl"
      onClick={handleClick}

    >
      <Icon
        size={showIcon ? 50 : 24}
        className={`${ showIcon ? " text-textGrayColor opacity-80 cursor-pointer hover:text-activeColor" : isActive ? "text-activeColor" : "text-textColor"}`}
      />
      <span
        className={`text-xs font-walone_regular pt-1 ${isActive ? "text-activeColor" : "text-textColor"
          }`}
      >
        {label}
      </span>

      {/* Ripple Effect using Framer Motion */}
      <div className="absolute inset-0 pointer-events-none rounded-full">
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bg-activeColor  rounded-full w-full h-[4rem] "
            style={{
              left: ripple.x,
              top: ripple.y,
              width: "100%",
              height: "100%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
   
    </Link>
  );
};

export const Container = ({ children }: { children: React.ReactNode }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <div className="bg-backgroundColor flex flex-col min-w-[350px]">
      {/* Top Bar */}
      <div className="w-full bg-backgroundColor h-[4rem] flex">

        <div className="w-full bg-popupBackgroundColor max-[639px]:rounded-b-xl rounded-br-xl h-[4rem] items-center flex justify-center">
          <h1 className="sm:text-3xl text-2xl font-walone_bold text-center text-activeColor">Task Management App</h1>
        </div>
      </div>

      <div className="flex max-[639px]:flex-col w-full bg-backgroundColor">
        {/* Sidebar Navigation */}
        <div className=" max-[639px]:hidden w-[5rem] h-content bg-popupBackgroundColor rounded-br-xl py-5">
          <div className="  py-5 overflow-auto second-h-content rounded-full flex justify-center w-[5rem]">
            <nav className=" space-y-9 sidebar flex flex-col items-center ">
              {NAV_ITEMS.map(({ path, label, Icon,showIcon }) => (
                <NavigationLink
                  key={path}
                  path={path}
                  label={label}
                  Icon={Icon}
                  showIcon={showIcon}
                  handleClickAdd={showIcon ? () => setShowPopup(!showPopup) : undefined}
                />
              ))}
            </nav>
          </div>
        </div>
        <div className=" w-full bg-popupBackgroundColor transition-none  h-content ">
          {/* Main Content */}
          <div className="w-full bg-backgroundColor  h-content max-[639px]:rounded-none  rounded-tl-3xl px-4 pb-4 pt-2 ">
            <div className=" h-[30px] ">
              <Breadcrumb />
            </div>
            <div className="scrollbar w-full bg-backgroundColor  second-h-content overflow-y-auto rounded-xl ">
              {children}
              {showPopup && <AddTask showPopup={showPopup} setShowPopup={setShowPopup} />}
            </div>

          </div>
          {/* Bottom Navigation (Mobile) */}
          <div className="w-full max-[639px]:flex hidden  max-[639px]:fixed relative bottom-0 bg-backgroundColor h-[4rem] items-center">
            <div className=" w-full bg-popupBackgroundColor rounded-t-xl h-[4rem] flex justify-around items-center">
              {NAV_ITEMS.map(({ path, label, Icon,showIcon }) => (
                <NavigationLink
                  key={path}
                  path={path}
                  label={label}
                  Icon={Icon}
                  showIcon={showIcon}
                  handleClickAdd={showIcon ? () => setShowPopup(!showPopup) : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
