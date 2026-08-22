function get(scores, name) {
  return scores[name] ?? 0;
}

function avg(scores, left, right) {
  return (get(scores, left) + get(scores, right)) / 2;
}

export function analyzeMood(result) {
  if (
    !result ||
    !result.faceBlendshapes ||
    result.faceBlendshapes.length === 0
  ) {
    return {
      expression: "No face",
      confidence: 0,
      emotions: {},
    };
  }

  const categories = result.faceBlendshapes[0].categories;

  const scores = {};

  for (const category of categories) {
    scores[category.categoryName] = category.score;
  }

  // -----------------------------
  // FACIAL FEATURES
  // -----------------------------

  const smile = avg(scores, "mouthSmileLeft", "mouthSmileRight");

  const frown = avg(scores, "mouthFrownLeft", "mouthFrownRight");

  const browDown = avg(scores, "browDownLeft", "browDownRight");

  const browInnerUp = get(scores, "browInnerUp");

  const eyeWide = avg(scores, "eyeWideLeft", "eyeWideRight");

  const eyeSquint = avg(scores, "eyeSquintLeft", "eyeSquintRight");

  const jawOpen = get(scores, "jawOpen");

  const noseSneer = avg(scores, "noseSneerLeft", "noseSneerRight");

  const mouthPucker = get(scores, "mouthPucker");

  // -----------------------------
  // EMOTIONS
  // -----------------------------

  let happy = smile * 1.2 + eyeSquint * 0.3;

  let sad = frown * 0.8 + browInnerUp * 0.5 - smile * 0.3;

  let angry = browDown * 1.0 + noseSneer * 0.3 - smile * 0.3;

  let surprised = eyeWide * 0.7 + jawOpen * 0.7 + browInnerUp * 0.2;

  let disgusted = noseSneer * 1.0 + mouthPucker * 0.3 + browDown * 0.2;

  // Don't allow negative values
  happy = Math.max(0, happy);
  sad = Math.max(0, sad);
  angry = Math.max(0, angry);
  surprised = Math.max(0, surprised);
  disgusted = Math.max(0, disgusted);

  // -----------------------------
  // NORMALIZE
  // -----------------------------

  const rawEmotions = {
    Happy: happy,
    Sad: sad,
    Angry: angry,
    Surprised: surprised,
    Disgusted: disgusted,
  };

  const total = Object.values(rawEmotions).reduce(
    (sum, value) => sum + value,
    0
  );

  const emotions = {};

  if (total > 0.05) {
    for (const [emotion, value] of Object.entries(rawEmotions)) {
      emotions[emotion] = value / total;
    }
  } else {
    emotions.Happy = 0;
    emotions.Sad = 0;
    emotions.Angry = 0;
    emotions.Surprised = 0;
    emotions.Disgusted = 0;
  }

  // -----------------------------
  // FIND STRONGEST
  // -----------------------------

  let strongestEmotion = "Neutral";
  let strongestScore = 0;

  for (const [emotion, score] of Object.entries(emotions)) {
    if (score > strongestScore) {
      strongestEmotion = emotion;
      strongestScore = score;
    }
  }

  // If everything is weak → neutral
  if (strongestScore < 0.35) {
    strongestEmotion = "Neutral";
    strongestScore = 1 - total;
  }

  for (const category of categories) {
    console.log(category.categoryName + category.score);
  }
  return {
    expression: strongestEmotion,
    confidence: strongestScore,
    emotions,
    blendshapes: scores,
  };
}
