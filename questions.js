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
    type: "single",
    question:
      "Question 41 of 80: What is the main purpose of a firewall in a computer network?",
    options: [
      "A. To accelerate network data transfer speeds",
      "B. To monitor and control incoming and outgoing network traffic based on security rules",
      "C. To automatically back up personal files to the cloud",
      "D. To clean dust from hardware components",
    ],
    correct: [1], // B
  },
  {
    id: 42,
    type: "true_false",
    question:
      "Question 42 of 80: For each statement about digital citizenship, select True or False.",
    statements: [
      {
        text: "Digital citizens engage in respectful online behavior.",
        correct: "True",
      },
      {
        text: "Digital citizenship only applies when using school-owned devices.",
        correct: "False",
      },
      {
        text: "Protecting personal data is an important aspect of digital citizenship.",
        correct: "True",
      },
    ],
  },
  {
    id: 43,
    type: "checkbox",
    question:
      "Question 43 of 80: Which two factors should you consider when choosing a strong password? (Choose 2.)",
    options: [
      "A. Including your date of birth so it is easy to remember",
      "B. Using a combination of uppercase letters, lowercase letters, numbers, and symbols",
      "C. Making it at least 12 characters long",
      "D. Using the word 'password' followed by a single digit",
    ],
    correct: [1, 2], // B, C
  },
  {
    id: 44,
    type: "matching",
    question:
      "Question 44 of 80: Match each malware type to its correct description.",
    items: [
      {
        term: "Ransomware",
        def: "Encrypts files and demands payment to restore access",
      },
      {
        term: "Trojan",
        def: "Disguises itself as legitimate software to deceive users",
      },
      {
        term: "Worm",
        def: "Replicates itself to spread to other devices without user intervention",
      },
      {
        term: "Keylogger",
        def: "Records keystrokes to steal sensitive credentials",
      },
    ],
  },
  {
    id: 45,
    type: "single",
    question:
      "Question 45 of 80: What type of network connection covers a large geographical area such as a city, country, or the globe?",
    options: [
      "A. LAN (Local Area Network)",
      "B. WAN (Wide Area Network)",
      "C. PAN (Personal Area Network)",
      "D. WLAN (Wireless Local Area Network)",
    ],
    correct: [1], // B
  },
  {
    id: 46,
    type: "true_false",
    question:
      "Question 46 of 80: For each statement about cloud storage, select True or False.",
    statements: [
      {
        text: "Cloud storage requires an active internet connection to sync changes.",
        correct: "True",
      },
      {
        text: "Files stored in the cloud cannot be shared with other users.",
        correct: "False",
      },
      {
        text: "Cloud storage provides access to files from multiple devices.",
        correct: "True",
      },
    ],
  },
  {
    id: 47,
    type: "checkbox",
    question:
      "Question 47 of 80: Which two practices help prevent phishing attacks? (Choose 2.)",
    options: [
      "A. Clicking links in unexpected emails to verify sender identity",
      "B. Checking the sender's email address domain for subtle misspellings",
      "C. Verifying urgent requests through a trusted alternative contact channel",
      "D. Disabling two-factor authentication on online accounts",
    ],
    correct: [1, 2], // B, C
  },
  {
    id: 48,
    type: "single",
    question:
      "Question 48 of 80: What is the main function of an operating system (OS)?",
    options: [
      "A. To create vector graphic illustrations",
      "B. To manage hardware resources and provide a user interface",
      "C. To host websites on the World Wide Web",
      "D. To scan paper documents into digital format",
    ],
    correct: [1], // B
  },
  {
    id: 49,
    type: "true_false",
    question:
      "Question 49 of 80: Select True or False for each statement about public Wi-Fi networks.",
    statements: [
      {
        text: "Public Wi-Fi networks without password protection are generally unencrypted.",
        correct: "True",
      },
      {
        text: "It is safe to perform online banking on public Wi-Fi without a VPN.",
        correct: "False",
      },
      {
        text: "Using a VPN encrypts your traffic on public Wi-Fi.",
        correct: "True",
      },
    ],
  },
  {
    id: 50,
    type: "matching",
    question:
      "Question 50 of 80: Match the cloud computing service type with its definition.",
    items: [
      {
        term: "IaaS",
        def: "Provides virtualized computing resources over the internet (e.g., servers, storage)",
      },
      {
        term: "PaaS",
        def: "Provides a framework for developers to build and deploy applications",
      },
      {
        term: "SaaS",
        def: "Delivers software applications over the internet on a subscription basis",
      },
    ],
  },
  {
    id: 51,
    type: "single",
    question:
      "Question 51 of 80: Which web browser protocol indicates that communication with a website is encrypted?",
    options: ["A. HTTP", "B. FTP", "C. HTTPS", "D. SMTP"],
    correct: [2], // C
  },
  {
    id: 52,
    type: "checkbox",
    question:
      "Question 52 of 80: Which two items are considered input devices for a desktop computer? (Choose 2.)",
    options: ["A. Keyboard", "B. Monitor", "C. Speaker", "D. Optical Mouse"],
    correct: [0, 3], // A, D
  },
  {
    id: 53,
    type: "true_false",
    question:
      "Question 53 of 80: For each statement about Two-Factor Authentication (2FA), select True or False.",
    statements: [
      {
        text: "2FA adds an extra layer of security beyond just a password.",
        correct: "True",
      },
      {
        text: "2FA completely removes the need for a strong password.",
        correct: "False",
      },
      {
        text: "An authenticator app code is an example of a second factor.",
        correct: "True",
      },
    ],
  },
  {
    id: 54,
    type: "single",
    question:
      "Question 54 of 80: Which shortcut key combination is used to paste copied text in Windows?",
    options: ["A. Ctrl + C", "B. Ctrl + X", "C. Ctrl + V", "D. Ctrl + Z"],
    correct: [2], // C
  },
  {
    id: 55,
    type: "checkbox",
    question:
      "Question 55 of 80: Which two options are benefits of using spreadsheets (e.g., Microsoft Excel, Google Sheets)? (Choose 2.)",
    options: [
      "A. Automated calculation of mathematical formulas",
      "B. High-resolution 3D video editing capability",
      "C. Data visualization through charts and graphs",
      "D. Automatic web domain registration",
    ],
    correct: [0, 2], // A, C
  },
  {
    id: 56,
    type: "matching",
    question:
      "Question 56 of 80: Match the file extension with its common file type.",
    items: [
      { term: ".pdf", def: "Portable Document Format file" },
      { term: ".png", def: "Raster image file with transparency support" },
      { term: ".mp4", def: "Digital video container format" },
      { term: ".docx", def: "Microsoft Word document" },
    ],
  },
  {
    id: 57,
    type: "true_false",
    question:
      "Question 57 of 80: Select Yes or No for each statement regarding cyberbullying.",
    statements: [
      {
        text: "Cyberbullying can occur via text messages, social media, or gaming apps.",
        correct: "True",
      },
      {
        text: "Ignoring cyberbullying always stops the perpetrator permanently.",
        correct: "False",
      },
      {
        text: "Saving evidence (screenshots) is recommended when reporting cyberbullying.",
        correct: "True",
      },
    ],
  },
  {
    id: 58,
    type: "single",
    question:
      "Question 58 of 80: What does the term 'Bandwidth' refer to in computer networking?",
    options: [
      "A. The physical length of a network cable",
      "B. The maximum rate of data transfer across a given path in a given time",
      "C. The total storage capacity of a hard drive",
      "D. The speed of the CPU processor in GHz",
    ],
    correct: [1], // B
  },
  {
    id: 59,
    type: "checkbox",
    question:
      "Question 59 of 80: Which two activities require an internet connection? (Choose 2.)",
    options: [
      "A. Streaming a live webinar",
      "B. Editing a local text document in Notepad",
      "C. Sending an email via webmail",
      "D. Calculating basic formulas in an offline calculator app",
    ],
    correct: [0, 2], // A, C
  },
  {
    id: 60,
    type: "true_false",
    question:
      "Question 60 of 80: For each statement about software updates, select True or False.",
    statements: [
      {
        text: "Software updates often contain security patches that protect against vulnerabilities.",
        correct: "True",
      },
      {
        text: "Updates should never be installed because they slow down devices.",
        correct: "False",
      },
      {
        text: "Enabling automatic updates helps keep your system secure.",
        correct: "True",
      },
    ],
  },
  {
    id: 61,
    type: "single",
    question: "Question 61 of 80: What is the main purpose of an IP address?",
    options: [
      "A. To identify a physical serial number on a motherboard",
      "B. To uniquely identify a device on a local network or the internet",
      "C. To store digital certificates securely",
      "D. To measure battery efficiency of portable hardware",
    ],
    correct: [1], // B
  },
  {
    id: 62,
    type: "matching",
    question:
      "Question 62 of 80: Match each network device to its primary function.",
    items: [
      {
        term: "Router",
        def: "Forwards data packets between different computer networks",
      },
      {
        term: "Switch",
        def: "Connects devices together within a single Local Area Network (LAN)",
      },
      {
        term: "Modem",
        def: "Modulates/demodulates signals to connect to an Internet Service Provider (ISP)",
      },
    ],
  },
  {
    id: 63,
    type: "checkbox",
    question:
      "Question 63 of 80: Which two methods help protect your mobile device from unauthorized physical access? (Choose 2.)",
    options: [
      "A. Setting up a PIN or passcode lock",
      "B. Enabling biometric authentication (like fingerprint or face ID)",
      "C. Turning off cellular data",
      "D. Setting display brightness to maximum",
    ],
    correct: [0, 1], // A, B
  },
  {
    id: 64,
    type: "true_false",
    question:
      "Question 64 of 80: For each statement about copyright laws, select True or False.",
    statements: [
      {
        text: "Copyright protection is automatic upon creation of an original work in tangible form.",
        correct: "True",
      },
      {
        text: "You can freely sell copyrighted music as long as you bought a personal copy.",
        correct: "False",
      },
      {
        text: "Fair Use allows limited use of copyrighted material without permission for purposes like criticism or teaching.",
        correct: "True",
      },
    ],
  },
  {
    id: 65,
    type: "single",
    question:
      "Question 65 of 80: Which software application type is best suited for building complex relational databases?",
    options: [
      "A. Microsoft Access",
      "B. Microsoft Paint",
      "C. Microsoft Word",
      "D. Microsoft Notepad",
    ],
    correct: [0], // A
  },
  {
    id: 66,
    type: "checkbox",
    question:
      "Question 66 of 80: Which two factors are common indicators of a suspicious email? (Choose 2.)",
    options: [
      "A. Generic greetings like 'Dear Customer'",
      "B. Urgent threats demanding immediate action or payment",
      "C. Emails originating from official domain names matching company websites",
      "D. Emails containing proper grammar and expected attachments",
    ],
    correct: [0, 1], // A, B
  },
  {
    id: 67,
    type: "true_false",
    question:
      "Question 67 of 80: Select Yes or No for each practice related to digital health and ergonomics.",
    statements: [
      {
        text: "Positioning the monitor at eye level reduces neck strain.",
        correct: "True",
      },
      {
        text: "Sitting in an unsupportive chair with poor posture improves concentration.",
        correct: "False",
      },
      {
        text: "Taking regular short breaks reduces eye strain and physical fatigue.",
        correct: "True",
      },
    ],
  },
  {
    id: 68,
    type: "matching",
    question:
      "Question 68 of 80: Match the social media action with its appropriate privacy consideration.",
    items: [
      {
        term: "Posting real-time location tags",
        def: "Can reveal when your home is empty or track your movements",
      },
      {
        term: "Setting profile to Public",
        def: "Allows anyone on the internet to view shared posts and media",
      },
      {
        term: "Tagging friends in photos",
        def: "Exposes others' personal information without explicit consent",
      },
    ],
  },
  {
    id: 69,
    type: "single",
    question:
      "Question 69 of 80: What is the primary role of a Central Processing Unit (CPU)?",
    options: [
      "A. To display visuals on screen",
      "B. To execute instructions and perform calculations",
      "C. To supply electrical power to components",
      "D. To store user files permanently",
    ],
    correct: [1], // B
  },
  {
    id: 70,
    type: "checkbox",
    question:
      "Question 70 of 80: Which two benefits are associated with automated cloud backups? (Choose 2.)",
    options: [
      "A. Protection of data against local hardware failure",
      "B. Automatic hardware upgrades for physical desktop PCs",
      "C. Ability to recover lost or corrupted files from remote servers",
      "D. Elimination of the need for an internet connection",
    ],
    correct: [0, 2], // A, C
  },
  {
    id: 71,
    type: "true_false",
    question:
      "Question 71 of 80: Select True or False for each statement about web cookies.",
    statements: [
      {
        text: "Cookies are small text files stored by websites on your computer.",
        correct: "True",
      },
      {
        text: "All web cookies are dangerous viruses that destroy computer files.",
        correct: "False",
      },
      {
        text: "Cookies can store session information and user preferences.",
        correct: "True",
      },
    ],
  },
  {
    id: 72,
    type: "single",
    question:
      "Question 72 of 80: What type of software license allows users to try software for free for a limited trial period before purchasing?",
    options: ["A. Shareware", "B. Freeware", "C. Open Source", "D. Commercial"],
    correct: [0], // A
  },
  {
    id: 73,
    type: "checkbox",
    question:
      "Question 73 of 80: Which two tools are typically found in word processing software? (Choose 2.)",
    options: [
      "A. Word count tracker",
      "B. Network packet sniffer",
      "C. Spell check and grammar repair",
      "D. SQL database server setup",
    ],
    correct: [0, 2], // A, C
  },
  {
    id: 74,
    type: "matching",
    question: "Question 74 of 80: Match each web term with its definition.",
    items: [
      {
        term: "URL",
        def: "The web address used to locate a specific resource on the internet",
      },
      {
        term: "Domain Name",
        def: "The human-readable text name mapped to an IP address (e.g., google.com)",
      },
      {
        term: "Hyperlink",
        def: "An clickable element that navigates to another page or section",
      },
    ],
  },
  {
    id: 75,
    type: "true_false",
    question:
      "Question 75 of 80: For each statement about digital footprints, select True or False.",
    statements: [
      {
        text: "Your active digital footprint includes posts, comments, and photos you share intentionally.",
        correct: "True",
      },
      {
        text: "A passive digital footprint is created without direct user intent, such as IP tracking.",
        correct: "True",
      },
      {
        text: "Once digital information is uploaded, it is easily and permanently erased across all servers.",
        correct: "False",
      },
    ],
  },
  {
    id: 76,
    type: "single",
    question:
      "Question 76 of 80: Which technology utilizes short-range radio signals to connect devices like headphones and smartphones wirelessly?",
    options: ["A. Bluetooth", "B. Ethernet", "C. Satellite", "D. Fiber Optic"],
    correct: [0], // A
  },
  {
    id: 77,
    type: "checkbox",
    question:
      "Question 77 of 80: Which two procedures reduce energy consumption for desktop and laptop computers? (Choose 2.)",
    options: [
      "A. Enabling Sleep mode when idle",
      "B. Setting display screen timeout to short intervals",
      "C. Leaving screen brightness set to maximum permanently",
      "D. Running complex background processes constantly",
    ],
    correct: [0, 1], // A, B
  },
  {
    id: 78,
    type: "true_false",
    question:
      "Question 78 of 80: Select Yes or No for each rule of proper netiquette.",
    statements: [
      {
        text: "Typing messages in ALL CAPS is considered shouting and should be avoided.",
        correct: "True",
      },
      {
        text: "Replying instantly in anger without reviewing your text is recommended.",
        correct: "False",
      },
      {
        text: "Respecting others' privacy when forwarding emails or media.",
        correct: "True",
      },
    ],
  },
  {
    id: 79,
    type: "matching",
    question:
      "Question 79 of 80: Match the software category to its intended function.",
    items: [
      {
        term: "Antivirus",
        def: "Detects, prevents, and removes malicious software",
      },
      {
        term: "Web Browser",
        def: "Allows users to access and view webpages on the internet",
      },
      { term: "Media Player", def: "Plays audio and video multimedia files" },
    ],
  },
  {
    id: 80,
    type: "single",
    question:
      "Question 80 of 80: What is the primary advantage of storing files on a Solid-State Drive (SSD) compared to a traditional Hard Disk Drive (HDD)?",
    options: [
      "A. Faster read and write data transfer speeds",
      "B. Lower total cost per gigabyte on large mechanical drives",
      "C. Complete immunity to malware infections",
      "D. Higher capacity for physical platter spinning",
    ],
    correct: [0], // A
  },
  {
    id: 81,
    type: "single",
    question:
      "Question 81 of 114: Which option best describes the purpose of a Domain Name System (DNS)?",
    options: [
      "A. Translates human-readable domain names into IP addresses",
      "B. Secures web servers against unauthorized database modifications",
      "C. Increases connection speed across local area network cables",
      "D. Compresses image files before sending via email attachment",
    ],
    correct: [0], // A
  },
  {
    id: 82,
    type: "true_false",
    question:
      "Question 82 of 114: For each statement about digital file formats, select True or False.",
    statements: [
      {
        text: "Vector images can be scaled infinitely without losing quality.",
        correct: "True",
      },
      {
        text: "Raster images (like JPEG) lose clarity when enlarged significantly.",
        correct: "True",
      },
      {
        text: "PDF files require the original program that created them to be viewed.",
        correct: "False",
      },
    ],
  },
  {
    id: 83,
    type: "checkbox",
    question:
      "Question 83 of 114: Which two methods help secure a home Wi-Fi network? (Choose 2.)",
    options: [
      "A. Changing the default administrator password on the router",
      "B. Enabling WPA2 or WPA3 encryption",
      "C. Leaving the router broadcast name as default without a password",
      "D. Disabling the router firewall",
    ],
    correct: [0, 1], // A, B
  },
  {
    id: 84,
    type: "matching",
    question:
      "Question 84 of 84: Match the computer hardware term with its primary role.",
    items: [
      {
        term: "RAM",
        def: "Temporary high-speed memory for active programs and tasks",
      },
      {
        term: "GPU",
        def: "Specialized processor designed to render graphics and visual data",
      },
      {
        term: "Motherboard",
        def: "Main circuit board connecting all internal hardware components",
      },
    ],
  },
  {
    id: 85,
    type: "single",
    question:
      "Question 85 of 114: What is the primary function of a web search engine?",
    options: [
      "A. Indexing webpages to allow users to find information using keywords",
      "B. Hosting domain registration records for web developers",
      "C. Scanning downloaded files for active malware infections",
      "D. Generating digital certificates for secure web traffic",
    ],
    correct: [0], // A
  },
  {
    id: 86,
    type: "true_false",
    question:
      "Question 86 of 114: Select Yes or No for each statement regarding online copyright.",
    statements: [
      {
        text: "Content in the public domain can be used without permission.",
        correct: "True",
      },
      {
        text: "Attributing an author completely removes copyright restrictions.",
        correct: "False",
      },
      {
        text: "Royalty-free media can always be resold as your own product.",
        correct: "False",
      },
    ],
  },
  {
    id: 87,
    type: "checkbox",
    question:
      "Question 87 of 114: Which two features are common benefits of video conferencing platforms? (Choose 2.)",
    options: [
      "A. Real-time screen sharing capability",
      "B. Automatic hardware power replacement",
      "C. Integrated text chat and messaging",
      "D. Instant physical document printing",
    ],
    correct: [0, 2], // A, C
  },
  {
    id: 88,
    type: "single",
    question:
      "Question 88 of 114: Which shortcut combination locks your Windows screen immediately?",
    options: [
      "A. Windows Key + L",
      "B. Ctrl + Alt + Delete",
      "C. Windows Key + D",
      "D. Alt + Tab",
    ],
    correct: [0], // A
  },
  {
    id: 89,
    type: "true_false",
    question:
      "Question 89 of 114: For each statement about email communication, select True or False.",
    statements: [
      {
        text: "Spam emails are unsolicited commercial or malicious messages.",
        correct: "True",
      },
      {
        text: "Opening email attachments from unknown senders is completely safe.",
        correct: "False",
      },
      {
        text: "Phishing emails attempt to steal sensitive personal information.",
        correct: "True",
      },
    ],
  },
  {
    id: 90,
    type: "matching",
    question:
      "Question 90 of 114: Match each online risk to its appropriate defense mechanism.",
    items: [
      {
        term: "Malware Infection",
        def: "Keep antivirus software updated and active",
      },
      {
        term: "Credential Theft",
        def: "Enable Multi-Factor Authentication (MFA)",
      },
      {
        term: "Data Loss",
        def: "Maintain regular automated cloud or external backups",
      },
    ],
  },
  {
    id: 91,
    type: "single",
    question:
      "Question 91 of 114: Which protocol is used for sending outgoing email messages across networks?",
    options: ["A. SMTP", "B. IMAP", "C. POP3", "D. FTP"],
    correct: [0], // A
  },
  {
    id: 92,
    type: "checkbox",
    question:
      "Question 92 of 114: Which two options describe strong digital security habits? (Choose 2.)",
    options: [
      "A. Using unique passwords for every online account",
      "B. Sharing account credentials only with close trusted friends",
      "C. Regularly updating installed software and operating systems",
      "D. Disabling system firewalls during web browsing",
    ],
    correct: [0, 2], // A, C
  },
  {
    id: 93,
    type: "true_false",
    question:
      "Question 93 of 114: Select True or False for each statement about mobile device management.",
    statements: [
      {
        text: "Remote wipe features allow deleting data from a lost phone.",
        correct: "True",
      },
      {
        text: "App permissions should be reviewed to protect personal data.",
        correct: "True",
      },
      {
        text: "Installing apps from unverified third-party sources is completely safe.",
        correct: "False",
      },
    ],
  },
  {
    id: 94,
    type: "single",
    question:
      "Question 94 of 114: What type of storage media uses optical laser technology to read and write data?",
    options: [
      "A. DVD-ROM",
      "B. USB Flash Memory",
      "C. Solid-State Drive",
      "D. Hard Disk Drive",
    ],
    correct: [0], // A
  },
  {
    id: 95,
    type: "matching",
    question:
      "Question 95 of 114: Match the software category with its typical user task.",
    items: [
      {
        term: "Spreadsheet",
        def: "Analyzing financial data and calculating budgets",
      },
      { term: "Presentation", def: "Creating slide shows for public speaking" },
      {
        term: "Word Processor",
        def: "Drafting essays, formal letters, and reports",
      },
    ],
  },
  {
    id: 96,
    type: "checkbox",
    question:
      "Question 96 of 114: Which two actions should you perform if you suspect your account has been compromised? (Choose 2.)",
    options: [
      "A. Change your account password immediately",
      "B. Ignore the suspicious activity for a few weeks",
      "C. Notify the service platform support team",
      "D. Post your original password publicly to ask for help",
    ],
    correct: [0, 2], // A, C
  },
  {
    id: 97,
    type: "true_false",
    question:
      "Question 97 of 114: For each statement about artificial intelligence, select True or False.",
    statements: [
      {
        text: "AI models require training datasets to learn patterns.",
        correct: "True",
      },
      {
        text: "AI systems are completely incapable of producing errors or bias.",
        correct: "False",
      },
      {
        text: "Machine Learning is a subfield of Artificial Intelligence.",
        correct: "True",
      },
    ],
  },
  {
    id: 98,
    type: "single",
    question:
      "Question 98 of 114: Which peripheral device is primarily used to convert hard-copy paper documents into digital image files?",
    options: ["A. Scanner", "B. Plotter", "C. Projector", "D. Monitor"],
    correct: [0], // A
  },
  {
    id: 99,
    type: "checkbox",
    question:
      "Question 99 of 114: Which two factors contribute to positive digital identity management? (Choose 2.)",
    options: [
      "A. Maintaining professional profile information on workplace platforms",
      "B. Reviewing privacy settings on social media accounts regularly",
      "C. Using abusive language in online forum discussions",
      "D. Publishing sensitive personal contact details publicly",
    ],
    correct: [0, 1], // A, B
  },
  {
    id: 100,
    type: "true_false",
    question:
      "Question 100 of 114: Select Yes or No for each statement about web navigation.",
    statements: [
      {
        text: "The browser 'Refresh' button reloads the current page content.",
        correct: "True",
      },
      {
        text: "Hyperlinks can only link to pages on the exact same website domain.",
        correct: "False",
      },
      {
        text: "Browser bookmarks save links for quick future access.",
        correct: "True",
      },
    ],
  },
  {
    id: 101,
    type: "single",
    question:
      "Question 101 of 114: What is the main purpose of an Acceptable Use Policy (AUP)?",
    options: [
      "A. To outline rules and guidelines for using network infrastructure and services",
      "B. To calculate automated tax refunds for corporate employees",
      "C. To upgrade computer hardware automatically every year",
      "D. To provide free high-speed internet access to all users",
    ],
    correct: [0], // A
  },
  {
    id: 102,
    type: "matching",
    question:
      "Question 102 of 114: Match the shortcut key with its standard function in Windows.",
    items: [
      { term: "Ctrl + Z", def: "Undo the previous action" },
      { term: "Ctrl + A", def: "Select all items or text on screen" },
      { term: "Ctrl + F", def: "Open find search box" },
    ],
  },
  {
    id: 103,
    type: "checkbox",
    question:
      "Question 103 of 114: Which two items are key principles of Netiquette? (Choose 2.)",
    options: [
      "A. Respecting others' time and bandwidth",
      "B. Flaming or insults in public online forums",
      "C. Sharing accurate and verified information",
      "D. Using ALL CAPS to emphasize every single word",
    ],
    correct: [0, 2], // A, C
  },
  {
    id: 104,
    type: "true_false",
    question:
      "Question 104 of 114: For each statement about data backup, select True or False.",
    statements: [
      {
        text: "The 3-2-1 backup strategy recommends 3 copies on 2 different media with 1 offsite.",
        correct: "True",
      },
      {
        text: "Cloud storage is not considered an offsite backup option.",
        correct: "False",
      },
      {
        text: "Backing up files protects against data loss from hardware damage.",
        correct: "True",
      },
    ],
  },
  {
    id: 105,
    type: "single",
    question:
      "Question 105 of 114: Which unit is used to measure computer processor clock speed?",
    options: [
      "A. Gigahertz (GHz)",
      "B. Gigabytes (GB)",
      "C. Megabits per second (Mbps)",
      "D. Pixels (px)",
    ],
    correct: [0], // A
  },
  {
    id: 106,
    type: "checkbox",
    question:
      "Question 106 of 114: Which two settings help improve battery life on portable laptops? (Choose 2.)",
    options: [
      "A. Reducing screen brightness level",
      "B. Disabling unused wireless connections (like Bluetooth)",
      "C. Setting screen to never turn off",
      "D. Running multiple high-end games simultaneously",
    ],
    correct: [0, 1], // A, B
  },
  {
    id: 107,
    type: "true_false",
    question:
      "Question 107 of 114: Select True or False for each statement about Open Source vs Proprietary Software.",
    statements: [
      {
        text: "Proprietary software code is hidden and restricted by the vendor.",
        correct: "True",
      },
      {
        text: "Open source software allows users to inspect and modify source code.",
        correct: "True",
      },
      {
        text: "Proprietary software is always distributed completely free of charge.",
        correct: "False",
      },
    ],
  },
  {
    id: 108,
    type: "matching",
    question:
      "Question 108 of 114: Match the measurement unit to its corresponding metric.",
    items: [
      { term: "Mbps", def: "Network bandwidth data transfer speed" },
      { term: "Terabyte (TB)", def: "Data storage capacity" },
      {
        term: "Resolution (Pixels)",
        def: "Screen display sharpness and clarity",
      },
    ],
  },
  {
    id: 109,
    type: "single",
    question:
      "Question 109 of 114: What is the main security risk of using outdated web browsers?",
    options: [
      "A. Vulnerability to unpatched security exploits and security flaws",
      "B. Automatic deletion of all locally stored desktop files",
      "C. Inability to type non-English characters",
      "D. Permanent damage to physical monitor pixels",
    ],
    correct: [0], // A
  },
  {
    id: 110,
    type: "checkbox",
    question:
      "Question 110 of 114: Which two practices assist in effective online research? (Choose 2.)",
    options: [
      "A. Verifying information across multiple reliable sources",
      "B. Evaluating the author's credibility and publication date",
      "C. Relying entirely on the first search result without checking facts",
      "D. Accepting opinion blogs as official scientific facts",
    ],
    correct: [0, 1], // A, B
  },
  {
    id: 111,
    type: "true_false",
    question:
      "Question 111 of 114: For each statement about cloud computing models, select True or False.",
    statements: [
      {
        text: "SaaS provides access to complete web-based software applications.",
        correct: "True",
      },
      {
        text: "Cloud services reduce the need for local hardware storage maintenance.",
        correct: "True",
      },
      {
        text: "Cloud computing can only be used on Windows desktop systems.",
        correct: "False",
      },
    ],
  },
  {
    id: 112,
    type: "single",
    question:
      "Question 112 of 114: What type of malware locks access to your computer system or files until a sum of money is paid?",
    options: ["A. Ransomware", "B. Adware", "C. Spyware", "D. Rootkit"],
    correct: [0], // A
  },
  {
    id: 113,
    type: "checkbox",
    question:
      "Question 113 of 114: Which two methods help prevent repetitive strain injuries (RSI) when working at a computer? (Choose 2.)",
    options: [
      "A. Using ergonomic keyboards and wrist supports",
      "B. Maintaining proper posture with feet flat on the floor",
      "C. Working continuously for 8 hours without breaks",
      "D. Bending wrists sharply upward while typing",
    ],
    correct: [0, 1], // A, B
  },
  {
    id: 114,
    type: "true_false",
    question:
      "Question 114 of 114: Select True or False for each statement regarding 2-Factor Authentication (2FA).",
    statements: [
      {
        text: "2FA requires two separate pieces of evidence to verify identity.",
        correct: "True",
      },
      {
        text: "SMS verification codes are commonly used as a second factor.",
        correct: "True",
      },
      {
        text: "2FA makes accounts less secure than using a single password.",
        correct: "False",
      },
    ],
  },
];
