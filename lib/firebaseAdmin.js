// lib/firebaseAdmin.js
import admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  } catch (error) {
    console.error("Firebase Admin initialization error", error.stack);
  }
}

export async function setViewerRole(uid) {
  try {
    await admin.auth().setCustomUserClaims(uid, { viewer: true });
    console.log(`Viewer role set for user ${uid}`);
  } catch (error) {
    console.error("Error setting viewer role:", error);
  }
}
