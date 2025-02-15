import Image from "next/image";
import React from "react";
import { Home, CircleCheck,Grip,CircleX ,CirclePlus,PencilRuler,Eraser} from "lucide-react";


// Define the IconState enum
export enum IconState {
  Home = "home",
  CircleCheck = "check",
  Grip = "grip",
  CircleX = "close",
  CirclePlus = "add",
  PencilRuler= "edit",
  Eraser = "delete"
}

export enum ImageState {
  Google = "google",
}

// Mapping of IconState to Ant Design icons
const iconMap = {
  [IconState.Home]: Home,
  [IconState.CircleCheck] : CircleCheck,
  [IconState.Grip] : Grip,
  [IconState.CircleX] : CircleX,
  [IconState.CirclePlus] : CirclePlus,
  [IconState.PencilRuler] : PencilRuler,
  [IconState.Eraser] : Eraser
};

const imageMap = {
  [ImageState.Google]: "",
};

// Define the props type
type IconProps = {
  name: IconState | ImageState ;
  onClick?: () => void;
  style?: string;
  size?: number;
};

const Icon = ({ name, onClick, style, size }: IconProps) => {
  if (name in imageMap) {
    const imageUrl = imageMap[name as ImageState];
    if (!imageUrl) {
      console.warn(`No image URL defined for '${name}'.`);
      return null;
    }

    return (
      <Image
        src={imageUrl}
        alt={name}
        className={style}
        onClick={onClick}
        width={size || 0}
        height={size || 0}
      />
    );
  }

  const IconComponent = iconMap[name as IconState];

  if (!IconComponent) {
    console.warn(`Icon for '${name}' not found.`);
    return null;
  }

  return <IconComponent onClick={onClick} className={style} size={size} />;
};

export default Icon;
