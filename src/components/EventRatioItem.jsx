import { FormControlLabel, Radio, Stack } from "@mui/material";
import React from "react";

function EventRatioItem({ event, error = false, selected }) {
  return (
    <Stack direction="column">
      <FormControlLabel
        key={event.id}
        error={error ? true : ""}
        value={event.id}
        label={event.problem}
        control={<Radio />}
        sx={{
          margin: "1px 0 ",
          "& .MuiSvgIcon-root": {
            fontSize: 25,
          },
          // label
          "& .MuiFormControlLabel-label": {
            fontSize: "1rem",
            color: "black",
          },
          // hover
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
          // error
          "&.Mui-error": {
            color: "red",
            border: "1px solid red",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
          },
        }}
      />
    </Stack>
  );
}

export default EventRatioItem;
