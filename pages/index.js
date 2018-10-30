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

// CSS rules have no effect on elements inside of a child component.
const PostLink = ({ id, name }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?id=${id}`}>
      <a>{name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = props => (
  <Layout>
    <h1>Batman TV shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <PostLink key={show.id} id={show.id} name={show.name} />
      ))}
    </ul>
    <style jsx>{`
      h1 {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }
    `}</style>
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
