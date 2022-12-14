import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import swal from "sweetalert";


const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const url = "http://103.160.153.38:8020/accounts/auth/";
            
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", JSON.stringify(res));
            swal({
                title: "Done!",
                text: "Login Successfull !",
                icon: "success",
                button: "Ok",
              });
            window.location = "/dashboard";   

        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                swal({
                    title: "Invalid !",
                    text: "Username or password !",
                    icon: "error",
                    button: "Ok",
                  });
            }
        }
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                <img className="logo" src="https://www.spif.in/wp-content/uploads/2021/08/new-logo3.png" alt="logo" width={180}/>

                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Login to Your Account</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <img src="https://www.spif.in/wp-content/uploads/2021/09/mains.jpg" alt="right_image" width={300} />
                    <h1>New Here ?</h1>
                    <Link to="/signup">
                        <button type="button" className={styles.white_btn}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;