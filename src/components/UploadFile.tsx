/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { forwardRef, InputHTMLAttributes } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { LuX } from "react-icons/lu";

interface UploadProps {
  infoText: string;
  shouldClose?: boolean;
  previewFile?: string;
  closeAction?: (index: number) => void;
  index?: number;
}
export const UploadFile = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & UploadProps
>(
  (
    { infoText, shouldClose, previewFile, closeAction, index, ...props },
    ref
  ) => {
    const removePreview = () => {
      if (closeAction && (index === 0 || index)) closeAction(index);
    };

    return (
      <div className="upload-container">
        {shouldClose && (
          <button className="close-btn" type="button" onClick={removePreview}>
            <LuX size={20} />
          </button>
        )}
        <div className="cover-element">
          <AiOutlineCloudUpload size={70} />
          <span className="upload-label">
            Drag & drop files or <span>Browse</span>
          </span>
          <span className="info">{infoText}</span>
        </div>
        {previewFile ? (
          <div className="preview-container">
            <img src={previewFile} alt="preview" className="preview-img" />
          </div>
        ) : (
          <input type="file" {...props} ref={ref} disabled={!!previewFile} />
        )}
      </div>
    );
  }
);
