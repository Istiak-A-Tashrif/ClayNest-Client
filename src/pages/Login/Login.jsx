import { useForm } from "react-hook-form";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../components/Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Login = () => {
	const [showPass, setShowPass] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm();

	  const { loginUser, googleSignIn, githubSignIn, notifyError } =
	  useAuth(); 
	  
	  const navigate = useNavigate();
  const location = useLocation();

  // handle social errors
  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((res) => {
        if (res.user) {
			Swal.fire({
				title: "Successful",
				text: "You have successfully logged in!",
				icon: "success"
			  });
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        console.error(error.message);
        notifyError();
      });
  };
  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then(() => {
		Swal.fire({
			title: "Successful!",
			text: "You have successfully logged in!",
			icon: "success"
		  });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error("error", error.message);
        notifyError();
      });
  };

  return (
    <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 mx-auto my-6">
		<Helmet>
			<title>ClayNest | Log In</title>
		</Helmet>
	<h2 className="mb-3 text-3xl font-semibold text-center text-gray-200">Login to your account</h2>
	<p className="text-sm text-center text-gray-400 ">Dont have account?
	<Link
            to={"/register"}
            rel="noopener noreferrer"
            className="focus:underline hover:underline text-gray-500"
          >
            {" "}
            Register here
          </Link>
	</p>
	<div className="my-6 space-y-4">
		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 text-gray-400  focus:dark:ring-violet-600" onClick={() => handleSocialLogin(googleSignIn)}>
			<FaGoogle/>
			<p>Login with Google</p>
		</button>
		<button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 text-gray-400 focus:dark:ring-violet-600" onClick={() => handleSocialLogin(githubSignIn)}>
			<FaGithub/>
			<p>Login with GitHub</p>
		</button>
	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full text-gray-600" />
		<p className="px-3 text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
	<form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="istiak@ahmed.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
			</div>
			<div className="space-y-2">
            <span className="text-sm">Password</span>
            <label
              htmlFor="password"
              className="bg-white pr-4 flex items-center gap-2"
            >
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                placeholder="*****"
                className="grow w-full px-3 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("password", { required: true })}
              />
              <span onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </label>
            {errors.password && (
              <>
                <span>This field is required</span>
                <br />
              </>
            )}
          </div>
		</div>
		<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
	</form>
</div>
  );
};

export default Login;