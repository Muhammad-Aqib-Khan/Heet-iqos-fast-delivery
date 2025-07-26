import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  text: string;
  href?: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({ text, href, className = '', onClick }: ButtonProps) => {
  const baseStyle = ` transition duration-300 ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseStyle}>
        {text}
      </Link>
    );
  }

  return (
    <button className={baseStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
