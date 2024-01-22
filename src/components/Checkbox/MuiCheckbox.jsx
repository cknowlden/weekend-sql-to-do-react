import { Box, FormControlLabel, Checkbox} from '@mui/material';

export const MuiCheckbox = () => {
  return (
    <Box>
      <Box>
        <FormControlLabel
          label = 'CHECK'
          control={<Checkbox />}
        />
      </Box>
    </Box>
  );
};