import React from 'react';
import Link from 'next/link';
import Layout from '../components/MyLayout';

const PostLink = props => (
  <li>
    <Link href={{ pathname: '/post', query: { title: props.title } }}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>My blog</h1>
    <PostLink title="Hello Next.js" />
    <PostLink title="Learn Next.js" />
    <PostLink title="Deploy apps with Zeit" />
  </Layout>
)
