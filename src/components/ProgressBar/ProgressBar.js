/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const height = size === 'small' ? 8 : 12;

  return<Wrapper 
  role="progressbar" 
  aria-valuenow={value} 
  aria-valuemin="0" 
  aria-valuemax="100">
    <VisuallyHidden>{value}</VisuallyHidden>
    <Bar style={{ '--width': value + '%', '--height': height + 'px'}}/>
  </Wrapper> 
  // <strong>{value}</strong>;
};

const Wrapper = styled.div`
background-color: ${COLORS.transparentGray15};
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
border-radius: 10px;
overflow: hidden;
`

const Bar = styled.div`
background-color: ${COLORS.primary};
width: var(--width);
max-width: 100%;
height: var(--height);
box-shadow: 25%;
border-radius: 10px 0 0 10px;
`

export default ProgressBar;
 