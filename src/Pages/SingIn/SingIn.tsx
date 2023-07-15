import axios from "axios";
import './SingIn.scss'
import React,{useContext, Fragment} from "react";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserContext, CurrentUserProvider,} from "../../Components/Provider/UserProvaider";
import { useForm } from "react-hook-form";
import { Tlocalstorage } from "../../Components/Types/TlocalStoreg";
import { AuthContext, TAuthorizationStatus } from "../../Components/AuthContext/AuthContsxt";
import { baseURL } from "../../Components/Config/baseURL.config";

type TLoginForm = {
  email: string;
  password: string;
};

interface LoginViewProps {
  translate: (key: string) => string
}

const LoginView: React.FC<LoginViewProps> = ({ translate }) =>  {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const { status, setStatus } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginForm>();

  async function onSubmit(data: TLoginForm) {
    try {
      const resp = await axios.post(`${baseURL}/login`, data);
      console.log(resp.data.AccessToken);
      if (resp.data.AccessToken) {
        localStorage.setItem("AccessToken", resp.data.AccessToken);
        setStatus(TAuthorizationStatus.AUTHORIZED);
        console.log(status);
        const resp2 = await axios.get(`${baseURL}/me`, {
          headers: {
            Authorization: `Bearer ${resp.data.AccessToken}`,
          },
        });
        console.log(resp2.data);
        setCurrentUser(resp2.data);
        if (TAuthorizationStatus.AUTHORIZED) {
          navigate("/");
        }
      }
    } catch (error: any) {
      setError("root", { message: "something went wrong" });
    }
  }

  return (
    <Fragment>
    <CurrentUserProvider>
      <section className="bg-gray-50">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              {translate('SignInToYourAccount')}
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="firsInput">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    {translate('EnterName')}
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 "
                    placeholder="name@company.com"
                    required
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 ">
                      <span className="font-medium">Oh, snapp!</span> Some error
                      message.
                    </p>
                  )}
                </div>
                <div className="secondInput">
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
                    <span className="font-medium">ups!</span> Something went
                    wrong. please try again.
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full text-red bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                 {translate('SignIn')}
                </button>
                <p className="text-sm font-light text-gray-500 ">
                {translate('Dohaveanaccountyet')}{" "}
                  <Link
                    to="/registration"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    {translate('SignIn')}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        
      </section>
    </CurrentUserProvider>
    </Fragment>
  );
}
export default LoginView;