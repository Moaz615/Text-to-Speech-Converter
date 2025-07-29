# Text-to-Speech Converter

A simple and elegant web-based text-to-speech converter that transforms written text into spoken words using the Web Speech API.

## 🚀 Features

- **Text-to-Speech Conversion**: Convert any text input into natural-sounding speech
- **Voice Selection**: Choose from available system voices and languages
- **Speech Rate Control**: Adjust speaking speed with intuitive +/- buttons (0.5x to 2x speed)
- **Volume Control**: Fine-tune audio volume with a slider (0% to 100%)
- **Play/Stop Controls**: Start speech conversion or stop it at any time
- **Responsive Design**: Clean, modern interface that works on desktop and mobile devices
- **Real-time Updates**: Speech settings update instantly as you adjust them

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Modern styling with transitions and responsive design
- **JavaScript (ES6)**: Interactive functionality and Web Speech API integration
- **Web Speech API**: Browser-native speech synthesis

## 📁 Project Structure

```
Text to speech converter/
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started
1.  **Open the app**: In your browser open [the website page]()
2.  **Enter Text**: Type or paste the text you want to convert to speech in the textarea
3. **Select Voice**: Choose your preferred voice/language from the dropdown menu
4. **Adjust Settings**:
   - Use the rate buttons (+/-) to control speaking speed
   - Move the volume slider to adjust audio level
5. **Convert**: Click the "Convert to voice" button to start speech synthesis
6. **Stop**: Use the "Stop" button to halt speech at any time

## 🎛️ Controls

| Control | Function |
|---------|----------|
| **Textarea** | Input field for text to be spoken |
| **Voice Selector** | Dropdown to choose available system voices |
| **Convert Button** | Starts text-to-speech conversion |
| **Stop Button** | Immediately stops ongoing speech |
| **Rate Controls** | Adjust speaking speed (0.5x - 2.0x) |
| **Volume Slider** | Control audio volume (0% - 100%) |

## 🌟 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full support |
| Firefox | ✅ Full support |
| Safari | ✅ Full support |
| Edge | ✅ Full support |
| Opera | ✅ Full support |


## 🐛 Troubleshooting

**No voices available?**
- Ensure your browser supports Web Speech API
- Check if voices are loading (may take a moment on first visit)
- Try refreshing the page

**Speech not working?**
- Verify your device's audio is enabled
- Check volume settings both in the app and system
- Ensure text input is not empty

**Voice selection not updating?**
- Wait for voices to fully load before selecting
- Try refreshing the browser if voices don't appear
