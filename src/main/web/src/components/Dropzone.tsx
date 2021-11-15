import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { api } from "../services/api";

export function MyDropzone({ userProfileId }: DropzoneProps) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);

    api
      .post(`/api/v1/user-profile/${userProfileId}/image/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        console.log("file uploaded");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here ...</p>
      ) : (
        <p>Drag 'n' drop your profile picture, or click to select</p>
      )}
    </div>
  );
}
