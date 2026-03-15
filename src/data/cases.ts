import type { Case } from "../types";

export const cases: Case[] = [
  // ---- CASE 1: Easy ----
  {
    animal: { name: "Buddy", emoji: "🐕", species: "Golden Retriever, 5 years old" },
    owner: { name: "Sarah M.", complaint: "He's been really tired lately and won't eat his food. He usually gobbles everything up!" },
    difficulty: 1,
    investigations: {
      "talk-owner":    { clue: "Owner says Buddy got into the trash two days ago and ate some chicken bones. He's been drinking more water than usual.", icon: "💬" },
      "physical-exam": { clue: "Buddy's abdomen feels tense and he whimpers when you gently press on his belly. His gums are a bit pale.", icon: "🩺" },
      "temperature":   { clue: "Temperature: 39.8°C (normal for dogs: 38.0-39.2°C). Slightly elevated — mild fever.", icon: "🌡️" },
      "blood-test":    { clue: "White blood cell count is elevated, indicating the body is fighting an infection or inflammation. Liver values are normal.", icon: "🔬" },
      "xray":          { clue: "X-ray shows a small bone fragment lodged in the upper intestine. No perforation visible, but there is some surrounding inflammation.", icon: "☢️" },
      "urine-test":    { clue: "Urine appears normal. No signs of kidney issues or diabetes.", icon: "🧪" },
      "skin-scrape":   { clue: "Skin and coat appear healthy. No parasites or abnormalities found.", icon: "🔎" },
      "ultrasound":    { clue: "Ultrasound confirms a foreign body in the intestinal tract. The surrounding tissue shows mild inflammation but no blockage yet.", icon: "📡" },
    },
    diagnoses: [
      "Food poisoning",
      "Intestinal foreign body",
      "Kidney disease",
      "Parvovirus infection",
    ],
    correct: "Intestinal foreign body",
    explanation: "Buddy swallowed chicken bone fragments that got stuck in his intestine. This is called an intestinal foreign body — it's one of the most common emergencies vets see in dogs! The bone caused inflammation and a mild fever. Luckily it hasn't caused a full blockage yet. Treatment involves careful monitoring and possibly surgery to remove the fragment. Fun fact: cooked chicken bones are especially dangerous because they can splinter into sharp pieces!",
    hint: "Think about what the owner said Buddy got into recently... and what the X-ray showed.",
    vitals: "Heart Rate: 110 bpm (normal) • Breathing: slightly fast • Weight: 30 kg • Hydration: adequate",
  },

  // ---- CASE 2: Easy ----
  {
    animal: { name: "Luna", emoji: "🐈", species: "Siamese Cat, 3 years old" },
    owner: { name: "Marcus T.", complaint: "Luna keeps scratching her ears and shaking her head. I noticed some dark gunk in her ears." },
    difficulty: 1,
    investigations: {
      "talk-owner":    { clue: "Marcus says Luna is an indoor/outdoor cat. The scratching started about a week ago and has been getting worse. She's also been more irritable.", icon: "💬" },
      "physical-exam": { clue: "Dark brown, crumbly discharge in both ears. The ear canals look red and inflamed. Luna hisses when you touch her ears.", icon: "🩺" },
      "temperature":   { clue: "Temperature: 38.6°C — completely normal for a cat (38.0-39.0°C).", icon: "🌡️" },
      "blood-test":    { clue: "Blood values are all within normal range. No signs of systemic infection.", icon: "🔬" },
      "xray":          { clue: "Skull X-ray shows no abnormalities in the ear structures. Bones and inner ear look healthy.", icon: "☢️" },
      "urine-test":    { clue: "Urine is normal. No relevant findings.", icon: "🧪" },
      "skin-scrape":   { clue: "Examining the ear discharge under the microscope reveals tiny, moving mites! They look like small white dots with legs. This is Otodectes cynotis — the common ear mite.", icon: "🔎" },
      "ultrasound":    { clue: "Not particularly useful for ear issues. No abdominal abnormalities detected.", icon: "📡" },
    },
    diagnoses: [
      "Ear mites",
      "Bacterial ear infection",
      "Allergic dermatitis",
      "Ear polyp",
    ],
    correct: "Ear mites",
    explanation: "Luna has ear mites (Otodectes cynotis) — tiny parasites that live in the ear canal and feed on skin oils and ear wax. The dark crumbly discharge is actually a mix of dried blood, ear wax, and mite waste — yuck! Ear mites are super common in outdoor cats and are very contagious between animals (but not to humans). Treatment is straightforward: special ear drops that kill the mites, plus cleaning the ears. Most cats feel better within a week! Fun fact: ear mites are so tiny you need a microscope to see them, but they cause BIG itchiness.",
    hint: "The dark crumbly discharge is a classic clue... What could you look at under a microscope?",
    vitals: "Heart Rate: 160 bpm (normal) • Breathing: normal • Weight: 4.2 kg • Hydration: good",
  },

  // ---- CASE 3: Medium ----
  {
    animal: { name: "Pepper", emoji: "🐇", species: "Holland Lop Rabbit, 2 years old" },
    owner: { name: "Aisha K.", complaint: "Pepper hasn't pooped in almost two days and she's sitting hunched up in the corner. She normally runs around a lot." },
    difficulty: 2,
    investigations: {
      "talk-owner":    { clue: "Aisha recently switched Pepper's food from hay-based pellets to a new brand that has more grains and seeds. Pepper loved the taste but has been eating less hay.", icon: "💬" },
      "physical-exam": { clue: "Pepper's abdomen feels bloated and firm, like a small balloon. She grinds her teeth when you palpate it — this is a sign of pain in rabbits. Her gut sounds are very quiet.", icon: "🩺" },
      "temperature":   { clue: "Temperature: 37.8°C (normal for rabbits: 38.0-40.0°C). Slightly below normal — this can indicate a rabbit in distress.", icon: "🌡️" },
      "blood-test":    { clue: "Glucose levels are slightly elevated (stress response). Other values are normal. No signs of liver or kidney disease.", icon: "🔬" },
      "xray":          { clue: "X-ray shows a very distended stomach full of gas. The intestines also show gas buildup. No blockage from a foreign object is visible, but gut motility appears to have slowed significantly.", icon: "☢️" },
      "urine-test":    { clue: "Urine is slightly more concentrated than normal, suggesting mild dehydration.", icon: "🧪" },
      "skin-scrape":   { clue: "Skin and fur look healthy. No parasites or skin issues.", icon: "🔎" },
      "ultrasound":    { clue: "Ultrasound confirms gas-filled stomach and intestines. Gut motility is severely reduced — the intestines are barely moving. No masses or foreign bodies.", icon: "📡" },
    },
    diagnoses: [
      "GI stasis (gut slowdown)",
      "Intestinal blockage",
      "Bloat from overeating",
      "Bacterial infection",
    ],
    correct: "GI stasis (gut slowdown)",
    explanation: "Pepper has gastrointestinal (GI) stasis — the most common and dangerous condition in pet rabbits! A rabbit's gut needs to keep moving constantly. When Pepper's diet changed from high-fiber hay to low-fiber grains, her gut slowed down and eventually nearly stopped. The gas built up because bacteria in the gut kept producing it, but it wasn't moving through. Treatment involves gut motility drugs, pain medication, fluids for hydration, and — most importantly — getting Pepper back on a high-hay diet. Fun fact: rabbits should eat a body-sized pile of hay EVERY DAY. Hay is the engine that keeps their gut moving!",
    hint: "What changed in Pepper's diet recently? Rabbits need a very specific type of food to keep their gut working...",
    vitals: "Heart Rate: 250 bpm (elevated/stressed) • Breathing: slightly fast • Weight: 1.8 kg • Hydration: mildly dehydrated",
  },

  // ---- CASE 4: Medium ----
  {
    animal: { name: "Captain", emoji: "🦜", species: "African Grey Parrot, 12 years old" },
    owner: { name: "David L.", complaint: "Captain has been sneezing a lot and there's discharge from his nostrils. He's also fluffed up and less talkative than usual." },
    difficulty: 2,
    investigations: {
      "talk-owner":    { clue: "David recently moved Captain's cage near the kitchen. He cooks with non-stick pans daily. Captain's diet is mainly sunflower seeds with some fruit.", icon: "💬" },
      "physical-exam": { clue: "Captain's feathers are fluffed up (sign of feeling cold/sick). There's clear nasal discharge and you can hear a slight whistling when he breathes. His keel bone (chest) feels prominent — he may have lost weight.", icon: "🩺" },
      "temperature":   { clue: "Bird body temperature is difficult to measure accurately, but Captain feels slightly cool to the touch compared to a healthy parrot.", icon: "🌡️" },
      "blood-test":    { clue: "White blood cells are moderately elevated. The blood shows signs of a vitamin A deficiency — common in seed-only diets. Liver values are slightly off.", icon: "🔬" },
      "xray":          { clue: "X-ray shows mild haziness in the air sacs (birds have air sacs instead of a diaphragm). This suggests a respiratory infection. No obvious masses.", icon: "☢️" },
      "urine-test":    { clue: "Bird droppings analysis shows slightly green-colored urates, which can indicate liver stress.", icon: "🧪" },
      "skin-scrape":   { clue: "Feather condition is poor with some stress bars visible. No external parasites.", icon: "🔎" },
      "ultrasound":    { clue: "Limited usefulness in birds due to air sacs. No obvious masses in the abdomen.", icon: "📡" },
    },
    diagnoses: [
      "Aspergillosis (fungal respiratory infection)",
      "Common cold",
      "Teflon/PTFE toxicosis",
      "Psittacosis (parrot fever)",
    ],
    correct: "Aspergillosis (fungal respiratory infection)",
    explanation: "Captain has aspergillosis — a fungal infection of the respiratory system caused by Aspergillus mold. This is one of the most common diseases in pet parrots! Two factors made Captain vulnerable: his seed-only diet caused vitamin A deficiency (vitamin A protects the respiratory lining), and the weakened immune system let the fungal spores take hold. The non-stick pan fumes are also harmful to birds (PTFE toxicity is real!) but aspergillosis better explains the chronic symptoms. Treatment involves antifungal medications and a major diet upgrade to include vegetables and pellets. Fun fact: birds have a super efficient respiratory system with air sacs — which is amazing for flying, but means respiratory infections can spread very quickly through their whole body!",
    hint: "Look at the blood test results carefully — what deficiency was found? And think about what that deficiency does to the body's defenses...",
    vitals: "Weight: 380g (should be ~420g) • Breathing: labored with tail bobbing • Feather condition: poor",
  },

  // ---- CASE 5: Medium ----
  {
    animal: { name: "Ziggy", emoji: "🐕", species: "Beagle, 8 years old" },
    owner: { name: "Priya S.", complaint: "Ziggy has been drinking WAY more water than usual and peeing constantly. He's also lost weight even though he's eating more than ever." },
    difficulty: 2,
    investigations: {
      "talk-owner":    { clue: "Priya says the increased drinking started about 3 weeks ago and has gotten worse. Ziggy used to drink one bowl a day, now he goes through three or four. He's lost about 2 kg in the past month despite eating enthusiastically.", icon: "💬" },
      "physical-exam": { clue: "Ziggy is alert and seems happy, but he's noticeably thinner than his records show. His coat is a bit dull. His eyes have a very slight cloudy appearance. Gums are pink and healthy.", icon: "🩺" },
      "temperature":   { clue: "Temperature: 38.5°C — perfectly normal for a dog.", icon: "🌡️" },
      "blood-test":    { clue: "Blood glucose level: 18.2 mmol/L — this is very high! Normal range for dogs is 3.3-6.1 mmol/L. Fructosamine (long-term sugar level) is also elevated. Liver and kidney values are normal.", icon: "🔬" },
      "xray":          { clue: "Chest and abdominal X-rays look normal. No masses, no enlarged organs. Heart size is normal.", icon: "☢️" },
      "urine-test":    { clue: "Urine is very dilute (the kidneys are working overtime). Glucose detected in urine — the kidneys are spilling sugar because there's too much in the blood. No bacteria.", icon: "🧪" },
      "skin-scrape":   { clue: "Skin is slightly dry but no parasites or infections. Coat quality is below average.", icon: "🔎" },
      "ultrasound":    { clue: "Pancreas appears slightly smaller than normal. Liver and kidneys look healthy. No tumors or masses anywhere.", icon: "📡" },
    },
    diagnoses: [
      "Diabetes mellitus",
      "Cushing's disease",
      "Kidney failure",
      "Hyperthyroidism",
    ],
    correct: "Diabetes mellitus",
    explanation: "Ziggy has diabetes mellitus — the same disease humans can get! His pancreas isn't producing enough insulin, which is the hormone that tells cells to absorb sugar from the blood. Without insulin, sugar builds up in the blood (which is why his blood glucose was so high) and spills into the urine. His body can't use the sugar for energy, so it breaks down fat and muscle instead — that's why he's losing weight despite eating more. The excessive thirst and peeing happen because the kidneys try to flush out the extra sugar. Treatment involves daily insulin injections, a special diet, and regular monitoring. Fun fact: dogs almost always get Type 1 diabetes (like some humans), while cats more commonly get Type 2!",
    hint: "The classic trio of symptoms: drinking more, peeing more, losing weight despite eating more. What human disease has these exact same symptoms?",
    vitals: "Heart Rate: 100 bpm (normal) • Breathing: normal • Weight: 11 kg (was 13 kg last visit) • Hydration: mildly dehydrated",
  },

  // ---- CASE 6: Hard ----
  {
    animal: { name: "Mochi", emoji: "🐹", species: "Syrian Hamster, 1.5 years old" },
    owner: { name: "Emma W.", complaint: "Mochi has a big lump on her side that appeared in the last two weeks. She's still eating okay but seems slower." },
    difficulty: 3,
    investigations: {
      "talk-owner":    { clue: "Emma says the lump started small, like a pea, and grew quickly over about two weeks. Mochi is still eating and drinking but sleeps more than usual. She's an only hamster with a clean cage.", icon: "💬" },
      "physical-exam": { clue: "There's a firm, round mass about 2 cm in diameter on Mochi's left flank. It's attached to the tissue underneath (not freely movable). Mochi doesn't seem to be in pain when you touch it. The rest of her exam is normal for her age.", icon: "🩺" },
      "temperature":   { clue: "Difficult to measure precisely in hamsters, but she feels warm and normal.", icon: "🌡️" },
      "blood-test":    { clue: "Very small blood sample possible in hamsters. Results show mild anemia (slightly low red blood cells). White blood cells are in the normal range.", icon: "🔬" },
      "xray":          { clue: "X-ray shows a soft tissue mass on the left side. It doesn't appear to involve the bone. Internal organs look normal — no obvious spread to the lungs or abdomen.", icon: "☢️" },
      "urine-test":    { clue: "No significant findings. Hamster urine is normally quite concentrated.", icon: "🧪" },
      "skin-scrape":   { clue: "Cells from a fine needle aspirate of the lump show clusters of abnormal cells that look different from normal tissue. They vary in size and shape — this is suspicious for a tumor.", icon: "🔎" },
      "ultrasound":    { clue: "Ultrasound of the mass shows it has its own blood supply and is solid (not fluid-filled like an abscess would be). Internal organs appear clear.", icon: "📡" },
    },
    diagnoses: [
      "Tumor (neoplasia)",
      "Abscess from a bite wound",
      "Fatty lipoma (benign lump)",
      "Enlarged lymph node from infection",
    ],
    correct: "Tumor (neoplasia)",
    explanation: "Mochi has a tumor — an abnormal growth of cells. Tumors are unfortunately very common in hamsters, especially as they get older (hamsters typically live 2-3 years). The key clues were: rapid growth over two weeks, the mass being fixed to underlying tissue (not freely movable), and the fine needle aspirate showing abnormal cells. An abscess would typically be warm, painful, and fluid-filled. A lipoma would be soft and moveable. Treatment options for hamsters include surgical removal if the tumor is accessible, but the vet has to consider whether a tiny hamster can safely undergo anesthesia. Fun fact: Syrian hamsters are actually used in medical research specifically because of how commonly they develop tumors — studying them helps scientists understand cancer in all animals, including humans!",
    hint: "Think about how fast the lump grew and what the cell sample showed. What kind of growth produces abnormal cells that look different from each other?",
    vitals: "Weight: 135g (normal range) • Activity: reduced • Appetite: maintained",
  },

  // ---- CASE 7: Hard ----
  {
    animal: { name: "Storm", emoji: "🐴", species: "Thoroughbred Horse, 9 years old" },
    owner: { name: "Jake R.", complaint: "Storm is sweating, rolling on the ground, and keeps looking at his belly. He won't eat and seems really uncomfortable." },
    difficulty: 3,
    investigations: {
      "talk-owner":    { clue: "Jake says Storm was fine this morning but started acting restless about 3 hours ago. He's been pawing at the ground and lying down then getting up repeatedly. His feed hasn't changed recently, but Jake noticed Storm didn't pass any manure today.", icon: "💬" },
      "physical-exam": { clue: "Storm is visibly distressed — sweating, pawing, and trying to roll. His heart rate is elevated. Gut sounds are almost completely absent on the right side and reduced on the left (normally you should hear lots of gurgling). His gums are slightly dark pink with a delayed capillary refill time of 3 seconds.", icon: "🩺" },
      "temperature":   { clue: "Temperature: 38.9°C (normal for horses: 37.5-38.5°C). Mildly elevated, likely from pain and stress.", icon: "🌡️" },
      "blood-test":    { clue: "Packed cell volume (PCV) is elevated at 48% — this means Storm is dehydrated (normal: 32-42%). Lactate levels are mildly elevated, which indicates tissue is not getting enough blood flow. White blood cells are normal.", icon: "🔬" },
      "xray":          { clue: "Abdominal X-rays are difficult in horses due to size, but images show distended loops of intestine with gas. No obvious displacement visible in the images captured.", icon: "☢️" },
      "urine-test":    { clue: "No urine sample obtainable — Storm is too distressed to urinate.", icon: "🧪" },
      "skin-scrape":   { clue: "Not relevant to the current emergency. Skin and coat appear normal.", icon: "🔎" },
      "ultrasound":    { clue: "Abdominal ultrasound shows distended, non-moving loops of small intestine. Fluid is visible between intestinal loops. The large colon appears gas-filled and may be displaced from its normal position.", icon: "📡" },
    },
    diagnoses: [
      "Colic (intestinal crisis)",
      "Muscle cramps from exercise",
      "Gastric ulcer rupture",
      "Tetanus",
    ],
    correct: "Colic (intestinal crisis)",
    explanation: "Storm has colic — the #1 emergency in horses and the leading cause of death in domestic horses. 'Colic' is actually a general term meaning abdominal pain, but in horses it usually means something has gone wrong with the intestines. Storm's case shows signs of a possible intestinal displacement — part of the large colon may have shifted out of position, trapping gas and blocking the flow of digesta. The absent gut sounds, dehydration, elevated lactate, and visible distress all point to a serious colic episode. Treatment depends on severity: mild colic can be managed with pain medication, fluids, and walking the horse. Severe cases like Storm's may need emergency surgery. Time is critical — the longer the intestine is compromised, the higher the risk of tissue death. Fun fact: horses can't vomit (their digestive system only goes one way), which is partly why intestinal problems are so dangerous for them!",
    hint: "Look at Storm's behavior — rolling, pawing, looking at belly, no manure. What is the most common equine emergency that causes severe abdominal pain?",
    vitals: "Heart Rate: 56 bpm (normal: 28-40) • Breathing: 24/min (elevated) • Gut sounds: absent right, reduced left • CRT: 3 seconds (delayed)",
  },

  // ---- CASE 8: Hard ----
  {
    animal: { name: "Noodle", emoji: "🐍", species: "Ball Python, 4 years old" },
    owner: { name: "Tyler B.", complaint: "Noodle hasn't eaten in 6 weeks and I noticed her mouth looks weird — there's some cheesy-looking stuff in there." },
    difficulty: 3,
    investigations: {
      "talk-owner":    { clue: "Tyler keeps Noodle in a glass tank. The temperature on the warm side is about 26°C (should be 30-32°C) and humidity is around 30% (should be 50-60%). The substrate is wood shavings. Noodle last shed about 2 months ago and it came off in pieces.", icon: "💬" },
      "physical-exam": { clue: "Opening Noodle's mouth reveals yellow-white, cheesy plaques on the gums and roof of the mouth. The tissue around the plaques is red and swollen. There's excess mucus. Noodle's body condition is thin and she has some retained shed skin around her head.", icon: "🩺" },
      "temperature":   { clue: "Reptiles are cold-blooded — their body temperature matches their environment. Noodle feels cool, consistent with an enclosure that's too cold.", icon: "🌡️" },
      "blood-test":    { clue: "White blood cells are very elevated — the immune system is fighting hard. Heterophils (reptile version of neutrophils) are especially high, indicating a bacterial infection. Protein levels are low from not eating.", icon: "🔬" },
      "xray":          { clue: "X-ray shows no pneumonia in the lungs. No other structural abnormalities. Skeleton looks normal.", icon: "☢️" },
      "urine-test":    { clue: "Urate sample (reptile version of urine) is normal colored. Kidney function appears adequate.", icon: "🧪" },
      "skin-scrape":   { clue: "Examining the mouth plaques under microscope shows massive amounts of bacteria and inflammatory cells. The bacteria are rod-shaped (gram-negative). Some fungal elements may also be present.", icon: "🔎" },
      "ultrasound":    { clue: "No abdominal abnormalities. No egg retention. Internal organs look appropriate.", icon: "📡" },
    },
    diagnoses: [
      "Infectious stomatitis (mouth rot)",
      "Vitamin C deficiency",
      "Normal brumation (winter fasting)",
      "Respiratory infection",
    ],
    correct: "Infectious stomatitis (mouth rot)",
    explanation: "Noodle has infectious stomatitis, commonly known as 'mouth rot' — one of the most common diseases in captive snakes. It's a bacterial (and sometimes fungal) infection of the mouth tissue. The root cause here is husbandry problems: the enclosure is too cold and too dry. Reptiles rely on environmental heat to power their immune system — when temperatures are too low, their immune system basically goes to sleep, allowing bacteria to take over. The low humidity also caused bad sheds (retained skin), which can create entry points for infection. Treatment involves antibiotics, daily mouth cleaning with antiseptic, and — most importantly — fixing the enclosure to proper temperatures and humidity. Fun fact: this case teaches a critical lesson in reptile medicine — most reptile diseases are caused by incorrect husbandry (housing conditions), not by germs alone. Fix the environment, and you fix most of the problems!",
    hint: "Focus on the housing conditions Tyler described. What happens to a cold-blooded animal's immune system when their environment is too cold?",
    vitals: "Body condition: thin • Last shed: incomplete (dysecdysis) • Enclosure temp: too low • Humidity: too low",
  },
];
