import React from 'react'
import Image from 'next/image'
import { posts } from '@/data/data';
import './posts.css';

export default function Posts() {
  return (
    <section id='posts' className='posts-section py-10'>
      <div className="container mx-auto px-4">
        <h2 className='text-3xl font bold textt-center mb-8'>Last Posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {posts.map(post => (
            <article
            key={post.id}
            className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition'>
              <div className='relative w-full h-56'>
                <Image
                src={post.image}
                alt={post.title}
                fill
                /* width={600}
                height={400} */
                className='object-cover'></Image>
              </div>
              <div className="p-6">
                <span className='text-sm text-gray-500'>{post.category}</span>
                <h3 className='text-xl font-semibold mt-2 mb-2'>{post.title}</h3>
                <p className='text-gray-700 text-sm mb-4'>{post.excerpt}</p>
                <div className='text-sm text-gray-500'> {post.date} | {post.author}</div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
