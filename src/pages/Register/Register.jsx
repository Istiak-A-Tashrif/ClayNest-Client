import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../components/Hooks/useAuth";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [passError, setPassError] = useState("");

  const { createUser, 
	update, 
	notifyError,
	googleSignIn,
    githubSignIn, 
} = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = () =>
    toast.success("User created succcesfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });

  const onSubmit = (data) => {
    const { email, password, name, photo } = data;

    if (password.length < 6) {
      return setPassError("Password must be 6 characters");
    } else if (!/^(?=.*[a-z]).+$/.test(password)) {
      return setPassError("Password must have a Lowercase letter");
    } else if (!/^(?=.*[A-Z]).+$/.test(password)) {
      return setPassError("Password must have a Uppercase letter");
    }
	setPassError("");
    
	createUser(email, password)
      .then(() => {
		notify();
        update(name, photo).then(() => {});
      })
      .catch((error) => {
        console.error("error", error.message);
		notifyError()
      });
  };

  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((res) => {
        notify()
      })
      .catch((error) => {
        console.error(error.message);
        notifyError();
      });
  };

  return (
    <div className="pt-10">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  mx-auto bg-gray-900">
        <h1 className="text-2xl font-bold text-center text-gray-200">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Istiak Ahmed"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("name")}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Your Photo
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Photo URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("photo")}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-gray-400">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="istiak@ahmed.com"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("email", { required: true })}
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
            {<span>{passError}</span>}
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 ">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-400">
            Register with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button aria-label="Log in with Google" className="p-3 rounded-sm" onClick={() => handleSocialLogin(googleSignIn)}>
            <FaGoogle />
          </button>
          <button aria-label="Log in with GitHub" className="p-3 rounded-sm" onClick={() => handleSocialLogin(githubSignIn)}>
            <FaGithub />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          {" "}
          Have an account?
          <a rel="noopener noreferrer" href="#" className="hover:underline ">
            {" "}
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
