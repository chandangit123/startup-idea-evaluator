import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { getIdeas, upvoteIdea } from '../storage';

export default function IdeaListScreen() {
  const [ideas, setIdeas] = useState([]);

  const loadIdeas = async () => {
    const data = await getIdeas();
    setIdeas(data);
  };

  const handleVote = async (id) => {
    await upvoteIdea(id);
    loadIdeas();
  };

  useEffect(() => {
    const focusHandler = loadIdeas;
    focusHandler();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={ideas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.name} subtitle={item.tagline} />
            <Card.Content>
              <Text>Rating: {item.rating}</Text>
              <Text>Votes: {item.votes}</Text>
              <Text numberOfLines={2}>{item.description}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => handleVote(item.id)}>Upvote 👍</Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4', padding: 8 },
  card: { marginBottom: 10 },
});
