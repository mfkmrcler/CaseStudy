import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, ActivityIndicator, FlatList } from "react-native";
import { getCategories } from "../api/CategoriesService";
import { getQuestions } from "../api/QuestionsService";
import { StatusBar } from "expo-status-bar";
import AppBar from "../components/AppBar";
import Questions from "../components/Questions";
import Subtitle from "../components/Subtitle";
import Categories from "../components/Categories";
import UpgradePremium from "../components/UpgradePremium";

const HomeScreen = ({navigation}) => {
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

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: 'white'}]}>
      <StatusBar backgroundColor="white" />
      <View>
        <AppBar />
      </View>
      <UpgradePremium onPress={() => navigation.navigate('PaywallScreen')}/>
      <Subtitle subtitle="Get started" color="black" />
      <View >
        {questions.length === 0 ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <FlatList
            data={questions}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Questions key={item.id} item={item} />}
          />
        )}
      </View>

      <View style={{ flex: 1 }}>
        {categories.length === 0 ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <FlatList
            data={categories["data"]} 
            numColumns={2}
            renderItem={({ item }) => <Categories key={item.id} item={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    height: "100%",
  },
});

export default HomeScreen;
