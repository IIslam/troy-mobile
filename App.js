import React from "react";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{
        uri:
          "http://store-locator-web.s3-website-eu-west-1.amazonaws.com/wireframes/assets/Landing%20page%20(2)@2x.png"
      }}
    />
  );
}
