// components/custom-editor.js
"use client"; // Required only in App Router.

import React from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";
import "./editor.css";

interface Props {
  data: string;
  setData: (value: string) => void;
}

const CustomEditor = ({ data, setData }: Props) => {
  const cloud = useCKEditorCloud({
    version: "44.3.0",
    premium: true,
  });

  if (cloud.status === "error") {
    return <div>Error!</div>;
  }

  if (cloud.status === "loading") {
    return <div>Loading...</div>;
  }

  const { ClassicEditor, Essentials, Paragraph, Bold, Italic } = cloud.CKEditor;

  const { FormatPainter } = cloud.CKEditorPremiumFeatures;

  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      config={{
        licenseKey:
          "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzQzOTY3OTksImp0aSI6IjIwYmFiZWUzLWZhZDYtNDdhOS05ZGMzLTA3ZDU0MDFjMWU1YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCJdLCJ2YyI6IjhkNTU4NzRmIn0.qnnNc3g3CxkzATyyakxcuEMGJUmAyt-nONqMohaZB0ARB0_vmSRkopUDhI9N14NuOFNu5GBGX6JXX_LPak0XVg",
        plugins: [Essentials, Paragraph, Bold, Italic],
        toolbar: ["undo", "redo", "|", "bold", "italic"],
      }}
      onChange={(event, editor) => setData(editor.getData())}
    />
  );
};

export default CustomEditor;
