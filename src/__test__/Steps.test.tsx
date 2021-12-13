import {
  render,
  fireEvent,
  cleanup,
  queryByText,
  screen,
} from "@testing-library/react";
import App from "../App";

let getByTestId: any;

describe("Moving from Step-1 to Step-2 form", () => {
  beforeEach(() => {
    const component = render(<App />);
    getByTestId = component.getByTestId;
  });

  afterEach(() => {
    cleanup();
  });

  test("Should navigate to Step-2 form after clicking Next in Step-1 form", () => {
    // Check if elements are not present: This means the app starts at Step-1 form as expected
    expect(screen.queryByText("City")).toBeNull();
    expect(screen.queryByTestId("cityLbl")).toBeNull();

    //Navigating to Step-2 form
    const nextBtn = getByTestId("from1to2");
    fireEvent.click(nextBtn);

    //Detecting input elements and their content
    const cityLbl = getByTestId("cityLbl");
    const city = getByTestId("city");
    expect(cityLbl).toBeInTheDocument();
    expect(cityLbl.textContent).toBe("City");
    expect(city.textContent).toBe("");
    
    //Detecting button elements and their content
    const from2to1 = getByTestId("from2to1");
    const from2to3 = getByTestId("from2to3");
    expect(from2to1.textContent).toBe("Back");
    expect(from2to3.textContent).toBe("Next");
  });

  test("Should navigate to Step-3 form after clicking Next in Step-2 form", () => {
    // Check if elements are not present: This means the app starts at Step-2 form as expected
    expect(screen.queryByText("Mobile number")).toBeNull();
    expect(screen.queryByTestId("mobileLbl")).toBeNull();

    //Navigating to Step-3 form
    const nextBtn = getByTestId("from2to3");
    fireEvent.click(nextBtn);

    //Detecting input elements and their content
    const mobileLbl = getByTestId("mobileLbl");
    const mobile = getByTestId("mobile");
    expect(mobileLbl).toBeInTheDocument();
    expect(mobileLbl.textContent).toBe("Mobile number");
    expect(mobile.textContent).toBe("");
    
    //Detecting button elements and their content
    const from2to1 = getByTestId("from3to2");
    const saveBtn = getByTestId("btnSaveUser");
    expect(from2to1.textContent).toBe("Back");
    expect(saveBtn.textContent).toBe("Save User");
    fireEvent.click(from2to1);
  });

  test("Should keep city and country input data after moving from Step-2 to Step-1 form", () => {
    //Input random text in City field and check if the value was modified
    const expectedCityValue = 'New York123';
    const city = getByTestId("city");
    fireEvent.change(city, {
      target: {
        value: 'New York123'
      }
    });
    expect(city.value).toBe(expectedCityValue);
    
    //Input random text in City and country fields and check if the value was modified
    const expectedCountryValue = 'USA asdf';
    const country = getByTestId("country");
    fireEvent.change(country, {
      target: {
        value: 'USA asdf'
      }
    });
    expect(country.value).toBe(expectedCountryValue);

    //Check if city and country fields are not present when navigating from Step-2 to Step-1 
    const backBtn = getByTestId("from2to1");
    fireEvent.click(backBtn);
    expect(screen.queryByTestId("city")).toBeNull();
    expect(screen.queryByTestId("country")).toBeNull();

    //Navigate back to Step-2 form and check city and country fields' values
    const from1to2 = getByTestId("from1to2");
    fireEvent.click(from1to2);
    expect(screen.queryByTestId("city")).toBeInTheDocument();
    expect(screen.queryByTestId("country")).toBeInTheDocument();
    expect(city.value).toBe(expectedCityValue);
    expect(country.value).toBe(expectedCountryValue);
  });

});

