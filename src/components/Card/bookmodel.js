import React from "react";
import "./model.css"
const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  console.log(item);

  return (
    <div className="overlay" >
      <div className="overlay-inner">
        <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
        <div className="inner-box">
          <img src={item.thumbnailUrl} alt="image"/>
          <div className="info">
            <h1>{item.title}</h1>
            <h3>{item.authors}</h3>
           <h4>{item.isbn}</h4><br/> 
            <a href={item.website}><button>More</button></a>
          </div>
        </div>
        <h4 className="description">{item.longDescription }</h4>
      </div>
    </div>
  );
};

export default Modal;