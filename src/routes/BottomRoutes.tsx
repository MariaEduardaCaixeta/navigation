import { Product } from "@/app/Product";
import { Home } from "@/app/Home";
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type BottomTabRoutesList = {
    home: undefined
    product: undefined | { id: string }
}

export type BottomTabRoutesProps<T extends keyof BottomTabRoutesList> = BottomTabScreenProps<BottomTabRoutesList, T>;

const Tab = createBottomTabNavigator<BottomTabRoutesList>();

export function BottomTabRoutes() {
    return (
         <Tab.Navigator 
            initialRouteName="home"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="product" component={Product} />
         </Tab.Navigator>
    )
}