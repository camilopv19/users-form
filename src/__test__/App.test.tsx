import { render, cleanup } from "@testing-library/react";
import App from "../App";

let getByTestId: any;

describe("App", () => {
  beforeEach(() => {
    const component = render(<App />);
    getByTestId = component.getByTestId;
  });

  afterEach(() => {
    cleanup();
  });

  test("Should render the first step form", () => {
    const form = getByTestId("form");
    expect(form).toBeInTheDocument();
  });

  test("Should render step 1 form's components", () => {
    //Detecting input, label elements and their content
    const firstName = getByTestId("firstName");
    expect(firstName.textContent).toBe("");
    const firstNameLbl = getByTestId("firstNameLbl");
    expect(firstNameLbl.textContent).toBe("First name");

    const lastName = getByTestId("lastName");
    expect(lastName.textContent).toBe("");
    const lastNameLbl = getByTestId("lastNameLbl");
    expect(lastNameLbl.textContent).toBe("Last name");

    const email = getByTestId("email");
    expect(email.textContent).toBe("");
    const emailLbl = getByTestId("emailLbl");
    expect(emailLbl.textContent).toBe("Email");

    const nextBtn = getByTestId("from1to2");
    expect(nextBtn.textContent).toBe("Next");
  });
});
