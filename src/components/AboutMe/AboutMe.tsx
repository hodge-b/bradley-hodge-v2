import { AboutMeProps } from "./AboutMe.types";

const AboutMe = (props: AboutMeProps) => {
  const { title } = props;

  return (
    <div className="">
      <h1>{title ?? "About Me"}</h1>
    </div>
  );
};

export default AboutMe;
