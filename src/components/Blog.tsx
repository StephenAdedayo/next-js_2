import Link from 'next/link'
import React from 'react'
interface BlogProps{
    title: string
    author: string
    imageSrc : any,
    imageAlt : string,
    body : string
    id: any
}

const Blog:React.FC<BlogProps> = ({id, title, author, body, imageAlt, imageSrc}) => {
  return (
    
    
    <Link href={`/blogs/${id}`}>
    

    <main className='mt-10'>
      <article className='bg-gray-100 border space-y-3 p-10 rounded-md'>
        
        <h3>{title}</h3>
        <p>{body}</p>
        <p>Author: <span className='text-indigo-800'>{author}</span></p>
      </article>
    </main>
    
    </Link>

    
    
  )
}

export default Blog
