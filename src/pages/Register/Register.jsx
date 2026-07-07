import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerSchema } from "../../validation/registerValidation";
import { AuthContext } from "../../context/AuthContext";
import {useNavigate} from 'react-router-dom'

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, SetError] = useState(null);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "all",
  });

  const { registerHandler, isLoading } = useContext(AuthContext);

  const password = watch("password");

  const onSubmitHandler = async (data) => {
    const res = await registerHandler(data);
    if (res.success) {
      navigate('/')
      SetError(null);
    } else {
      SetError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        {/* TITLE */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Register Now</h1>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-5">
          <input
            {...register("firstname", { required: "First name required" })}
            placeholder="First Name"
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white"
          />
          {errors.firstname && (
            <p className="text-red-400 text-xs">{errors.firstname.message}</p>
          )}

          <input
            {...register("lastname", { required: "Last name required" })}
            placeholder="Last Name"
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white"
          />
          {errors.lastname && (
            <p className="text-red-400 text-xs">{errors.lastname.message}</p>
          )}

          <input
            {...register("email", {
              required: "Email required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            })}
            placeholder="Email"
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white"
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email.message}</p>
          )}

          <input
            {...register("phone")}
            placeholder="Phone"
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white"
          />

          {/* PASSWORD */}
          <div className="relative">
            <input
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 6,
                  message: "Min 6 characters",
                },
              })}
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white pr-10"
            />

            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {errors.password && (
            <p className="text-red-400 text-xs">{errors.password.message}</p>
          )}

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <input
              {...register("confirmpassword", {
                required: "Confirm password required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white pr-10"
            />

            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {errors.confirmpassword && (
            <p className="text-red-400 text-xs">
              {errors.confirmpassword.message}
            </p>
          )}

          {error && (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-pulse">
              <span className="text-lg">⚠️</span>

              <p className="flex-1">{error}</p>

              <button
                onClick={() => SetError(null)}
                className="text-xs text-red-300 hover:text-white transition"
              >
                ✕
              </button>
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={`w-full py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
              !isValid || isLoading
                ? "bg-blue-500 cursor-not-allowed opacity-60"
                : "bg-red-500 hover:bg-red-600"
            } text-white`}
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Processing...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
