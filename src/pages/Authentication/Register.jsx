import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);

  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    setErrorMessage(null);
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then()
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="p-8 text-center md:text-start">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[#0F172A]">
            Welcome to MediAid
          </h1>
          <h3 className="mt-4 text-lg lg:text-xl max-w-125 leading-relaxed text-[#64748B]">
            Join MediAid and find trusted medical camps near you, led by
            experienced doctors and healthcare professionals.
          </h3>
        </div>
        <div className="w-11/12 sm:w-4/6 md:w-5/12 max-w-110">
          <div className="shrink-0 rounded-2xl bg-white shadow-xl mb-8 md:my-8">
            <div className="p-6 sm:p-7">
              <form
                onSubmit={handleSubmit(handleRegister)}
                className="flex flex-col gap-3"
              >
                <label className="font-semibold text-sm text-[#0F172A]">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 placeholder:text-[#94A3B8]"
                  placeholder="Your Name"
                />
                {errors.name?.type === "required" && (
                  <p className="text-[#DC2626] text-sm text-center">
                    Name is required.
                  </p>
                )}

                <label className="font-semibold text-sm text-[#0F172A]">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full text-[#0F172A] rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 placeholder:text-[#94A3B8]"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-[#DC2626] text-sm text-center">
                    Email is required
                  </p>
                )}

                <label className="font-semibold text-sm text-[#0F172A]">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password required",
                    },
                    minLength: {
                      value: 6,
                      message:
                        "Password must contain at least 6 character or digit",
                    },
                  })}
                  className="w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 placeholder:text-[#94A3B8]"
                  placeholder="......"
                />
                {errors.password && (
                  <p className="text-[#DC2626] text-sm text-center">
                    {errors.password.message}
                  </p>
                )}

                <label className="font-semibold text-sm text-[#0F172A]">
                  Profile Picture
                </label>
                <input
                  type="file"
                  {...register("profileUrl")}
                  className="w-full rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 outline-none text-[#0F172A] transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 placeholder:text-[#94A3B8]"
                  placeholder="Photo URL"
                />

                <button
                  type="submit"
                  className="mt-4 w-full rounded-xl bg-[#16A34A] px-4 py-3 text-lg font-bold text-white transition hover:bg-[#15803D] active:scale-[0.98]"
                >
                  SignUp
                </button>
              </form>

              <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-lg font-semibold text-[#0F172A] shadow-sm transition hover:bg-[#F8FAFC] active:scale-[0.98]">
                <svg
                  aria-label="Google logo"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff" />
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    />
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    />
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    />
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    />
                  </g>
                </svg>
                Login with Google
              </button>

              <p className="mt-4 text-center text-[#64748B]">
                Already have an account? Please{" "}
                <Link
                  to="/Login"
                  className="font-bold text-[#2563EB] hover:text-[#1D4ED8] hover:underline"
                >
                  login
                </Link>
              </p>

              {errorMessage ===
              "Firebase: Error (auth/email-already-in-use)." ? (
                <p className="mt-3 text-center text-sm text-[#DC2626]">
                  Email already in use. Please{" "}
                  <Link
                    to="/Login"
                    className="font-bold text-[#2563EB] hover:text-[#1D4ED8] hover:underline"
                  >
                    login
                  </Link>{" "}
                  or use another email.
                </p>
              ) : (
                <p className="mt-3 text-center text-sm font-semibold text-[#DC2626]">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
