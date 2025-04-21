import { FC } from 'react';
import { AccessibilikState, ChangeAccDraftHander } from '../../types';
import { CollapsedState, CollapsedStateKeys } from '../../config';

interface AccMenuContentProps {
    nodeListUpdated: number;
    accState: AccessibilikState;
    onChangeAccState: (fn: ChangeAccDraftHander) => void;
    onCollapse: (name: CollapsedStateKeys) => void;
    collapsedState: CollapsedState;
}
declare const AccMenuContent: FC<AccMenuContentProps>;
export default AccMenuContent;
