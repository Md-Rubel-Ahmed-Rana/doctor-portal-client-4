import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn }  = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const handleLogin = (data) => {
        signIn(data.email, data.password)
        .then(() =>{
            navigate(from, {replace: true})
        })
        .catch((err) => console.log(err))
    }


    return (
        <div className="h-[400px] flex justify-center border items-center">
            <div className="w-96">
                <h3 className="text-4xl">Login</h3>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="border" type="email"  
                        {...register("email", 
                        { required: "Email address is required",
                     }

                        )} />
                        {errors.email && <span className="text-red-500">{errors.email?.message}</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input className="border" type="password"  {...register("password", { required: "Password address is required", minLength: { value: 6, message: "Password must be 6 characters or longer" } } )} />
                        {errors.password && <span className="text-red-500">{errors.password?.message}</span>}
                        <label className="label"><span className="label-text">Forget Password</span> </label>
                    </div>
                    <div className="text-center">
                        <input className="btn text-white btn-aceent w-1/2 " type="submit" value="Login" />
                        <p>New To Doctor Portal? <Link to="/signup" className="text-secondary">Create an account</Link> </p>
                    </div>
                    <div className="divider">OR</div>
                   <div className="text-center">
                        <button className="btn btn-outline">CONTINIUE WITH GOOGLE</button>
                   </div>
                </form>
            </div>
        </div>
    );
}

export default Login