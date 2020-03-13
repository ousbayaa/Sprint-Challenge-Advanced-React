import React from "react";
import { render, fireEvent, getByText, findByTestId } from "@testing-library/react";
import PlayerData from "./PlayerData";

const playerData = [
    {
      "name": "Alex Morgan",
      "country": "United States",
      "searches": 100,
      "id": 0
    },
];

test("Renders correctly", () => {
    render(<PlayerData players={playerData} />);
}); 