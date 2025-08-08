# 🚀 Startup Idea Evaluator – AI + Voting App

A fun mobile app where users can submit their startup ideas, get a **fake AI-generated rating**, upvote others' ideas, and view the **leaderboard of top ideas**.

Built with **React Native (Expo)** and **AsyncStorage** for persistent storage.

---

## 📱 Features
- **Submit Ideas** with:
  - Startup Name
  - Tagline
  - Description
  - Fake AI rating (0–100)
- **View All Ideas** with:
  - Ratings, votes, descriptions
  - "Read more" expand/collapse
  - **Sort by votes** or **rating**
  - Share idea via system share / clipboard
- **Vote on Ideas** – one vote per idea (persisted across sessions)
- **Leaderboard** – top 5 ideas with 🥇🥈🥉 badges
- **Dark Mode Toggle** – persistent theme preference
- **Persistent Storage** using `AsyncStorage`

---

## 🛠 Tech Stack
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Expo Clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)
- [Expo Sharing](https://docs.expo.dev/versions/latest/sdk/sharing/)

---

## 🚀 How to Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/startup-idea-evaluator.git
   cd startup-idea-evaluator
