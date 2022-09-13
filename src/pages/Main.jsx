import React, { useState } from "react";
import { useEffect } from "react";
import { devices } from "../utils/resolutions";
import styled from "styled-components";
import Post from "../components/Post";

const StyledSection = styled.section`
  padding: 1rem;
  padding-top: calc(118px + 0.6rem);

  @media ${devices.tablet} {
    padding-top: calc(118px + 1.5rem);
  }

  @media ${devices.desktop} {
    padding-top: calc(118px + 1.25rem);
  }
`;

const PostsContainer = styled.div`
  display: grid;
  width: 100%;
  justify-content: center;
  gap: 10px;

  @media ${devices.tablet} {
    gap: 26px 20px;
    grid-template-columns: fit-content(325px) fit-content(325px);
  }

  @media ${devices.desktop} {
    gap: 20px 12px;
    grid-template-columns: fit-content(468px) fit-content(468px);
  }
`;

const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <StyledSection>
      <PostsContainer>
        {users && users.map((user) => <Post author={user} key={user.id} />)}
      </PostsContainer>
    </StyledSection>
  );
};

export default Main;
