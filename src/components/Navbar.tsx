import Link from "next/link";
import React, { FC } from "react";
import { LoginOutlined, AssignmentIndOutlined } from "@mui/icons-material/";

const navLinks = [
  { title: "LogIn", href: "/login" },
  { title: "Register", href: "/register" },
];

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className='flex justify-between px-8 py-4 text-headline mx-auto max-w-6xl'>
      <Link href='/'>
        <h1 className=' hover:text-button text-2xl'>ChatApp</h1>
      </Link>
      <div className='flex gap-4'>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.title}>
            <p className='text-paragraph hover:text-button text-lg'>
              {link.title}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
