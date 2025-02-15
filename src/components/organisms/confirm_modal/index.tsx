import Button from '@/components/atoms/button';
import Popup from '@/components/organisms/popup'
import dynamic from 'next/dynamic';
import React from 'react'


const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });


interface Props {
    showPopup: boolean,
    setShowPopup: (showPopup: boolean) => void;
    onConfirm: () => void;
    title: string,
    description: string,
    icon:  object | { default: object; } | undefined;
}

const ConfirmModal = ({ showPopup, setShowPopup, onConfirm, title, icon }: Props) => {


    const handleClose = () => {
        setShowPopup(!showPopup)
    }

    return (
        <Popup
            title={title}
            isVisible={showPopup}
            setIsVisible={setShowPopup}
        >
            <Lottie
                loop
                animationData={icon}
                play
                className="w-full h-[150px] "
            />
            <div className="flex justify-end gap-2 py-6">
                <Button label="Cancel" variant='link' type="button" size="medium" onClick={handleClose} />
                <Button label={"Delete"} variant='danger' size="medium" type="button" onClick={onConfirm} />
            </div>

        </Popup>
    )
}

export default ConfirmModal

