import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

let faceLandmarker = null;

export async function initializeFaceLandmarker() {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
  );

  faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: "/models/face_landmarker.task",
    },

    runningMode: "VIDEO",

    numFaces: 1,

    outputFaceBlendshapes: true,

    minFaceDetectionConfidence: 0.5,
    minFacePresenceConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });

  console.log("MediaPipe Face Landmarker initialized!");

  return faceLandmarker;
}

export function detectFace(video, timestamp) {
  if (!faceLandmarker) {
    throw new Error("Face Landmarker is not initialized.");
  }

  return faceLandmarker.detectForVideo(video, timestamp);
}
