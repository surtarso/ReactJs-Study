import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Graphs from "./components/graphs";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Graphs /> 
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
