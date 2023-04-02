import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavWrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 8px 8px;
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: white;
    border-bottom: 3px solid orangered;
  }
`;
