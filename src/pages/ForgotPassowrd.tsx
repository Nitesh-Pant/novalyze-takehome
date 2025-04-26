import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    // validate email
    const isValidEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <>
            {/* <Header /> */}
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="flex max-w-4xl w-1/2 bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Left Side: Login Form */}
                    <div className="w-full p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Forgot Password</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full rounded-md border border-gray-300 p-2"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                {/* invalid email error message */}
                                {email && !isValidEmail(email) ? <p className="text-xs text-red-700">Please enter valid email</p> : null}
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-md bg-primary p-2 text-white disabled:bg-gray-400"
                                disabled={!isValidEmail(email)}
                            >
                                Send Reset Link
                            </button>
                        </form>

                        {/* Back to login */}
                        <div className="mt-4 flex justify-between text-sm">
                            <button className="text-blue-600 hover:underline" onClick={() => navigate('/login')}>
                                Back to login
                            </button>

                        </div>

                    </div>

                </div>
            </div >
        </>
    );
};

export default ForgotPassword;
