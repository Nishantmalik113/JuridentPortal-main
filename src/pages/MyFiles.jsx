import React, { useState } from "react";
import { files } from "./utils/index";
import Navbar from "../components/Navbar";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function MyFile() {
  const [bookmarks, setBookmarks] = useState([]);
  return (
    <>
      <Navbar />
      <main className="px-4 md:px-16 py-8">
        <section className="min-h-screen relative flex flex-col items-center justify-center bg-[#060223] text-white overflow-hidden">
          <div className="background-circle circle-1"></div>
          <div className="background-circle circle-2"></div>
          <div className="w-full sm:px-20 flex items-center justify-between p-5">
            <div className="flex items-center">
              <Link to="/Dashboard">
                <div className="flex items-center md:ml-12">
                  <ArrowLeft style={{ color: "white" }} />
                  <h1 className="text-yellow-500 ml-4 font-bold text-3xl">
                    Files
                  </h1>
                </div>
              </Link>
            </div>
            <div className="relative w-64 max-w-md">
              <input
                type="text"
                placeholder="Search Files"
                className="w-full bg-gray-800 rounded-lg py-2 px-4 text-white"
              />
              <button className="absolute right-3 top-2.5">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="Files mx-10 sm:pt-10 p-5 rounded-[3rem] bg-[rgba(255,255,255,0.2)] flex flex-col items-center gap-5">
            <div className="sort-filter relative pb-4 w-full">
              <div className="flex absolute right-0 gap-5 px-1">
                <button>
                  <i className="fa-regular fa-bookmark text-blue-500"></i>{" "}
                  Bookmarks
                </button>
                <button>
                  <i className="fa-solid fa-filter text-blue-500"></i> Filter
                </button>
                <button>
                  <i className="fa-solid fa-sort text-blue-500"></i> Sort
                </button>
              </div>
            </div>
            <div className="file-section grid z-101  sm:grid-cols-2 gap-5 items-center justify-center">
              {files.map((option, optionIndex) => {
                return (
                  <div
                    key={optionIndex}
                    className="file  flex flex-col gap-5 bg-[rgba(255,255,255,0.3)] p-5 rounded-2xl"
                  >
                    <h1>{option.Name}</h1>
                    <div className="flex gap-5">
                      <img
                        className="w-[30%] h-[30%]"
                        src="../file.png"
                        alt=""
                      />
                      <div className="flex flex-col gap-1 justify-center">
                        <p>
                          <b>Email: </b> {option.email}
                        </p>
                        <p>
                          <b>Case Number: </b> {option.Cno}
                        </p>
                        <p>
                          <b>Case Name: </b> {option.Cname}
                        </p>
                        <p>
                          <b>Party Name: </b> {option.Party}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <button>View</button>
                      <button>
                        <i className="fa-solid fa-download"></i> Download
                      </button>
                      <button
                        onClick={() => {
                          if (option.bookmark === true) {
                            option.bookmark = false;
                            let newBookmarks = [bookmarks];
                            const index = newBookmarks.indexOf(5);
                            if (index > -1) {
                              // only splice array when item is found
                              newBookmarks.splice(index, 1); // 2nd parameter means remove one item only
                            }
                            setBookmarks(newBookmarks);
                            console.log(bookmarks);
                          } else {
                            option.bookmark = true;
                            let newBookmarks = { ...bookmarks, optionIndex };
                            setBookmarks(newBookmarks);
                            console.log(bookmarks);
                          }
                        }}
                      >
                        {option.bookmark === true ? (
                          <i className="fa-solid fa-bookmark"></i>
                        ) : (
                          <i className="fa-regular fa-bookmark"></i>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
