import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'; // server-side fetch
import Layout from '../components/MyLayout';

// const PostLink = props => (
//   <li>
//     <Link as={`/p/${props.id}`} href={{ pathname: '/post', query: { title: props.title } }}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

// export default () => (
//   <Layout>
//     <h1>My blog</h1>
//     <PostLink id="hello-nextjs" title="Hello Next.js" />
//     <PostLink id="learn-nextjs" title="Learn Next.js" />
//     <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
//   </Layout>
// )

const Index = props => (
  <Layout>
    <h1>Batman TV shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data,
  };
};

export default Index;
