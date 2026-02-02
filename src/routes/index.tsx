import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";
import { BottomTabRoutes } from "./BottomRoutes";

export function Routes() {
    return (
        <NavigationContainer>
            <BottomTabRoutes />
        </NavigationContainer>
    )
}