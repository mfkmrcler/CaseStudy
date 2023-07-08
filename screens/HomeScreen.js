import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { getCategories } from "../api/CategoriesService";
import { getQuestions } from "../api/QuestionsService";
import { StatusBar } from "expo-status-bar";
import AppBar from "../components/AppBar";

function HomeScreen() {
  const [categories, setCategories] = useState([]);
  const [qustions, setQuestions] = useState([]);

  useEffect(() => {
    loadCategories();
    loadQuestions();
  }, []);

  const loadCategories = async () => {
    await getCategories().then((categories) => {
      setCategories(categories);
      
    });
  };
  const loadQuestions = async () => {
    await getQuestions().then((qustions) => {
      setQuestions(qustions);
      
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor='white' />
        <View style={styles.container}>
            <AppBar />
        </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex:1, 
    marginTop: 20,
    justifyContent: 'space-between',
  },
});
