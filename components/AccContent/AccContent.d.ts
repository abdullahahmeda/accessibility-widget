import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../types';

interface AccContentProps {
    nodeListUpdated: number;
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
}
declare const AccContent: FC<AccContentProps>;
export default AccContent;
