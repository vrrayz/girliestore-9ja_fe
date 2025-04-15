import React from "react";

export interface BreadcrumbItem {
  name: string;
  link: string;
}

export interface Props {
  breadcrumbItems: BreadcrumbItem[];
}

export const Breadcrumb = ({ breadcrumbItems }: Props) => {
  return (
    <div className="flex gap-[12px]">
      {breadcrumbItems.map((item, i) => (
        <>
          {i == breadcrumbItems.length - 1 ? (
            <a href="#">{item.name}</a>
          ) : (
            <>
              <a href={item.link} className="text-darkslategray">
                {item.name}
              </a>
              <span>/</span>
            </>
          )}
        </>
      ))}
    </div>
  );
};
