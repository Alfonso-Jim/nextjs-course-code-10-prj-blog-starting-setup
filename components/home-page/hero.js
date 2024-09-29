import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/poncho.jpeg" alt="An image showing Al" width={300} height={300} />
      </div>
      <h1>Hi, Alfonso here!</h1>
      <p>
        I am a passionate front-end developer specializing in creating seamless, user-centric digital experiences. I have a solid background in React, Redux,
        TypeScript, and modern web development practices. I consistently adhere to SDLC best practices to deliver robust and effective web solutions.
      </p>
    </section>
  );
};

export default Hero;
