import Blog from '@/components/Blog'
import React from 'react'
import type { Metadata } from "next";
import { title } from 'process';


export const metadata: Metadata = {
    title: "All Blogs",
    description: "Steve's Blog",
  };
  

const BlogPage:React.FC = () => {

    const blogs: Array<any> = [
        {
          id: "1",
          title: "My First Blog",
          body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatum in pariatur eum delectus dolor harum. Consequatur quaerat unde, eius perferendis distinctio quos eligendi sequi quasi, incidunt dolore eos minus.",
          imageSrc:
            "https://img.freepik.com/free-photo/metallic-cooking-equipment-kitchen-counter_144627-21574.jpg?ga=GA1.1.1642242442.1716375531&semt=ais_hybrid",
          imageAlt: "Trending Kitchen",
          author: "Stephen",
        },

        {
            id: "2",
            title: "My Second Blog",
            body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatum in pariatur eum delectus dolor harum. Consequatur quaerat unde, eius perferendis distinctio quos eligendi sequi quasi, incidunt dolore eos minus.",
            imageSrc:
              "https://img.freepik.com/free-photo/metallic-cooking-equipment-kitchen-counter_144627-21574.jpg?ga=GA1.1.1642242442.1716375531&semt=ais_hybrid",
            imageAlt: "Trending Kitchen",
            author: "Ay",
          },
      ];

  return (
    <div>
    <h1>All BLOGS</h1>

    {blogs.map((blog, index) => (
     <Blog key={index} id={blog.id} title={blog.title} body={blog.body} author={blog.author} imageSrc={blog.imageSrc} imageAlt={blog.imageAlt}/>
    ))}
    
    {/* <Blog title='Ay Blog' author='Ayomitan'/>
    <Blog title='Skimma' author='Skimma'/> */}
    </div>


  )
}

export default BlogPage