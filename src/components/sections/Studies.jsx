import { Card, Tabs, Text } from "comitium-ui";
import { React } from "react";

export default function Studies() {
  return (
    <Card style={{ alignContent: "center" }}>
      <Text size={32}>Studies</Text>
      <Text>
        The TL;DR of my education is that I got an unconditional offer to the{" "}
        <span className="font-bold text-red-500">City Of Glasgow College</span>{" "}
        where I undertook an{" "}
        <span className="font-bold text-red-500">
          HND in Software Development
        </span>{" "}
        and graduated with an{" "}
        <span className="font-bold text-red-500">
          A in both my HNC and HND.{" "}
        </span>
        <br />
        Then I recieved 2nd Year entry into{" "}
        <span className="font-bold text-red-500">
          BSc for Software Engineering
        </span>{" "}
        at the{" "}
        <span className="font-bold text-red-500">
          University of Strathclyde
        </span>{" "}
        where I graduated with a{" "}
        <span className="font-bold text-red-500">
          2:1 averaging 69% in each year
        </span>
      </Text>
      <Tabs
        tabs={[
          {
            label: "HNC",
            content: (
              <div>
                During the first year we had modules which covered Object
                orientated programming, web development, databases and computer
                architecture. The main projects we made were fairly small scale,{" "}
                <span className="font-bold text-red-500">SQL, HTML </span>and{" "}
                <span className="font-bold text-red-500">Java </span>based. I
                eventually passed the year with an overall grade of an A.
              </div>
            ),
          },
          {
            label: "HND",
            content: (
              <div>
                The second year was more intensive and project based, most of my
                classes were heavy on Object Orientated programming
                (inheritance, polymorphism and encapsulation) using{" "}
                <span className="font-bold text-red-500">C#</span>. They further
                consolidated concepts such as abstract data types, recursion and
                software testing. We also had a module on web development which
                capped off the year with a large final project, the project was
                a full Stack EPOS web application using the{" "}
                <span className="font-bold text-red-500">.NET framework</span>{" "}
                and ran in C# and Entity Framework. I passed this year with an
                overall grade of an A as well. This then allowed me to apply for
                a variety of universities to study further.
              </div>
            ),
          },
          {
            label: "2nd Year (BSc)",
            content: (
              <div>
                During my first year at the university which was the 2nd year of
                the course I had modules which covered Logic and Algorithms,
                User and Data Modelling, functional thinking and advanced
                programming. I picked up a good few languages such as{" "}
                <span className="font-bold text-red-500">C</span>,{" "}
                <span className="font-bold text-red-500">Haskell</span> and
                further solidified my Java knowledge in these modules. At the
                end of the year I finished just 2 marks off a distinction,
                though not the best result I was still happy with it.
              </div>
            ),
          },
          {
            label: "3rd Year (BSc)",
            content: (
              <div>
                During 3rd year my modules covered more Functional Programming,
                Algorithms and AI as well as Web and App development. Though
                quite theory based, the modules have also had me pick up{" "}
                <span className="font-bold text-red-500">PHP</span>,{" "}
                <span className="font-bold text-red-500">Javascript</span>,{" "}
                <span className="font-bold text-red-500">React Native</span>,
                though I have been spending a good amount of personal time
                learning <span className="font-bold text-red-500">React</span>{" "}
                and Javascript regardless. I'd also spent personal time learning{" "}
                <span className="font-bold text-red-500">Python</span> to
                replace Java as my go-to language. In the process I got
                fascinated with Machine learning and AI so I decided I would
                learn more in-depth with{" "}
                <span className="font-bold text-red-500">Pytorch</span> with my
                recently developed Python knowledge. I taught myself using some
                resources online and have thoroughly enjoyed it.
              </div>
            ),
          },
          {
            label: "4th Year (BSc)",
            content: (
              <div>
                As my time at university drew to an end I managed to juggle my
                graduating and most difficult year alongside a part-time
                full-stack software engineering role at GuitarGuitar. My primary
                focus was my dissertation as that made up for 50% of my entire
                degree and 75% of my final year. My project was to create a Mark
                Management system for the university, a system in which staff at
                the university could upload their class marks for allocated
                courses and view insights into student performances. This
                project is available at my GitHub.
              </div>
            ),
          },
        ]}
        defaultTab={0}
      />
    </Card>
  );
}
