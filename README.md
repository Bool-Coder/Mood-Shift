# 🎧 MoodShift

<p align="center">
  <strong>Signals that Shape Our World — turning emotional signals into music.</strong>
</p>

<p align="center">
  <em>See the signal. Understand the mood. Find the rhythm. Make the shift.</em>
</p>

<p align="center">

![Vue](https://img.shields.io/badge/Vue.js-3-42b883?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Fast-646cff?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![face-api.js](https://img.shields.io/badge/Computer%20Vision-face--api.js-ff6b6b?style=for-the-badge)

</p>

---

# 🌟 The Idea

**MoodShift** is an emotional-computing project built around one simple question:

> ### **What if technology could recognize how someone feels before asking them to explain it?**

MoodShift uses a webcam and facial-expression analysis to detect a user's emotional signal and create a more personal digital experience around that signal.

The experience focuses on four primary moods:

**😐 Neutral · 😢 Sad · 😊 Happy · 😡 Angry**

Instead of making the user search for the right experience, MoodShift starts with the signal the user is already giving.

---

# 🧠 The Problem

We live in a world that is more connected than ever.

Messages, social media, video calls, notifications, and online communities allow people to communicate constantly.

Yet being digitally connected does not always mean feeling emotionally connected.

For many young people, especially **Gen Z**, expressing difficult emotions can be uncomfortable or difficult.

Sometimes:

- You don't know how to explain how you feel.
- You don't want to talk about it.
- You don't know what you need.
- You simply want something that understands your current state.

At the same time, people already use **music as an emotional tool**.

We listen to music when we are:

- 😢 Sad
- 😡 Angry
- 😐 Neutral
- 😊 Happy
- 🧘 Trying to calm down
- 🎯 Trying to focus

But traditional music platforms usually begin with:

> **"What do you want to listen to?"**

MoodShift explores a different approach:

> ### **"What if we could recognize the emotional signal first?"**

A person should not always have to find the words before technology can respond.

---

# 🌍 Signals that Shape Our World

MoodShift was created around the hackathon theme:

## **Signals that Shape Our World**

The project connects different kinds of signals:

```text
        👤 HUMAN
           │
           │ Facial Signal
           ▼
    👁️ COMPUTER VISION
           │
           │ Emotional Signal
           ▼
        🧠 MOOD
           │
           │ Music Signal
           ▼
       🎵 MUSIC
           │
           │ Emotional Transition
           ▼
      😌 CALM / 🎯 FOCUS
```

A facial expression becomes data.

Data becomes an emotional signal.

That signal becomes a musical response.

### **MoodShift turns one human signal into another form of interaction.**

---

# ⚡ MoodShift in One Sentence

> **MoodShift detects your emotional signal through your facial expression and uses that signal as the starting point for a more intentional music experience.**

---

# ✨ How MoodShift Works

## 1. 📷 Capture

The user gives MoodShift access to their webcam.

The application accesses the camera directly through the browser and processes the video stream.

**No microphone is required.**

```text
Webcam
   ↓
Live Video Stream
   ↓
Facial Analysis
```

---

## 2. 👁️ Detect

MoodShift uses **face-api.js** for browser-based facial analysis.

The project uses:

- Tiny Face Detector
- 68-point facial landmark model
- Face Expression Model

These models allow the application to identify a face and analyze facial-expression signals.

---

## 3. 🧠 Analyze

MoodShift processes the expression probabilities produced by the facial-expression model.

The main moods used by the experience are:

| Mood | Emotional Signal |
|---|---|
| 😐 **Neutral** | Low or balanced emotional signal |
| 😢 **Sad** | Sad or low-valence signal |
| 😊 **Happy** | Positive emotional signal |
| 😡 **Angry** | High-intensity negative signal |

The underlying expression model can also provide additional expression probabilities such as fear, disgust, and surprise.

---

## 4. 📊 Stabilize

A single camera frame should not decide how someone feels.

Facial-expression predictions can fluctuate from frame to frame, so MoodShift uses **temporal smoothing** to make the detected state more stable.

Conceptually:

```text
Facial Expression
       ↓
~10 detections / second
       ↓
Emotion Smoothing
       ↓
Repeated Detection
       ↓
Stable Mood
```

This helps prevent the interface from constantly switching between emotions because of tiny changes in facial expression.

---

## 5. 🎵 Respond

Once a mood has been identified, MoodShift creates a mood-specific experience.

The larger MoodShift vision connects this emotional signal with music from platforms such as:

**🎵 Spotify + ▶️ YouTube**

The goal is not simply to play random music.

The goal is to create a musical journey that begins with the user's current emotional state.

---

# 🧬 The ISO Principle

One of the most important ideas behind MoodShift is inspired by the **ISO Principle** in music-based emotional regulation.

The concept is simple:

> **Meet the person where they are emotionally before attempting to move them somewhere else.**

Instead of immediately trying to make someone happy, MoodShift explores a gradual transition.

```text
CURRENT EMOTIONAL STATE
          │
          ▼
   🎵 MATCH THE MOOD
          │
          ▼
      🫂 VALIDATE
          │
          ▼
   🔄 SHIFT GRADUALLY
          │
          ▼
     😌 CALM / 🎯 FOCUS
```

### Example

```text
😢 SAD
  │
  ▼
🎵 Music that resonates with the current mood
  │
  ▼
🫂 Emotional validation
  │
  ▼
🔄 Gradual musical transition
  │
  ▼
😌 CALMER STATE
```

The goal isn't to tell someone:

> **"Your emotion is wrong."**

The goal is:

> **"I recognize where you are — let's take the next step from there."**

---

# 🎵 Melo Therapy

At the heart of the MoodShift concept is **Melo Therapy** — our approach to using music as an emotional response.

The idea is that music can meet people where they are emotionally instead of forcing an immediate change.

MoodShift uses the detected emotional state as the starting point for a musical journey.

The core idea is:

> ### **Match first. Modulate second.**

MoodShift first recognizes the user's emotional signal.

Then music can be used to gradually influence the direction of the experience.

```text
        👤 USER
           │
           ▼
      🧠 EMOTIONAL
         SIGNAL
           │
           ▼
      🎵 MELO THERAPY
           │
           ▼
      🧬 ISO PRINCIPLE
           │
           ▼
   MATCH → MODULATE → TRANSITION
           │
           ▼
      😌 CALM / 🎯 FOCUS
```

The goal is **not to erase an emotion**.

The goal is to **acknowledge it first and then create a gradual transition**.

For example:

```text
😢 SAD
  ↓
🎵 Match the emotional state
  ↓
🎵 Gradually adjust BPM and energy
  ↓
🎵 Shift musical valence
  ↓
😌 CALM
  ↓
🎯 FOCUS
```

This makes music more than background entertainment.

### **Music becomes the response to the emotional signal.**

> **Melo Therapy is a MoodShift concept, not a medical or clinical treatment.**

---

# 🎵 Music as an Emotional Signal

Music is already one of the most accessible ways people regulate and express emotions.

MoodShift explores how musical characteristics can become part of the emotional transition:

- **BPM**
- **Valence**
- **Energy**
- **Tempo**

The intended journey is not:

```text
😢 Sad ───────────► 😊 Happy
```

It is:

```text
😢 Sad
  │
  ▼
🎵 Resonance
  │
  ▼
🫂 Validation
  │
  ▼
🔄 Gradual Transition
  │
  ▼
😌 Calm
  │
  ▼
🎯 Focus
```

This approach aims to make the transition feel more natural rather than forcing an immediate emotional change.

---

# 🎯 Why MoodShift Matters

MoodShift is **not** trying to diagnose someone's mental health.

It is **not** trying to replace therapy.

And it does not claim that a camera can perfectly understand someone's emotions.

Facial expressions are **signals — not absolute truths**.

Instead, MoodShift explores a smaller and more human question:

> ### **Can technology recognize an emotional signal and respond in a way that feels more personal?**

For someone who doesn't feel like explaining what they're going through, the first interaction could simply be:

```text
LOOK
  ↓
RECOGNIZE
  ↓
RESPOND
```

Sometimes understanding can start before conversation.

---

# 🔬 Current Prototype

The current MoodShift prototype demonstrates:

- 📷 Webcam-based facial analysis
- 👁️ Face detection
- 🧠 Facial-expression recognition
- 📊 Emotion probability visualization
- 🔄 Temporal emotion smoothing
- 🎯 Stable mood detection
- 🖥️ Mood-specific user experiences
- 🧭 Vue Router navigation
- ⚡ Browser-based processing

The prototype focuses on recognizing the emotional signal and creating the foundation for the MoodShift experience.

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| 🟢 **Vue 3** | Frontend interface |
| ⚡ **Vite** | Development and build tooling |
| 🧭 **Vue Router** | Application navigation |
| 🟨 **JavaScript** | Application logic |
| 👁️ **face-api.js** | Facial detection and expression recognition |
| 🔍 **Tiny Face Detector** | Face detection |
| 📍 **68-point Facial Landmarks** | Facial landmark detection |
| 🧠 **Face Expression Model** | Expression classification |
| 📷 **MediaDevices API** | Browser webcam access |
| 🎵 **Spotify / YouTube** | Music ecosystem |

---

# 🏗️ System Architecture

```text
┌──────────────────────────────────────────┐
│                  USER                    │
│                                          │
│                📷 WEBCAM                 │
└───────────────────┬──────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────┐
│            FACIAL ANALYSIS               │
│                                          │
│              face-api.js                 │
│                                          │
│  👁️ Face Detection                       │
│  📍 Facial Landmarks                     │
│  🧠 Facial Expressions                  │
└───────────────────┬──────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────┐
│              MOOD ANALYZER               │
│                                          │
│   Expression Probabilities               │
│              ↓                           │
│      Temporal Smoothing                  │
│              ↓                           │
│         Stable Mood                      │
└───────────────────┬──────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────┐
│             MOOD EXPERIENCE              │
│                                          │
│   😐 Neutral    😢 Sad                   │
│   😊 Happy     😡 Angry                  │
└───────────────────┬──────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────┐
│            MUSIC EXPERIENCE              │
│                                          │
│          🎵 Spotify + YouTube            │
│                                          │
│           ISO Principle                  │
│                                          │
│       MOOD  ───────►  TRANSITION         │
└──────────────────────────────────────────┘
```

---

# 📁 Project Structure

```text
Mood-Shift/
│
├── moodshift/
│   │
│   ├── public/
│   │   └── models/
│   │       ├── face_expression/
│   │       ├── face_landmark_68_tiny/
│   │       └── tiny_face_detector/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Camera.vue
│   │   │   ├── MoodDisplay.vue
│   │   │   ├── Results.vue
│   │   │   └── recommendationEngine.vue
│   │   │
│   │   ├── router/
│   │   │   └── index.js
│   │   │
│   │   ├── services/
│   │   │   ├── faceLandmaker.js
│   │   │   ├── moodAnalyzer.js
│   │   │   └── recommendationEngine.js
│   │   │
│   │   ├── views/
│   │   │   ├── Angry.vue
│   │   │   ├── Happy.vue
│   │   │   ├── Home.vue
│   │   │   ├── Sad.vue
│   │   │   └── getExpression.vue
│   │   │
│   │   ├── App.vue
│   │   └── main.js
│   │
│   ├── package.json
│   └── vite.config.js
│
├── LICENSE
├── README.md
└── package.json
```

---

# 🚀 Installation

Follow these steps to run MoodShift locally.

## Requirements

Make sure you have:

- **Node.js**
- **npm**
- A modern web browser
- A device with a webcam

Check your installation:

```bash
node --version
npm --version
```

---

## 1. Clone the repository

```bash
git clone https://github.com/Bool-Coder/Mood-Shift.git
```

---

## 2. Enter the project

```bash
cd Mood-Shift/moodshift
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Start MoodShift

```bash
npm run dev
```

Vite will display a local development URL, usually similar to:

```text
http://localhost:5173/
```

Open that address in your browser.

---

## 5. Allow camera access 📷

When your browser asks for camera permission, select **Allow**.

Then:

1. Open MoodShift.
2. Click **Find My Mood**.
3. Allow camera access.
4. Look at the camera.
5. MoodShift analyzes your facial expression.
6. Your detected mood is displayed.

---

# 🖥️ User Experience

The current experience follows a simple flow:

```text
              🏠 HOME
                │
                ▼
         "FIND MY MOOD"
                │
                ▼
             📷 CAMERA
                │
                ▼
        👁️ FACIAL ANALYSIS
                │
                ▼
         🧠 MOOD DETECTION
                │
        ┌───────┼───────┐
        ▼       ▼       ▼
      😢 SAD  😊 HAPPY  😡 ANGRY
        │       │       │
        └───────┼───────┘
                ▼
         🎵 MOOD EXPERIENCE
```

The interaction is intentionally simple.

The user doesn't need to fill out a long questionnaire or manually select an emotion before beginning.

---

# 🔐 Privacy & Responsible AI

MoodShift works with sensitive information:

**facial expressions and inferred emotional states.**

We believe emotional technology should be designed with privacy and responsibility at its core.

### Our principles

- 📷 Camera access should always be explicit and user-controlled.
- 🔒 Facial information should be processed locally whenever possible.
- 🚫 Raw camera footage should not need to be stored.
- 🧠 Emotional predictions should be treated as **inferences**, not facts.
- 🛑 Users should always be able to stop camera access.
- 👤 Users should understand when emotional analysis is taking place.

### ⚠️ Important Disclaimer

MoodShift is a **hackathon and experimental project**.

It is **not a medical device, diagnostic system, or replacement for professional mental-health support**.

A facial expression cannot tell us everything about a person's internal emotional state.

MoodShift therefore treats facial analysis as a **starting signal for interaction**, not as a definitive judgment about how someone feels.

---

# 💡 The Bigger Idea

Technology already learns from the signals we create every day.

It knows what we:

- 🔎 Search for
- ▶️ Watch
- 🖱️ Click
- 🛒 Buy
- 🎵 Listen to

MoodShift asks a different question:

> ### **What about the signals we don't put into words?**

A face is a signal.

A mood is a signal.

Music is a signal.

**MoodShift connects them.**

```text
👤 FACE
  │
  ▼
👁️ SIGNAL
  │
  ▼
🧠 EMOTION
  │
  ▼
🎵 MUSIC
  │
  ▼
🌱 EXPERIENCE
```

The vision is a world where technology doesn't only ask:

> **"What do you want?"**

but can also begin with:

> ### **"How are you?"**

---

# 🏆 Built for the Hackathon

## **Signals that Shape Our World**

MoodShift explores how one of the most human signals — **facial expression** — can become the input for a more empathetic digital experience.

Instead of adding another form to fill out, another question to answer, or another button to press, MoodShift starts with something people naturally communicate every day:

# **Their expression.**

---

# ❤️ Why We Built MoodShift

We built MoodShift around a simple belief:

> ### **People shouldn't always have to find the words before technology can try to understand them.**

For someone feeling isolated, overwhelmed, sad, or angry, even a small moment of recognition can matter.

MoodShift uses technology to explore that moment.

<p align="center">
  <strong>See the signal.</strong><br>
  <strong>Understand the mood.</strong><br>
  <strong>Find the rhythm.</strong><br>
  <strong>Make the shift.</strong>
</p>

---

# 👥 Team

## ⚡ Byte Force

Built for the **Signals that Shape Our World** hackathon.

### Team Members

| Member |
|---|
| **Barladianu Mario** |
| **Nicolau Paul** |
| **Ion Arian** |
| **Timofei Filip** |

---

# ⭐ Support MoodShift

If you like the project, consider giving the repository a ⭐ star.

It helps us share the idea and continue exploring how emotional signals can shape better human-computer interactions.

### 🔗 GitHub

https://github.com/Bool-Coder/Mood-Shift

---

# 📄 License

MoodShift is released under the **MIT License**.

See the [`LICENSE`](LICENSE) file for details.
