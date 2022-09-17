/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ComponentBaseProps } from './typing';

type Element = 'ul' | 'ol' | 'dl';

interface ListProps extends ComponentBaseProps {
  children?: ReactNode;
  as?: Element;
}

const ListStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const List: FC<ListProps> = ({ children, ...rest }) => (
  <ListStyled {...rest} data-testid="list">
    {children}
  </ListStyled>
);

List.defaultProps = { children: undefined };
List.propTypes = { children: PropTypes.node };

export default List;
