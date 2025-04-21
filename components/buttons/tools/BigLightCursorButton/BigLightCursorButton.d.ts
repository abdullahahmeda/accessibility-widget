import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../../../types';

interface BigCursorButtonProps {
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
}
declare const BigLightCursorButton: FC<BigCursorButtonProps>;
export default BigLightCursorButton;
