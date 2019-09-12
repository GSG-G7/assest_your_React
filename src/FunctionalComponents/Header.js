import React from "react";
import data from "../data";

export const Header = props => {
  let style = { width: props.headerWidth };

  const allData = data.map((category, index) => {
    return (
      <span className='header' style={style} key={index}>
        {category.category}
      </span>
    );
  });
  return <div className='headers'>{allData}</div>;
};
