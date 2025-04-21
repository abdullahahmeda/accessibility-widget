import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../../../types';

interface BackgroundColorPickerButtonProps {
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
}
declare const BackgroundColorPickerButton: FC<BackgroundColorPickerButtonProps>;
export default BackgroundColorPickerButton;
