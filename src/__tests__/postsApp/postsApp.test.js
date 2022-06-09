import React from "react";
import { screen, render } from "@testing-library/react";
import PostsApp from "../../components/postsApp/PostsApp";

describe('given the PostsApp', () => {
    it('should render a header', () => {
        //arrange
        const component = render(<PostsApp />);
        //act
        const header = component.container.querySelector('header');
        //assert
        expect(header).toBeInTheDocument();
    })
    it('should render a posts collection', () => {
        //arrange
        const component = render(<PostsApp />);
        //act
        const header = component.container.querySelector('header');
        //assert
        
    })
})