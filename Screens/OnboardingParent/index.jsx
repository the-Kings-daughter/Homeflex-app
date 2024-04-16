import React, { useState,  useRef } from 'react';
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { OnboardingScreen1 } from '../../components/OnboardingScreen1/indx';
import { OnboardingScreen2 } from '../../components/OnboardingScreen2';
import { OnboardingScreen3 } from '../../components/OnboardingScreen3';
import { useNavigation } from '@react-navigation/native';



export const OnboardingParent = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const handleSkip = () => {
    console.log('Skip pressed');
    navigation.navigate('GetStarted');
  };


  const onboardingScreens = [
    { key: 'screen1', component: <OnboardingScreen1 onSkip={handleSkip} /> },
    { key: 'screen2', component: <OnboardingScreen2 onSkip={handleSkip} /> },
    { key: 'screen3', component: <OnboardingScreen3 onSkip={handleSkip} /> },
  ];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }) => {
    return <View style={styles.screen}>{item.component}</View>;
  };

  const scrollToIndex = (index) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingScreens}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => handleScroll(event)}
      />
      <View style={styles.pagination}>
        {onboardingScreens.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.paginationDot, index === currentIndex && styles.activeDot]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  paginationDot: {
    width: 50,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  activeDot: {
    backgroundColor: '#2B057D',
  },
});

