import React from "react";
import image from "../assests/images.jpg";
import boy from "../assests/boy.png";
import girl from "../assests/girl.png";

import { Rating } from "react-simple-star-rating";
const Feedback = () => {
  const data = [
    {
      name: "Manohar",
      rating: 4,
      text: "Fame scene one come adieu save the. Go deeds would loved old bidding and that spent. There to to breast.",
      icon: image,
    },
    {
      name: "Manohar",
      rating: 5,
      text: "Tion-cxi tamen tial la eniris la bruto. La vespermangxontaj marbordon ni gxin sed. Detenis reen nian mi kaj aux la..",
      icon: boy,
    },
    {
      name: "Manohar",
      rating: 4,
      text: "Tion-cxi tamen tial la eniris la bruto. La vespermangxontaj marbordon ni gxin sed. Detenis reen nian mi kaj aux la..",
      icon: girl,
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        boxShadow: "0 6px 8px #bbb9b9ec",
        padding: 10,
        margin: 10,
        borderRadius: 10,
      }}
    >
      <h5>Customer Feedback</h5>
      {data.map((it) => (
        <>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <img
            
              src={it.icon}
              style={{ width: 30, height: 30, borderRadius: 30,objectFit:'cover' }}
              alt="logo"
            />{" "}
            <strong>{it.name}</strong>
          </div>
          <Rating initialValue={it.rating} size={30} />
          <div style={{ borderBottom: "1px solid lightgray" }}>{it.text}</div>
        </>
      ))}
    </div>
  );
};

export default Feedback;
