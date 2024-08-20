import Blog from '@/components/Blog'
import React from 'react'
import BlogPage from './blogs/page'


const Home:React.FC = () => {
  return (
    <>

<div>
      <div className='flex justify-between items-center'>
      <h1 className='text-3xl font-bold'>Top Blogs</h1>
      <button className='px-6 py-3 rounded-2xl bg-indigo-800 text-white transition-all duration-300 delay-75 hover:bg-indigo-950 hover:rounded-full ease-in-out'>Add Blog +</button>
    </div>
    </div>

    {/* <Blog title='Steve blog' author='Stephen'/>
    <Blog title='Ay Blog' author='Ayomitan'/>
    <Blog title='Skimma' author='Skimma'/> */}
    <BlogPage />

    
    </>

  )
}

export default Home
