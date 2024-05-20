'use state';
import { useGet } from '@/hooks/useApi';
import { getBreeds } from '@/services/cats/getBreeds';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Filters({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (filter: string) => void;
}) {
  const { data } = useGet(getBreeds);

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 160, zIndex: 10000 }}>
      <FormControl fullWidth>
        <Select
          value={filter}
          placeholder="Filtros"
          displayEmpty
          onChange={handleChange}
          sx={{
            height: '55px',
            backgroundColor: '#ffee58',
            fontWeight: 400,
            fontSize: '18px',
          }}
        >
          <MenuItem value={''}>Todas raças</MenuItem>
          {data.length > 0 &&
            data?.map((breed: { id: string; name: string }) => (
              <MenuItem key={breed.id} value={breed.id}>
                {breed.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
