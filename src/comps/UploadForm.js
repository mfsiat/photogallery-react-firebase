import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  // init state
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  //   allowed file types for upload
  const types = ["image/png", "image/jpeg"];

  // function for uploading the images
  const changeHandler = (e) => {
    // console.log('changed')
    let selected = e.target.files[0];

    // check for file
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file ( png or jpeg )");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
