import React, { useState } from "react";
import axios from 'axios';
import {base_url} from '../../Constants/index'


const Profilepic = () => {
const [image] = useState("");
  const [loading, setLoading] = useState(false);
  

//   const uploadImage = () => {
//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("upload_preset", "Malaikah");

//     axios
//       .post(
//         "https://api.cloudinary.com/v1_1/malaikah-specialists/image/upload",
//         formData
//       )
//       .then((res) => console.log(res))
//       .then((formData) => {
//         setPublicId(formData.public_id);
//       })
//   };
const uploadImage = async e=>{
    const files = e.target.files
    const data = new FormData();
        data.append("file", files[0]);
       setLoading(true)

       axios.post(`${base_url}/auth/upload`,data)
            .then((res) => console.log(res))
            setLoading(false)
          }
        

  return (
 <div>
   <div id="photo">
       {
           loading? (
               <h3 style={{color: 'black'}}>Loading...</h3>
           ): (
               <img src={image} alt= '' style={{width: '200px'}} />
           )
       }
      </div>
 
        <input
          type="file"
          name="file"
          // onChange={uploadImage}
        ></input>  
        <button onClick={uploadImage}>Upload</button> 
     </div>
  );
};

export default Profilepic;
