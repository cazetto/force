/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ComponentBaseProps } from './typing';

type Element = 'li' | 'dt' | 'dd';

interface ListItemProps extends ComponentBaseProps {
  children?: ReactNode;
  as?: Element;
}

const ListItemStyled = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem: FC<ListItemProps> = ({ children, ...rest }) => (
  <ListItemStyled {...rest} data-testid="list-item">
    {children}
  </ListItemStyled>
);

ListItem.defaultProps = { children: undefined };
ListItem.propTypes = { children: PropTypes.node };

export default ListItem;
