import React from 'react'

export default function Stack() {
  return (
    <>
    <div className='block bg-black text-green-500 p-4 m-6 rounded'>
    <h1 className='block text-xxxl text-green-500 mr-4 font-semibold text-center'>my stack</h1>
    <p>I've been lucky enough to be exposed to a good variety of technologies, languages and frameworks. 
      However the language I tend to resort to by default is most likely Java, though I am in the process of turning that into Python. 
      Through my career I hope to expand my knowledge and experience of different tech as I'm always up for learning something new</p>

      <div className='bg-black text-green-500 rounded text-center grid grid-cols-3'>
      <div className='bg-gray-900 text-green-500 p- m-6 rounded text-center'>
        <h1>frameworks and tools</h1>
        React - ASP.NET - Bootstrap - Tailwind - Bootstrap
      </div>
      <div className='bg-gray-900 text-green-500 p-4 m-6 rounded text-center'>
        <h1>languages</h1>
        Java - C - C# - Haskell - Javascript - HTML - CSS - SQL - PHP
        </div>
      <div className='bg-gray-900 text-green-500 p-4 m-6 rounded text-center'>
        <h1>miscellaneous</h1>
        Git - Visual basics - Bash
        </div>
    </div>
</div>
    </>
  )
}
