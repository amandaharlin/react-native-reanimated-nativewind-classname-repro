# Thanks for checking out this repro 👋


After upgrading a project (details below), I noticed that NativeWind was no longer getting its classes applied to an animated view. I wanted to log this in case NW needed to know if something changed with RNReanimated at 3.16.1. (I'll open an issue with them too.) 

When RNReanimated was at `3.10.1` and NativeWind was at `4.1.21` and also at `4.1.23` the NW classes were applied correctly to the Animative.View. 

| Working Project Details | Not-Working Project Details |
|--------|--------|
| Expo `51.0.38` | Expo `52.0.0-preview.18` |
| React NativeReanimated `3.10.1` | React NativeReanimated at `3.16.1` |
| NativeWind at `4.1.21` | NativeWind at `4.1.21` |

Thank you all so much! :sparkles: