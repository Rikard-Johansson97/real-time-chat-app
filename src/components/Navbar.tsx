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
    <nav className='flex justify-between w-full px-8 py-4'>
      <Link href='/'>
        <h1>ChatApp</h1>
      </Link>
      <div className='flex gap-4'>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.title}>
            <p>{link.title}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
