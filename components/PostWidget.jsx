import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts , getSimilarPosts } from '../services'

const PostWidget = ({categories , slug}) => {

  const [relatedPosts , setRelatedPosts] = useState([])

  useEffect(() => {

    if(slug) {
      getSimilarPosts(categories,slug).then((result) => setRelatedPosts(result))
    }
    else {
      getRecentPosts().then((result) => setRelatedPosts(result) )
    }

  } , [slug])
  return (
    <div className="bg-white border border-gray-300 rounded-2xl p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Recent Posts</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-14 h-14 flex-none overflow-hidden rounded-full border border-gray-300">
            <img            
              alt={post.title}
              className="object-cover h-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget