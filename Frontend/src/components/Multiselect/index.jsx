import * as React from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import Chip from "@mui/material/Chip"

import THEME from "../../styles/theme"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

export function Multiselect({ options, selectedOptions, setOptions }) {
  const theme = useTheme()

  const handleChange = (event) => {
    const value = event.target.value
    const adjValue = typeof value === "string" ? value.split(",") : value

    setOptions(adjValue)
  }

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          sx={{ background: THEME.COLORS.BACKGROUND_700, borderRadius: "1rem" }}
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{
                    backgroundColor: THEME.COLORS.BACKGROUND_700,
                    border: `1px solid ${THEME.COLORS.GRAY_700}`,
                    color: THEME.COLORS.PINK,
                    fontSize: "1.2rem",
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={{
                ...getStyles(name, selectedOptions, theme),
                ...{ fontSize: "1.2rem" },
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
