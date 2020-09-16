import React from "react";
//import "semantic-ui-css/semantic.min.css";
import { Item, Button, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import ActivityStore from "../../../app/stores/activityStore";
import { IActivity } from "../../../app/models/activity";

export const ActivityListItem: React.FC<{ act: IActivity }> = ({ act }) => {
//   const activityStore = useContext(ActivityStore);
//   const { deleteActivity, submitting, target } = activityStore;
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




    // <div>
    //   <Item key={act.id}>
    //     <Item.Content>
    //       <Item.Header as="a">{act.title}</Item.Header>
    //       <Item.Meta>{act.date}</Item.Meta>
    //       <Item.Description>
    //         <div>{act.description}</div>
    //         <div>
    //           {act.city},{act.venue}
    //         </div>
    //       </Item.Description>
    //       <Item.Extra>
    //         <Button
    //           as={Link}
    //           to={`/activities/${act.id}`}
    //           floated="right"
    //           content="View"
    //           color="blue"
    //         />

    //         {/* <Button
    //               name={act.id}
    //               loading={target === act.id && submitting}
    //               onClick={(e) => deleteActivity(e, act.id)}
    //               floated="right"
    //               content="Delete"
    //               color="red"
    //             /> */}
    //         <Label basic content={act.category} />
    //       </Item.Extra>
    //     </Item.Content>
    //   </Item>
    // </div>
  );
};
