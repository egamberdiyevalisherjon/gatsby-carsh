import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <main>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"
      />
    </main>
  );
};

export default IndexPage;
