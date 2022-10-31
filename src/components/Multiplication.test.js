import {render, screen} from "@testing-library/react";
import Multiplication from "./Multiplication";

test('it should have the correct initial value when set to 5', () => {
    render(<Multiplication initialValue={5} />);
    const count = screen.queryByText(5);
    expect(count).toBeVisible();
});