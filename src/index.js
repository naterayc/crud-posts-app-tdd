import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PostApp from '../src/components/postsApp/postsApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostApp />
  </React.StrictMode>
);
