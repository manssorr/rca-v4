import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useState } from "react";

export default function IndeterminateCheckbox({ cause }) {
  const [readyList, setReadyList] = useState([]);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  const arrangeList = (cause) => {
    const list = {
      id: cause.id,
      label: cause.cause,
      checked: false,
      subList: [],
    };

    cause.subCategory.forEach((item) => {
      list.subList.push({
        id: item.id,
        label: item.title,
        checked: false,
      });
    });

    const isFullyChecked =
      list?.subList.every((item) => item.checked) && list.subList.length > 0;
    const isPartiallyChecked = list?.subList.some((item) => item.checked);

    list.checked = isFullyChecked;
    list.indeterminate = isPartiallyChecked && !isFullyChecked;

    setReadyList(list);
    setChecked(list.checked);
    setIndeterminate(list.indeterminate);
  };

  useEffect(() => {
    arrangeList(cause);
  }, [cause]);

  const handleCheck = () => {
    const isChecked = readyList.subList.every((item) => item.checked);
    if (isChecked) {
      // uncheck all
      const newList = readyList.subList.map((item) => {
        return { ...item, checked: false };
      });
      setReadyList((prev) => {
        setChecked(false);
        setIndeterminate(false);
        return { ...prev, subList: newList };
      });
    } else {
      // check all
      const newList = readyList.subList.map((item) => {
        return { ...item, checked: true };
      });
      setReadyList((prev) => {
        setChecked(true);
        setIndeterminate(false);
        return { ...prev, subList: newList };
      });
    }
  };

  const handleSubCheck = (item) => {
    const { id } = item;
    // check if this item is ckecked
    const isChecked = readyList.subList.find((item) => item.id === id).checked;
    // if checked, uncheck it
    if (isChecked) {
      const newList = readyList.subList.map((item) => {
        if (item.id === id) {
          return { ...item, checked: false };
        }
        return item;
      });

      // check if all items are unchecked
      const isFullyChecked =
        newList.every((item) => item.checked) && newList.length > 0;
      const isPartiallyChecked = newList.some((item) => item.checked);
      // console.log("🚀 ~ isPartiallyChecked", isPartiallyChecked);

      setReadyList((prev) => {
        setIndeterminate(isPartiallyChecked && !isFullyChecked);
        setChecked(isFullyChecked);

        return {
          ...prev,
          checked: isFullyChecked,
          indeterminate: isPartiallyChecked && !isFullyChecked,
          subList: newList,
        };
      });
    } else {
      // if unchecked, check it
      const newList = readyList.subList.map((item) => {
        if (item.id === id) {
          return { ...item, checked: true };
        }
        return item;
      });
      // check if all items are checked
      const isFullyChecked =
        newList.every((item) => item.checked) && newList.length > 0;
      const isPartiallyChecked = newList.some((item) => item.checked);

      setReadyList((prev) => {
        setIndeterminate(isPartiallyChecked && !isFullyChecked);
        setChecked(isFullyChecked);
        return {
          ...prev,
          subList: newList,
          checked: isFullyChecked,
          indeterminate: isPartiallyChecked && !isFullyChecked,
        };
      });
    }
  };

  const children = ({ checked, item }) => (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label={item.label}
        control={
          <Checkbox checked={checked} onChange={() => handleSubCheck(item)} />
        }
      />
    </Box>
  );

  return (
    <>
      {readyList?.subList && (
        <div>
          <FormControlLabel
            label={readyList.label}
            control={
              <Checkbox
                checked={checked}
                indeterminate={indeterminate && !checked}
                onChange={handleCheck}
              />
            }
          />
          {readyList?.subList.map((item) => {
            return children({ checked: item.checked, item: item });
          })}
        </div>
      )}
    </>
  );
}
