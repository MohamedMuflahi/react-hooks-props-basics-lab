import React from "react";

function Links(props) {
  let { github } = props;
  let { linkedin } = props;
  //console.log(git);
  //console.log(linked);
  return (
    <>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </>
  );
}
export default Links;
