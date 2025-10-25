import React from "react";
import { useUserStore } from "../store/userStore";
import Button from "../Components/ui/Button";

export default function Profile() {
  const { user, logout, toggleLogin } = useUserStore();

  if (!user) {
    return (
      <div className="py-20 text-center text-gray-600">
        <h2 className="text-2xl font-bold text-[#bfa17a] mb-4">
          You are not signed in
        </h2>
        <p>Please sign in to view your profile.</p>
        <br />
            <Button
              text={user?.name ? `Welcome, ${user.name}` : "Sign In"}
              onClick={toggleLogin}
              type="primary"
              className="px-3 py-2 text-xs"
            />
      </div>
    );
  }

  return (
    <section className="py-20 bg-[#f9f5f0] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-[#bfa17a] mb-8 text-center">
          My Profile
        </h2>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-6">
          <div className="flex flex-col items-center gap-4">
            <img
              src={user.avatar || "https://via.placeholder.com/120"}
              alt={user.name}
              className="w-28 h-28 rounded-full object-cover shadow"
            />
            <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Username:</span>
              <span className="text-gray-600">{user.username || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Member Since:</span>
              <span className="text-gray-600">{user.joinDate || "-"}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={logout}
              className="bg-[#bfa17a] text-white font-semibold px-6 py-3 rounded hover:bg-[#a78b65] transition"
            >
              Logout
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
