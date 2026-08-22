import * as faceapi from "face-api.js";

let initialized = false;

export async function initializeFaceLandmaker() {
  if (initialized) {
    return;
  }

  console.log("Loading face-api.js models...");

  await faceapi.nets.tinyFaceDetector.loadFromUri("/models/tiny_face_detector");

  await faceapi.nets.faceLandmark68TinyNet.loadFromUri(
    "/models/face_landmark_68_tiny"
  );

  await faceapi.nets.faceExpressionNet.loadFromUri("/models/face_expression");

  initialized = true;

  console.log("All models loaded.");
}

export async function detectFace(video) {
  if (!initialized) {
    throw new Error("Face API is not initialized.");
  }

  const detection = await faceapi
    .detectSingleFace(
      video,
      new faceapi.TinyFaceDetectorOptions({
        inputSize: 320,
        scoreThreshold: 0.5,
      })
    )
    .withFaceLandmarks(true)
    .withFaceExpressions();

  return detection;
}
