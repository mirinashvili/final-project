import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import './Registration.scss'
import { baseURL } from "../../Components/Config/baseURL.config"

type TRegisterForm = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
};

interface RegisterViewProps {
  translate: (key: string) => string
}

const RegisterView: React.FC<RegisterViewProps> = ({ translate }) =>  {
  const [created, setCreated] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TRegisterForm>();

  async function onSubmit(data: TRegisterForm) {
    try {
      const resp = await axios.post(`${baseURL}/register`, data);
      if (resp.status === 201 || resp.status === 200) {
        setCreated(true);
      }
    } catch (error: any) {
      if (error.response) {
        setError("root", { message: error.response.data.message });
      } else {
        // Handle the error when response object is not available
        console.log("Error:", error);
      }
    }
   
  }

  
  

  return (
    <section className="bg-gray-50 ">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            {translate('RegisTitle')}
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div className="firsInput">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {translate('Firstname')}
                </label>
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="FirstName"
                  required
                />
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600 ">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              <div className="secondInput">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {translate('LastName')}
                </label>
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="LastName"
                  required
                />
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600 ">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              <div className="thirdInput">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {translate('PhoneNumber')}
                </label>
                <input
                  {...register("phoneNumber", { required: true })}
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="+995........."
                  required
                />
                {errors.phoneNumber && (
                  <p className="mt-2 text-sm text-red-600 ">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              <div className="fourthInput">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {translate('Email')}
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 ">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>
              <div className="fifthInput">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {translate('EnterPassword')}
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 ">
                    <span className="font-medium">Oh, snapp!</span> Some error
                    message.
                  </p>
                )}
              </div>

              {errors?.root && (
                <p className="mt-2 text-sm text-red-600 ">
                  <span className="font-medium">ups!</span>{" "}
                  {errors.root.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full text-red bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                {translate('CreateAccount')}
              </button>
              <p className="text-sm font-light text-gray-500 ">
              {translate('HaveAccount')}{" "}
                <Link
                  to="/SingIn"
                  className="font-medium text-primary-600 hover:underline "
                >
                  {translate('Log in')}
                </Link>
              </p>
              {created && (
                <p className="mt-2 text-sm text-green-600 ">
                  <span className="mr-10">Account created successfully</span>
                  <span className="font-medium">
                    <Link to="/login">Login here </Link>
                  </span>{" "}
                </p>
              )}
            </form>
          </div>
        </div>
    
    </section>
  );
}

export default RegisterView;