import React from 'react'
import SocialsList from '../SocialsList'
import SocialsData from '../../data/SocialsData'
import { useState } from 'react';

export default function Home() {
  const [socials] = useState (SocialsData);
  return (
    <>
    <div className='block bg-black text-green-500 p-4 m-6 rounded text-xxxl font-semibold flex-auto text-center'>Hey there, My names Paddy.
    </div>
    <div className='text-xxl bg-black p-4 m-6 font-semibold text-green-500 rounded content-center'>
    <SocialsList socials={socials}/>
    </div>
    </>
    )
}
