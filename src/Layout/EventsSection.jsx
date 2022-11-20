import { styled, Typography } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import { useFormik } from "formik";
import React, { useState } from "react";
import AppButton from "../components/AppButton";
import EventRatioItem from "../components/EventRatioItem";
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

export default function EventsSection({
  title,
  onClickNext,
  data,
  selectedEvent,
  setSelectedEvent,
  setDirectCause,
  reset,
}) {
  const [allEvents, setAllEvents] = useState(data);

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
  /*
 
*/
  const handleSelectEvent = (event) => {
    const eventId = event.target.value;
    const eventToAdd = allEvents.find((e) => e.id == eventId);
    const newEvents = {
      ...selectedEvent,
      ...eventToAdd,
    };
    setSelectedEvent(newEvents);
    setFieldValue("event", newEvents);
    setFieldTouched("event", true);
    reset();
    // console.log("🚀 ~ values", values);
    // console.log("🚀 ~ errors", errors);
    // console.log("🚀 ~ touched", touched);
  };

  return (
    <Container>
      <LabelContiner>
        <SectionLabel variant="h4">{title}</SectionLabel>
      </LabelContiner>

      <ContentContainer>
        <form onSubmit={handleSubmit}>
          <RadioGroup
            name="event"
            value={selectedEvent.id}
            onChange={handleSelectEvent}
          >
            {allEvents.map((event) => (
              <EventRatioItem
                key={event.id}
                event={event}
                error={errors[event]}
              />
            ))}
          </RadioGroup>
          <AppButton
            disabled={touched["event"] ? false : true}
            disabledMessage="Please select an event"
            type="submit"
            onClick={onClickNext}
          >
            Show Direct Causes
          </AppButton>
        </form>
      </ContentContainer>
    </Container>
  );
}
