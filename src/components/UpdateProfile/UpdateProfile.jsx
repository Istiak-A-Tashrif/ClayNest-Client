import { FaRegEnvelopeOpen } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, setUser, update, notifyError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notify = () =>
    toast.success("Update success!!", {
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
    const { name, photo } = data;
    if (!/^(?=.*[a-zA-Z])[a-zA-Z\s]+$/.test(name)) {
      return notifyError("Give a valid name");
    }

    update(name, photo)
      .then( () => {
        setUser({ ...user, displayName: name, photoURL: photo });
        notify();
      }
      )
      .catch((error) => {
        console.error("error", error.message);
        notifyError();
      });
  };

  return (
    <div>
      <Helmet>
        <title>ClayNest | Profile</title>
      </Helmet>
      <div className="p-8 sm:flex justify-center flex-col min-h-[68vh]">
        <div className="flex-shrink-0 md:w-1/2 h-64 mb-6  mx-auto bg-gray-100 rounded">
          <img
            src={user?.photoURL}
            alt=""
            className="object-cover object-top  h-full min-w-full rounded p-4"
          />
        </div>
        <div className="flex flex-col space-y-4 md:w-1/2 mx-auto p-4">
          <div>
            <h2 className="text-4xl font-semibold">{user?.displayName}</h2>
          </div>
          <div className="space-y-1 text-lg">
            <span className="flex items-center space-x-2">
              <FaRegEnvelopeOpen />
              <span className="dark:text-gray-600">{user?.email}</span>
            </span>
          </div>
        </div>
        <div className="w-1/2 mx-auto mt-4">
          <button
            className="btn md:ml-2 md:mt-0 mt-2 bg-[#B99470] border-none text-gray-100"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Edit Info
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="Name"
                    defaultValue={user?.displayName}
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    {...register("name")}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="photo" className="block text-sm">
                    Your picture
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    defaultValue={user?.photoURL}
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    {...register("photo")}
                  />
                </div>
                <div className="modal-action">
                  <button type="submit" className="btn">
                    Update
                  </button>
                </div>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
