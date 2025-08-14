import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email.trim(),
          password
        })
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem("token", data.token)
        alert("Login successful")
      } else {
        alert(data.msg || "Login failed")
      }

    } catch (error) {
      console.error("Login error:", error)
      alert("Something went wrong")
    }
  }

  return (
    <div className="rounded-2xl w-full flex flex-col items-center h-screen bg-[#F6F5FF]">
      <form onSubmit={handleSubmit} className="flex flex-col w-full h-auto items-center pt-10">
        <h1 className="m-3 text-[#5959b2] font-bold w-[260px] text-xl">Login</h1>

        {/* ✅ Fixed input order and labels */}
        <input
          className="bg-[#D9D9D9] w-[260px] h-10 px-1.5 rounded-md text-green-950 mb-3"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="text"
          placeholder="Email"
          required
        />

        <input
          className="bg-[#D9D9D9] w-[260px] h-10 px-1.5 rounded-md text-green-950 mb-3"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <NavLink to="/register">
          <button type="button">New to app? Sign up now.</button>
        </NavLink>

        <button
          type="submit"
          className="text-white bg-[#5959b2] py-2 rounded-[4px] w-[260px] h-10 mt-3"
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default Login
