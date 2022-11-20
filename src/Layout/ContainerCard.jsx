import { styled, Typography } from "@mui/material";
import React from "react";
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
const Title = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  background-color: ${defaultStyles.colors.light};
  color: ${defaultStyles.colors.white};
  margin-top: 1rem;
`;

const Description = styled(Typography)`
  font-size: 1rem;
  padding: 1rem;

  font-weight: 400;
  text-align: left;
  background-color: ${defaultStyles.colors.light};
  color: ${defaultStyles.colors.white};
  margin-top: 1rem;
  border-radius: 15px;
  border: 1px solid ${defaultStyles.colors.main};
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

export default function ContainerCard({
  title,
  selectedEvent,
  selectedDirectCauses,
  selectedRootCauses,
  selectedCorrectiveAction,
}) {
  return (
    <Container>
      <LabelContiner>
        <SectionLabel variant="h4">{title}</SectionLabel>
      </LabelContiner>

      <ContentContainer>
        <Description variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum
          excepturi alias sit nemo quas, nostrum recusandae cum facere quae
          sapiente molestiae harum non. Perspiciatis minus quod officiis
          accusantium nihil.
        </Description>
        <Title variant="h5">Event</Title>
        <SubTitle variant="h6">{selectedEvent.problem}</SubTitle>
        <Description variant="h5">{selectedEvent.description}</Description>

        <Title variant="h5">Direct Causes</Title>
        {selectedDirectCauses.map(({ cause, discrption }) => (
          <>
            <SubTitle variant="h6">{cause}</SubTitle>
            <Description variant="h5">{discrption}</Description>
          </>
        ))}
        <Title variant="h5">Root Causes</Title>
        {selectedRootCauses.map(({ title, discrption }) => (
          <>
            <SubTitle variant="h6">{title}</SubTitle>
            <Description variant="h5">{discrption}</Description>
          </>
        ))}
        <Title variant="h5">Corrective Action</Title>
        {selectedCorrectiveAction.map(({ title, discrption }) => (
          <>
            <SubTitle variant="h6">{title}</SubTitle>
            <Description variant="h5">{discrption}</Description>
          </>
        ))}
      </ContentContainer>
    </Container>
  );
}
