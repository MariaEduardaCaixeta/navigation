import { View } from "react-native";

import { StackRoutesProps } from "@/routes/StackRoutes";
import { BottomTabRoutes, BottomTabRoutesProps } from "@/routes/BottomRoutes";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";

export function Home({ navigation }: BottomTabRoutesProps<'home'>) {
    return (
        <View style={{ flex: 1, padding: 32}}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate("product", { id: "123" })}/>
            </Header>
        </View>
    )
}
