import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList  from "./ActivityList";
import { observer } from "mobx-react-lite";
import { LoadingComponent } from "../../../app/layouts/LoadingComponent";
import { RootStoreContext } from "../../../app/stores/rootStore";



const ActivityDashboard: React.FC = () => {
  //const activityStore = useContext(ActivityStore);
  const rootStore = useContext(RootStoreContext);
  const {loadActivities, loadingInitial} = rootStore.activityStore;



  useEffect(() => {
   loadActivities();
  }, [loadActivities]);

  if (loadingInitial)
    return <LoadingComponent content="Loading activities..." />;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity Filters</h2>       
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
