import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-[80vh] pt-10">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  mx-auto bg-gray-900">
	<h1 className="text-2xl font-bold text-center text-gray-200">Register</h1>
	<form noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-400">Your Name</label>
			<input type="text" name="name" id="name" placeholder="Istiak Ahmed" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-400">Your Photo</label>
			<input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-400">Your Email</label>
			<input type="email" name="email" id="email" placeholder="istiak@ahmed.com" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			
		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 ">Sign in</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm text-gray-400">Register with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button aria-label="Log in with Google" className="p-3 rounded-sm">
			<FaGoogle/>
		</button>
		<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
		<FaGithub/>
		</button>
	</div>
	<p className="text-xs text-center sm:px-6 text-gray-400"> Have an account?
		<a rel="noopener noreferrer" href="#" className="hover:underline "> Log in</a>
	</p>
</div>
    </div>
  );
};

export default Register;