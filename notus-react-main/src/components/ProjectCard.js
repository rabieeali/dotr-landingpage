import FsLightbox from "fslightbox-react";
import React, { useState } from "react";


const ProjectCard = (props) => {
  const [toggler, setToggler] = useState(false);

  return (

    <div className="project-card">
      <FsLightbox
        toggler={toggler}
        sources={props.images}
      />
      <div onClick={() => setToggler(!toggler)} className="relative max-w-sm rounded overflow-hidden shadow-lg">
        <span className="watch"><img src={props.logo}/></span>
        <img
          className=" w-full rounded-5 lightbox-custom"
          src={props.thumbnail}
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

export default ProjectCard;;
