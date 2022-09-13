import React, { useState } from "react";
import { useEffect } from "react";
import { devices } from "../utils/resolutions";
import styled from "styled-components";
import Rect from "../assets/rect.png";

const Container = styled.div`
  font-size: 16px;
  height: 200px;
  line-height: 19px;
  padding: 8px 9px;
  border: 5px solid #27569c;
  border-radius: 5px;

  @media ${devices.tablet} {
    height: 470px;
    max-width: 325px;
    padding: 20px 18px;
  }

  @media ${devices.desktop} {
    height: 388px;
    max-width: 467px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${devices.tablet} {
    gap: 22px;
  }

  @media ${devices.desktop} {
    flex-direction: row;
    gap: 28px;
  }
`;

const Image = styled.img`
  display: none;
  width: 150px;
  height: 150px;

  @media ${devices.tablet} {
    display: block;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 0.25rem;

  @media ${devices.tablet} {
    gap: 18px;
  }

  @media ${devices.desktop} {
    gap: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 42px;

  @media ${devices.tablet} {
    margin-top: 1rem;
    gap: 8px;
  }

  @media ${devices.desktop} {
    margin-top: 1.5rem;
    gap: 42px;
  }
`;

const PostBody = styled.p`
  display: none;

  @media ${devices.tablet} {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Post = ({ author }) => {
  const [post, setPost] = useState({});
  const [pic, setPic] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${author.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data[0]));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${author.id}`)
      .then((res) => res.json())
      .then((data) => setPic(data[0].url));
  }, []);

  return (
    <Container>
      <Header>
        <Image src={pic || Rect} alt="/" />
        <HeaderText>
          <h4>Autor: {author.name}</h4>
          <h4>Company: {author.company.name}</h4>
        </HeaderText>
      </Header>
      <Content>
        <h4>Title: {post.title}</h4>
        <PostBody>{post.body}</PostBody>
      </Content>
    </Container>
  );
};

export default Post;
