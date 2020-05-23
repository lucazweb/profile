import React, { useState, useEffect } from "react";
import { ExternalLink } from "../Menu/menu.styled";
import { RepoList, RepoListItem, RepoTitle, RepoDesc } from "./repolist.styled";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const ProjectList = () => {
  const [repos, setRepos] = useState([]);

  const showRepos = [
    "transactions-manager-app",
    "omnistack-react-app",
    "hi-beats",
    "star-warjs",
    //'profile-react-app',
    "spotify-web-browser",
  ];

  useEffect(() => {
    const handleRequests = async () => {
      if (repos.length === 0) {
        try {
          const { data } = await api.get("/users/lucazweb/repos");
          const allowed = data.filter((repo) => showRepos.includes(repo.name));
          setRepos(allowed);
        } catch (error) {
          console.log(error);
        }
      }
    };
    handleRequests();
  }, [setRepos, repos, showRepos]);

  return (
    <RepoList>
      {repos.length > 0 ? (
        <React.Fragment>
          {repos.map((repo, index) => (
            <ExternalLink href={repo.html_url} target="_blank">
              <RepoListItem key={index}>
                <RepoTitle>{repo.name}</RepoTitle>
                <RepoDesc>{repo.description}</RepoDesc>
              </RepoListItem>
            </ExternalLink>
          ))}
        </React.Fragment>
      ) : (
        <span> Nada a exibir </span>
      )}
    </RepoList>
  );
};
