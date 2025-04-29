import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from '@rneui/themed';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { UsersProvider } from './context/UserContext';

const Stack = createStackNavigator();

export default props => {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}>
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: 'Lista de Usuários',
                                // eslint-disable-next-line react/no-unstable-nested-components
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate('UserForm')}
                                        type="clear"
                                        >
                                        <Icon name="add" color="white" />
                                    </Button>
                                ),
                            };
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: 'Formulário de Usuários',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    );
};

const screenOptions = {
    headerStyle: {
        backgroundColor: '#F4511E',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
