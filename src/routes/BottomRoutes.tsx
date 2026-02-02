import { Product } from "@/app/Product";
import { Home } from "@/app/Home";
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

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
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: '#000', // Exemplo de customização, não usa a cor padrão do sistema
                tabBarInactiveTintColor: '#888',
                tabBarLabelPosition: 'beside-icon',
                
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons 
                            name="home"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen 
                name="product" 
                component={Product} 
                options={{
                    tabBarLabel: 'Produto',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons 
                            name="shopping-cart"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}