import React, { useState } from 'react';
import {
  Button,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

import { RootStackParamList } from '@/constants/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Item = {
  id: string;
  name: string;
};

type ItemsListNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function ItemsList() {
const navigation = useNavigation<ItemsListNavigationProp>();

  const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState<string>('');

  const addItem = () => {
    if (text.trim()) {
      const newItem: Item = {
        id: Date.now().toString(),
        name: text.trim(),
      };
      setItems(prev => [...prev, newItem]);
      setText('');
    }
  };

  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <Text style={styles.item}>{item.name}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Item List</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter item"
        value={text}
        onChangeText={setText}
      />

      <Button title="Add Item" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.list}
      />

      <Button title="Go to Map" onPress={() => navigation.navigate('Map')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  list: { marginTop: 20 },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
