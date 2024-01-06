import React from "react";

const Preview = ({ title, image, preview, visitLink }) => {
  if (visitLink) {
    return (
      <a href={visitLink} target="__blank" className="group cursor-pointer">
        <img
          className="object-contain group-hover:hidden"
          src={image}
          alt={`${title} preview`}
        />
        <img
          className="object-contain hidden group-hover:block"
          src={preview}
          alt={`${title} preview`}
        />
      </a>
    );
  }

  return (
    <div className="group disabled">
      <img
        className="object-contain group-hover:hidden"
        src={image}
        alt={`${title} preview`}
      />
      <img
        className="object-contain hidden group-hover:block"
        src={preview}
        alt={`${title} preview`}
      />
    </div>
  );
};

const Visit = ({ visitLink }) => {
  if (visitLink) {
    return (
      <a
        href={visitLink}
        target="__blank"
        className="text-sm font-medium cursor-pointer hover:text-neon duration-500 block"
      >
        Visit
      </a>
    );
  }

  return <span className="text-sm font-medium  opacity-60 block">Visit</span>;
};

const Project = ({ image, title, visitLink, preview, documentationLink }) => {
  return (
    <div className="project flex flex-col justify-center items-center w-full opacity-0 ">
      <Preview
        title={title}
        image={image}
        preview={preview}
        visitLink={visitLink}
      />
      <div className="flex justify-between items-center w-full  text-white mt-2 font-poppins">
        <div className="font-semibold text-md">{title}</div>
        <div>
          {visitLink && <Visit visitLink={visitLink} />}
          {documentationLink && (
            <a
              href={documentationLink}
              target="__blank"
              className="text-sm font-medium cursor-pointer hover:text-neon duration-500 block"
            >
              Documentation
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
