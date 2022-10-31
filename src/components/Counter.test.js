import {render, screen} from "@testing-library/react";
import Counter from "./Counter";


test('it should have the correct initial value when set to 7', () => {
    render(<Counter initialValue={7} />);
    const count = screen.queryByText(7);
    expect(count).toBeVisible();
});

test('it should have a default initial value of 0', () => {
    throw new Error();
})

test('it should increase the value correctly when add is clicked once', () => {
    throw new Error();
})

test('it should increase the value correctly when add is clicked twice', () => {
    throw new Error();
})

test('it should increase the value correctly when remove is clicked once', () => {
    throw new Error();
})

test('it should increase the value correctly when remove is clicked twice', () => {
    throw new Error();
})

test('it should not allowe a negative number when the initial value is 0 and remove is clicked', () => {
    throw new Error();
})



