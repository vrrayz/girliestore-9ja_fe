import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link?: string;
}

export const SectionListHeader = ({ link, children }: Props) => {
  return (
    <div className="flex justify-between font-bold text-[16px] text-lg-[24px] border border-gainsboro border-x-0 border-t-0 mb-[40px]">
      <span className="text-gray pb-[16px] border-b-[3px] border-olivedrab">
        {children}
      </span>
      {link && (
        <a
          href={link}
          className="font-light text-[16px] flex gap-[6px] items-center"
        >
          View all
          <FontAwesomeIcon icon={faChevronRight} color="olivedrab" />
        </a>
      )}
    </div>
  );
};
