import React, { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-utils';
import Head from 'next/head';

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all my posts!" />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
