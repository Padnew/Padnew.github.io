import React from 'react'
import { SocialIcon } from 'react-social-icons'
export default function SocialsList({socials}) {
  return (
    <div className='content-center'>
    <ul>
      {socials.map((item)=>(
        <li key={item.id} className='hover:text-white'>{item.name}
          <SocialIcon url={item.iconLink} />
        </li>
    ))}
    </ul>
    </div>
  )
}
