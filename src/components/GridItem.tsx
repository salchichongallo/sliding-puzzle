import React from 'react';
import { motion } from 'framer-motion';
import Box from './Box';
import BoxNumber from './BoxNumber';

interface GridItemProps {
  drag?: boolean;
  children: React.ReactNode;
}

const DraggableBox = motion(Box);

function GridItem({ drag = false, children }: GridItemProps) {
  return (
    <DraggableBox
      // dragMomentum={false}
      drag={drag}
      dragElastic={0.05}
      data-id={children}
      onDrop={console.log}
    >
      <BoxNumber>{children}</BoxNumber>
    </DraggableBox>
  );
}

export default GridItem;
