import React, { useState } from "react";
const UploadForm = () => {
  const [file, setFile] = useState(null);

  //   allowed file types for upload
  const types = ["image/png", 'image/jpeg'];

  // function for uploading the images
  const changeHandler = (e) => {
    // console.log('changed')
    let selected = e.target.files[0];

    // check for file
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    }
  };

  return (
    <form>
      <input type="file" onChange={changeHandler} />
    </form>
  );
};

export default UploadForm;
