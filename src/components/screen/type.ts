import type { ViewStyle } from "react-native";
import type { SpaceMP } from "src/themes";

export interface Props {
    style?: ViewStyle;
    m?: SpaceMP;
    p?: SpaceMP;
    bg?: string;
    statusBar?: MyStatusBarProps;
    config?: {
        withKeyBoardAvodingView?: true | false;
        withSafeAreaView?: true | false;
    }
    children?: React.ReactNode;
}

export interface MyStatusBarProps {
    backgroundColor?: string;
    textColor?: 'white' | 'black';
}