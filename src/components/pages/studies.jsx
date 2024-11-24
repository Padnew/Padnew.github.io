import { Card, Tabs, Title, useMantineTheme, Text } from "@mantine/core";
import { React } from "react";

export default function Studies() {
  const theme = useMantineTheme();
  return (
    <Card
      display="block"
      bg="black"
      ta="center"
      w="75%"
      c={theme.colors.blue[4]}
      mt={15}
    >
      <Title fz={32} fw={400} mb={10}>
        Studies
      </Title>
      <Text size="sm" ta="left" mb={10}>
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
      <Tabs defaultValue="HNC" ta="left" variant="outline">
        <Tabs.List grow>
          <Tabs.Tab value="HNC">HNC</Tabs.Tab>
          <Tabs.Tab value="HND">HND</Tabs.Tab>
          <Tabs.Tab value="Year2">2nd Year (BSc)</Tabs.Tab>
          <Tabs.Tab value="Year3">3rd Year (BSc)</Tabs.Tab>
          <Tabs.Tab value="Year4">4th Year (BSc)</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="HNC" mt={10}>
          During the first year we had modules which covered Object orientated
          programming, web development, databases and computer architecture. The
          main projects we made were fairly small scale,{" "}
          <span className="font-bold text-red-500">SQL, HTML </span>and{" "}
          <span className="font-bold text-red-500">Java </span>based. I
          eventually passed the year with an overall grade of an A.
        </Tabs.Panel>

        <Tabs.Panel value="HND" mt={10}>
          The second year was more intensive and project based, most of my
          classes were heavy on Object Orientated programming (inheritance,
          polymorphism and encapsulation) using{" "}
          <span className="font-bold text-red-500">C#</span>. They further
          consolidated concepts such as abstract data types, recursion and
          software testing. We also had a module on web development which capped
          off the year with a large final project, the project was a full Stack
          EPOS web application using the{" "}
          <span className="font-bold text-red-500">.NET framework</span> and ran
          in C# and Entity Framework. I passed this year with an overall grade
          of an A as well. This then allowed me to apply for a variety of
          universities to study further.
        </Tabs.Panel>

        <Tabs.Panel value="Year2" mt={10}>
          During my first year at the university which was the 2nd year of the
          course I had modules which covered Logic and Algorithms, User and Data
          Modelling, functional thinking and advanced programming. I picked up a
          good few languages such as{" "}
          <span className="font-bold text-red-500">C</span>,{" "}
          <span className="font-bold text-red-500">Haskell</span> and further
          solidified my Java knowledge in these modules. At the end of the year
          I finished just 2 marks off a distinction, though not the best result
          I was still happy with it.
        </Tabs.Panel>

        <Tabs.Panel value="Year3" mt={10}>
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
          as my go-to language. In the process I got fascinated with Machine
          learning and AI so I decided I would learn more in-depth with{" "}
          <span className="font-bold text-red-500">Pytorch </span>
          with my recently developed Python knowledge. I taught myself using
          some resources online and have thoroughly enjoyed it.
        </Tabs.Panel>

        <Tabs.Panel value="Year4" mt={10}>
          As my time at university drew to an end I managed to juggle my
          graduating and most difficult year alongside a part-time full-stack
          software engineering role at GuitarGuitar. My primary focus was my
          dissertation as that made up for 50% of my entire degree and 75% of my
          final year. My project was to create a Mark Management system for the
          university, a system in which staff at the university could upload
          their class marks for allocated courses and view insights into student
          performances. This project is available at my GitHub.
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
}
