import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import Axios from "axios";

const Uploader = () => {
  //const axios = require("axios").default;

  const API_ENDPOINT =
    "https://51swfpc3yl.execute-api.us-east-1.amazonaws.com/getPresignedImageURL";
  const handleChangeStatus = ({ meta, remove }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = async (files) => {
    const f = files[0];
    console.log(f["file"]);
    // * GET request: presigned URL
    const response = await Axios({
      method: "GET",
      url: API_ENDPOINT,
    });

    console.log("Response: ", response);

    // * PUT request: upload file to S3
    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type": "image/jpeg",
      },
      body: f["file"],
    });
    console.log("Result: ", result);
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      hjello
      maxFiles={1}
      multiple={false}
      canCancel={false}
      inputContent="Drop A Snap"
      styles={{
        dropzone: { width: 400, height: 200 },
        dropzoneActive: { borderColor: "green" },
      }}
    />
  );
};

<Uploader />;

export default Uploader;