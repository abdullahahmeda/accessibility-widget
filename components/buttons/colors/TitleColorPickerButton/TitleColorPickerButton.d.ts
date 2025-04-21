import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../../../types';

interface TitleColorPickerButtonProps {
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
}
declare const TitleColorPickerButton: FC<TitleColorPickerButtonProps>;
export default TitleColorPickerButton;
