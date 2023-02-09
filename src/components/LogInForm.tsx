/* eslint-disable @next/next/no-img-element */

"use client"; // this is a client component
import useAuthUser from "@/hooks/useAuthUser";
import { UserResponse } from "@/types/UserTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ClientResponseError } from "pocketbase";
import React, { FC, useState, useEffect } from "react";
import { useSessionStorage } from "usehooks-ts";
import isEmail from "validator/lib/isEmail";

interface LogInFormProps {}

const LogInForm: FC<LogInFormProps> = ({}) => {
  const router = useRouter();
  const [token, setToken] = useSessionStorage("token", null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<any>({});
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [response, error] = useAuthUser(userData.email, userData.password);

  const handleSubmit = async () => {
    if (!isEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    setUserData({ email: email, password: password });
    setIsEmailValid(true);
  };

  useEffect(() => {
    if (response?.token) {
      setToken(response.token);
      router.push("/", "123");
    }
  }, [response]);

  return (
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
            <h3 className='pb-4 text-2xl text-center'>Log In</h3>
            <form className='px-8 pt-6 pb-8 mb-4 bg-background rounded'>
              <div className='mb-4'>
                <label
                  className='block mb-2 text-sm font-bold text-headline'
                  htmlFor='email'>
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-headline border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                    isEmailValid ? "" : "border-tertiary"
                  }`}
                  id='email'
                  type='email'
                  placeholder='Email'
                />
                {!isEmailValid && (
                  <p className='text-xs italic text-tertiary'>invalid email</p>
                )}
              </div>
              <div className='mb-4 md:flex md:justify-between'>
                <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                  <label
                    className='block mb-2 text-sm font-bold text-headline'
                    htmlFor='password'>
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className={
                      "w-full px-3 py-2 mb-3 text-sm leading-tight text-headline border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    }
                    id='password'
                    type='password'
                    placeholder='******************'
                  />
                </div>
              </div>
              <div className='mb-6 text-center'>
                <button
                  onClick={() => handleSubmit()}
                  className='w-full px-4 py-2 font-bold text-tertiary bg-secondary rounded-full hover:bg-main focus:outline-none focus:shadow-outline duration-200'
                  type='button'>
                  Log In
                </button>
              </div>
              {error && (
                <p className='text-xs italic text-tertiary w-full text-center pb-4'>
                  Wrong Email or password
                </p>
              )}
              <hr className='mb-6 border-t' />
              <div className='text-center'>
                <Link
                  className='inline-block text-sm text-paragraph align-baseline hover:text-tertiary duration-200'
                  href='/register'>
                  Don&apos;t Have an Account? Register Here!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
