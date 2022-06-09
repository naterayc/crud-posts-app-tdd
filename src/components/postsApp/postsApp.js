import React from "react";
import Header from "../header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsContainer from "../postsContainer/postsContainer";

const PostsApp = () => (
    <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PostsContainer />} />
                <Route path='/post/:postid' />
            </Routes>
        </BrowserRouter>
    </>
)

export default PostsApp;
