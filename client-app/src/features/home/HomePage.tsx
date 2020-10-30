import React, { Fragment, useContext } from "react";
import { Button, Container, Header, Segment, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { RootStoreContext } from "../../app/stores/rootStore";
import LoginForm from "../user/LoginForm";
import RegisterForm from "../user/RegisterForm";

export const HomePage = () => {
  const token = window.localStorage.getItem('jwt');
  const rootStore = useContext(RootStoreContext);
  const { isLoggedIn, user } = rootStore.userStore;
  const {openModal} = rootStore.modalStore;
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Reactivities
        </Header>
        {isLoggedIn && user && token ? (
          <Fragment>
            <Header as="h2" inverted content={`Welcome Back ${user.displayName}`} />
            <Button as={Link} to="/activities" size="huge" inverted>
              Take me to Activities!
            </Button>
          </Fragment>
        ) : (

           <Fragment> <Header as='h2' inverted content='Welcome to Reactivities' />
            <Button onClick={()=>openModal(<LoginForm/>)} size='huge' inverted>
               Login
            </Button>

            <Button onClick={()=> openModal(<RegisterForm/>)} size='huge' inverted>
               Register
            </Button>
           
            {/* <Button as={Link} to='/register' size='huge' inverted>
               Register
            </Button> */}
            </Fragment>
        )}
      
      </Container>
    </Segment>
  );
};

export default HomePage;
