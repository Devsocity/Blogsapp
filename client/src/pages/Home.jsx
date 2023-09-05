import Hero from '../components/Hero.jsx';
import NewestAuthor from '../components/NewestAuthor.jsx';
import Blogbanner from '../components/Blogbanner.jsx';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Home page</title>
        <link
          rel='canonical'
          href='http://mysite.com/example'
        />
      </Helmet>
      <Hero />
      <NewestAuthor />
      <Blogbanner />
    </div>
  );
};

export default Home;
