import {Card, ScmType} from "../../../../../Tencyle/Model";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import Ecr from "../assets/ecr.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import Github from "../assets/github.svg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import Gitlab from "../assets/gitlab.svg";

const integrationScmCards: Card<ScmType>[] = [
  {
    // svg: Ecr,
    value: "ecr",
    title: "ECR",
  },
  {
    // svg: Gitlab,
    value: "gitlab",
    title: "Gitlab",
  },
  {
    // svg: Github,
    value: "github",
    title: "Github",
  }
]

export default integrationScmCards;
