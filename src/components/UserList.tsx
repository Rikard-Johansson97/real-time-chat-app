/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { FC } from "react";

interface userListProps {}

const UserList: FC<userListProps> = ({}) => {
  return (
    <div className='sm:block hidden max-w-xs bg-background h-screen w-full overflow-y-scroll cursor-pointer'>
      {/* User */}
      <div className='flex gap-4 items-center p-2'>
        <img
          className='w-14 h-14 rounded-full'
          src={
            "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="
          }
          alt={""}></img>
        <div className='flex flex-col'>
          <p className=' text-headline font-semibold'>Rikard Johansson</p>
          <p className='text-xs text-paragraph'>Rikard_1997</p>
        </div>
      </div>
      {/* FriendList */}
      <div className=' bg-secondary flex flex-col divide-y '>
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className='flex gap-2 p-2 hover:bg-tertiary cursor-pointer'>
              <img
                className='w-10 h-10 rounded-full'
                src={
                  "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="
                }
                alt={""}></img>
              <div className='flex flex-col'>
                <p className='text-sm font-semibold text-headline'>
                  Rikard Johansson
                </p>
                <p className='text-xs text-paragraph'>I hate you...</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
