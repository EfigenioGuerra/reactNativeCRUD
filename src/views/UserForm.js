import { Button, Icon } from '@rneui/themed';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import UsersContext from '../context/UserContext';

export default ({route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params : {});
    const { dispatch } = useContext(UsersContext);

    return (
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o Email"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={styles.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe o URL do Avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    });
                    navigation.goBack();
                }}
                icon={<Icon name="save" size={25} color="white" />}
                color="orange"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
});
