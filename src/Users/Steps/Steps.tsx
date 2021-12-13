import { useState, createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../../Helpers/IUser";
import { saveUser } from "../../Helpers/server";
import Card from "../../UI/Card";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import styles from "./Steps.module.css";

const appCtxDefaultValue = {
  userForm: {
    city: "",
    country: "",
    dateOfBirth: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    mobile: "",
  },
  setUserForm: (userForm: IUser) => {}
};

export const FormContext = createContext(appCtxDefaultValue);

const Steps = () => {
  const [userForm, setUserForm] = useState<IUser>(appCtxDefaultValue.userForm);
  const params = useParams();
  let navigate = useNavigate();

  const addUser = (event: any) => {
    event.preventDefault();
    saveUser(userForm);
    navigate('/list');
  };

  const formChanged = (event: any) => {
    const { id, value } = event.target;
    setUserForm((prevForm: IUser) => ({ ...prevForm, [id]: value }));
  };

  let step = <>Invalid URL</>;

  switch (params.step) {
    case "2":
      step = <Step2 formChanged={formChanged} />;
      break;
    case "3":
      step = <Step3 formChanged={formChanged} />;
      break;
    default:
      step = <Step1 formChanged={formChanged} />;
      break;
  }

  return (
    <>
      <FormContext.Provider value={{userForm, setUserForm}}>
        <Card className={styles.input}>
          <form data-testid="form" onSubmit={addUser}>{step}</form>
        </Card>
      </FormContext.Provider>
    </>
  );
};

export default Steps;
