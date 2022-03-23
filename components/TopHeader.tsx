import React from "react";

function TopHeader() {
  return (
    <div className="flex justify-between items-center bg-yellow-400">
      <div className="px-10 space-y-3">
        <h4 className="text-6xl font-serif max-w-xl">
          <span className="underline decoration-black decoration-2">
            Medium
          </span>{" "}
          is a place to read, write and connect.
        </h4>
        <p className="">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
        </p>
      </div>
      <div>
        <img
          src="/img/m.png"
          className="hidden md:inline-flex h-32 lg:h-full"
        />
      </div>
    </div>
  );
}

export default TopHeader;
