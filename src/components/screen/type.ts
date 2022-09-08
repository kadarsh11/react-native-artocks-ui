import type { ViewStyle } from "react-native";
import type { SpaceMP } from "src/themes";

export interface Props {
    style?: ViewStyle;
    margin?: SpaceMP;
    padding?: SpaceMP;
    bg?: string;
    statusBar?: MyStatusBarProps;
    statusBarBackgroundColor?: string;
    withKeyBoardAvodingView?: true | false;
    statusBarTextColor?: 'white' | 'black';
    children?: React.ReactElement | React.ReactElement[];
}

export interface MyStatusBarProps {
    backgroundColor?: string;
    textColor?: 'white' | 'black';
}