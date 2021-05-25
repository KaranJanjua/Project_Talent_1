import React, { Component } from "react";
import { Header, Icon, Image } from "semantic-ui-react";

const Home = (props) => {
  return (
    <div>
      <Header as="h1" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>First Website</Header.Content>
      </Header>
      <Image centered size="large" src="" />
      <Header sub size="large" style ={{ marginLeft : 20 }}>
        Project X
      </Header>
      <div style ={{ marginLeft : 20 }}>
        Welcome! 
      </div>
      <Header sub size="large" style ={{ marginLeft : 20 }}>
      </Header>
      <div style ={{ marginLeft : 20 }}>
      </div>
    </div>
  );
};

export default Home;
