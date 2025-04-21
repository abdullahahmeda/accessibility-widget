import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../../../types';

interface TextMagnifierButtonProps {
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
}
declare const TextMagnifierButton: FC<TextMagnifierButtonProps>;
export default TextMagnifierButton;
