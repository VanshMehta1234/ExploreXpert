import { styled } from '@mui/system';
import { Paper } from '@mui/material';

export const FormControl = styled('div')({
  margin: '1rem 0',
  minWidth: 120,
  marginBottom: '30px',
});

export const ListContainer = styled(Paper)({
  padding: '25px',
});

export const LoadingContainer = styled('div')({
  height: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ListItemContainer = styled(Paper)({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 0',
  padding: '10px',
}); 