import styled from 'styled-components';
import { getRandomHexColor } from './getRandomHexColor';
import { Avatar } from '@mui/material';


export const CircularAvatar = styled(Avatar)`
  width: 100%;
  height: 100%;
  background-color: ${getRandomHexColor()};
`;
