import { Button } from '@/components/Elements';
import { queryClient as libQueryClient } from '@/lib/react-query';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useAllGym } from '../api/getAllGym';

export const SelectGym = () => {
  const queryClient = useQueryClient(libQueryClient);
  const getGymQuery = useAllGym();
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const [selectGymId, setSelectGymId] = useState<string | undefined>('');

  const data = getGymQuery.data;
  if (!data) return null;

  const gymNames = data.data.map((gym) => gym.name);

  const handleSelectChange = (e: SelectChangeEvent) => {
    const selectedGymName = e.target.value;
    const selectedGym = data.data.find((gym) => gym.name === selectedGymName);

    if (selectedGym) {
      setSelectGymId(selectedGym.id);
    }

    setInputValue(selectedGymName);
  };

  const handleButtonClick = () => {
    if (selectGymId) {
      localStorage.setItem('CurrentGymId', selectGymId);
      queryClient.invalidateQueries();
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
