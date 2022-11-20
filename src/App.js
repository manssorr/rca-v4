import { styled, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import ContainerCard from "./Layout/ContainerCard";
import CorrectiveActionsSection from "./Layout/CorrectiveActionsSection";
import DirectCausesSection from "./Layout/DirectCausesSection";
import EventsSection from "./Layout/EventsSection";
import RootCausesSection from "./Layout/RootCausesSection";
import defaultStyles from "./utils/defaultStyles";
import data, {
  getCorrectiveActions,
  getDirectCauses,
  getRootCauses,
} from "./utils/dummyData";
import mainTheme from "./utils/theme";

const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`;

const Header = styled("div")`
  width: 100%;

  text-align: center;
  color: white;
  margin-bottom: 2rem;
  background: linear-gradient(0deg, rgb(50, 42, 75) 0%, rgb(125, 105, 187) 92%);
  padding: 1rem 0px;
`;

const ContentContainer = styled("div")`
  // RESPONSIVE width
  width: 90%;
  max-width: 50rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

const Footer = styled("div")`
  width: 100%;
  background-color: ${defaultStyles.colors.dark};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 15vh;
  margin-top: 6.4rem;
`;

function App() {
  const [selectedEvent, setSelectedEvent] = useState({
    id: "",
    description: "",
  });
  // Direct Counses states
  const [directCause, setDirectCause] = useState([]);
  const [selectedDirectCause, setSelectedDirectCauses] = useState([]);

  // Root Counses states
  const [rootCauses, setRootCauses] = useState([]);
  const [selectedRootCauses, setSelectedRootCauses] = useState([]);
  // console.log("🚀 ~ selectedRootCauses", selectedRootCauses);

  // Corrective Actions states
  const [correctiveActions, setCorrectiveActions] = useState([]);
  const [selectedCorrectiveAction, setSelectedCorrectiveAction] = useState([]);
  console.log("🚀 ~ selectedCorrectiveAction", selectedCorrectiveAction);

  const handleGetDirectCauses = () => {
    const result = getDirectCauses(selectedEvent.dcs);
    setDirectCause(result);
  };

  const handleGetRootCauses = () => {
    const rcs = selectedDirectCause.map((dc) => dc.rcs).flat();
    const result = getRootCauses(rcs);
    setRootCauses(result);
  };

  const handleGetCorrectiveActions = () => {
    const hubIds = selectedRootCauses.map((item) => item.hubId);

    // get das from hubIds by rootCauses
    const cas = rootCauses
      .map((item) => {
        if (hubIds.includes(item.id)) {
          console.log("🚀 ~ item", item);
          return item.cas;
        }
        return [];
      })
      .flat();

    const result = getCorrectiveActions(cas);
    setCorrectiveActions(result);
  };

  const printSelected = () => {
    console.log("🚀 ~ selectedEvent", selectedEvent);
    console.log("🚀 ~ selectedDirectCause", selectedDirectCause);
    console.log("🚀 ~ selectedRootCauses", selectedRootCauses);
    console.log("🚀 ~ selectedCorrectiveAction", selectedCorrectiveAction);
  };

  const resetChangeEvent = () => {
    setDirectCause([]);
    setSelectedDirectCauses([]);
    setRootCauses([]);
    setSelectedRootCauses([]);
    setCorrectiveActions([]);
    setSelectedCorrectiveAction([]);
  };
  const resetChangeDirect = () => {
    setRootCauses([]);
    setSelectedRootCauses([]);
    setCorrectiveActions([]);
    setSelectedCorrectiveAction([]);
  };
  const resetChangeRoot = () => {
    setCorrectiveActions([]);
    setSelectedCorrectiveAction([]);
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <MainContainer>
        <Header>
          <Typography
            color="white"
            fontSize={32}
            fontWeight="bold"
            level="h1"
            component="h2"
          >
            Root Cause Analysis
          </Typography>
        </Header>
        <ContentContainer>
          <EventsSection
            title="Type of Event"
            onClickNext={handleGetDirectCauses}
            data={data.events}
            selectedEvent={selectedEvent}
            setSelectedEvent={setSelectedEvent}
            reset={resetChangeEvent}
          />
          {directCause.length !== 0 && (
            <DirectCausesSection
              title="Direct Causes"
              onClickNext={handleGetRootCauses}
              data={directCause}
              selectedDirectCauses={selectedDirectCause}
              setSelectedDirectCauses={setSelectedDirectCauses}
              reset={resetChangeDirect}
            />
          )}
          {rootCauses.length !== 0 && (
            <RootCausesSection
              title="Root Causes"
              onClickNext={handleGetCorrectiveActions}
              data={rootCauses}
              selectedRootCauses={selectedRootCauses}
              setSelectedRootCauses={setSelectedRootCauses}
              reset={resetChangeRoot}
            />
          )}
          {correctiveActions.length !== 0 && (
            <CorrectiveActionsSection
              title="Corrective Actions"
              onClickNext={printSelected}
              data={correctiveActions}
              selectedCorrectiveAction={selectedCorrectiveAction}
              setSelectedCorrectiveAction={setSelectedCorrectiveAction}
            />
          )}
          <ContainerCard
            title="Selected"
            selectedEvent={selectedEvent}
            selectedDirectCauses={selectedDirectCause}
            selectedRootCauses={selectedRootCauses}
            selectedCorrectiveAction={selectedCorrectiveAction}
          />
        </ContentContainer>
        <Footer>
          <Typography color="white" level="h5" component="p">
            All rigths reserved © 2022
          </Typography>
        </Footer>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
