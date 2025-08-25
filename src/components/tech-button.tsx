import React from "react";
import { IconType } from "react-icons";
interface TechButtonProps {
  content: string;
  Icon: IconType;
  color?: string;
}

const TechButton = ({ content, Icon, color }: TechButtonProps) => {
  return (
    <button
      className={`bg-neutra-800  border ${
        color
          ? `border-${color}-400 text-${color}-400`
          : "border-red-400 text-red-400"
      } flex items-center gap-3 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group`}
    >
      <Icon className="size-6" />
      <span
        className={`bg-${color}-400  shadow-${color}-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]`}
      />
      {content}
    </button>
  );
};

export default TechButton;
