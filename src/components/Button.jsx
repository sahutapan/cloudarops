// src/components/CustomButton.jsx

import { forwardRef } from "react";
import { classNames } from "../utils/classNames";

const VARIANTS = {
  primary: "bg-blue text-white hover:bg-cyanBlue focus:ring-blue-500",
  rounded:
    "bg-blue text-white hover:bg-cyanBlue focus:ring-blue-500 rounded-full",
};

const SIZES = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2",
  large: "px-6 py-3 text-lg",
};

const Button = forwardRef(
  (
    {
      children,
      className,
      variant = "primary",
      size = "medium",
      icon: Icon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-150 ease-in-out text-[18px] font-bold uppercase no-underline tracking-[1.4px]",
          VARIANTS[variant],
          SIZES[size],
          className
        )}
        {...props}
      >
        {children}
        {Icon && <Icon className="mr-2" />}
      </button>
    );
  }
);

export default Button;
