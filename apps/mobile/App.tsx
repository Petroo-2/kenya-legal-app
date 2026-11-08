import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { constitutionArticles } from './data/constitution';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(19);

  const filteredArticles = useMemo(() => {
    return constitutionArticles.filter((article) => {
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.keyPoints.some((point) => point.toLowerCase().includes(q))
      );
    });
  }, [query]);

  const selectedArticle = filteredArticles.find((article) => article.id === selectedId) ?? filteredArticles[0] ?? constitutionArticles[0];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Kenya Legal App</Text>
        <Text style={styles.title}>Constitutional Rights Guide</Text>
      </View>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search rights or topics"
        style={styles.search}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {filteredArticles.length === 0 ? (
          <Text style={styles.emptyState}>No articles matched your search.</Text>
        ) : (
          filteredArticles.map((article) => (
            <Pressable
              key={article.id}
              onPress={() => setSelectedId(article.id)}
              style={[styles.card, selectedArticle.id === article.id && styles.selectedCard]}
            >
              <Text style={styles.articleNumber}>{article.article}</Text>
              <Text style={styles.cardTitle}>{article.title}</Text>
              <Text style={styles.category}>{article.category}</Text>
            </Pressable>
          ))
        )}

        <View style={styles.detailCard}>
          <Text style={styles.detailCategory}>{selectedArticle.category}</Text>
          <Text style={styles.detailTitle}>{selectedArticle.title}</Text>
          <Text style={styles.summary}>{selectedArticle.summary}</Text>

          <Text style={styles.sectionTitle}>Key points</Text>
          {selectedArticle.keyPoints.map((point) => (
            <Text key={point} style={styles.bullet}>• {point}</Text>
          ))}

          <Text style={styles.disclaimerTitle}>Disclaimer</Text>
          <Text style={styles.disclaimerText}>
            This app provides general information based on the Constitution of Kenya, 2010. It is not legal advice.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    marginBottom: 12,
  },
  eyebrow: {
    color: '#0f766e',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
  },
  search: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  selectedCard: {
    backgroundColor: '#ecfeff',
    borderColor: '#67e8f9',
  },
  articleNumber: {
    color: '#0f766e',
    fontWeight: '700',
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 18,
    color: '#0f172a',
    fontWeight: '600',
    marginBottom: 4,
  },
  category: {
    color: '#475569',
    fontSize: 12,
  },
  detailCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginTop: 6,
  },
  detailCategory: {
    backgroundColor: '#e0f2fe',
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: '#0f172a',
    fontWeight: '700',
    marginBottom: 12,
  },
  detailTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  summary: {
    color: '#334155',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  bullet: {
    color: '#334155',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 6,
  },
  disclaimerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#991b1b',
    marginTop: 20,
    marginBottom: 8,
  },
  disclaimerText: {
    color: '#7f1d1d',
    fontSize: 14,
    lineHeight: 22,
  },
  emptyState: {
    color: '#64748b',
    textAlign: 'center',
    marginTop: 18,
  },
});
