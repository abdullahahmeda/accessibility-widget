import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../../../types';

interface BigCursorButtonProps {
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
}
declare const HighlightHoverButton: FC<BigCursorButtonProps>;
export default HighlightHoverButton;
