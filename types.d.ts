import { Draft } from 'immer';

export type ChangeAccDraftHander = (d: Draft<AccessibilikState>) => void;
interface TextAlign {
    left: string | null;
    center: string | null;
    right: string | null;
}
export interface AccessibilikState {
    language: string;
    isBlueLightFilter: boolean;
    brightness: {
        isBrightness: boolean;
        brightness: number;
    };
    isDarkContrast: boolean;
    isLightContrast: boolean;
    highContrast: {
        isHighContrast: boolean;
        contrast: number;
    };
    highSaturation: {
        isHighSaturation: boolean;
        saturation: number;
    };
    lowSaturation: {
        isLowSaturation: boolean;
        saturation: number;
    };
    isMonochrome: boolean;
    color: string;
    backgroundColor: string;
    titleColor: string;
    isVisualImpairment: boolean;
    adjustFontSizePercentage: number;
    textAlign: TextAlign;
    isDyslexiaFont: boolean;
    isReadableFont: boolean;
    isTextMagnifier: boolean;
    isFontWeightBold: boolean;
    highlightLinks: boolean;
    highlightTitles: boolean;
    letterSpacing: number;
    lineHeight: {
        isLineHeight: boolean;
        lineHeight: number;
    };
    wordSpacing: number;
    zoom: {
        isZoom: boolean;
        zoom: number;
    };
    isBigLightCursor: boolean;
    isBigDarkCursor: boolean;
    isMuteSound: boolean;
    showReadingGuide: boolean;
    activateTextToSpeech: boolean;
    isHideImages: boolean;
    isHighlightHover: boolean;
    isHighlightFocus: boolean;
    isImageAlt: boolean;
}
export type IconSvgComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>;
export {};
