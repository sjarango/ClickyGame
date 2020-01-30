import React from "react";

export default function Thumbnail(props) {
  return (
    <img src="props.src" onClick="props.handleTileClick" className="img-thumbnail" />
  );
} 
