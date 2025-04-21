export declare const loadJson: (url: string) => Promise<any>;
export type Translation = {
    translation: unknown;
};
export type Resources = Record<string, Translation>;
export declare const languageArray: {
    lang: string;
    name: string;
}[];
export declare const languages: string[];
export declare const rtlLanguages: string[];
