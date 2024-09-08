import * as dotenv from 'react-native-dotenv'

module.exports = {
  "expo": {
    "name": "vanmoosh",
    "slug": "vanmoosh",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "config": {
        "GoogleMapsApiKey": process.env.MAPSGOOGLECLOUD
      },
      "infoPlist": {
        "UIBackgroundModes": ["location"]
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "config": {
        "googleMaps": {
          "apiKey": process.env.MAPSGOOGLECLOUD
        },
        "permissions": [
          "ACCESS_FINE_LOCATION", 
          "ACCESS_COARSE_LOCATION",
          "ACCESS_BACKGROUND_LOCATION"
        ],
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      [
        "expo-font"
      ],
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ],
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ]
    ]
  }
}