import { APP_CONFIG } from './app-config.js';

// Firebase credentials
export const firebaseConfig = APP_CONFIG.firebase;

// Google Apps Script Web App URL
export const APPS_SCRIPT_URL = APP_CONFIG.appsScriptUrl;

// Dynamic Class List (e.g., ["5-1", "5-2", "5-3", "6-1", "6-2", "6-3"])
export const CLASS_LIST = APP_CONFIG.getClassList();
