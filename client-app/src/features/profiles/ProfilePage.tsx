import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { LoadingComponent } from '../../app/layouts/LoadingComponent';
import { RootStoreContext } from '../../app/stores/rootStore';
import ProfileContent from './ProfileContent';
import ProfileHeader from './ProfileHeader';

interface RouteParams{
    username : string
}
interface IProps extends RouteComponentProps<RouteParams>{}

const ProfilePage :React.FC<IProps> = ({match}) => {
    const rootStore = useContext(RootStoreContext);
    const {loadingProfile, profile, loadProfile} = rootStore.profileStore;

    useEffect(() => {
        loadProfile(match.params.username);
    }, [loadProfile, match])

    if (loadingProfile) return <LoadingComponent content='Loading profile...' />

    return (
       <Grid>
           <Grid.Column width={16}>
           <h1>ProfilePage for {match.params.username}</h1>
           <ProfileHeader profile={profile!} />
           <ProfileContent/>
           </Grid.Column>
       </Grid>
    )
}

export default observer(ProfilePage)
