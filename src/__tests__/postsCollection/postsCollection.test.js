import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import { server } from "../../mocks/server";
import { rest } from 'msw';
import { BASE_URL } from '../../constants/constants';
import PostsCollection from '../../components/postsCollection/postsCollection';

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

//mount the component
beforeEach(() => render(<PostsCollection />));

//reset the server before each test
beforeEach(() => server.resetHandlers());

describe('given the PostsCollection component', () => {
    it('when its mounted and the server return posts it should renders a posts list"', async () => {
        //act
        await waitFor(() => {
            //screen.debug()
            expect(screen.getAllByTestId('post').length).toBe(6);
        });


    });

    it('when its mounted and the server returns an connection error, should render "connection error, please try again later"', async () => {
        //arrange
        server.use(
            rest.get(`${BASE_URL}/posts`, res => {
                return res.networkError('Failed to connect')
            })
        )
        //screen.debug()
        //act
        await waitFor(() => {
            expect(screen.getByText(/connection error, please try again later/i)).toBeInTheDocument()
        });
    });
});