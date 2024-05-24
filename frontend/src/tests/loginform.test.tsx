import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Login from '../Components/Login';
import { BrowserRouter } from "react-router-dom";
import React from "react";

test('se muestra el titulo', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
  });