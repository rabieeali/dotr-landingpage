import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import First from "../assets/img/screenshots/1.png";
import Second from "../assets/img/screenshots/2.png";
import Third from "../assets/img/screenshots/3.png";
import Fourth from "../assets/img/screenshots/4.png";
import Fifth from "../assets/img/screenshots/5.png";
import Sixth from "../assets/img/screenshots/6.png";
import Seventh from "../assets/img/screenshots/7.png";
import Eighth from "../assets/img/screenshots/8.png";

import Beheshti from '../assets/img/beheshti.png'



const ProjectCard = () => {
  const [toggler, setToggler] = useState(false);

  return (

    <div className="project-card">
      <FsLightbox
        toggler={toggler}
        sources={[First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth]}
      />
      <div onClick={() => setToggler(!toggler)} className="relative max-w-sm rounded overflow-hidden shadow-lg">
        <span className="watch"><img src={Beheshti}/></span>
        <img
          className=" w-full rounded-5 lightbox-custom"
          src={First}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-center mb-2">
            اتوماسیون دانشگاه شهید بهشتی
          </div>
          <p className="text-gray-700 text-base text-center">
            توضیحات راجع به پروژه
          </p>
        </div>
        <div className="px-6 text-center flex pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            MySQL
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            React.Js
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ASP.Net
          </span>
        </div>
      </div>
    </div>


  );
};

export default ProjectCard;

<></>;
