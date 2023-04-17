import React from 'react'
import {useLocation } from "react-router-dom";
import {useState} from "react";
const Mylist = () => {
    const location=useLocation();
    const movie=location.movie;
    const [Movie,setMovie]=useState(movie);
  return (
    <div>
      <div>{Movie.img}</div>
    </div>
  )
}

export default Mylist;
