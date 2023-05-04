import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Card',
    Board: () => <div>
        <span>text</span>
    </div>,
    environmentProps: {
        canvasHeight: 337
    }
});
