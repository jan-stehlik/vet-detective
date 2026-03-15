import type { Tool } from "../types";

export const investigationTools: Tool[] = [
  { id: "talk-owner", name: "Talk to Owner", icon: "💬", cost: 1, description: "Ask the owner more questions" },
  { id: "physical-exam", name: "Physical Exam", icon: "🩺", cost: 1, description: "Examine the animal physically" },
  { id: "temperature", name: "Check Temperature", icon: "🌡️", cost: 1, description: "Take the animal's temperature" },
  { id: "blood-test", name: "Blood Test", icon: "🔬", cost: 2, description: "Run a blood panel" },
  { id: "xray", name: "X-Ray", icon: "☢️", cost: 2, description: "Take an X-ray image" },
  { id: "urine-test", name: "Urine Test", icon: "🧪", cost: 2, description: "Analyze a urine sample" },
  { id: "skin-scrape", name: "Skin Scrape", icon: "🔎", cost: 2, description: "Examine skin cells under microscope" },
  { id: "ultrasound", name: "Ultrasound", icon: "📡", cost: 2, description: "Perform an ultrasound scan" },
];
