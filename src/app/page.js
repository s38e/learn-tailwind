import React from "react";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-neutral-900 text-white flex items-center flex-col gap-4 justify-center">
      <h1 className="group hover:bg-white relative bg-green-600 text-white text-2xl leading-none flex items-center justify-center py-2 px-4 rounded-lg cursor-pointer duration-500 overflow-hidden">
        <span className="transition-all duration-300 delay-200 group-hover:delay-0 group-hover:translate-y-[-150%]">
          Hello World!
        </span>
        <span className="text-green-600 absolute top-[50%] whitespace-nowrap left-[50%] translate-x-[-50%] translate-y-[100%] transition-all delay-0 group-hover:delay-200 duration-300 group-hover:translate-y-[-50%]">
          Hello World!
        </span>
      </h1>
      <h1 className="text-2xl leading-none py-2 px-4 bg-purple-500 rounded-lg">
        Saeed Khaled 
      </h1>
    </main>
  );
}
