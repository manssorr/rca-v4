import { styled, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import DirectCauseCheckItem from "../components/DirectCauseCheckItem";
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
  margin: 0rem 0;
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

export default function DirectCausesSection({
  title,
  onClickNext,
  data,
  selectedDirectCauses,
  setSelectedDirectCauses,
  reset,
}) {
  const [allDirectCauses, setAllDirectCauses] = useState(data);
  const [arrangedDirectCauses, setArrangedDirectCauses] = useState([]);

  const arrageData = (data) => {
    const all = [];
    // get categories
    const categories = data.map((item) => item.category);
    // remove duplicates
    const uniqueCategories = [...new Set(categories)];

    uniqueCategories.forEach((category) => {
      const categoryData = allDirectCauses.filter(
        (item) => item.category === category
      );
      all.push({ category, categoryData });
    });

    setArrangedDirectCauses(all);
  };

  useEffect(() => {
    // console.log("DirectCausesSection useEffect", data);
    arrageData(data);
  }, [data]);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      event: {
        id: "",
        description: "",
        problem: "",
        dcs: [],
      },
    },
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  const handleCheckCause = (event) => {
    const causeId = event.target.value;
    const causeToAdd = allDirectCauses.find((e) => e.id == causeId);
    const newCause = {
      ...causeToAdd,
      discrption: "",
    };
    // check if cause is already added if so remove it
    const causeIndex = selectedDirectCauses.findIndex((e) => e.id == causeId);
    if (causeIndex > -1) {
      const newSelectedDirectCauses = selectedDirectCauses.filter(
        (e) => e.id != causeId
      );
      setSelectedDirectCauses(newSelectedDirectCauses);
    } else {
      setSelectedDirectCauses([...selectedDirectCauses, newCause]);
    }
    reset();
  };

  return (
    <Container>
      <LabelContiner>
        <SectionLabel variant="h4">{title}</SectionLabel>
      </LabelContiner>
      <ContentContainer>
        {arrangedDirectCauses.map((item) => (
          <>
            <SubTitle key={item.category} variant="h6">
              {capitalizeFirstLetter(item.category)}
            </SubTitle>
            {item.categoryData.map((cause) => (
              <DirectCauseCheckItem
                key={cause.id}
                cause={cause}
                error={cause.error}
                selected={cause.selected}
                handleChange={handleCheckCause}
              />
            ))}
          </>
        ))}
        <AppButton
          disabled={selectedDirectCauses.length === 0 ? true : false}
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
