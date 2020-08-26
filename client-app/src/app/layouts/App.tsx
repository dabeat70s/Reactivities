import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = {
    activities: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/activities").then((response) => {      
      this.setState({
        activities: response.data,
      });
    });    
  }
  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Rectivities</Header.Content>
        </Header>
        <List>         
        {this.state.activities.map((value: any) => (
          <List.Item key={value.id}>{value.title}</List.Item>            
          ))}         
        </List>        
      </div>
    );
  }
}


export default App;
