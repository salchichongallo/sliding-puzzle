import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from './Box';

interface GridItemProps {
  value: number;
  onChange?: (value: number) => unknown;
}

const Input = styled.input`
  appearance: none;
  background: none;
  border: none;
  width: 40px;
  color: #1654f0;
  font-size: 3rem;
  text-align: center;
  user-select: none;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

function GridItem({ value, onChange }: GridItemProps) {
  const [copyValue, setValue] = useState<string | number>(value);
  useEffect(() => {
    if (String(copyValue) !== '' && onChange) {
      onChange(copyValue as number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [copyValue]);
  return (
    <Box>
      <Input
        value={copyValue}
        readOnly={!onChange}
        onChange={event => {
          if (event.target.value) {
            const number = parseInt(event.target.value, 10);
            if (!Number.isNaN(number) && number >= 0 && number < 9) {
              setValue(number);
            }
          } else {
            setValue('');
          }
        }}
      />
    </Box>
  );
}

export default GridItem;
