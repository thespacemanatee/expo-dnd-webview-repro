### What's this?

This is a repro for https://github.com/AlirezaHadjar/expo-drag-drop-content-view/issues/18.

### How to reproduce?

1. Clone this repo.
2. Run `yarn install`.
3. Run `yarn ios` and `yarn android`.
4. Drag and drop an image in the WebView.

### Expected behavior

The drag and drop behavior should be handled by the `expo-drag-drop-content-view` package.

### Actual behavior

The WebView intercepts the drop event. I want to handle the drop event natively using the `expo-drag-drop-content-view` package.