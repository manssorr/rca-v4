import { styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import RootCausesCheckItem from "../components/RootCausesCheckItem";
import defaultStyles from "../utils/defaultStyles";
import { capitalizeFirstLetter } from "../utils/helperFuncs";

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

const Title = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  background-color: ${defaultStyles.colors.light};
  color: ${defaultStyles.colors.white};
  margin-top: 1rem;
`;

const SubTitle = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
`;

export default function RootCausesSection({
  title,
  onClickNext,
  data,
  selectedRootCauses,
  setSelectedRootCauses,
  reset,
}) {
  const [allRootCauses, setAllRootCauses] = useState(data);
  const [arrangedRootCauses, setArrangedRootCauses] = useState([]);

  const arrageData = (data) => {
    const all = [];
    // get categories
    const categories = data.map((item) => item.category);
    // remove duplicates
    const uniqueCategories = [...new Set(categories)];

    uniqueCategories.forEach((category) => {
      const categoryData = allRootCauses.filter(
        (item) => item.category === category
      );
      all.push({ category, categoryData });
    });
    setArrangedRootCauses(all);
  };

  useEffect(() => {
    // console.log("DirectCausesSection useEffect", data);
    arrageData(data);
  }, [data]);

  const handleCheckCause = (couseId, hubCause, cause) => {
    const newCause = {
      ...cause,
      hubId: hubCause.id,
      discrption: "",
    };

    const index = selectedRootCauses.findIndex((item) => {
      return item.id == couseId && item.hubId === hubCause.id;
    });

    if (index === -1) {
      console.log("add");
      setSelectedRootCauses([...selectedRootCauses, newCause]);
    }
    if (index !== -1) {
      console.log("remove");
      const newSelectedDirectCauses = [...selectedRootCauses];
      newSelectedDirectCauses.splice(index, 1);
      setSelectedRootCauses(newSelectedDirectCauses);
    }
    reset();
  };

  return (
    <Container>
      <LabelContiner>
        <SectionLabel variant="h4">{title}</SectionLabel>
      </LabelContiner>
      <ContentContainer>
        {arrangedRootCauses.map((HubCat) => (
          <>
            <Title key={HubCat.category} variant="h6">
              {capitalizeFirstLetter(HubCat.category)}
            </Title>
            <RootCausesCheckItem
              key={HubCat.category}
              data={HubCat.categoryData}
              handleChange={handleCheckCause}
            />
          </>
        ))}

        <AppButton
          disabled={selectedRootCauses.length === 0 ? true : false}
          disabledMessage="Please select at least one direct cause"
          type="submit"
          onClick={onClickNext}
        >
          Show Root Causes
        </AppButton>
      </ContentContainer>
    </Container>
  );
}
