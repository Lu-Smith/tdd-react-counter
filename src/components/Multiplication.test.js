import {render, screen} from "@testing-library/react";
import Multiplication from "./Multiplication";
import userEvent from "@testing-library/user-event";

test('it should have the correct initial value when set to 5', () => {
    render(<Multiplication initialValue={5} />);
    const count = screen.queryByText(5);
    expect(count).toBeVisible();
});

test('it should have a default value when set to 0', () => {
    render(<Multiplication />);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

