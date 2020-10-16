import React, { useContext } from "react";
import { IProfile } from "../../app/models/profile";
import { Form as FinalForm, Field } from "react-final-form";
import { observer } from "mobx-react-lite";
import { combineValidators, isRequired } from "revalidate";
import { Form, Button } from "semantic-ui-react";
import TextInput from "../../app/common/form/TextInput";
import TextAreaInput from "../../app/common/form/TextAreaInput";
import { RootStoreContext } from "../../app/stores/rootStore";
import { history } from "../..";

const validate = combineValidators({
  displayName: isRequired("displayName"),
});

interface IProps {
  // updateProfile: (profile: Partial<IProfile>) => void;
  profile: IProfile;
}

const ProfileEditForm: React.FC<IProps> = ({ profile }) => {
  const roots = useContext(RootStoreContext);
  const { updateProfile } = roots.profileStore;
  const sendForm = (values: IProfile) => {
    updateProfile(values);
    history.push(`/profile/${values.username}`);
  };
  return (
    <FinalForm
      //onSubmit={updateProfile}
      onSubmit={sendForm}
      validate={validate}
      initialValues={profile!}
      render={({ handleSubmit, invalid, pristine, submitting }) => (
        <Form onSubmit={handleSubmit} error>
          <Field
            name="displayName"
            render={TextInput}
            placeholder="Display Name"
            value={profile!.displayName}
          />
          <Field
            name="bio"
            render={TextAreaInput}
            rows={3}
            placeholder="Bio"
            value={profile!.bio}
          />
          <Button
            loading={submitting}
            floated="right"
            disabled={invalid || pristine}
            positive
            content="Update profile"
          />
        </Form>
      )}
    />
  );
};

export default observer(ProfileEditForm);
