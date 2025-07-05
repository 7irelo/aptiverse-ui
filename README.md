# 🎓 Aptiverse Frontend – Smart Learning Interface for South African Learners

Welcome to the **frontend** of **Aptiverse** – a modern, AI-powered educational platform designed to support Grade 11 and 12 students in South Africa through personalized learning, emotional intelligence insights, and performance-driven rewards.

This app serves as the main interface for learners, teachers, and parents to interact with the Aptiverse ecosystem.

---

## 🧠 Key Features

### 👩‍🎓 Student Portal

* Personalized dashboard showing subjects, progress, and daily goals.
* Smart study companion offering AI-guided note-taking, reminders, and learning recommendations.
* Private learner diary for emotional journaling with sentiment analysis from backend AI.

### 🧑‍🏫 Teacher Dashboard

* View real-time class performance, individual strengths/weaknesses.
* Assign tasks and monitor emotional wellness flags.

### 👨‍👩‍👧 Parent View

* Optional access to student performance summaries.
* Configurable privacy settings controlled by the student.

### 🎮 Reward System

* Goal-setting and achievement tracking.
* Unlock advanced tools through performance-based progression.

---

## 🚀 Tech Stack

| Layer                  | Technologies                                     |
| ---------------------- | ------------------------------------------------ |
| **Framework**          | [Next.js](https://nextjs.org/) (App Router)      |
| **Bundler**            | [Turbopack](https://turbo.build/pack)            |
| **Language**           | TypeScript                                       |
| **Styling**            | Tailwind CSS, CSS Modules                        |
| **State Mgmt**         | Zustand, React Context                           |
| **Forms & Validation** | React Hook Form, Zod                             |
| **API Communication**  | Axios + SWR (or React Query)                     |
| **Authentication**     | AWS Cognito (via OAuth / JWT)                    |
| **CI/CD**              | GitHub Actions, Vercel (or optional AWS Amplify) |
| **Testing**            | Jest, React Testing Library                      |
| **Animations**         | Framer Motion                                    |
| **Accessibility**      | Headless UI, WAI-ARIA support                    |

---

## 🧩 Project Structure

```
/app                 → Next.js App Router entry points
/components          → Reusable UI components
/hooks               → Custom React hooks
/lib                 → Utility functions (e.g., API clients, auth handlers)
/styles              → Global and Tailwind styles
/types               → TypeScript types and interfaces
/public              → Static assets
```

---

## 🔌 API Integration

All AI-powered and data features are consumed from the [Aptiverse API](https://github.com/your-org/aptiverse-api) using secured endpoints and authenticated via AWS Cognito.

> All requests are rate-limited and include JWT tokens issued by Cognito.

---

## 🔐 Authentication Flow

1. User logs in or signs up via Cognito Hosted UI or embedded form.
2. JWT is issued and stored securely (in HttpOnly cookies or memory).
3. Frontend uses token to access protected API routes.

---

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Lint + format
npm run lint && npm run format
```

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-org/aptiverse-frontend.git

# Install dependencies
npm install

# Run dev server
npm run dev
```

---

## 📈 Planned Features

* 🧠 AI-generated flashcards and auto-summarization
* 🗣️ Multilingual support (Zulu, Xhosa, Afrikaans)
* 🧑‍⚖️ Student privacy dashboard
* 🧑‍🔬 Subject performance heatmaps
* 📱 Mobile app wrapper (PWA or React Native)
* 📚 Offline content caching for low-bandwidth access

---

## 🌍 Mission-Driven Design

Aptiverse is built for equity and excellence—empowering students across South Africa with access to intelligent tools, emotional wellness features, and school-agnostic support.

> Even if your school isn’t subscribed, **you can still use Aptiverse as an individual** and grow your own way.

---

## 🤝 Contribute

We’re looking for collaborators passionate about education, mental health, and African innovation. Whether you’re a dev, designer, or educator—your voice matters.

---

## 🪪 License

This project is under active development. Licensing to be defined soon based on deployment model (open-source or hybrid).

---

### 💡 Aptiverse: A Platform Where Every Student Can Rise

Built with care, intelligence, and resilience—by students, for students.

---

Would you like me to export this as a file or generate a shorter version for the GitHub project description or a landing page?
