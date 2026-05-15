import { useForm } from "react-hook-form";
import PrimaryBtn from "../../components/Shared/Button/PrimaryBtn";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import AuthContext from "../../provider/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
  const { createUser, updateUser, loading } = useContext(AuthContext);
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
      const userInfo = {
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
        photoURL: '',
        emailVerified: false,
        ...data};

      console.log(userInfo);
      
      // create user with toast
      const res = await toast.promise(
        createUser(userInfo.email, userInfo.password),
        {
          loading: "Creating Account...",
          success: "Account created successfully!",
          error: "Failed to create account",
        },
      );

       console.log(res.user);

      // update user
       await updateUser({ displayName: userInfo.name });

      //  send data without password
      const {password, ...rest} = userInfo;
      // send to backend
      const axRes = await axios.post("http://localhost:5000/users", rest);
      console.log(axRes);
      

      // reset form data
      reset();

      // navigate to home or dashboard
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
    <div className="flex bg-primary/10">
      <div className="flex-1 flex items-center min-h-screen px-16">
        <div className="w-full">
          <h4 className="text-3xl font-bold text-primary text-center mb-5">
            Create Account
          </h4>
          <form
            className="w-3/4 mx-auto space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Full Name */}
            <div className="">
              <input
                type="text"
                className="bg-primary/5 w-full border-2  border-primary/30 focus:border-primary rounded-md text-lg py-3 px-4 outline-0"
                placeholder="Full Name *"
                {...register("name", {
                  required: "Full Name is required *",
                  minLength: {
                    value: 4,
                    message: "Name is too short",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 ml-1">
                  {errors.name.message}
                </p>
              )}
            </div>

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
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
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
                    <span className="animate-ping">Creating User...</span>
                  ) : (
                    "Sign Up"
                  )
                }
                type="submit"
                className="w-full"
              ></PrimaryBtn>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 flex items-center bg-primary px-16 text-center rounded-l-full">
        <div className="w-full space-y-4">
          <h4 className="text-white text-4xl font-semibold">Get Started</h4>
          <p className="text-white">Already have an account ?</p>
          <Link to="/sign-in">
            <PrimaryBtn text="Sign In" className="border-2 border-white/50" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
