import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="w-48 h-48 mb-8">
        <img
          src="/error.png" // Replace with your error image
          alt="Error"
          className="w-full h-full"
        />
      </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Oops!</h1>
      <p className="text-lg text-gray-600 mb-6">
        Something went wrong. Don't worry, it's not you, it's us.
      </p>
      <button
        onClick={handleReload}
        className="px-6 py-3 text-lg font-bold text-white bg-gray-900 rounded-md hover:bg-gray-800 transition duration-300"
      >
        Try Again
      </button>
      <div className="mt-4 text-gray-600">
        Or go back to our{" "}
        <a href="/home" className="text-black underline">
          Homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
