import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/post-utils';
import Head from 'next/head';

const Homepage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Poncho's Blog</title>
        <meta name="description" content="I post about tennis and web development." />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default Homepage;
