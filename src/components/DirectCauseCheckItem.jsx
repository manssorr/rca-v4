import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import React from "react";

function DirectCauseCheckItem({
  cause,
  error = false,
  selected,
  handleChange,
}) {
  return (
    <Stack direction="column">
      <FormControlLabel
        key={cause.id}
        error={error ? true : ""}
        value={cause.id}
        label={cause.id + ". " + (cause.cause || cause.title)}
        control={
          <Checkbox
            checked={selected}
            onChange={handleChange}
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
  );
}

export default DirectCauseCheckItem;
