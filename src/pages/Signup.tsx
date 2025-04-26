import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Registration successful!");
        
    };

    // validate email
    const isValidEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <>
            {/* <Header /> */}
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="flex max-w-4xl w-full bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Left Side: Login Form */}
                    <div className="w-1/2 p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Signup</h2>
                        <form onSubmit={handleLogin}>
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
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full rounded-md border border-gray-300 p-2"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {/* password validation error message */}
                                {password && password.length < 8 ? <p className="text-xs text-red-700">Minimun 8 char</p> : null}
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full rounded-md bg-primary p-2 text-white disabled:bg-gray-400"
                                disabled={password.length < 8 || !isValidEmail(email)}
                            >
                                Submit
                            </button>
                        </form>

                        {/* Back to login */}
                        <div className="mt-4 flex justify-center text-sm">
                            <button
                                onClick={() => navigate("/login")}
                                className="text-green-600 hover:underline"
                            >
                                Already have an account? Login in
                            </button>
                        </div>
                    </div>

                    {/* Right Side: SSO */}
                    <div className="w-1/2 p-8 bg-gray-50 flex flex-col items-center justify-center border-l">
                        <p className="text-gray-500 text-sm mb-4">Or sign in with</p>
                        <div className="flex space-x-4">
                            <button className="rounded-md border px-4 py-2 hover:bg-gray-100">
                                Google
                            </button>
                            <button className="rounded-md border px-4 py-2 hover:bg-gray-100">
                                GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup