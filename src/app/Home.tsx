import { View } from "react-native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, padding: 32}}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate("product")}/>
            </Header>
        </View>
    )
}
