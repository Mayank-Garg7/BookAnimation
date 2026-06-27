src
│
├── components
│   ├── SelectTests.tsx
│   ├── TestCard.tsx
│   ├── QuestionCard.tsx
│   ├── ProgressBar.tsx
│   ├── Result.tsx
│   └── Timer.tsx
│
├── pages
│   ├── Home.tsx
│   ├── TestSelection.tsx
│   ├── TestPage.tsx
│   ├── ResultPage.tsx
│   ├── SyllabusPage.tsx
│   └── Dashboard.tsx
│
├── data
│   ├── cbt1
│   │   ├── full-length
│   │   │   ├── test1.json
│   │   │   ├── test2.json
│   │   │   └── ...
│   │   │
│   │   ├── reasoning
│   │   ├── english
│   │   ├── maths
│   │   └── gk
│   │
│   └── cbt2
│       ├── full-length
│       ├── maths
│       ├── reasoning
│       ├── english
│       └── computer
│
├── types
│   └── Question.ts
│
├── routes
│   └── AppRoutes.tsx
│
├── hooks
│   ├── useTimer.ts
│   └── useTest.ts
│
├── utils
│   ├── calculateResult.ts
│   └── shuffleQuestions.ts
│
└── mock