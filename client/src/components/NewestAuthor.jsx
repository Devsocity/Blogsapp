import React from "react";
import Singleauthor from "./Singleauthor";
import Slider from "react-slick";
const NewestAuthor = () => {
  return (
    <div className="mt-5 bg-slate-200 w-11/12 mx-auto rounded-3xl p-5 ">
      <p className="text-4xl font-bold  mt-5 text-center">Newest Authors</p>
      <p className="text-center text-2xl text-gray-500  my-5">
        Give him more suport in website
      </p>

      <div className="grid py-5  md:grid-cols-3  lg:grid-cols-5 gap-6">
        <Singleauthor />
        <Singleauthor />
        <Singleauthor />
        <Singleauthor />
        <Singleauthor />
      </div>
    </div>
  );
};

export default NewestAuthor;
