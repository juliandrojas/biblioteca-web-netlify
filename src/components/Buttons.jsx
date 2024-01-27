import React from "react";

export const CustomButton = ({ link, color, description, type, onClick }) => {
  const buttonClasses = `btn btn-${color} w-100`;

  if (type === "submit") {
    return (
      <button type="submit" className={buttonClasses}>
        {description}
      </button>
    );
  }

  if (type === "redirect") {
    return (
      <a href={link} className={buttonClasses}>
        {description}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {description}
    </button>
  );
};
