import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { getIdeas } from '../storage';

export default function LeaderboardScreen() {
  const [topIdeas, setTopIdeas] = useState([]);

  const loadTopIdeas = async () => {
    const data = await getIdeas();
    const sorted = [...data].sort((a, b) => b.votes - a.votes).slice(0, 5);
    setTopIdeas(sorted);
  };

  useEffect(() => {
    loadTopIdeas();
  }, []);

  const getMedalIcon = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return '🏅';
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={topIdeas}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Card style={styles.card}>
            <Card.Title
              title={`${getMedalIcon(index)} ${item.name}`}
              subtitle={`Votes: ${item.votes} | Rating: ${item.rating}`}
            />
            <Card.Content>
              <Text>{item.tagline}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8, backgroundColor: '#fff' },
  card: { marginBottom: 10, elevation: 4 },
});
