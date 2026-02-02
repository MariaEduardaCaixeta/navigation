import { View } from "react-native";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";
import { StackRoutesProps } from "@/routes/StackRoutes";

export function Product({ navigation }: StackRoutesProps<'product'>) {
    return (
        <View style={{ flex: 1, padding: 32}}>
            <Header>
                <ButtonIcon name="arrow-circle-left" onPress={() => navigation.goBack()} />
                <Title>Product</Title>
            </Header>
        </View>
    )
}