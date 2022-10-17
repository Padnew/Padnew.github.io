import React from 'react'

export default function About() {
  return (
    <div className='bg-black text-green-500 p-4 m-6 rounded flex-col w-3/5 text-center'>
      <h1 className='text-xxxl text-green-500 mr-4 p 6 font-bold '>about myself</h1>
      <div className='text-left'>
      <h2 className='text-xxxl font-bold '>College</h2>
      <p>
        In 2019 attended the City of Glasgow College for Software Development (HND), a 2 year course of which I was awarded an overall A.
        <h2 className='text-xxl font-bold'>First year</h2>
        During the first year we had modules which covered Object orientated programming, web development, databases and computer architecure.
        The main projects we made were fairly small scale, SQL, HTML and Java based.
        I eventually passed the year with an overall grade of an A.
        <h2 className='text-xxl font-bold'>Second year</h2>
        The second year was more intensive and project based, most of my modules were heavy on Object Orientated programming using C#.
        They further consolidated concepts such as abstract datatypes (inheritance, polymorphism and encapsulation) and recursion.
        We also had a module on web development which covered ASP.NET and C# which was the larger project, the project was a full Stack
        EPOS web application using the .NET framework and ran in C# with a SQL database with full CRUD functionality.
        I passed this year with an overall grade of an A as well.
        This then allowed me to apply for a variety of universities to study further.
      </p>
      <h2 className='text-xxxl font-bold '>University</h2>
      <p>
        I got a direct entry into 2nd year at the University of Strathclyde for Software Engineering (BSc), a 4 year course.
        <h2 className='text-xxl font-bold'>First year</h2>
        During my first year I had modules which covered Logic and Algorithms, User and Data Modelling, functional thinking and advanced programming.
        I picked up a good few languages such as C, Haskell and Java.

      </p>
      </div>
    </div>
  )
}
