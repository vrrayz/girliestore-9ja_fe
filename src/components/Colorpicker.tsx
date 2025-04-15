import { colors } from "@/data/colors";
import React from "react";

interface Props {
  setShowColorPicker: (value: boolean) => void;
  setColorPickerValue: (value: string) => void;
}

export const Colorpicker = ({
  setShowColorPicker,
  setColorPickerValue,
}: Props) => {
  // const colorsArray =
  const selectColor = (value: string) => {
    setColorPickerValue(value);
    setShowColorPicker(false);
  };
  return (
    <div
      className="fixed bg-[#000000aa] top-[0px] left-[0px] w-screen h-screen z-[1000] flex flex-col items-center justify-center"
      id="overlay"
      onClick={(e) =>
        e.currentTarget.id == "overlay" && setShowColorPicker(false)
      }
    >
      <div className="w-[320px] grid grid-cols-[repeat(8,1fr)] mx-auto">
        {colors.map((item, i) => (
          <div
            key={i}
            className={`aspect-[1/1] hover:border hover:border-[3px] hover:border-black`}
            style={{ backgroundColor: "#" + item.hex, cursor: "pointer" }}
            onClick={() => selectColor(item.name)}
          ></div>
        ))}
      </div>
    </div>
  );
  //   DO AN OVERLAY SHADOW WITH THE COLORPICKER IN THE CENTER
  // SEND THE COLOR NAME THAT GETS CLICKED
};
