# 🎬 Movie Favorites App

A React + Django project that lets users browse movies and save their favorites — powered by an API connection and a slick frontend.

---

## 🚀 Features
- Fetch movies from a Django REST API  
- Display movie details with cover images  
- Add or remove movies from your favorites list  
- Automatically re-renders on favorite changes  
- CORS & CSRF handled for smooth frontend-backend communication  

---

## 🧰 Tech Stack
**Frontend:** React (Vite)  
**Backend:** Django + Django REST Framework  
**Database:** SQLite (default)  
**API Fetch:** Fetch API with async/await  

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

---

### 2️⃣ Setup the Backend (Django)
```bash
cd backend
python -m venv env
source env/bin/activate  # for Mac/Linux
env\Scripts\activate     # for Windows

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

> By default, Django runs at **http://127.0.0.1:8000**

---

### 3️⃣ Setup the Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

> React runs at **http://localhost:5173**

---

## 🌍 Connecting Frontend + Backend
- Make sure Django is running on port 8000  
- The frontend fetches from:
  ```
  http://127.0.0.1:8000/display-movies/
  ```
- You can edit this in `frontend/src/services/api.js` if needed

---

## 💾 API Endpoints
| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/display-movies/` | GET | Fetch all movies |
| `/add-favorites/` | POST | Add a movie to favorites |
| `/display-favorites/` | GET | Show all favorites |
| `/delete-favorites/<id>/` | DELETE | Remove a favorite |

---

## 🧑‍💻 Author
**Great** — 14-year-old developer 🚀  
Passionate about **AI, space inventions, and full-stack development.**  
Building the future one line of code at a time 💥  

---

## ⭐ Show Some Love
If you like this project, consider giving it a **⭐ on GitHub** and sharing it with your dev friends 😎
````

---
