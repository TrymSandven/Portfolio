import { TbBrandPython } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";

export const featureList = [
  {
    id: 1,
    icon: <TbBrandPython color="#0a1930" size={30} />,
    heading: "Python",
    text: "Gjennom studiet har jeg lært å programmere i Python. Jeg har lært å bruke bibliotekene Pandas, Numpy, Matplotlib og Scikit-learn og Django for å nevne noe.",
  },
  {
    id: 2,
    icon: <AiOutlineConsoleSql color="#0a1930" size={30} />,
    heading: "SQL",
    text: "Jeg har tatt introduksjonsfag i SQL der jeg har lært å bruke å opprette og bruke databaser, tabeller og å utføre spørringer.",
  },
  {
    id: 3,
    icon: <TbBrandHtml5 color="#0a1930" size={30} />,
    heading: "HTML5",
    text: "HTML er grunnlaget for alle nettsider. Selv om studiiene mine ikke har hatt hovedfokus på HTML så er det noe jeg har blitt godt kjent med gjennom studietiden.",
  },
  {
    id: 4,
    icon: <TbBrandCss3 color="#0a1930" size={30} />,
    heading: "CSS",
    text: "Ein nettside er ikke komplett uten CSS. Jeg har lært å bruke CSS for å lage stilte nettsider.",
  },
];
