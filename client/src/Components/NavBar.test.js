import React from "react";
import { render, fireEvent, getByText, findByTestId } from "@testing-library/react";
import NavBar from "./NavBar";

test("Renders correctly", () => {
    render(<NavBar />);
}); 

test("Click darkmode btton", () => {
    const darkModeButton = findByTestId(/slider/i).then((res) => {
        fireEvent.click(res);
    });
});

test("Title exists", () => {
    const { findAllByText } = render(<NavBar />);
    const names = findAllByText(/Women's World Cup/i);
    expect(names.length === 1);
});
