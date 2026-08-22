let smoothedEmotions = null;

const SMOOTHING = 0.2;

export function analyzeMood(result) {
  const emptyEmotions = {
    neutral: 0,
    happy: 0,
    sad: 0,
    angry: 0,
    fearful: 0,
    disgusted: 0,
    surprised: 0,
  };

  if (!result || !result.expressions) {
    return {
      expression: "No face",
      confidence: 0,
      emotions: smoothedEmotions || emptyEmotions,
    };
  }

  const current = {
    ...emptyEmotions,
    ...result.expressions,
  };

  if (!smoothedEmotions) {
    smoothedEmotions = {
      ...current,
    };
  } else {
    for (const emotion of Object.keys(current)) {
      smoothedEmotions[emotion] =
        smoothedEmotions[emotion] * (1 - SMOOTHING) +
        current[emotion] * SMOOTHING;
    }
  }

  let expression = "neutral";
  let confidence = smoothedEmotions.neutral;

  for (const [emotion, value] of Object.entries(smoothedEmotions)) {
    if (value > confidence) {
      expression = emotion;
      confidence = value;
    }
  }

  return {
    expression,
    confidence,
    emotions: {
      ...smoothedEmotions,
    },
  };
}
