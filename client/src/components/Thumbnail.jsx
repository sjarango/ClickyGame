import React from "react";

export default Thumbnail(props) {
  return (
    <img src="props.src" onClick="props.handleTileClick" className="img-thumbnail" />
  );
} 
