import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { getUserById } from '../../redux/actions/getUserById';
import { getOrderById } from '../../redux/actions/getOrderById';
//import { getCourseByName } from '../../redux/actions/getCourseByName';

export default function Cart() {
  const dispatch = useDispatch();
  
  
  useEffect(() => { 
    dispatch(getUserById("6186d90a521fdc29a93ec257")) 
    dispatch(getOrderById("6187494b521fdc29a93ec291")) 
   // dispatch(getCourseByName("Vue 3 with TypeScript Jump Start")) 
},[dispatch]);  

const getUserId = useSelector(state => state.getUser.getUserId)
const getOrderId = useSelector(state => state.getOrder.getOrderId)
//const getAllCourses = useSelector(state => state.getCourses.getAllCourses)

console.log(getUserId, 'user traido por id');
console.log(getOrderId, 'order traida por id');
//console.log(getAllCourses, 'order traida por id');




    return (
    <div>
        <div>
        <NavBar />
        </div>
        <h2>{getUserId.name}</h2>
        <h2>2700$</h2>
        <h2>00:59:26 ------- es el unico que viene de json de courses</h2>
        <h2>Vue 3 with TypeScript Jump Start</h2>
        <img src={getOrderId.img} alt="" height='200px' />
        <img src="https://http2.mlstatic.com/storage/developers-site-cms-admin/CDV_MP/280231858061-210518-mla-transforma-tu-sitio-web-con-el-checkout-de-mercado-pago-card-01.png" alt="" />
        <br />
        
        <Footer /> 
    </div>
    )
}

// json del order
// {
//     "user": "Benito Luque",
//     "price": 2700,
//     "courses": ["Vue 3 with TypeScript Jump Start"],
//     "status": "Confirmed",
//     "payment": true
//  },

// json de courses 
// {
//     "_id": {
//       "$oid": "61844faf2d9146900b650f1e"
//     },
//     "title": "Vue 3 with TypeScript Jump Start",
//     "description": "Hey gang, in this Vue 3 & TypeScript jump start tutorial I'll show you how to get up and running with Vue 3 using TypeScript. In this lesson we'll discuss the benefits of TS & set the initial project up.",
//     "img": "https://cdn.fs.teachablecdn.com/1M8MbfrSQme0aCzmJFmQ",
//     "score": "5",
//     "duration": "00:59:26",
//     "categories": ["FrontEnd"],
//     "price": 900,
//     "videos": [
//       {
//         "name": "Intro & Setup",
//         "link": "https://youtu.be/JfI5PISLr9w?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "8:53"
//       },
//       {
//         "name": "Vue Components using TypeScript",
//         "link": "https://youtu.be/UDAVj_vlAr8?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "9:50"
//       },
//       {
//         "name": "Composition API & TypeScript",
//         "link": "https://youtu.be/H-hXNym2CK8?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "11:54"
//       },
//       {
//         "name": "Types & Props",
//         "link": "https://youtu.be/GdWrYfDfqRE?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "9:24"
//       },
//       {
//         "name": "Functions",
//         "link": "https://youtu.be/usSBsgWNUZk?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "7:54"
//       },
//       {
//         "name": "Computed Values",
//         "link": "https://youtu.be/TwN36HU-NQM?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "5:27"
//       },
//       {
//         "name": "Hylia Font & Final Styles",
//         "link": "https://youtu.be/6n4myAZwdxg?list=PL4cUxeGkcC9gCtAuEdXTjNVE5bbMFo5OD",
//         "duration": "6:04"
//       }
//     ],
//     "students": []
//   }