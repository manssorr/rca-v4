import {
  Checkbox,
  FormControlLabel,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "../utils/helperFuncs";
const SubTitle = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
`;
function RootCausesCheckItem({ error = false, selected, handleChange, data }) {
  const handleCheck = (e, hubCause, cause) => {
    const couseId = e.target.value;
    // hub category id, cas
    // sub category id,
    // each sub cause we will add his hub cause id once
    handleChange(couseId, hubCause, cause);
  };

  return (
    <>
      {data.map((hubCause) => (
        <>
          <SubTitle key={hubCause.cause} variant="h6">
            {hubCause.id}.{capitalizeFirstLetter(hubCause.cause)}
          </SubTitle>
          {hubCause.subCategory.map((cause) => (
            <Stack direction="column">
              <FormControlLabel
                key={cause.id}
                error={error ? true : ""}
                value={cause.id}
                label={cause.id + 1 + ". " + (cause.cause || cause.title)}
                control={
                  <Checkbox
                    checked={selected}
                    onChange={(e) => handleCheck(e, hubCause, cause)}
                    name={cause.cause}
                  />
                }
                sx={{
                  margin: "1px 0 ",

                  "& .MuiTypography-root": {
                    fontSize: "1rem",
                    color: "black",
                    // backgroundColor: "red",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                  "&.Mui-error": {
                    color: "red",
                    border: "1px solid red",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                  },
                }}
              />
            </Stack>
          ))}
        </>
      ))}
    </>
  );
}

export default RootCausesCheckItem;
