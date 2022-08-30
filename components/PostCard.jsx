import Head from "next/head";
import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white p-0 lg:p-8 pb-12 mb-8 border border-gray-300 rounded-xl">
      <div className="relative overflow-hidden shadow-2xl rounded-2xl mb-6 m-8 sm:m-8 md:m-8 lg:m-0">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>

      <h1
        className="transition duration-700 text-center mb-8 mt-8 cursor-pointer 
          hover:text-pink-600  font-semibold text-sm md:text-3xl
          "
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>

      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
          <img
            alt={post.author.name}
            height="35px"
            width="35px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />

          <p className="inline align-middle text-pink-500 ml-2 text-sm md:text-lg">
            {post.author.name}
          </p>
        </div>

        <div className="text-gray-700 hidden lg:inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-pink-500">{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>

      <p
        className="text-center text-gray-700 font-normal
      px-4 lg:px-20 mb-8 text-sm md:text-lg
      "
      >
        {post.excerpt}
      </p>

      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-700 bg-pink-600 text-sm md:text-lg font-medium rounded-xl text-white px-3 py-2  cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
