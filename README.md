# Matutdeling i Nord-Fron / Регистрация на раздачу еды в Норд-Фрон

## Made by Team Lumino

[English](#english) | [Русский](#русский)

---

## English

A lightweight, static web application designed on a volunteer basis for the **Nord-Fron** municipality to coordinate and manage humanitarian food distribution.

### 🌟 Key Features
* **5-Language Localization**: Full translation support for **Nynorsk, Bokmål, English, Ukrainian, and Russian** tailored for both local volunteers and foreign registrants.
![Language selection](https://github.com/user-attachments/assets/3d305c6c-de2c-451a-8f8b-8b195ced1355/)
* **Google Sheets Integration**: Submissions are stored persistently in Google Sheets via the **SheetDB API**.
* **Dynamic Settings Control**: Administrators can dynamically change the date, start time, and end time directly from the admin panel, instantly updating the public website.
![Dynamic Settings Control](https://github.com/user-attachments/assets/f1090c57-214b-429e-a619-873351590763)
* **Smart Time Slots**: The registration page cuts time ranges into 5-minute slots. If **2 people** register for the same timeslot, that slot is automatically hidden to prevent overcrowding.
![Smart Time Slots](https://github.com/user-attachments/assets/547fe7e0-7616-48a8-97e3-b672b4e3a7ca)
* **Secure Admin Access**: The administration panel is protected by a password verification layer hashed with secure **SHA-256** cryptology client-side.

---

## Русский

Легковесное статическое веб-приложение, созданное на волонтёрской основе для коммуны **Норд-Фрон** для координации и управления раздачей гуманитарной помощи.

### 🌟 Основные возможности
* **Поддержка 5 языков**: Интерфейс переведен на **Нюнорск, Букмол, Английский, Украинский и Русский** с использованием нейросетевых технологий перевода.
![Language selection](https://github.com/user-attachments/assets/3d305c6c-de2c-451a-8f8b-8b195ced1355/)
* **Интеграция с Google Таблицами**: Данные зарегистрированных пользователей сохраняются напрямую в таблицу через **SheetDB API**.
* **Динамическая настройка**: Дата и время проведения раздачи настраиваются через удобную форму в админ-панели и синхронизируются в реальном времени.
![Dynamic Settings Control](https://github.com/user-attachments/assets/f1090c57-214b-429e-a619-873351590763)
* **Умные интервалы (слоты)**: Время раздачи нарезается на 5-минутные интервалы. Если на один и тот же слот регистрируется **2 человека**, этот интервал автоматически скрывается для предотвращения очередей.
![Smart Time Slots](https://github.com/user-attachments/assets/547fe7e0-7616-48a8-97e3-b672b4e3a7ca)
* **Безопасная админка**: Доступ к панели управления защищен паролем и проверяется с использованием безопасного хеширования **SHA-256**.

---

## 🛠️ Configuration & Deployment / Настройка и Деплой

1. **Clone the repository / Клонируйте репозиторий**
2. **Configure credentials / Настройте учетные данные**:
   - Duplicate `config.example.js` and rename it to `config.js`.
   - Update `API_URL` with your SheetDB API endpoint.
   - Update `ADMIN_PASSWORD_HASH` with your SHA-256 password hash (default password is `fron2026`).
3. **Database Columns / Колонки Google Таблицы**:
   Ensure your spreadsheet contains the following header row:
   `id`, `name`, `timeslot`, `email`, `adults`, `children`, `registred at`
4. **Deploy / Деплой**:
   Since the app contains only static files, it can be deployed on any static host like Netlify, GitHub Pages, or Vercel. Keep `config.js` in your `.gitignore` to prevent leaks to public repositories.
