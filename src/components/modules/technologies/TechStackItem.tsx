import Image from "next/image";
import type {TechStackItemProps} from "./types";

export const TechStackItem = ({item}: TechStackItemProps) => {
  return (
    <div className="flex-shrink-0 mx-4 flex items-center md:gap-4 gap-2 rounded-lg md:p-6 p-3 shadow-sm border md:min-w-[200px] min-w-[100px]">
      <div className="flex-shrink-0 md:w-12 md:h-12 w-5 h-5 flex items-center justify-center">
        <Image src={item.icon} alt={`${item.name} logo`} height={200} width={200} className="w-full h-full object-contain" />
      </div>
      <span className="font-medium whitespace-nowrap max-md:text-sm">{item.name}</span>
    </div>
  );
};
