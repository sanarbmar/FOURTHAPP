import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, test, vi } from "vitest";
import Signup from '../Components/Signup';
import React from "react";
import { BrowserRouter } from "react-router-dom";


test('se muestra el titulo', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
  expect(screen.getByText('Sign-Up')).toBeInTheDocument();
});

/* test('se envia correctamente', () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  const nameInput = screen.getByLabelText('Name');
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByRole('button', { name: /register/i });

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  // Agrega tus expectativas aquí, por ejemplo:
  // expect(someFunction).toHaveBeenCalled();
}); */

