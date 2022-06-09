import React from "react";
import { screen, render } from "@testing-library/react";
import Header from '../../components/header/header';
describe('given the Header component', () => {
    it('when its mounted, it should renders', () => {
        //arrange
        render(<Header />);
        //act
        const headerElement = screen.getByText('¡Posts App!')
        //assert
        expect(headerElement).toBeInTheDocument();
    })
})