import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Snackbar, TextInput } from 'react-native-paper';
import { saveIdea } from '../storage';

export default function SubmitIdeaScreen({ navigation }) {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [desc, setDesc] = useState('');
  const [snackbar, setSnackbar] = useState(false);

  const generateRating = () => Math.floor(Math.random() * 101);

  const handleSubmit = async () => {
    if (!name || !tagline || !desc) return;
    await saveIdea({
      name,
      tagline,
      description: desc,
      rating: generateRating(),
    });
    setName('');
    setTagline('');
    setDesc('');
    setSnackbar(true);
    navigation.navigate('Ideas');
  };

  return (
    <View style={styles.container}>
      <TextInput label="Startup Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput label="Tagline" value={tagline} onChangeText={setTagline} style={styles.input} />
      <TextInput
        label="Description"
        value={desc}
        onChangeText={setDesc}
        style={styles.input}
        multiline
      />
      <Button mode="contained" onPress={handleSubmit}>
        Submit Idea 🚀
      </Button>
      <Snackbar visible={snackbar} onDismiss={() => setSnackbar(false)} duration={2000}>
        Idea submitted!
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  input: { marginBottom: 12 },
});
