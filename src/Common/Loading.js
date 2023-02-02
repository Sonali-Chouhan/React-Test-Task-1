import React from "react";
import ReactLoading from "react-loading";
// import styles from "./Loading.module.scss";

const color = "blue";
export const FullPageLoading = ({ position }) => {
  return (
    <div>
      <ReactLoading type="spin" color={color} height="50px" width="50px"   />
    </div>
  );
};

export const ListingLoading = () => {
  return (
    <div>
      <ReactLoading
        type="bubbles"
        color={color}
        height="60px"
        width="70px"
        className="m-auto"
      />
    </div>
  );
}