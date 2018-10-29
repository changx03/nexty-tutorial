import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/MyLayout';

const About = props => {
  const { pathname, query } = props.router;
  console.log(pathname);
  console.log(query);
  // Note: url is deprecated. The url error message may come from React devTool.
  return (
    <Layout>
      <p>This is the about page</p>
    </Layout>
  );
};

export default withRouter(About);
