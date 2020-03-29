import { NextPage } from "next";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <div>
      <h1>Hello pand-aid!</h1>
      <h2>user agent: {userAgent}</h2>
      <img src="/images/pand-aid.png" />
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
