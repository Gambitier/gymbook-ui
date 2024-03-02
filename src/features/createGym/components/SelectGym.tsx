import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useAllGym } from '../api/getAllGym';

export const SelectGym = () => {
  const getGymQuery = useAllGym();
  const [inputValue, setInputValue] = useState<string | undefined>('');

  const data = getGymQuery.data;
  if (!data) return null;

  const gymNames = data.data.map((gym) => gym.name);

  return (
    <div>
      <FormControl variant="standard" style={{ margin: '20px', width: '9rem' }}>
        <InputLabel id="gym-select-label" style={{ color: 'inherit' }}>
          Select Gym
        </InputLabel>
        <Select
          labelId="gym-select-label"
          id="gym-select"
          value={inputValue}
          fullWidth
          onChange={(e) => setInputValue(e.target.value)}
          label="Select Gym"
          style={{ color: 'inherit' }}
          MenuProps={{ PaperProps: { style: { maxHeight: '10rem' } } }}
        >
          <MenuItem value="">All Gyms</MenuItem>
          {gymNames.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
