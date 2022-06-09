import React from "react";
import { screen, render } from "@testing-library/react";
import PostsContainer from '../../components/postsContainer/postsContainer';

describe('given the PostsContainer component', () => {
    it('when its mounted it should renders the title "All Posts"', () => {
        //arrange
        render(<PostsContainer />);
        //act
        const title = screen.getByText('All Posts');
        //assert
        expect(title).toBeInTheDocument();
    });
});