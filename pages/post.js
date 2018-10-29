import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Post = props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
)

export default withRouter(Post);
