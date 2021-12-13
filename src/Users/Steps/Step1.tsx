import { ChangeEventHandler, useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "./Steps";

type Props = {
  formChanged: ChangeEventHandler<HTMLInputElement>;
};

export const Step1: React.FC<Props> = ({ formChanged }) => {
  const ctx = useContext(FormContext);
  return (
    <>
      <label htmlFor="firstName" data-testid="firstNameLbl">
        First name
      </label>
      <input
        id="firstName"
        data-testid="firstName"
        type="text"
        onChange={formChanged}
        value={ctx.userForm.firstName}
      />

      <label htmlFor="lastName" data-testid="lastNameLbl">
        Last name
      </label>
      <input
        id="lastName"
        data-testid="lastName"
        type="text"
        onChange={formChanged}
        value={ctx.userForm.lastName}
      />

      <label htmlFor="email" data-testid="emailLbl">
        Email
      </label>
      <input
        id="email"
        data-testid="email"
        type="text"
        onChange={formChanged}
        value={ctx.userForm.email}
      />
      <Link data-testid="from1to2" to="/2">Next</Link>
    </>
  );
};
