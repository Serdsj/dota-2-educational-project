import React from 'react';
import styleT from "./Test.module.scss"
import {useParams} from 'react-router-dom'

const Test = () => {
  console.log(useParams())
  return (
    <div>
      <h1 className={styleT["test"]}>Test Page</h1>
      <p className={styleT["test"]}>Это тестовый движ.</p>
    </div>
  );
};

export default Test;

