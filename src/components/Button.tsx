import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
  background: transparent;
  border: 1px solid ${theme.palette.secondary.main};
  border-radius: 4px;
  color: ${theme.palette.primary.main};
  padding: ${theme.spacing(2)};
  margin-right: 8px;
  ${theme.typography.button};
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: 1px solid ${theme.palette.secondary.light};
    color: ${theme.palette.primary.light};
  }

  &:active {
    border: 1px solid ${theme.palette.secondary.dark};
    color: ${theme.palette.primary.dark};
  }
`;

export default Button;
