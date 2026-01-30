import { Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = PressableProps & {
    name: keyof typeof MaterialIcons.glyphMap;
    size?: number;
    color?: string;
};

export function ButtonIcon({ name, ...rest }: Props) {
    return (
        <Pressable {...rest}>
            <MaterialIcons name={name} size={24}/>
        </Pressable>
    )
}