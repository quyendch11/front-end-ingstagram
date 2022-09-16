import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";


const PostShare = () => {
  const [post,setPost]=useState({text:'',userId:''})
  const [image, setImage] = useState(null);
  const imageRef = useRef();
const handleChange=(e)=>{
  e.target.name = e.target.value;
  setPost({text: e.target.value,userId: '63233c866999676c7d2e6383'})
}
 const handleSubmit =(e)=>{
  e.preventDefault()
     console.log(post)
  }
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <form onSubmit={e=>{handleSubmit(e)}}>
          <input type="hidden" value={'63233c866999676c7d2e6383'} name={'userId'} onChange={(e)=>{handleChange(e)}}/>
          <input type="text" placeholder="What's happening" name={'text'} onChange={e=>{handleChange(e)}}/>
          <div className="postOptions">
            <div className="option" style={{ color: "var(--photo)" }}
                 onClick={()=>imageRef.current.click()}
            >
              <UilScenery />
              Photo
            </div>
            <div className="option" style={{ color: "var(--video)" }}>
              <UilPlayCircle />
              Video
            </div>{" "}
            <div className="option" style={{ color: "var(--location)" }}>
              <UilLocationPoint />
              Location
            </div>{" "}
            <div className="option" style={{ color: "var(--shedule)" }}>
              <UilSchedule />
              Shedule
            </div>
            <button className="button ps-button">Post</button>
            <div style={{ display: "none" }}>
              <input
                  type="file"
                  name="myImage"
                  ref={imageRef}
                  onChange={onImageChange}
              />
            </div>
          </div>
          {image && (

              <div className="previewImage">
                <UilTimes onClick={()=>setImage(null)}/>
                <img src={image.image} alt="" />
              </div>

          )}
        </form>

      </div>
    </div>
  );
};

export default PostShare;
