import { Button } from '@/components/Elements';
import storage from '@/utils/storage';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { useAllGym } from '../api/getAllGym';

export const SelectGym = () => {
  const getGymQuery = useAllGym();
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const [currentGymId, setCurrentGymId] = useState<string | undefined>('');

  const data = getGymQuery.data;
  if (!data) return null;

  const gymNames = data.data.map((gym) => gym.name);

  const handleSelectChange = (e: SelectChangeEvent) => {
    const selectedGymName = e.target.value;
    const selectedGym = data.data.find((gym) => gym.name === selectedGymName);

    if (selectedGym) {
      setCurrentGymId(selectedGym.id);
    }

    setInputValue(selectedGymName);
  };

  const handleButtonClick = () => {
    if (currentGymId) {
      storage.setCurrentGymId(currentGymId);
    }
  };
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
          onChange={(e: SelectChangeEvent<string>) => handleSelectChange(e)}
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
      <Button variant="text" color="inherit" onClick={handleButtonClick}>
        Set Current Gym ID
      </Button>
    </div>
  );
};
