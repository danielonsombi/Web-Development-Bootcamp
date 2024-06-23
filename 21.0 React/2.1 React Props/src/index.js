import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
        style={{ width: "200px", height: "200px" }}
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Nick Rodriguez"
      img="https://img.etimg.com/thumb/width-1600,height-900,imgsize-478624,resizemode-75,msid-107058137/news/international/us/my-life-with-the-walter-boys-season-2-release-date-cast-everything-we-know.jpg"
      tel="+254 456 123"
      email="me@nick.com"
    />
  </div>,
  document.getElementById("root")
);
