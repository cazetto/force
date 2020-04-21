import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ComponentBaseProps } from './typing';

type Element = 'li' | 'dt' | 'dd';

interface ListItemProps extends ComponentBaseProps {
  children?: ReactNode;
  as?: Element;
}

const ListItem: FC<ListItemProps> = ({ children }) => {
  return <ListItemStyled data-testid="list-item">{children}</ListItemStyled>;
};

const ListItemStyled = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default ListItem;
