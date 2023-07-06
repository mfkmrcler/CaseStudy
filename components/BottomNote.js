import React from "react";
import { StyleSheet, Text, Linking } from 'react-native';

const BottomNote = (props) => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  const renderLink = (text, url) => {
    return (
      <Text
        style={styles.link}
        onPress={() => handleLinkPress(url)}
      >
        {text}
      </Text>
    );
  };

  return (
    <Text style={styles.bottomNote}>
      By tapping next, you are agreeing to PlantID {renderLink('Terms of Use', 'https://example.com/terms')} &amp; {renderLink('Privacy Policy', 'https://example.com/privacy')}.
    </Text>
  );
};

const styles = StyleSheet.create({
  bottomNote: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '400',
    paddingHorizontal: 20,
    margin: 8,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default BottomNote;
