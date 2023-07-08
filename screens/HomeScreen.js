import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import { getCategories } from "../api/CategoriesService";
import { getQuestions } from "../api/QuestionsService";
import { StatusBar } from "expo-status-bar";
import AppBar from "../components/AppBar";
import Questions from "../components/Questions";
import Subtitle from "../components/Subtitle";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    loadCategories();
    loadQuestions();
  }, []);

  const loadCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  const loadQuestions = async () => {
    const questions = await getQuestions();
    setQuestions(questions);
  };

  console.log(categories["data"]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" />
      <ScrollView>
      <View>
        <AppBar />
      </View>
      <Subtitle subtitle="Get started" color="black" />
      {questions.length === 0 ? <ActivityIndicator size="small" color="#0000ff" />: <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {questions.map((item) => (
          <Questions key={item.id} item={item} />
        ))}
      </ScrollView>}
      {categories.length === 0 ? <ActivityIndicator size="small" color="#0000ff" />: <ScrollView>{categories["data"].map((item) => <Categories key={item.id} item={item} />)}</ScrollView>}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
  },
});

export default HomeScreen;
