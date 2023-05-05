import React from "react";

export default function About() {
  return (
    <div className="bg-black px-2 m-6 rounded flex-row w-4/5 text-center overflow-auto">
      <h1 className="text-xxxl  mr-4 p 6 font-bold">About myself</h1>
      {/*  w-1/2 float-left */}
      <div className="text-left">
        <h2 className="text-xxxl font-bold">Education</h2>
        <hr className="h-px my-2 bg-white border-0" />
        <div>
          <h2 className="text-xl font-bold">First year / College (HND)</h2>
          During the first year we had modules which covered Object orientated
          programming, web development, databases and computer architecure. The
          main projects we made were fairly small scale,{" "}
          <span className="font-bold text-red-500">SQL, HTML </span>and{" "}
          <span className="font-bold text-red-500">Java </span>
          based. I eventually passed the year with an overall grade of an A.
          <h2 className="text-xl font-bold">Second year / College (HND)</h2>
          The second year was more intensive and project based, most of my
          classes were heavy on Object Orientated programming (inheritance,
          polymorphism and encapsulation) using{" "}
          <span className="font-bold text-red-500">C#</span>. They further
          consolidated concepts such as abstract datatypes, recursion and
          software testing. We also had a module on web development which which
          capped off the year with a large final project, the project was a full
          Stack EPOS web application using the{" "}
          <span className="font-bold text-red-500">.NET framework</span> and ran
          in C# and Entity Framework. I passed this year with an overall grade
          of an A as well. This then allowed me to apply for a variety of
          universities to study further.
        </div>
        <div>
          I got a direct entry into 2nd year at the University of Strathclyde
          for Software Engineering (BSc).
          <h2 className="text-xl font-bold">Second year / University (BSc)</h2>
          During my first year at the university which was the 2nd year of the
          course I had modules which covered Logic and Algorithms, User and Data
          Modelling, functional thinking and advanced programming. I picked up a
          good few languages such as{" "}
          <span className="font-bold text-red-500">C</span>,{" "}
          <span className="font-bold text-red-500">Haskell</span> and further
          solidified my Java knowledge in these modules. At the end of the year
          I finished just 2 marks off a distinction, though not the best result
          I was still happy with it.
          <h2 className="text-xl font-bold">Third year / University (BSc)</h2>
          During 3rd year my modules covered more Functional Programming,
          Algorithms and AI as well as Web and App development. Though quite
          theory based, the modules have also had me pick up{" "}
          <span className="font-bold text-red-500">PHP</span>,{" "}
          <span className="font-bold text-red-500">Javascript</span>,
          <span className="font-bold text-red-500"> React Native</span>, though
          I have been spending a good amount of personal time learning{" "}
          <span className="font-bold text-red-500">React</span> and Javascript
          regardless. I'd also spent personal time learning{" "}
          <span className="font-bold text-red-500">Python</span> to replace Java
          as my goto language. In the process I got facinated with Machine
          learning and AI so I decided I would learn more in depth with{" "}
          <span className="font-bold text-red-500">Pytorch </span>
          with my recently developed Python knowledge. I taught myself using
          some resources online and have thoroughly enjoyed it.
        </div>
      </div>
      {/* <div className="float-right w-1/2">
        <h2 className="text-xxxl font-bold float-right">Personal</h2>
        <div></div>
      </div> */}
    </div>
  );
}
