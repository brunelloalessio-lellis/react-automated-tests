import { render, screen } from "@testing-library/react";
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
});
