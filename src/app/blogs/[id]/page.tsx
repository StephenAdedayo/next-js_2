import Image from "next/image";
import { title } from "process";
import React from "react";
import { blogs } from "../../../../blog";

interface Proper{
    params:any
    
}

const SinglePage: React.FC<Proper> = ({params}) => {

const blog = blogs.find(blog => blog.id == params.id)

const {imageSrc, imageAlt, title, body, author} : any = blog


  return (
    <>
      <div className="bg-slate-100 rounded-lg shadow-md border w-full space-x-10 p-5 h-[50vh] flex justify-center items-center">
        <div>
          <Image src={imageSrc} className="rounded-lg" alt={imageAlt} width={500} height={500} />
        </div>

        <div className="space-y-5">
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
