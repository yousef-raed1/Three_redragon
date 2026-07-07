import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { loginSchema } from "../../validation/loginValidation";
import { useNavigate } from "react-router-dom";
import './Login.css'
export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  const { loginHandler, isLoading  } = useContext(AuthContext);

  const onSubmitHandler = async (data) => {
    const res = await loginHandler(data);

    if (res.success) {
      setError(null);
      navigate("/");
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Login</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-5">

          {/* EMAIL */}
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white"
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email.message}</p>
          )}

          {/* PASSWORD */}
          <div className="relative">
            <input
              {...register("password")}
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

          {/* ERROR */}
          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={`w-full py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
              !isValid || isLoading
                ? "bg-blue-500 opacity-60 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            } text-white`}
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

        </form>
      </div>
    </div>
  );
}