import { FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import * as React from "react";
import AppRadio from "./AppRadio";

function SectionItem({
  title,
  description,
  value,
  checked,
  onChange,
  helperText,
  ...props
}) {
  return (
    <FormControl sx={{ p: 2, flexDirection: "row", gap: 2 }}>
      <AppRadio
        checked={checked}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          "&, &.Mui-checked": {
            color: "#000",
          },
        }}
      />
      <div>
        <FormLabel>Selection title</FormLabel>
        <FormHelperText>
          One line description maximum lorem ipsum{" "}
        </FormHelperText>
      </div>
    </FormControl>
  );
}

export default SectionItem;
