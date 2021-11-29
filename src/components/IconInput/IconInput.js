import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return 'TODO';
};

export default IconInput;



// import React from 'react';
// import styled from 'styled-components';
// import { DelegatedPlugin } from 'webpack';

// import { COLORS } from '../../constants';

// import Icon from '../Icon';
// import VisuallyHidden from '../VisuallyHidden';


// const IconInput = ({
//   label,
//   icon,
//   width = 250,
//   size,
//   placeholder,

  
// }) => {
//   return(
//     <Wrapper>
//       <VisuallyHidden>{label}</VisuallyHidden>
//       <Icon id={icon}/>
//       <TextInput/>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.label`
//   display: block;

// `;
// const TextInput = styled.input`
//   height: ${24 / 16}rem;
//   border: none;
//   border-bottom: 1px solid ${COLORS.black};
// `;

// export default IconInput;
