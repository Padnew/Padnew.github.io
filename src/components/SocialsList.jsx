import React from 'react'
import { SocialIcon } from 'react-social-icons'
export default function SocialsList({socials}) {
  return (
    <ul>
      {socials.map((item)=>(
        <span className='position-relative rounded justify-center w-3/5'>
        <span key={item.id} className='bg-black p-5 m-2 space-x-3 rounded hover:text-white'>{item.name}
          <SocialIcon url={item.iconLink} />
        </span>
        </span>
    ))}
    </ul>
  )
}
