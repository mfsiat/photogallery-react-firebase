import { motion } from "framer-motion";
import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  // console.log(progress, url);

  // After upload & when the get the url remove the progress bar
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <motion.div 
    className="progress-bar" 
    initial={{ width: 0 }}
    animate={{ width: progress + '%' }}
  ></motion.div>;
};

export default ProgressBar;
