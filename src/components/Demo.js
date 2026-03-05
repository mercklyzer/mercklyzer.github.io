import React from "react";

const Demo = ({ videoUrl, title, description }) => {
  return (
    <div className="demo flex flex-col justify-center items-center w-full opacity-0">
      <div className="w-full aspect-video rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col w-full text-white mt-4 font-poppins">
        <div className="font-semibold text-md md:text-lg">{title}</div>
        {description && (
          <div className="text-sm md:text-md text-silver mt-1">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
