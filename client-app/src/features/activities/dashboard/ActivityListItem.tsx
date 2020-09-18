import React from "react";
import { Item, Button, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { IActivity } from "../../../app/models/activity";

export const ActivityListItem: React.FC<{ act: IActivity }> = ({ act }) => {

  return (


    <Segment.Group>
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image size='tiny' circular src='/assets/user.png' />
          <Item.Content>
            <Item.Header as='a'>{act.title}</Item.Header>
            <Item.Description>Hosted by Bob</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
    <Segment>
      <Icon name='clock' /> {act.date}
      <Icon name='marker' /> {act.venue}, {act.city}
    </Segment>
    <Segment secondary>Attendees will go here</Segment>
    <Segment clearing>
      <span>{act.description}</span>
      <Button
        as={Link}
        to={`/activities/${act.id}`}
        floated='right'
        content='View'
        color='blue'
      />
    </Segment>
  </Segment.Group>



  );
};