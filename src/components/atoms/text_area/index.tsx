import React from "react";
import Props from "./type";


const TextArea = ({ id, rows, cols, disabled, placeholder, onChange, value, rest }: Props) => {

    const disableUi = disabled
        ? " bg-gray-100 opacity-70 cursor-not-allowed"
        : "bg-backgroundColor";

    return (
        <>
            <textarea
                {...rest}
                id={id}
                rows={rows}
                cols={cols}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                value={value}
                className={`${disableUi} w-full p-4 text-textGrayColor  border  rounded-lg shadow-md text-xs focus:outline-none border-textGrayColor focus:border-2 focus:ring-activeColor focus:border-textGrayColor`}
            >
            </textarea>
        </>
    );
};

export default TextArea;