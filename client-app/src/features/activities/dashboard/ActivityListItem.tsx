import React from "react";
import { Item, Button, Segment, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { IActivity } from "../../../app/models/activity";
import { format } from "date-fns";
import ActivityListItemAttendees from "./ActivityListItemAttendees";

export const ActivityListItem: React.FC<{ act: IActivity }> = ({ act }) => {
  const host = act.attendees.filter(x=>x.isHost)[0];

  return (


    <Segment.Group>
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image size='tiny' circular src='/assets/user.png' />
          <Item.Content>
            <Item.Header as='a'>{act.title}</Item.Header>
            <Item.Description>Hosted by {host.displayName}</Item.Description>
            {act.isHost && (
                <Item.Description>
                  <Label
                    basic
                    color='orange'
                    content='You are hosting this activity'
                  />
                </Item.Description>
              )}
              {act.isGoing && !act.isHost && (
                <Item.Description>
                  <Label
                    basic
                    color='green'
                    content='You are going to this activity'
                  />
                </Item.Description>
              )}
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
    <Segment>
      <Icon name='clock' /> {format(act.date!,'h:mm a')}
      <Icon name='marker' /> {act.venue}, {act.city}
    </Segment>
    <Segment secondary><ActivityListItemAttendees attendees={act.attendees} /></Segment>
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
