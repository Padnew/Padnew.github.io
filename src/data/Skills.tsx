import { IconType } from "react-icons";
import {
  DiBootstrap,
  DiCode,
  DiDotnet,
  DiHaskell,
  DiHtml5,
  DiJava,
  DiPhp,
  DiPostgresql,
  DiPython,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiMicrosoftsqlserver,
  SiPytorch,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export interface IconWithText {
  text: string;
  icon: IconType;
}

export const languagesArray: IconWithText[] = [
  { icon: DiPython, text: "Python" },
  { icon: DiJava, text: "Java" },
  { icon: DiCode, text: "SQL" },
  { icon: DiHaskell, text: "Haskell" },
  { icon: DiCode, text: "C#" },
  { icon: DiHtml5, text: "HTML5" },
  { icon: DiPhp, text: "PHP" },
  { icon: SiTypescript, text: "TypeScript" },
];

export const toolsArray: IconWithText[] = [
  { icon: DiPostgresql, text: "PostgreSQL" },
  { icon: DiReact, text: "React" },
  { icon: DiDotnet, text: ".Net" },
  { icon: SiTailwindcss, text: "Tailwind" },
  { icon: DiBootstrap, text: "Bootstrap" },
  { icon: SiPytorch, text: "PyTorch" },
  { icon: SiMicrosoftsqlserver, text: "MSQL Server" },
  { icon: DiGit, text: "Git" },
];
