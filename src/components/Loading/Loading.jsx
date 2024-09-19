import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = ({
  size = 80,
  color = "#4fa94d",
  text = "Loading",
  showOval = true,
  ovalSize = 100,
  ovalColor = "#4fa94d",
  textColor = "green",
  textStyle = {},
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {showOval && (
        <Oval
          height={ovalSize}
          width={ovalSize}
          color={ovalColor}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
        />
      )}
      <span
        style={{
          fontSize: "30px",
          color: textColor,
          fontWeight: "bolder",
          letterSpacing: "2px",
          ...textStyle,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Loading;
