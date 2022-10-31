# Vue Racing Application

This is a web application that demonstrates horse race using Vue.js and TailwindCSS. **[DEMO](https://vue-racing.vercel.app/)**

![vue-racing](https://user-images.githubusercontent.com/14932895/198894317-6aa942c4-3bc9-45a5-8259-061eaca48007.gif)

## Sections

The application has three different sections:

### Racing Track

This section contains eight race tracks. The countdown begins by pressing the "Start Race" button in the Header. When the countdown is over, the race of the horses starts. The speed of the racers changes randomly at random time intervals until the race is over. When the last racer completes the race, the top three ranked racers are displayed.

![raceTrack](https://user-images.githubusercontent.com/14932895/198892789-afbec6c7-ffcd-4255-98bb-e6046afbce8d.png)

### Leaderboard

In this section, the rankings of the racers live are shown together with their lane numbers.

![leaderboard](https://user-images.githubusercontent.com/14932895/198892617-5f1b2f01-b311-4a41-b9ba-15d43b608f31.png)

### Racing Lane Settings

This dialog window opens when the settings icon in the Footer is pressed. It has racer name and lane color setting for each race lane. Changed settings are reflected directly on the race track, but are saved in localStorage when the save button is pressed.

![laneSettings](https://user-images.githubusercontent.com/14932895/198892218-9e79d101-509a-495f-9131-a11c6e359909.png)

## Getting Started

To get started you can simply clone this `vue-racing` repository and install the dependencies.

Clone the `vue-racing` repository using git:

```bash
git clone https://github.com/ilkerdurmaz/vue-racing.git
cd vue-racing
```

Install dependencies with this command:

```bash
npm install
```

Run the application with this command:

```bash
npm run dev
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Built With:

- [Vue.js](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
