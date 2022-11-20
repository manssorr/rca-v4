import { Button, styled } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import defaultStyles from "../utils/defaultStyles";

const ThemedButton = styled(Button)`
  color: white;
  background-color: ${defaultStyles.colors.main};
  border-radius: 10px;
  padding: 0.5rem 7rem;

  font-size: 1.2rem;

  margin: 0.2rem 0.2rem 0.5rem 0.2rem;

  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  // shadow
  &:hover {
    background-color: ${defaultStyles.colors.light};
  }

  &:disabled {
    background-color: ${defaultStyles.colors.light};
    color: rgba(255, 255, 255, 0.7);
  }
  &:active {
    background-color: ${defaultStyles.colors.dark};
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.35);
  }
`;

function AppButton({ children, disabled, disabledMessage, ...props }) {
  return (
    <>
      {disabled ? (
        <Tooltip title={disabledMessage} arrow>
          <div>
            <ThemedButton
              color="primary"
              size="lg"
              sx={{ width: "99%", marginLeft: "2px" }}
              disabled={disabled}
              {...props}
            >
              {children}
            </ThemedButton>
          </div>
        </Tooltip>
      ) : (
        <ThemedButton
          sx={{ width: "99%", marginLeft: "2px" }}
          color="primary"
          disabled={disabled}
          {...props}
        >
          {children}
        </ThemedButton>
      )}
    </>
  );
}

export default AppButton;
