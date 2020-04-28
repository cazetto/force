import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ComponentBaseProps } from './typing';

type Element = 'ul' | 'ol' | 'dl';

interface ListProps extends ComponentBaseProps {
  children?: ReactNode;
  as?: Element;
}

const List: FC<ListProps> = ({ children, ...rest }) => {
  return (
    <ListStyled {...rest} data-testid="list">
      {children}
    </ListStyled>
  );
};

const ListStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default List;
