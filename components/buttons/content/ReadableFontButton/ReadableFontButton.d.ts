import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../../../types';

interface ReadableFontButtonProps {
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
}
declare const ReadableFontButton: FC<ReadableFontButtonProps>;
export default ReadableFontButton;
