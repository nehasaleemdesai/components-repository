import React from "react";
// import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button primary rounded>
          {/* <GoBell /> */}
          Primary
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          {/* <GoCloudDownload /> */}
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success rounded>
          {/* <GoDatabase /> */}
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning>Add to Wishlist</Button>
      </div>
      <div>
        <Button danger>Close</Button>
      </div>
    </div>
  );
};

export default ButtonPage;
