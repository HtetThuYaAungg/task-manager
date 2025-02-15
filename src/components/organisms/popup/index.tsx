"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

type Props = {
  isVisible?: boolean;
  setIsVisible: (visible: boolean) => void;
  title: string;
}


const Popup = ({
  isVisible,
  setIsVisible,
  title,
  children,
}: Props & { children: React.ReactNode }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsVisible]);

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              ref={dropdownRef}
              className="w-[95%] max-w-[500px] min-w-[370px] h-5/6 flex flex-col items-center justify-center  bg-transparent rounded-[10px] "
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="mb-1 w-full bg-popupBackgroundColor rounded-t-[10px] px-7 py-4 shadow-md text-textGrayColor font-walone_bold">
                {title}
              </h2>

              <div className="w-full mx-auto mb-1 overflow-hidden flex flex-col items-center bg-popupBackgroundColor shadow-md rounded-b-[10px]">
                <div className="scrollbar m-3 items-center max-h-[100%] overflow-y-auto  rounded-md bg-popupBackgroundColor">
                  {children}
                </div>
              </div>


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Popup;
