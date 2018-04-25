import React, { Component } from 'react';
import styled from 'styled-components';
import './Home.css';
import NavBar from './NavBar';
import { Route, Link, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Dropdown, Menu, Button, Container, Header, Icon, Table, Grid } from 'semantic-ui-react';

import { Row, Col } from 'reactstrap';

import BookDetail from './Entry/BookDetail';

const NewRecommendationButton = () => (
  <div className="newRecButton">
    <Link to="/entry">
      <Button circular className="add round-button" size="massive" color="red" icon="plus" />
    </Link>
  </div>
);

const RexTable = () => (
  <Table basic celled padded unstackable>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4">
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

class Home extends Component {
  state = {
    category: '',
    imageStatus: 'loading',
  };
  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  render() {
    return (
      <div>
        <NavBar handleAuth={this.props.handleAuth} />
        <div className="landing-page icon-list">
          <Button circular className="round-button" size="massive" color="red" icon="book" />
          <Button circular className="round-button" size="massive" color="blue" icon="utensils" />
          <Button circular className="round-button" size="massive" color="green" icon="music" />
          <Button circular className="round-button" size="massive" color="yellow" icon="film" />
        </div>
        <Grid>
          <Grid.Column width={4} only="computer" />
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <RexTable />
          </Grid.Column>
          <Grid.Column width={4} only="computer" />
        </Grid>
        <div className="newRec-button">
          <NewRecommendationButton />
        </div>
      </div>
    );
  }
}

class FindRecommendationButton extends Component {
  state = {
    category: '',
  };

  render() {
    return (
      <div>
        <Menu vertical>
          <Dropdown text="Find Something from" pointing="left" className="link item">
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  this.setState({ category: 'books' });
                }}
              >
                <Link to="/browse">Books</Link>
              </Dropdown.Item>
              <Dropdown.Item>Movies</Dropdown.Item>
              <Dropdown.Item>Restaurants</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    );
  }
}

export default Home;
