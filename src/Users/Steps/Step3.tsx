import React, { ChangeEventHandler, useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "./Steps";

type Props = {
  formChanged: ChangeEventHandler<HTMLInputElement>;
};

export const Step3: React.FC<Props> = ({ formChanged }) => {
  const ctx = useContext(FormContext);
  return (
    <>
      <label htmlFor="dateOfBirth" data-testid="dateOfBirthLbl">
        Date of birth
      </label>
      <input
        id="dateOfBirth"
        data-testid="dateOfBirth"
        type="date"
        onChange={formChanged}
        value={ctx.userForm.dateOfBirth}
      />
      <label htmlFor="mobile" data-testid="mobileLbl">
        Mobile number
      </label>
      <input
        id="mobile"
        data-testid="mobile"
        type="number"
        onChange={formChanged}
        value={ctx.userForm.mobile}
      />
      <Link to='/2'>Back</Link>
      <button type="submit">Save User</button>
    </>
  );
};
