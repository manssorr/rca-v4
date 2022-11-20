import { styled, Typography } from "@mui/material";
import React, { useState } from "react";
import AppButton from "../components/AppButton";
import CorrectiveActionsCheckItem from "../components/CorrectiveActionsCheckItem";
import defaultStyles from "../utils/defaultStyles";

const Container = styled("div")`
  display: flex;
  flex-direction: column;

  /* align-items: center; */
  /* justify-content: center; */

  border-radius: 15px;
  overflow: hidden;

  /* border: 1px solid #000; */
  // shadow
  margin: 2rem 0;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.15);
`;

const LabelContiner = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${defaultStyles.colors.main};
  width: 100%;
  padding: 1rem 0;
`;

const SectionLabel = styled(Typography)`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  /* background-color: red; */
`;

const SubTitle = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
`;

export default function CorrectiveActionsSection({
  title,
  onClickNext,
  data,
  selectedCorrectiveAction,
  setSelectedCorrectiveAction,
}) {
  const [allCorrectiveActions, setCorrectiveActions] = useState(data);

  const handleCheckCause = (e, item, action) => {
    const actionId = e.target.value;

    const newAction = {
      ...item,
      hubId: action.id,
      discrption: "",
    };

    console.log("🚀 ~ newAction", newAction);

    // check if the action is already in the list
    const isActionInList = selectedCorrectiveAction.find(
      (a) => a.id === item.id && a.hubId === action.id
    );

    if (isActionInList) {
      // remove the action
      const newActions = selectedCorrectiveAction.filter(
        (a) => a.id !== item.id && a.hubId !== action.id
      );
      setSelectedCorrectiveAction(newActions);
    } else {
      // add the action
      setSelectedCorrectiveAction([...selectedCorrectiveAction, newAction]);
    }
  };

  return (
    <Container>
      <LabelContiner>
        <SectionLabel variant="h4">{title}</SectionLabel>
      </LabelContiner>
      <ContentContainer>
        {allCorrectiveActions.map((correctiveAction) => {
          return (
            <CorrectiveActionsCheckItem
              key={correctiveAction.id}
              action={correctiveAction}
              subActions={correctiveAction.subCategory}
              handleChange={handleCheckCause}
            />
          );
        })}

        <AppButton
          disabled={selectedCorrectiveAction.length === 0 ? true : false}
          disabledMessage="Please select at least one Corrective Action"
          type="submit"
          onClick={onClickNext}
        >
          Print
        </AppButton>
      </ContentContainer>
    </Container>
  );
}
