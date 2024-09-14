import { ContactMeProps } from "./ContactMe.types";

const ContactMe = (props: ContactMeProps) => {
  const { title } = props;

  return (
    <div>
      <h1>{title ?? "ContactMe"}</h1>
    </div>
  );
};

export default ContactMe;
