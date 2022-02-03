import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {


  test("render Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    //Act
    //not in this case

    //Assert

    const helloWorldElement = screen.getByText("Hello world");

    expect(helloWorldElement).toBeInTheDocument();
  });



  test("renders proud to see you if button NOT clicked", () => {
    render(<Greeting />);
    const textNoClickElement = screen.getByText("to see you", {
      exact: false,
    });
    expect(textNoClickElement).toBeInTheDocument();
  });



  test('renders "Changed!" if button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const textClickElement = screen.getByText("Changed!");
    expect(textClickElement).toBeInTheDocument();
  });

  test('NOT RENDERS "proud to see you" if button NOT clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const textClickElement = screen.queryByText("to see you", {
      exact: false,
    });
    expect(textClickElement).toBeNull()
  });



  test('NOT RENDERS "Changed!" if button NOT clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const textClickElement = screen.queryByText("Changed!");
    expect(textClickElement).toBeNull()
  });

  
});
