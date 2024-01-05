import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { HelloWorld } from "../src/HelloWorld.tsx";

describe("Hello world test", () => {
  it("renders hello world", () => {
    render(<HelloWorld />);
    expect(
      screen.getByRole("heading", {
        level: 1, // means the h1 tag
      })
    ).toHaveTextContent("Hello world!");
  });
});
