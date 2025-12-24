import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

import "./Register.css";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Form, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../../App";

const Register = () => {
    const { setUser } = useContext(AppContext);

    const [seePassword, setSeePassword] = useState(false);
    const [activeBtn, setActiveBtn] = useState("sign-in");

    const navigate = useNavigate();

    const saveToLocalStorage = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
    };

    const handleSignIn = async (data) => {
        const { email, password } = data;
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            toast.success("You have logged in successfully");
            const user = {
                email: email,
                uid: userCredential.user.uid,
                passwordHash: userCredential.user.reloadUserInfo.passwordHash,
            };
            setUser(user);
            saveToLocalStorage(user);
            navigate("/");
        } catch (error) {
            toast.error(error.message);
            return error;
        }
    };

    const handleSignUp = async (data) => {
        const { email, password } = data;
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            toast.success("You have signed up successfully");
            const user = {
                email: email,
                uid: userCredential.user.uid,
                passwordHash: userCredential.user.reloadUserInfo.passwordHash,
            };
            setUser(user);
            saveToLocalStorage(user);
            navigate("/");
        } catch (error) {
            toast.error(error.message);
            return error;
        }
    };

    const handleForm = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        activeBtn === "sign-in" ? handleSignIn(data) : handleSignUp(data);
    };

    return (
        <div className="register">
            <div className="section-center register-center">
                <div className="toggle-btns">
                    <button
                        onClick={(event) => setActiveBtn("sign-in")}
                        className={activeBtn === "sign-in" ? "active" : ""}
                    >
                        sign in
                    </button>
                    <button
                        onClick={(event) => setActiveBtn("sign-up")}
                        className={activeBtn === "sign-up" ? "active" : ""}
                    >
                        sing up
                    </button>
                </div>
                <Form onSubmit={handleForm} method="POST" className="form">
                    {activeBtn === "sign-up" ? (
                        <>
                            <section>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                />
                            </section>
                            <section>
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter your lastname"
                                />
                            </section>
                        </>
                    ) : (
                        ""
                    )}
                    <section>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                        />
                        <FaRegEnvelope />
                    </section>
                    <section>
                        <input
                            type={seePassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={(event) => setSeePassword(!seePassword)}
                        >
                            {seePassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </section>
                    <button type="submit" className="form-btn">
                        {activeBtn === "sign-in" ? "sign in" : "sing up"}
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default Register;
