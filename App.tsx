import { DragDropContentView } from 'expo-drag-drop-content-view';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DragDropContentView
        onDrop={(event) => {
          alert(`Dropped ${event.assets.length} items`);
        }}
        style={styles.container}>
        <WebView source={{ uri: 'https://www.dragdrop.com/test/' }} style={styles.webView} />
      </DragDropContentView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webView: { flex: 1 },
});
