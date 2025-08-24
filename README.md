# 🌌 Next.js Todo App with Animated Background

A simple **Todo List App** built using **Next.js 13 (App Router)**, **Prisma ORM**, and **SQLite**, featuring a sleek **animated background** with Tailwind CSS.

---

## ✨ Features
- ✅ Add new tasks with title  
- ✏️ Toggle completion (strike-through when done)  
- ❌ Delete tasks instantly  
- 🎨 Modern UI with TailwindCSS + animated gradient/meteor background  
- ⚡ Server Actions (`"use server"`) for handling database operations  
- 🗄️ SQLite + Prisma for data persistence  

---

## 🚀 Tech Stack
- **Frontend:** Next.js 13 (App Router), React, TailwindCSS  
- **Database:** SQLite  
- **ORM:** Prisma  
- **Styling/Animation:** Tailwind CSS, custom meteor-beam background  

---

## 📂 Project Structure
```
.
├── prisma/
│   └── schema.prisma        # Database schema
├── src/
│   ├── app/
│   │   ├── page.tsx         # Home page (Todo list)
│   │   └── new/page.tsx     # Add new Todo page
│   ├── components/
│   │   ├── TodoItem.tsx     # Todo item component
│   │   └── animata/
│   │       └── background/
│   │           └── animated-beam.tsx  # Background animation
│   └── lib/
│       └── utils.ts         # Utility (cn helper)
├── package.json
└── README.md
```

---

## ⚡ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/KushagraJadiya24/nextjs-todo-animated.git
cd nextjs-todo-animated
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Prisma + SQLite
```bash
npx prisma migrate dev --name init
```

### 4. Run the dev server
```bash
npm run dev
```
App will be live at 👉 `http://localhost:3000`

---

## 📦 Deployment
This app can be deployed easily on **Vercel**:

```bash
vercel
```

---

## 🔮 Future Improvements
- [ ] User authentication (login + register)  
- [ ] Categories / Tags for tasks  
- [ ] Due dates + reminders  
- [ ] Dark/light mode toggle  


