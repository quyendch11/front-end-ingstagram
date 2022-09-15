import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
import {useSelector} from "react-redux";

const InfoCard = () => {
    const {user}= useSelector(state=>{
        return state.user
    })
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>email: </b>
        </span>
        <span>{user.email}</span>
      </div>

      <div className="info">
        <span>
          <b>date of birth: </b>
        </span>
        <span>{user.dob}</span>
      </div>

      <div className="info">
        <span>
          <b>user name: </b>
        </span>
        <span>{user.username}</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
