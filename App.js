import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Share, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function App() {
  const morningAzkar = [
    "اللّهُـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ...",
    "رَضيـتُ بِاللهِ رَبَّـاً، وَبِالإسْلامِ ديـناً، وَبِمُحَـمَّدٍ ﷺ نَبِيّـاً...",
  ];

  const eveningAzkar = [
    "اللّهُـمَّ بِكَ أَمْسَيْـنا، وَبِكَ أَصْبَـحْنا...",
    "اللّهُـمَّ إِنِّي أَمْسَيْتُ أُشْهِدُك...",
  ];

  const shareApp = async () => {
    try {
      await Share.share({
        message: 'جرب هذا التطبيق الإسلامي: https://expo.dev/',
      });
    } catch (error) {
      Alert.alert('حدث خطأ أثناء المشاركة');
    }
  };

  const copyLink = async () => {
    await Clipboard.setStringAsync('https://expo.dev/');
    Alert.alert('تم نسخ رابط التطبيق إلى الحافظة');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌙 تطبيق مودة الإسلامي</Text>
      <Text style={styles.subtitle}>إهداء إلى: مودة أحمد عاطف الجزار</Text>

      <Text style={styles.section}>📖 أذكار الصباح</Text>
      {morningAzkar.map((z, i) => (
        <Text key={i} style={styles.zekr}>{z}</Text>
      ))}

      <Text style={styles.section}>🌇 أذكار المساء</Text>
      {eveningAzkar.map((z, i) => (
        <Text key={i} style={styles.zekr}>{z}</Text>
      ))}

      <View style={styles.buttonContainer}>
        <Button title="📤 مشاركة التطبيق" onPress={shareApp} />
        <View style={{ height: 10 }} />
        <Button title="🔗 نسخ رابط التطبيق" onPress={copyLink} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fefefe',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
  section: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  zekr: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'right',
    alignSelf: 'stretch',
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
  },
});
