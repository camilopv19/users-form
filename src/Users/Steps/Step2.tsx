import React, { ChangeEventHandler, useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "./Steps";

type Props = {
  formChanged: ChangeEventHandler<HTMLInputElement>;
};

export const Step2: React.FC<Props> = ({ formChanged }) => {
  const ctx = useContext(FormContext);
  return (
    <>
      <label htmlFor="city" data-testid="cityLbl">
        City
      </label>
      <input
        id="city"
        data-testid="city"
        type="text"
        onChange={formChanged}
        value={ctx.userForm.city}
      />

      <label htmlFor="country" data-testid="countryLbl">
        Country
      </label>
      <input
        id="country"
        data-testid="country"
        type="text"
        onChange={formChanged}
        value={ctx.userForm.country}
      />
      <Link data-testid="from2to1" to="/1">Back</Link>
      <Link data-testid="from2to3" to="/3">Next</Link>
    </>
  );
};
