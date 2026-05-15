import { useForm } from "react-hook-form";
import PrimaryBtn from "../../components/Shared/Button/PrimaryBtn";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignIn = () => {
  // sign user from Auth Provider
  const { signUser, loading } = useAuth();

  // navigate
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = data;
      console.log(userInfo);

      // sign in user
      // const res = await signUser(userInfo.email, userInfo.password);
      // console.log(res.user);

      const res = toast.promise(
        signUser(userInfo.email, userInfo.password),
        {
        loading: "Signing...",
        success: "Login successful!",
        error: "Invalid credentials",
      });

      console.log(res.user);
      
      // reset form data
      reset();

      // navigae to home or dashboard
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }

    // axios.post("http://localhost:5000/tasks", resourcesData)
    // .then(res => {
    //     console.log(res.data);
    // })
  };

  return (
    <div className="flex bg-primary/10 min-h-screen">
      <div className="flex-1 px-16 flex min-h-screen items-center">
        <div className="w-full">
          <h4 className="text-3xl font-bold text-primary text-center mb-5">
            Login
          </h4>
          <form
            className="w-3/4 mx-auto space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email */}
            <div className="">
              <input
                type="email"
                className="bg-primary/5 w-full border-2  border-primary/30 focus:border-primary rounded-md text-lg py-3 px-4 outline-0"
                placeholder="Email *"
                {...register("email", {
                  required: "Email is required *",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="">
              <input
                type="password"
                className="bg-primary/5 w-full border-2  border-primary/30 focus:border-primary rounded-md text-lg py-3 px-4 outline-0"
                placeholder="Password *"
                {...register("password", {
                  required: "Password is required *",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />
              <Link className="mt-2 text-sm font-medium hover:underline cursor-pointer duration-300 ease-in-out">
                Forget Password
              </Link>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mt-8">
              <PrimaryBtn
                text={
                  loading ? (
                    <span className="animate-ping">Signing...</span>
                  ) : (
                    "Sign In"
                  )
                }
                type="submit"
                className="w-full"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 bg-primary px-16 text-center flex items-center rounded-l-full">
        <div className="w-full space-y-4">
          <h4 className="text-white text-4xl font-semibold">Get Started</h4>
          <p className="text-white">Do not have an account ?</p>
          <Link to="/sign-up">
            <PrimaryBtn text="Sign Up" className="border-2 border-white/50" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
