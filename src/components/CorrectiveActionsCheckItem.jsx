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
function CorrectiveActionsCheckItem({
  error = false,
  selected,
  action,
  subActions,
  handleChange,
}) {
  return (
    <>
      <SubTitle variant="h6">
        {action.id}.{capitalizeFirstLetter(action.title)}
      </SubTitle>
      {subActions.length === 0 && (
        <FormControlLabel
          error={error ? true : ""}
          // value={item.id}
          label={"Check if this action is done"}
          control={
            <Checkbox
              checked={selected}
              onChange={(e) =>
                handleChange(
                  e,
                  {
                    id: 0,
                  },
                  action
                )
              }
              name="Check"
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
      )}
      {subActions.map((item) => {
        return (
          <Stack direction="column">
            <FormControlLabel
              key={item.id}
              error={error ? true : ""}
              value={item.id}
              label={item.id + 1 + ". " + item.title}
              control={
                <Checkbox
                  checked={selected}
                  onChange={(e) => handleChange(e, item, action)}
                  name={item.cause}
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
      })}
    </>
  );
}

export default CorrectiveActionsCheckItem;
