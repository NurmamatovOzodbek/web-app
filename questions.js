// questions.js
const questions = [
  {
    id: 1,
    type: "checkbox",
    question:
      "Question 1 of 80: Your teacher instructs you to edit a classmate's research paper. Which two tools should you use? (Choose 2.)",
    options: [
      "A. Design mode",
      "B. Spelling checker",
      "C. Linked notes",
      "D. Comments",
    ],
    correct: [1, 3], // B, D
  },
  {
    id: 2,
    type: "checkbox",
    question:
      "Question 2 of 80: When using an app, network, or service, you may be required to agree to an Acceptable Use Policy. What are two types of information that an Acceptable Use Policy describes? (Choose 2.)",
    options: [
      "A. The consequences of violating the policy",
      "B. Unacceptable uses of the app, network, or service",
      "C. How to copyright data that you submit to the app, network, or service",
      "D. How to monetize information through the app, network, or service",
    ],
    correct: [0, 1], // A, B
  },
  {
    id: 3,
    type: "single",
    question:
      "Question 3 of 80: What mental health issue can excessive social media use potentially lead to?",
    options: [
      "A. Improved social connections",
      "B. Enhanced emotional resilience",
      "C. Increased risk of mood swings",
      "D. Heightened feelings of happiness",
    ],
    correct: [2], // C
  },
  {
    id: 4,
    type: "single",
    question:
      'Question 4 of 80: What is a benefit of "in private" or "incognito" browsing?',
    options: [
      "A. Your web browser allows you to change your IP address.",
      "B. Your web browser permits visits to websites that are normally blocked in your country.",
      "C. Your web browser blocks advertisements.",
      "D. Your web browser hides activities from other people who use the same device.",
    ],
    correct: [3], // D
  },
  {
    id: 5,
    type: "true_false",
    question:
      "Question 5 of 80: For each statement about the Android operating system, select True or False.",
    statements: [
      { text: "Android is open-source software", correct: "True" },
      { text: "Android is a desktop operating system", correct: "False" },
      { text: "Android requires the Google App Store", correct: "False" },
    ],
  },
  {
    id: 6,
    type: "true_false",
    question: "Question 6 of 80: For each statement, select True or False.",
    statements: [
      {
        text: "If you do not cite your sources, you are guilty of plagiarism",
        correct: "True",
      },
      {
        text: "In written work, you must use footnotes to cite your sources.",
        correct: "False",
      },
      {
        text: "Plagiarism is the unauthorized and uncredited use of another person's idea or creative work",
        correct: "True",
      },
      {
        text: "You must cite your sources only when you use someone else's work exactly as it was originally created.",
        correct: "False",
      },
    ],
  },
  {
    id: 7,
    type: "checkbox",
    question:
      "Question 7 of 80: What are two negative effects of posting a derogatory meme on social media? (Choose 2)",
    options: [
      "A. It showcases your wit and digital artistry skills.",
      "B. You can easily address a group of people who hold specific beliefs.",
      "C. It remains traceable after the event that inspired you to post it.",
      "D. Various viewers may interpret the meme differently.",
    ],
    correct: [2, 3], // C, D
  },
  {
    id: 8,
    type: "matching",
    question:
      "Question 8 of 80: Move each AI term from the list on the left to its definition on the right.",
    items: [
      {
        term: "Robotics",
        def: "Focuses on creating physical machines capable of performing tasks autonomously or with minimal human intervention.",
      },
      {
        term: "Machine Learning",
        def: "Enables machines to gain knowledge from data and improve their performance over time without being explicitly programmed.",
      },
      {
        term: "Neural Networks",
        def: "Possesses many small parts, like tiny computers, that can figure out patterns and connections just like humans do when they learn new things.",
      },
      {
        term: "Natural Language Processing",
        def: "Enables machines to process and comprehend text or speech, helping communication between humans and computers in a more instinctive way.",
      },
    ],
  },
  {
    id: 9,
    type: "true_false",
    question:
      "Question 9 of 80: You need to identify personally identifiable information (PII) that you should not expose online. For each statement, select Yes or No.",
    statements: [
      { text: "Eye color", correct: "False" },
      { text: "Date of birth", correct: "True" },
      { text: "Passport number", correct: "True" },
    ],
  },
  {
    id: 10,
    type: "single",
    question:
      "Question 10 of 80: You need to store a list of webpages so you can easily return to them later. What web browser feature or setting should you use?",
    options: [
      "A. Favorites or Bookmarks",
      "B. History or Timeline",
      "C. Tabbed Browsing",
      "D. Address box.",
    ],
    correct: [0], // A
  },
  {
    id: 11,
    type: "checkbox",
    question:
      "Question 11 of 80: You are conducting online research. You need to refine your search to return results that are more relevant to your research subject. Which two techniques should you use? (Choose 2.)",
    options: [
      "A. Enclose multi-word search terms in quotation marks",
      "B. Search for generic terms",
      "C. Capitalize important terms",
      "D. Search for root words and exclude suffixes",
    ],
    correct: [0, 3], // A, D
  },
  {
    id: 12,
    type: "true_false",
    question:
      "Question 12 of 80: For each statement about differences between wired and wireless networking, select True or False.",
    statements: [
      {
        text: "An encrypted Wi-Fi connection is more secure than an Ethernet connection",
        correct: "False",
      },
      {
        text: "Wireless networks typically have slower data transmission speeds than Ethernet connections",
        correct: "True",
      },
      {
        text: "An Ethernet connection typically provides fast network connection speeds than a Wi-Fi connection",
        correct: "True",
      },
    ],
  },
  {
    id: 13,
    type: "single",
    question:
      "Question 13 of 80: You need to download a file to use on your Windows computer. Which file extension will work directly on your computer?",
    options: ["A. .pkg", "B. .dmg", "C. .deb", "D. .exe"],
    correct: [3], // D
  },
  {
    id: 14,
    type: "single",
    question:
      "Question 14 of 80: Which unit describes the short term data storage used by a computing device to run applications?",
    options: ["A. CPU", "B. RAM", "C. Mbps", "D. GHz"],
    correct: [1], // B
  },
  {
    id: 15,
    type: "true_false",
    question:
      "Question 15 of 80: You are researching information in a long document. Select Yes or No for Find feature capabilities.",
    statements: [
      {
        text: "Locate a keyword or phrase within the document",
        correct: "True",
      },
      {
        text: "Change the format of all citations in your document",
        correct: "False",
      },
      {
        text: "Identify pages that include references by a specific author",
        correct: "False",
      },
    ],
  },
  {
    id: 16,
    type: "single",
    question:
      "Question 16 of 80: Which guideline will most likely impact where you are able to share your recipe online?",
    options: [
      "A. Some social media sites have a limit on the number of characters or pictures you can post.",
      "B. Some social media sites do not allow you to format information as a bulleted list.",
      "C. Some social media sites do not allow you to post recipes.",
      "D. Some social media sites have a limit on the length of videos you can post.",
    ],
    correct: [0], // A
  },
  {
    id: 17,
    type: "single",
    question:
      "Question 17 of 80: Which key (or key combination) should you press at the end of each sentence to separate a paragraph into individual numbered list items?",
    options: ["A. Shift+Tab", "B. Tab", "C. Shift+Enter", "D. Enter"],
    correct: [3], // D
  },
  {
    id: 18,
    type: "single",
    question:
      "Question 18 of 80: Which setting will allow you to print multiple slides on one page of paper?",
    options: [
      "A. Pages per sheet",
      "B. Slide layout",
      "C. Double-sided or duplex",
      "D. Slide sorter",
    ],
    correct: [0], // A
  },
  {
    id: 19,
    type: "checkbox",
    question:
      "Question 19 of 80: You need to maintain the security of your smartphone. Which three guidelines should you follow? (Choose 3.)",
    options: [
      "A. Disable Wi-Fi and Bluetooth when you're not using them",
      "B. Do not leave your device unattended in public or in easily accessible areas",
      "C. Use a USB 3.0 or newer connection cable when connected to a new computer",
      "D. Always use a surge protector when charging the device",
      "E. Update your smartphone operating system only if you need a new feature",
      "F. Avoid using public Wi-Fi networks",
    ],
    correct: [0, 1, 5], // A, B, F
  },
  {
    id: 20,
    type: "single",
    question:
      "Question 20 of 80: Which action meets ethical standards of behavior to protect your digital reputation?",
    options: [
      "A. Use public domain images for your company website",
      "B. Include the full version of your favorite song in a personal video profile",
      "C. Comply with the terms of the Acceptable Use Policy while using your school's Wi-Fi",
      "D. Enhance the Work Experience section of your online resume with tasks you intend to complete",
    ],
    correct: [2], // C
  },
  {
    id: 21,
    type: "true_false",
    question:
      "Question 21 of 80: For each statement about the benefits of a good network infrastructure, select True or False.",
    statements: [
      {
        text: "Ensures that students can consistently connect to the campus network",
        correct: "True",
      },
      {
        text: "Enables students to connect to the school's computer lab from any location",
        correct: "False",
      },
      {
        text: "Supports the scaling of the school network without redesign as population increases",
        correct: "True",
      },
    ],
  },
  {
    id: 22,
    type: "true_false",
    question:
      "Question 22 of 80: For each statement about video conference etiquette, select Yes or No.",
    statements: [
      {
        text: "Test the software before the meeting start time",
        correct: "True",
      },
      {
        text: "Position yourself and the camera so the camera lens is at eye level",
        correct: "True",
      },
      {
        text: "Ensure that your microphone is always on so you can participate",
        correct: "False",
      },
      {
        text: "When it's your turn to speak, introduce yourself and look at the camera/onscreen image",
        correct: "True",
      },
    ],
  },
  {
    id: 23,
    type: "checkbox",
    question:
      "Question 23 of 80: You use a public computer at the library. Which two tasks should you complete before leaving to prevent unauthorized access? (Choose 2.)",
    options: [
      "A. Clear the browser's cache and cookies",
      "B. Clear the browser's history",
      "C. Quit the browser sessions in which you're logged on",
      "D. Log out of the email and bank websites",
    ],
    correct: [0, 3], // A, D
  },
  {
    id: 24,
    type: "single",
    question:
      "Question 24 of 80: You post an embarrassing photo of a friend on social media. How long will the information stay on the internet?",
    options: [
      "A. Forever, even after you delete it",
      "B. 7 years",
      "C. 24 hours",
      "D. Until your friend deletes it",
    ],
    correct: [0], // A
  },
  {
    id: 25,
    type: "true_false",
    question:
      "Question 25 of 80: For each statement about open source software, select True or False.",
    statements: [
      { text: "All free software is open source software", correct: "False" },
      {
        text: "Anyone can inspect, modify, and enhance the source code of open source software",
        correct: "True",
      },
      {
        text: "You must agree to an End User License Agreement before using open source software",
        correct: "False",
      },
    ],
  },
  {
    id: 26,
    type: "true_false",
    question:
      "Question 26 of 80: For each type of content use under Creative Commons licenses, select Yes or No.",
    statements: [
      {
        text: "Display the poster during a free movie night at your school",
        correct: "False",
      },
      {
        text: "Include the poem as part of a portfolio of your original work",
        correct: "True",
      },
      {
        text: "Perform the dramatic work for parents at a class talent show",
        correct: "True",
      },
      {
        text: "Display the image to other students as part of an in-class presentation",
        correct: "True",
      },
    ],
  },
  {
    id: 27,
    type: "matching",
    question:
      "Question 27 of 80: Select 3 output devices connected to a non-touchscreen computer.",
    items: [
      { term: "Monitor", def: "Display screen device" },
      { term: "Printer", def: "Paper printing device" },
      { term: "Headphones", def: "Audio output device" },
    ],
  },
  {
    id: 28,
    type: "single",
    question:
      "Question 28 of 80: Which practice follows effective file-naming conventions?",
    options: [
      "A. Using the default file name",
      "B. Using generic terms like 'document' or 'file'",
      "C. Using clear names that describe the content",
      "D. Including random letters and numbers for security",
    ],
    correct: [2], // C
  },
  {
    id: 29,
    type: "checkbox",
    question:
      "Question 29 of 80: Which two methods should you use to reduce eye strain while using a digital display? (Choose 2.)",
    options: [
      "A. Periodically look away from the screen and focus on a faraway object.",
      "B. Shine the primary room light source directly onto the screen.",
      "C. Tilt the screen directly toward your eyes.",
      "D. Adjust the screen resolution to set the text at a comfortable size.",
    ],
    correct: [0, 3], // A, D
  },
  {
    id: 30,
    type: "single",
    question:
      "Question 30 of 80: What is a constructive reason for choosing not to engage with online trolling?",
    options: [
      "A. It encourages the troll to continue their behavior",
      "B. It motivates others to participate in the negative conversation",
      "C. It helps avoid escalating the situation and reduces the troll's influence",
      "D. It gives the troll an opportunity to explain their behavior.",
    ],
    correct: [2], // C
  },
  {
    id: 31,
    type: "single",
    question: "Question 31 of 80: What is spyware?",
    options: [
      "A. A program designed to look harmless but allows unauthorized access",
      "B. A program that installs itself without your knowledge and tracks your online habits",
      "C. Content that tricks you into revealing passwords by pretending to be legitimate",
      "D. A program that can copy itself and spread to other computers",
    ],
    correct: [1], // B
  },
  {
    id: 32,
    type: "checkbox",
    question:
      "Question 32 of 80: Which two actions can you take to help maintain your digital privacy? (Choose 2.)",
    options: [
      "A. Configure your web browser settings to block cookies",
      "B. Store your private documents in a cloud storage location",
      "C. Use only your school email to send private information",
      "D. Turn off GPS on your devices when you are not actively using it",
    ],
    correct: [0, 3], // A, D
  },
  {
    id: 33,
    type: "true_false",
    question:
      "Question 33 of 80: For each statement about online messaging apps, select True or False.",
    statements: [
      {
        text: "People who use smart-messaging share the same beliefs whether next door or abroad",
        correct: "False",
      },
      {
        text: "Communication through emojis reproduces social constructs like stereotypes",
        correct: "True",
      },
      {
        text: "Emojis are a constantly changing concept that may not universally reflect sources",
        correct: "True",
      },
    ],
  },
  {
    id: 34,
    type: "matching",
    question:
      "Question 34 of 80: Move each data storage device to its definition.",
    items: [
      {
        term: "USB flash drive",
        def: "A compact external storage device using flash memory",
      },
      {
        term: "Portable hard drive",
        def: "An external storage device powered through USB",
      },
      {
        term: "Solid-state drive",
        def: "An internal storage device using flash memory without moving parts",
      },
      {
        term: "Hard disk drive",
        def: "An internal electromechanical device using rapidly rotating platters",
      },
    ],
  },
  {
    id: 35,
    type: "matching",
    question: "Question 35 of 80: Move each email field to its purpose.",
    items: [
      {
        term: "Bcc",
        def: "Copy people on a message without letting others see their addresses",
      },
      {
        term: "Cc",
        def: "Copy people on a message and let everyone see their addresses",
      },
      { term: "Forward", def: "Send a received message to a different person" },
      { term: "Reply", def: "Respond only to the sender" },
      { term: "Reply All", def: "Respond to sender and all other recipients" },
    ],
  },
  {
    id: 36,
    type: "checkbox",
    question:
      "Question 36 of 80: Which two options are benefits of digital collaboration? (Choose 2.)",
    options: [
      "A. Collaborators can more easily avoid distractions",
      "B. Ideas and feedback can be shared quickly",
      "C. Collaborators can work with others from any geographic location",
      "D. Confidential data is safer from theft",
    ],
    correct: [1, 2], // B, C
  },
  {
    id: 37,
    type: "matching",
    question: "Question 37 of 80: Match each USB cable type.",
    items: [
      { term: "USB-A", def: "Standard rectangular USB connector" },
      { term: "USB-C", def: "Reversible oval-shaped USB connector" },
      { term: "Lightning", def: "Apple proprietary thin connector" },
      { term: "Micro USB", def: "Small trapezoidal connector" },
    ],
  },
  {
    id: 38,
    type: "true_false",
    question:
      "Question 38 of 80: Select OS if managed by operating system or App if managed by an app.",
    statements: [
      { text: "Edits text files", correct: "False" }, // App
      { text: "Searches the internet", correct: "False" }, // App
      { text: "Allocates hardware resources", correct: "True" }, // OS
      { text: "Communicates with peripheral devices", correct: "True" }, // OS
    ],
  },
  {
    id: 39,
    type: "checkbox",
    question:
      "Question 39 of 80: Which three elements must you include in a citation that references a printed book? (Choose 3.)",
    options: [
      "A. Book title",
      "B. Publication date",
      "C. Access date",
      "D. Copyright status",
      "E. Trademark status",
      "F. Author name",
    ],
    correct: [0, 1, 5], // A, B, F
  },
  {
    id: 40,
    type: "true_false",
    question:
      "Question 40 of 80: Select YES if you must add a reference or NO if you do not.",
    statements: [
      { text: "You use an idea from a news article", correct: "True" },
      { text: "You write something new and original", correct: "False" },
      { text: "You pull a paragraph from a webpage", correct: "True" },
      {
        text: "You paraphrase content from a magazine article",
        correct: "True",
      },
    ],
  },
  {
    id: 41,
    question:
      "Which statement correctly describes the use of Creative Commons content in a project?",
    type: "single",
    options: [
      "A. All Creative Commons content is automatically owned by the government and cannot be used for commercial purposes.",
      "B. Creative Commons licenses restrict the use of educational content and do not allow for personal or commercial use.",
      "C. Creative Commons licenses allow you to use, share, and modify content as long as you follow the terms specified by the license.",
      "D. Creative Commons content can only be used if you pay a fee to the original creator for each use.",
    ],
    correct: [2],
  },
  {
    id: 42,
    question:
      "Juliana takes photos with her phone for the school yearbook. She takes more than 50 photographs each day. Juliana needs to use the quickest and most reliable method to back up the photos so she can delete them from her phone each day. What should Juliana do?",
    type: "single",
    options: [
      "A. Download the photos to a USB flash drive.",
      "B. Email the photos to her teacher.",
      "C. Sync her phone to cloud storage.",
      "D. Delete only the photos she doesn't want to use.",
    ],
    correct: [2],
  },
  {
    id: 43,
    question: "Which symptom is associated with prolonged computer use?",
    type: "single",
    options: [
      "A. Increased back pain",
      "B. Enhanced visual clarity",
      "C. Improved muscle tone",
      "D. Increased flexibility in joints",
    ],
    correct: [0],
  },
  {
    id: 44,
    question:
      "Which two technologies do websites use to track visitors' online browsing habits? (Choose 2)",
    type: "checkbox",
    options: [
      "A. GPS locations",
      "B. First-party cookies",
      "C. In private/incognito browsing",
      "D. Third-party cookies / VPN tunneling",
    ],
    correct: [1, 3],
  },
  {
    id: 45,
    question:
      "You are searching the web for information about how to grow your own vegetables. Determine which results are relevant to your search:",
    type: "true_false",
    statements: [
      {
        text: "A tabloid magazine article about celebrity gardens",
        correct: "False",
      },
      {
        text: "A how-to article published by a prestigious university",
        correct: "True",
      },
      { text: "An ad for a popular gardening blog", correct: "False" },
    ],
  },
  {
    id: 46,
    question: "Which backup method offers the best protection for your data?",
    type: "single",
    options: [
      "A. Sending files to others through email",
      "B. Deleting files you don't need anymore",
      "C. Keeping files only on your computer's hard drive",
      "D. Using both cloud storage and an external hard drive",
    ],
    correct: [3],
  },
  {
    id: 47,
    question:
      "For each statement about printing documents, select True or False:",
    type: "true_false",
    statements: [
      {
        text: "You can change document margins from the Print settings",
        correct: "True",
      },
      {
        text: "Duplex printing prints file content on both sides of the paper",
        correct: "True",
      },
      {
        text: "You can only change the paper size from the Page Setup options",
        correct: "False",
      },
      {
        text: "To preserve file formatting when electronically distributing a document, print the document to a PDF file",
        correct: "True",
      },
    ],
  },
  {
    id: 48,
    question: "Match each computer hardware element to its definition/image:",
    type: "matching",
    items: [
      { term: "CPU", def: "Central processing unit" },
      { term: "HDD", def: "Hard disk drive" },
      {
        term: "Motherboard",
        def: "Main circuit board connecting hardware elements",
      },
      { term: "SSD", def: "Solid-state drive" },
    ],
  },
  {
    id: 49,
    question:
      "You and a partner are collaborating to create a science report. You create a shared document and save it to the cloud to work on it at different times. What type of collaboration is this?",
    type: "single",
    options: [
      "A. Synchronous",
      "B. Offline",
      "C. Simultaneous",
      "D. Asynchronous",
    ],
    correct: [3],
  },
  {
    id: 50,
    question:
      "You need to ensure that each student can talk about the project without being interrupted by other students during a videoconference. What should each student do?",
    type: "single",
    options: [
      "A. Sign in early to verify that the audio and video technology works",
      "B. Mute their microphone until called upon",
      "C. Remain on camera throughout the conference",
      "D. Introduce themselves by name when they speak",
    ],
    correct: [1],
  },
  {
    id: 51,
    question:
      "You need to collaborate with your peers and share your class journal. Which digital platform is appropriate for this classroom activity?",
    type: "single",
    options: ["A. Google Docs", "B. Facebook", "C. Instagram", "D. Twitter"],
    correct: [0],
  },
  {
    id: 52,
    question: "Digital Privacy - Select True or False for each statement:",
    type: "true_false",
    statements: [
      {
        text: "Updating your browser every six months wipes your digital footprint clean",
        correct: "False",
      },
      {
        text: "Anonymous online comments you post cannot be traced back to you if you use a web filter",
        correct: "False",
      },
      {
        text: "Potential employers can find images and messages posted on social media by applicants under the age of 18",
        correct: "True",
      },
      {
        text: "Companies with which you share personal data in exchange for apps and services are not allowed to give the data to anyone else",
        correct: "False",
      },
    ],
  },
  {
    id: 53,
    question:
      "What is the safest way for Maddie to protect herself from online predators when posting information about her vacation activities?",
    type: "single",
    options: [
      "A. Checking in online when she goes places so her parents know where she is",
      "B. Posting her vacation plans before she leaves so her friends know she is out of town",
      "C. Setting her social media location map to 'public'",
      "D. Waiting until she returns home to post vacation photos",
    ],
    correct: [3],
  },
  {
    id: 54,
    question:
      "Which two connections can be used to connect a monitor to a computer? (Choose 2)",
    type: "checkbox",
    options: ["A. HDMI", "B. Ethernet", "C. USB-C", "D. PS/2"],
    correct: [0, 2],
  },
  {
    id: 55,
    question:
      "You see a post on social media that contains an article about a current event. Which factor is most important to evaluate its credibility?",
    type: "single",
    options: [
      "A. The number of pictures included in the article",
      "B. The number of likes and shares the article has received",
      "C. The length of the article and the details it covers",
      "D. The news outlet's reputation and trustworthiness",
    ],
    correct: [3],
  },
  {
    id: 56,
    question:
      "When assessing an online article's reliability, which is a critical step?",
    type: "single",
    options: [
      "A. Verifying that the article includes multiple images",
      "B. Counting the article's words to determine depth of content",
      "C. Reviewing the article's publication date and checking for recent updates",
      "D. Confirming the author's popularity on social media",
    ],
    correct: [2],
  },
  {
    id: 57,
    question:
      "Which three guidelines should you follow to ensure the security of your passwords? (Choose 3)",
    type: "checkbox",
    options: [
      "A. Use the longest password or passphrase permissible by each system",
      "B. Use passwords that are based on private personal information",
      "C. Use multi-factor authentication when available",
      "D. Use words that can be found in a dictionary",
      "E. Record them in a notebook you carry at all times",
      "F. Use a different password for each account",
    ],
    correct: [0, 2, 5],
  },
  {
    id: 58,
    question:
      "For each statement about Creative Commons, select True or False:",
    type: "true_false",
    statements: [
      {
        text: "Allows creators to grant licenses to only specific people",
        correct: "False",
      },
      {
        text: "Helps facilitate the sharing and discovery of creative works on the web",
        correct: "True",
      },
      {
        text: "Provides tools that allow creators to dedicate their works to the public domain",
        correct: "True",
      },
    ],
  },
  {
    id: 59,
    question: "Which option is the best way to create a secure password?",
    type: "single",
    options: [
      "A. Use your name and birthday",
      "B. Use your favorite movie title",
      "C. Use a mix of letters, numbers, and symbols",
      "D. Use something easy to remember, like '12345' or 'p@ssword'",
    ],
    correct: [2],
  },
  {
    id: 60,
    question: "Which statement about web-based applications is correct?",
    type: "single",
    options: [
      "A. Web applications process information locally on your computer",
      "B. The web version of a desktop application has all the same features as the desktop version",
      "C. Before you can use a web application, you must install it on your computer",
      "D. You must have an internet connection to use a web application",
    ],
    correct: [3],
  },
  {
    id: 61,
    question: "For each statement about copyright, select True or False:",
    type: "true_false",
    statements: [
      {
        text: "Work must be registered with the copyright office to be protected by copyright",
        correct: "False",
      },
      {
        text: "Copyright laws protect the right to reproduce the copyrighted work",
        correct: "True",
      },
      {
        text: "Copyright laws protect only works of art, such as paintings and sculptures",
        correct: "False",
      },
    ],
  },
  {
    id: 62,
    question:
      "Which information can you locate on a webpage by using the browser's Find feature?",
    type: "single",
    options: [
      "A. A list of secondary topics related to your primary research topic",
      "B. The number of times the article mentions a specific topic",
      "C. The answer to a specific question related to the article topic",
      "D. Related comments on social media sites",
    ],
    correct: [1],
  },
  {
    id: 63,
    question:
      "Identify web pages likely to contain accurate and unbiased information for research (Yes/No):",
    type: "true_false",
    statements: [
      { text: "The webpage has misspelled words", correct: "False" },
      { text: "The webpage text is written objectively", correct: "True" },
      { text: "The webpage includes a list of references", correct: "True" },
    ],
  },
  {
    id: 64,
    question:
      "Identify examples of good netiquette in an office work environment (Yes/No):",
    type: "true_false",
    statements: [
      {
        text: "Copy your coworkers on all email messages you send to keep them in the loop",
        correct: "False",
      },
      {
        text: "Share large files from a cloud storage location instead of attaching them to email messages",
        correct: "True",
      },
      {
        text: "Apply the same standards and values to online interactions that you do to face-to-face interactions",
        correct: "True",
      },
    ],
  },
  {
    id: 65,
    question:
      "You are making suggestions, corrections, and comments on a classmate's research paper. What process are you performing?",
    type: "single",
    options: [
      "A. Coauthoring",
      "B. Attributing",
      "C. Peer reviewing",
      "D. Fact checking",
    ],
    correct: [2],
  },
  {
    id: 66,
    question: "What is a benefit of 'in private' or 'incognito' browsing?",
    type: "single",
    options: [
      "A. Your web browser remembers the files you download",
      "B. Digital fingerprinting can't be used to track your browser activities",
      "C. Your web browser doesn't retain cookies",
      "D. Your web browser blocks advertisements",
    ],
    correct: [2],
  },
  {
    id: 67,
    question:
      "You need to add artwork to a presentation and do NOT have time to get permission. Can you legally use it without permission? (Yes/No):",
    type: "true_false",
    statements: [
      { text: "The artist is your friend", correct: "False" },
      { text: "The artwork is protected by copyright", correct: "False" },
      {
        text: "The copyright owner dedicated the artwork to the public domain",
        correct: "True",
      },
    ],
  },
  {
    id: 68,
    question:
      "For each statement about citation practices, select True or False:",
    type: "true_false",
    statements: [
      {
        text: "If you quote directly from a speech, you must cite the source",
        correct: "True",
      },
      {
        text: "If you summarize someone else's work, you must cite the source",
        correct: "True",
      },
      {
        text: "If you paraphrase someone else's work, you must cite the source",
        correct: "True",
      },
      {
        text: "You should place quotation marks around phrases that you quote from someone else's work",
        correct: "True",
      },
    ],
  },
  {
    id: 69,
    question:
      "Your name is Sam Grey. Which file name should you use to clearly identify the author, maintain readability, and ensure cross-platform compatibility?",
    type: "single",
    options: [
      "A. samgreyprojectoneversionthree04/15/2025.docx",
      "B. Sam Grey Project1-version3.docx",
      "C. SamGrey project#1>v3.docx",
      "D. SamGreyProject1v3.docx",
    ],
    correct: [3],
  },
  {
    id: 70,
    question:
      "Select Yes/No for physical health risks associated with prolonged computer use:",
    type: "true_false",
    statements: [
      { text: "Discomfort in the neck", correct: "True" },
      { text: "Elevated blood pressure", correct: "False" },
      { text: "Eye strain", correct: "True" },
      { text: "Frequent headaches", correct: "True" },
    ],
  },
  {
    id: 71,
    question:
      "Which two methods should you use to avoid computer-related injuries? (Choose 2)",
    type: "checkbox",
    options: [
      "A. Use a mouse with a switch to adjust the DPI when needed",
      "B. Upgrade to a high-end graphics card to reduce eye strain",
      "C. Use an ergonomic keyboard so your wrists are in a more natural position",
      "D. Take frequent short breaks during which you walk around",
    ],
    correct: [2, 3],
  },
  {
    id: 72,
    question:
      "Which hardware component does a desktop computer use for long-term data storage?",
    type: "single",
    options: [
      "A. Central processing unit (CPU)",
      "B. Motherboard",
      "C. USB flash drive",
      "D. Hard disk drive",
    ],
    correct: [3],
  },
  {
    id: 73,
    question: "Identify features that protect digital privacy (Yes/No):",
    type: "true_false",
    statements: [
      { text: "Disk defragmenter", correct: "False" },
      { text: "Password-management program", correct: "True" },
      { text: "Anti-tracking browser extension", correct: "True" },
    ],
  },
  {
    id: 74,
    question:
      "For each statement about differences between internet and intranet, select True or False:",
    type: "true_false",
    statements: [
      {
        text: "The internet is privately owned by a consortium of companies",
        correct: "False",
      },
      {
        text: "An intranet connection is more secure than an internet connection",
        correct: "True",
      },
      {
        text: "An intranet has an unlimited number of users and can be accessed by anyone",
        correct: "False",
      },
    ],
  },
  {
    id: 75,
    question:
      "For each statement about creating basic presentations, select True or False:",
    type: "true_false",
    statements: [
      {
        text: "You should minimize text content in presentations",
        correct: "True",
      },
      {
        text: "You can only create Microsoft PowerPoint presentations on Windows computers",
        correct: "False",
      },
      {
        text: "You can access Apple Keynote presentations from Windows computers through iCloud",
        correct: "True",
      },
      {
        text: "You should maintain a low contrast between the text and background colors of presentations",
        correct: "False",
      },
    ],
  },
  {
    id: 76,
    question:
      "For each statement about culture and communication, select True or False:",
    type: "true_false",
    statements: [
      {
        text: "People with similar heritages have the same beliefs and priorities",
        correct: "False",
      },
      {
        text: "Respectful language conveys prejudices such as stereotypes, expectations and limitations",
        correct: "False",
      },
      {
        text: "Culture is a constantly changing concept that may not completely reflect someone's identity",
        correct: "True",
      },
    ],
  },
  {
    id: 77,
    question:
      "For each item, select True if it is a valid Google search filter option, and False if it is not:",
    type: "true_false",
    statements: [
      { text: "Language", correct: "True" },
      { text: "File type", correct: "True" },
      { text: "Color", correct: "False" },
      { text: "Dates", correct: "True" },
    ],
  },
  {
    id: 78,
    question:
      "For which two reasons should you reference your source material in a research paper? (Choose 2)",
    type: "checkbox",
    options: [
      "A. It allows readers to find the original information source",
      "B. It establishes the research paper as your original work",
      "C. It gives credit to the people who did the research you're referencing",
      "D. It provides financial payment to the people who performed the research",
    ],
    correct: [0, 2],
  },
  {
    id: 79,
    question: "What is a computer virus?",
    type: "single",
    options: [
      "A. A program that is designed to look harmless but allows unauthorized access",
      "B. Content that tricks you into revealing account codes and passwords",
      "C. A program that installs itself without knowledge and tracks usage",
      "D. A program that can copy itself and spread to other computers",
    ],
    correct: [3],
  },
  {
    id: 80,
    question: "Which practice helps protect your computer and personal data?",
    type: "single",
    options: [
      "A. Sharing your password with trusted friends",
      "B. Installing and updating antivirus software regularly",
      "C. Ignoring software update notifications",
      "D. Downloading files from unknown websites",
    ],
    correct: [1],
  },
  {
    id: 81,
    question: "What is the main contributor to your digital identity?",
    type: "single",
    options: [
      "A. Data stored on your computer that allows you to log in to a secure website through a secure account",
      "B. Documents stored on your computer",
      "C. For each site or service you use, your username and password",
      "D. The information you post on social networking sites, blogs, and forums",
    ],
    answer: "D",

  },
  {
    id: 82,
    question:
      "For each statement, select Yes if it is a warning that an email is a phishing message, or No if it is not.",
    statements: [
      { text: "The message includes a threat", answer: "Yes" },
      { text: "The message uses a generic greeting", answer: "Yes" },
      { text: "The message requests your private information", answer: "Yes" },
    ],
    type: "true_false",
  },
  {
    id: 83,
    question:
      "You and a friend are collaborating on a web comic. Move each term from the list on the left to its activity on the right.",
    items: [
      {
        activity:
          "You and your friend conduct a video chat to brainstorm ideas for the story.",
        term: "Synchronous Collaboration",
      },
      {
        activity:
          "On your own, you write the story, while your friend draws the artwork. While you work, you send emails with questions and updates",
        term: "Asynchronous Collaboration",
      },
      {
        activity:
          "You and your friend both post the finished comic to your social media accounts, and tag each other in the post",
        term: "Coauthoring",
      },
      {
        activity:
          "Enables machines to process and comprehend text or speech, helping communication between humans and computers in a more instinctive way.",
        term: "Natural Language Processing",
      },
    ],
    type: "matching",
  },
  {
    id: 84,
    question:
      "You are writing a research paper. You need to add references to your work. For each scenario, select Yes if you must add a reference or No if you do not.",
    statements: [
      { text: "You use an idea from a news article", answer: "Yes" },
      { text: "You write something new and original", answer: "No" },
      { text: "You copy a paragraph from a webpage", answer: "Yes" },
      { text: "You paraphrase content from a magazine article", answer: "Yes" },
    ],
    type: "true_false",
  },
  {
    id: 85,
    question:
      "For each statement about types of social media activity, select Yes if it will likely be allowed on most social media platforms or No if it likely will not be allowed.",
    statements: [
      { text: "Impersonate a real person", answer: "No" },
      { text: "Post negative reviews of products or services", answer: "Yes" },
      {
        text: "Post original content that you created yourself",
        answer: "Yes",
      },
      {
        text: "Share someone else's content that is their intellectual property",
        answer: "No",
      },
    ],
    type: "true_false",
  },
  {
    id: 86,
    question: "Evaluate the image below and identify each connection type.",
    items: [
      {
        activity:
        "The right (blue) cable",
        term: "Micro USB connector",
      },
      {
        activity:
        "The middle (black) cable",
        term: "USB-C connector",
      },
      {
        activity:
        "The left (white) cable",
        term: "Lightning connector",
      },

    ],

    type: "matching",
  },
  {
    id: 87,
    question: "What distinguishes generative AI from chatbots?",
    options: [
      "A. Generative AI and chatbots are terms used interchangeably to refer to the same technology.",
      "B. Chatbots are designed for creating new content, while generative AI specializes in text-based interactions.",
      "C. Both generative AI and chatbots excel at simulating conversations, but generative AI is restricted to pre-defined responses.",
      "D. Generative AI focuses on generating creative content, while chatbots simulate human-like conversations.",
    ],
    answer: "D",
    type: "single",
  },
  {
    id: 88,
    question:
      "Which three devices provide input when connected to a non-touchscreen computer? (Choose 3.)",
    options: ["Keyboard", "Mouse", "Headset (with microphone)"],
    answer: ["Keyboard", "Mouse", "Headset (with microphone)"],
    type: "multiple_choice",
  },
  {
    id: 89,
    question:
      "What are three key elements of an effective Acceptable Use Policy? (Choose 3.)",
    options: [
      "A. A bibliography",
      "B. A license agreement",
      "C. A copyright and trademark statement",
      "D. A policy statement",
      "E. A definition section",
      "F. A violations or sanctions section",
    ],
    answer: ["D", "E", "F"],
    type: "multiple_choice",
  },
  {
    id: 90,
    question:
      "You are working on a research project and need to verify that an information source is in the public domain. For each statement, select True if it is a reason a copyrighted work may become part of the public domain and False if it is not.",
    statements: [
      { text: "The copyright has expired", answer: "True" },
      {
        text: "The copyright owner did not follow the copyright renewal process",
        answer: "True",
      },
      {
        text: "The copyright owner has chosen to place the work in the public domain",
        answer: "True",
      },
    ],
    type: "true_false",
  },
  {
    id: 91,
    question: "Move each collaboration term to the correct description.",
    items: [
      {
        description: "Proofreading a Google Docs document for a classmate",
        term: "Editing",
      },
      {
        description:
          "Creating five slides for a group PowerPoint presentation that is saved on OneDrive",
        term: "Coauthoring",
      },
      {
        description:
          "Using the Spelling & Grammar tool to correct errors in a classmate's Word Online document",
        term: "Editing",
      },
      {
        description:
          "Taking photos and inserting them into a Google Slides presentation created by your classmates",
        term: "Coauthoring",
      },
    ],
    type: "matching",
  },
  {
    id: 92,
    question:
      "Ava reshared Mia's post on social media, and now more people can see it. Which action would help protect Mia's personal data?",
    options: [
      "A. Turning on privacy settings to control who can see your information",
      "B. Making your profile public so everyone can see your posts.",
      "C. Sharing posts with friends only, trusting they will keep your information private.",
      "D. Sharing your phone number or address in your profile bio to stay connected.",
    ],
    answer: "A",
    type: "single",
  },
  {
    id: 93,
    question: "Move each type of storage drive to its description.",
    items: [
      {
        description: "Is small enough to carry on a keychain",
        term: "Flash drive",
      },
      {
        description:
          "Can be installed permanently in a computer and does not use moving parts",
        term: "Solid state drive (SSD)",
      },
      {
        description: "Uses a magnetic disc to read and write data",
        term: "Hard disc drive (HDD)",
      },
      {
        description:
          "Can be accessed on any device with an internet connection",
        term: "Cloud drive",
      },
    ],
    type: "matching",
  },
  {
    id: 94,
    question: "Move each concept to its correct description.",
    items: [
      {
        description:
          "A computer program that simulates conversation with human users",
        term: "Chatbot",
      },
      {
        description:
          "A type of machine learning that uses artificial neural networks to learn from data",
        term: "Deep Learning",
      },
      {
        description:
          "A type of artificial intelligence that is used to create new data, such as text, images, or music",
        term: "Generative AI",
      },
      {
        description:
          "A set of defined rules that allow different software applications to communicate with each other",
        term: "API",
      },
    ],
    type: "matching",
  },
  {
    id: 95,
    question: "Move the appropriate images to the correct orientations.",
    items: [
      {
        description:
          "Musiqa notalari tushirilgan eski qog'oz rasmi (eni balandligidan katta gorizontal ko'rinish)",
        term: "Landscape",
      },
      {
        description:
          "Yonlari kuygan eski qog'oz rasmi (balandligi enidan katta vertikal ko'rinish)",
        term: "Portrait",
      },
      {
        description: "Gullik rasm (kvadrat shakl)",
        term: "Neither (Kvadrat format)",
      },
    ],
    type: "matching",
  },
  {
    id: 96,
    question:
      "You plan to purchase a portable computing device. The device must be able to run on battery power and must have a built-in physical keyboard. (Choose 2.)",
    options: [
      "A. Windows All-in-One computer",
      "B. Mac desktop computer",
      "C. Chromebook",
      "D. Windows laptop computer",
      "E. Android tablet",
      "F. Android smartphone",
    ],
    answer: ["C", "D"],
    type: "multiple_choice",
  },
  {
    id: 97,
    question:
      "The information saved about you online is known as your digital footprint. For each statement, select True or False.",
    statements: [
      {
        text: "Updating your browser every six months wipes your digital footprint clean",
        answer: "False",
      },
      {
        text: "Anonymous online comments you post cannot be traced back to you if you use a web filter",
        answer: "False",
      },
      {
        text: "Potential employers can find images and messages posted on social media by applicants under the age of 18",
        answer: "True",
      },
    ],
    type: "true_false",
  },
  {
    id: 98,
    question:
      "For each statement about images that are protected by Creative Commons licenses and not in the public domain, select True or False.",
    statements: [
      { text: "You can use the image for free", answer: "True" },
      { text: "You can use the image unconditionally", answer: "False" },
      {
        text: "If you use the image, you must cite its source",
        answer: "True",
      },
    ],
    type: "true_false",
  },
  {
    id: 99,
    question:
      "A boy in your art class posts a photo of a pig with your head pasted on it on a social media site. What should you do?",
    options: [
      "A. Respond with a neutral comment just so he knows you saw it.",
      "B. Tell the boy you're curious and want to understand why he posted the photo.",
      "C. Assume it's about your weight and go on a diet.",
      "D. Post a revenge photo with his face on bacon.",
    ],
    answer: "B",
    type: "single",
  },
  {
    id: 100,
    question:
      "You are gathering information online for a research paper. Which three pieces of information about each webpage should you save? (Choose 3.)",
    options: [
      "A. Purpose of the information",
      "B. Page title",
      "C. URL",
      "D. Author, if provided",
      "E. Page content sources",
      "F. Comments that support the veracity of the page content",
    ],
    answer: ["B", "C", "D"],
    type: "multiple_choice",
  },
  {
    id: 101,
    question:
      "You need to create an exact copy of your Windows computer system to ensure that you can restore the computer, applications, and files to the current state in the event of a catastrophic system crash. What should you do?",
    options: [
      "A. Create a system repair disc.",
      "B. Create a system image.",
      "C. Set up Windows Backup.",
      "D. Turn on File History.",
    ],
    answer: "B",
    type: "single",
  },
  {
    id: 102,
    question:
      "You are working on a group project and one group member is making changes to the shared project without consulting the rest of the group. What should you do?",
    options: [
      "A. Take away the person's editing access to the document.",
      "B. Restore the document by removing their changes.",
      "C. Ignore the changes and keep working on your part.",
      "D. Have a group discussion about editing the document.",
    ],
    answer: "D",
    type: "single",
  },
  {
    id: 103,
    question:
      "You need to identify consistent file-naming conventions for a shared file management system that supports multiple software applications and operating systems. For each statement, select Yes if it supports the goal and No if it does not.",
    statements: [
      { text: "Insert spaces between words", answer: "No" },
      { text: "Use long, descriptive file names", answer: "Yes" },
      {
        text: "For file name series that include dates, use the format MMDDYY",
        answer: "No",
      },
      {
        text: 'Do NOT use special characters (!@#$%*()\'"":;?, []{})',
        answer: "Yes",
      },
    ],
    type: "true_false",
  },
  {
    id: 104,
    question:
      "You need to identify the standard features of the taskbar in a Windows operating system. For each statement, select Yes if you can perform the action from the taskbar or No if you can't.",
    statements: [
      { text: "Start the Task Manager", answer: "Yes" },
      { text: "Adjust the audio output volume", answer: "Yes" },
      { text: "Display network connection settings", answer: "Yes" },
      {
        text: "Minimize all open programs to display the desktop",
        answer: "Yes",
      },
    ],
    type: "true_false",
  },
  {
    id: 105,
    question:
      "Which two methods do websites use to track visitors' online browsing habits? (Choose 2.)",
    options: [
      "A. Facial recognition",
      "B. Third-party cookies",
      "C. VPN tunneling",
      "D. First-party cookies",
    ],
    answer: ["B", "D"],
    type: "multiple_choice",
  },
  {
    id: 106,
    question:
      "You are downloading an exe file to use on your device. Which operating system does this file work in?",
    options: ["A. Linux", "B. MacOS", "C. Windows", "D. iOS"],
    answer: "C",
    type: "single",
  },
  {
    id: 107,
    question:
      "Which two methods should you use to reduce eye strain while using a digital display? (Choose 2.)",
    options: [
      "A. Make sure the primary light source is not shining directly into your eyes",
      "B. Position the screen slightly above eye level",
      "C. Make sure the screen is not too close to your eyes",
      "D. Shine the primary light source directly onto the screen",
    ],
    answer: ["A", "C"],
    type: "multiple_choice",
  },
  {
    id: 108,
    question:
      "For each statement about the differences between wired and wireless networking, select True or False.",
    statements: [
      {
        text: "An encrypted Wi-Fi connection is more secure than an Ethernet connection",
        answer: "False",
      },
      {
        text: "Wi-Fi connections typically have fewer data transmission delays than Ethernet connections.",
        answer: "False",
      },
      {
        text: "An Ethernet connection typically provides faster network connection speeds than a Wi-Fi connection",
        answer: "True",
      },
    ],
    type: "true_false",
  },
  {
    id: 109,
    question:
      "You use a local installation of Microsoft Word. Yesterday, you started writing a letter to a friend, and saved the file to your Documents folder. Today, you open the file and finish writing the letter. You need to save the changes you made to the file today. You select File and then Save. What is the result?",
    options: [
      "A. Word overwrites the previously saved version of the file.",
      "B. Word prompts you to choose a new location to save the file.",
      "C. Word saves a new copy of the file, resulting in two separate files.",
      "D. Word prompts you to enter a new file name.",
    ],
    answer: "A",
    type: "single",
  },
  {
    id: 110,
    question:
      "You write a research paper for school. In your paper, you paraphrase information from an article you read on the internet. You do not cite the source of the information in your bibliography. What is this an example of?",
    options: [
      "A. Attribution",
      "B. Fair use",
      "C. Creative Commons use",
      "D. Plagiarism",
    ],
    answer: "D",
    type: "single",
  },
  {
    id: 111,
    question:
      "You are having problems with your Windows laptop computer. Before contacting support, you must gather information about your device, its processor, RAM amount, and the version of OS. On a Windows computer, where can you find the device and system information?",
    options: [
      "A. File > Info",
      "B. Settings > About",
      "C. Settings > System Info",
      "D. Desktop > System Info",
    ],
    answer: "B",
    type: "single",
  },
  {
    id: 112,
    question:
      "Your teacher has cautioned you about protecting your digital identity. Which three activities help define your digital identity? (Choose three)",
    options: [
      "A. Media posted by other people that you share with your friends.",
      "B. Your profile.",
      "C. Using Twitter and Snapchat instead of Facebook.",
      "D. Comments you post or tweet.",
      "E. Only posting from a phone, never from a computer.",
      "F. Having multiple email accounts.",
    ],
    answer: ["A", "B", "D"],
    type: "multiple_choice",
  },
  {
    id: 113,
    question:
      "You're having difficulty sending and receiving information. How can you identify whether your device is connected to the Internet?",
    options: [
      "A. Try saving a file.",
      "B. Download a Speedtest.",
      "C. Try sending a text.",
      "D. Open a browser.",
    ],
    answer: "D",
    type: "single",
  },
  {
    id: 114,
    question: "Which of the following is an example of cyberbullying?",
    options: [
      "A. Stealing someone's password and pretending to be that person while tweeting or posting things online.",
      "B. Posting songs of your favorite artists online and charging your friends money to download them.",
      "C. Helping a friend by posting researched articles about bullying to their blog.",
      "D. Writing an opinion article about the unfair requirements of cheerleader tryouts and submitting it to your school news website.",
    ],
    answer: "A",
    type: "single",
  },
];
