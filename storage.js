// storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const getIdeas = async () => {
  const data = await AsyncStorage.getItem('ideas');
  return data ? JSON.parse(data) : [];
};

export const saveIdea = async (idea) => {
  const ideas = await getIdeas();
  ideas.push({ id: uuidv4(), ...idea, votes: 0 });
  await AsyncStorage.setItem('ideas', JSON.stringify(ideas));
};

export const upvoteIdea = async (id) => {
  let ideas = await getIdeas();
  ideas = ideas.map((i) =>
    i.id === id ? { ...i, votes: i.votes + 1 } : i
  );
  await AsyncStorage.setItem('ideas', JSON.stringify(ideas));
};
