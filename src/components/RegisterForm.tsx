/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { FC } from "react";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  return (
    <>
      <div className='container mx-auto '>
        <div className='flex justify-center px-6 my-12 '>
          {/* Row */}
          <div className='w-full xl:w-3/4 lg:w-11/12 flex shadow-xl'>
            {/* Col */}
            <div
              className='w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg'
              style={{
                backgroundImage:
                  "url(https://www.color-hex.com/palettes/92194.png)",
              }}
            />
            {/* Col */}
            <div className='w-full lg:w-7/12 bg-background p-5 rounded-lg lg:rounded-l-none'>
              <h3 className='pb-4 text-2xl text-center'>Create an Account!</h3>
              <form className='px-8 pt-6 pb-8 mb-4 bg-background rounded'>
                <div className='mb-4 md:flex md:justify-between'>
                  <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                    <label
                      className='block mb-2 text-sm font-bold text-headline'
                      htmlFor='firstName'>
                      First Name
                    </label>
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-paragraph border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='firstName'
                      type='text'
                      placeholder='First Name'
                    />
                  </div>
                  <div className='md:ml-2 flex-1'>
                    <label
                      className='block mb-2 text-sm font-bold text-paragraph'
                      htmlFor='lastName'>
                      Last Name
                    </label>
                    <input
                      className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='lastName'
                      type='text'
                      placeholder='Last Name'
                    />
                  </div>
                </div>
                <div className='mb-4'>
                  <label
                    className='block mb-2 text-sm font-bold text-headline'
                    htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-headline border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='Email'
                  />
                </div>
                <div className='mb-4 md:flex md:justify-between'>
                  <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                    <label
                      className='block mb-2 text-sm font-bold text-headline'
                      htmlFor='password'>
                      Password
                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-headline border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='password'
                      type='password'
                      placeholder='******************'
                    />
                    <p className='text-xs italic text-red-500'>
                      Please choose a password.
                    </p>
                  </div>
                  <div className='md:ml-2 flex-1'>
                    <label
                      className='block mb-2 text-sm font-bold text-headline'
                      htmlFor='c_password'>
                      Confirm Password
                    </label>
                    <input
                      className='w-full px-3 py-2 mb-3 text-sm leading-tight text-headline border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                      id='c_password'
                      type='password'
                      placeholder='******************'
                    />
                  </div>
                </div>
                <div className='mb-6 text-center'>
                  <button
                    className='w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                    type='button'>
                    Register Account
                  </button>
                </div>
                <hr className='mb-6 border-t' />
                <div className='text-center'>
                  <Link
                    className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                    href='/login'>
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
