import {render, screen} from "@testing-library/react";
import Multiplication from "./Multiplication";
import userEvent from "@testing-library/user-event";

test('it should have the correct initial value when set to 5', () => {
    render(<Multiplication initialValue={5} />);
    const count = screen.queryByText(5);
    expect(count).toBeVisible();
});

test('it should have a default value set to 0', () => {
    render(<Multiplication />);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

test('it should increase value correctly when click multiply', () => {
    render(<Multiplication initialValue={2} />);
    const multiplyButton = screen.getByText("Multiply");
    const count = screen.queryByText(4);
    expect(count).toBeVisible();
});