# 🇩🇪 Sprechen mit Spaß — Nemis Tili O'rganish Platformasi

> **Telegram Mini App + Mustaqil Web-sayt | React + TypeScript + Node.js**

---

## 🎯 Loyiha Maqsadi

**Sprechen mit Spaß** — o'zbek tilida so'zlashuvchi foydalanuvchilar uchun nemis tilini o'rgatuvchi to'liq platforma. Asosiy raqobatchi: "Sirli Deutsch" ilovasi. Maqsad: undan zamonaviyroq, funksional va chiroyliroq bo'lish.

Platforma ikki rejimda ishlaydi:
- **Telegram Mini App** — `@Sprechenmitspass_bot` orqali
- **Mustaqil veb-sayt** — `sprechenmitspass.uz` domenida

---

## 🏗️ Texnik Stack

### Frontend
| Texnologiya | Versiya | Maqsad |
|---|---|---|
| React | 18.3.x | UI framework |
| TypeScript | 5.4.x | Type safety |
| Vite | 5.3.x | Build tool |
| Tailwind CSS | 3.4.x | Styling |
| Zustand | 4.5.x | Global state |
| Framer Motion | 11.x | Animatsiyalar |
| React Router DOM | 6.x | Routing |
| Axios | 1.7.x | HTTP requests |

### Backend
| Texnologiya | Maqsad |
|---|---|
| Node.js + Express | API server |
| PostgreSQL + Prisma | Ma'lumotlar bazasi |
| Socket.io | Real-time jang (WebSocket) |
| JWT | Autentifikatsiya |
| Google Gemini API | AI Mentor |
| Google Cloud TTS | Talaffuz audio |
| Google Cloud STT | Ovozli kiritish |
| Click / Payme | To'lov tizimi (UZS) |

---

## 📁 Loyiha Tuzilmasi

```
sprechen-mit-spass/
├── src/
│   ├── components/          # Qayta ishlatiladigan komponentlar
│   │   ├── Layout.tsx       # Asosiy layout (header + nav + sidebar)
│   │   ├── Header.tsx       # Daraja, XP, profil
│   │   ├── BottomNav.tsx    # Mobil pastki navigatsiya (5 tab)
│   │   ├── Sidebar.tsx      # Desktop yon panel
│   │   ├── FlipCard.tsx     # Lug'at kartasi (aylanadigan)
│   │   ├── AudioButton.tsx  # Ovoz tugmasi (Web Speech API)
│   │   ├── Timer.tsx        # Taymer (test/jang)
│   │   ├── Confetti.tsx     # G'alaba animatsiyasi
│   │   ├── GlassCard.tsx    # Glassmorphism karta
│   │   ├── BlobShape.tsx    # Fon dekoratsiya (blob)
│   │   ├── Badge.tsx        # Nishon komponenti
│   │   ├── StreakCounter.tsx # 🔥 Seriya hisoblagich
│   │   ├── XpPopup.tsx      # XP oshish animatsiyasi
│   │   ├── ProgressBar.tsx  # Gradient progress bar
│   │   ├── LevelSelector.tsx # A1/A2/B1/B2 tanlash
│   │   ├── ThemeToggle.tsx  # Dark/light mode
│   │   └── SkeletonLoader.tsx # Yuklanish skelet
│   ├── pages/               # Sahifalar
│   │   ├── HomePage.tsx          # Landing sahifa
│   │   ├── AiMentorPage.tsx      # AI suhbat (Gemini)
│   │   ├── VideoPage.tsx         # Video darslar ro'yxati
│   │   ├── VideoPlayerPage.tsx   # Player + transkripsiya + lug'at
│   │   ├── DictionaryPage.tsx    # Lug'at (A1-B2)
│   │   ├── BattlePage.tsx        # Jang lobby
│   │   ├── BattleGamePage.tsx    # Real-time jang o'yini
│   │   ├── MockExamPage.tsx      # Mock imtihon ro'yxati
│   │   ├── MockExamActivePage.tsx # Faol imtihon
│   │   ├── LeaderboardPage.tsx   # Reyting jadvali
│   │   ├── ProfilePage.tsx       # Profil + statistika
│   │   ├── SettingsPage.tsx      # Sozlamalar
│   │   ├── SubscriptionPage.tsx  # Pro tariflar
│   │   ├── WritingPage.tsx       # Yozish mashqlari
│   │   └── CustomTestPage.tsx    # Maxsus test
│   ├── store/
│   │   └── useStore.ts      # Zustand global state
│   ├── data/
│   │   ├── words.ts         # So'zlar (A1-B2, mavzular bo'yicha)
│   │   └── topics.ts        # Mavzular (har darajada 15 ta)
│   ├── types/index.ts       # Barcha TypeScript interfeyslar
│   ├── lib/
│   │   ├── utils.ts         # Yordamchi funksiyalar (cn, formatDate)
│   │   └── api.ts           # Axios instance + API chaqiruvlari
│   ├── hooks/
│   │   ├── useTheme.ts      # Tema boshqaruvi
│   │   ├── useAudio.ts      # Audio boshqaruv
│   │   ├── useSpeech.ts     # Ovozli kiritish/chiqish
│   │   └── useSocket.ts     # WebSocket (jang)
│   ├── App.tsx              # Router va layout
│   ├── main.tsx             # React ilovani ishga tushirish
│   └── index.css            # Global CSS, dark mode, animatsiyalar
├── server/                  # Backend (Node.js)
│   ├── prisma/
│   │   └── schema.prisma    # PostgreSQL sxema
│   ├── routes/
│   │   ├── auth.ts          # Telegram WebApp auth
│   │   ├── ai.ts            # Gemini AI Mentor API
│   │   ├── dictionary.ts    # Lug'at API
│   │   ├── videos.ts        # Video API
│   │   ├── battle.ts        # Jang API
│   │   ├── mock.ts          # Mock imtihon API
│   │   ├── leaderboard.ts   # Reyting API
│   │   ├── payment.ts       # Click/Payme to'lov
│   │   └── progress.ts      # Foydalanuvchi progressi
│   ├── services/
│   │   ├── gemini.ts        # Google Gemini integratsiya
│   │   ├── speech.ts        # Text-to-Speech (de-DE-Wavenet)
│   │   ├── transcription.ts # Video → matn
│   │   └── translation.ts   # Nemis → O'zbek tarjima
│   ├── middleware/
│   │   └── auth.ts          # JWT tekshirish middleware
│   ├── socket/
│   │   └── battle.ts        # WebSocket jang logikasi
│   ├── config/
│   │   └── database.ts      # Prisma ulanish
│   └── index.ts             # Express server
├── index.html               # HTML (Telegram WebApp script bilan)
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── .env.example
└── README.md
```

---

## 🎨 Dizayn Tizimi

### Asosiy Ranglar
```css
--primary: #2563EB        /* Ko'k — asosiy */
--secondary: #10B981      /* Yashil — muvaffaqiyat */
--accent: #F59E0B         /* Oltin — nishon/XP */
--background: #F8FAFC     /* Yorug' fon */
--surface: #FFFFFF        /* Karta foni */
```

### Dark Mode
```css
[data-theme="dark"] {
  --background: #0F172A
  --surface: #1E293B
}
```

### Dizayn Uslubi
- **Glassmorphism** — shaffof kartalar (`backdrop-filter: blur(20px)`)
- **Blob shakllar** — fon dekoratsiyasi (SVG + CSS animatsiya)
- **Gradient tugmalar** — ko'k → yashil gradient
- **Stagger animatsiyalar** — elementlar ketma-ket paydo bo'lishi
- **Responsive** — 320px (mobil) → tablet → desktop

### Shrift
- Asosiy: **Inter** (400, 500, 600, 700)
- Kod: **JetBrains Mono**

---

## 🚀 Funksiyalar

### 1. 📚 Lug'at (Dictionary)
- A1/A2/B1/B2 darajalari
- Mavzular bo'yicha (har darajada 15 mavzu)
- FlipCard — old (nemischa) / orqa (o'zbekcha + misol)
- Audio talaffuz (Google TTS, de-DE-Wavenet)
- Shaxsiy lug'atga saqlash
- Spaced repetition (keyingi takrorlash vaqti)

### 2. 🤖 AI Mentor
- Google Gemini 2.5 Pro bilan suhbat
- O'zbekcha yozsang → Nemischa javob + tarjima
- Nemischa yozsang → xatolarni muloyimlik bilan to'g'rilash
- Mavzu tanlash (15 mavzu × 4 daraja = 60 ta)
- Mikrofon orqali ovozli kiritish (Web Speech API, de-DE)
- Pedagogik format: 🇩🇪 Javob + 🇺🇿 Tarjima + ✏️ Tuzatish + 💡 Ibora

### 3. 🎬 Video Darslar
- YouTube videolari (podcast, film, multfilm, dars)
- Custom player: tezlik (0.5x–2x), 10s oldinga/ortga, PiP
- Subtitrlar: nemischa (oq) + o'zbekcha tarjima (sariq)
- Transkripsiya paneli: vaqt belgilari bilan, bosib video o'sha yerdan davom etadi
- So'zni bosib lug'at ochiladi
- Video lug'ati: yangi so'zlar ro'yxati + audio

### 4. ⚔️ Bellashuv (Jang)
- **Kunlik Turnir** — 10 savol, barcha foydalanuvchilar bir xil
- **Jonli Jang** — WebSocket orqali real-time raqib
- **Do'st bilan** — havola orqali chaqirish
- Savol turlari: tarjima, artikl (der/die/das), grammatika, gap to'ldirish
- Taymer: 10 soniya, rangli (yashil → sariq → qizil)
- XP: +10 to'g'ri, +5 ketma-ket bonus, +3 tez javob, +20 g'alaba

### 5. 📝 Mock Imtihon
- TELC/Goethe formati (A1/A2/B1/B2)
- 4 modul: Lesen (25 min), Hören (20 min), Schreiben (20 min), Sprechen (15 min)
- AI baholash (yozish va gapirish uchun): grammatika, lug'at, tuzilma, izchillik
- Natija: 0–100 ball + daraja + AI izohi + xatolar tahlili

### 6. 📊 Progress Tizimi
- **XP ballari**: har bir harakatda (+5 so'z, +10 test, +20 jang)
- **10 daraja**: Yangi o'quvchi → Nemis Profi
- **Seriya (Streak)**: 🔥 kunlik faollik hisoblagich
- **Nishonlar**: 7/30/100 kun seriya, 100/500/1000 so'z, A1-B2 tugatdi, reyting o'rinlari
- **Faollik grafigi**: GitHub-style yashil to'r (7×N)

### 7. 💳 To'lov Tizimi
| Tarif | Narx | Davomiylik |
|---|---|---|
| Bepul | 0 so'm | Cheksiz (cheklangan) |
| Oylik | 39,000 so'm | 1 oy |
| Imtihon Pass | 159,000 so'm | 6 oy |
| To'liq Yo'l | 390,000 so'm | 18 oy |

To'lov: **Click**, **Payme**, **Telegram Stars**

---

## 🗄️ Ma'lumotlar Bazasi (Prisma/PostgreSQL)

Asosiy modellar:
- `User` — Telegram ID, XP, streak, daraja, Pro status
- `Word` — so'z, artikl, o'zbekcha, talaffuz, daraja, mavzu
- `LearnedWord` — foydalanuvchi o'rgangan so'zlar + spaced repetition
- `ErrorWord` — xato qilingan so'zlar (kuchaytirish uchun)
- `Video` — YouTube video + transkripsiya (JSON) + lug'at (JSON)
- `BattleResult` — jang natijalari
- `MockResult` — imtihon natijalari + AI baho
- `Payment` — to'lovlar (Click/Payme)
- `ActivityDay` — kunlik faollik grafigi uchun

---

## 📱 Telegram Mini App

```javascript
// Telegram WebApp integratsiya
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Auth: initDataUnsafe.user → backend HMAC tekshirish
// BackButton, MainButton, HapticFeedback ishlatiladi
```

Bot: `@Sprechenmitspass_bot`

---

## 🔑 Environment Variables

```env
# Frontend (.env)
VITE_API_URL=https://api.sprechenmitspass.uz
VITE_GEMINI_KEY=your_gemini_api_key

# Backend (server/.env)
DATABASE_URL=postgresql://user:pass@host:5432/db
REDIS_URL=redis://host:6379
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
TELEGRAM_BOT_TOKEN=your_bot_token
YOUTUBE_API_KEY=your_youtube_key
GOOGLE_CLOUD_KEY=your_google_cloud_key
CLICK_MERCHANT_ID=your_click_id
PAYME_MERCHANT_ID=your_payme_id
```

---

## 🛠️ O'rnatish va Ishga Tushirish

### Frontend
```bash
npm install
npm run dev          # Development
npm run build        # Production build → dist/
```

### Backend
```bash
cd server
npm install
npx prisma migrate dev
npm start
```

### Deploy
- **Frontend** → Vercel (dist/ papka)
- **Backend** → Railway yoki Render
- **DB** → Railway PostgreSQL yoki Supabase

---

## 📋 Mavzular Ro'yxati

**A1 (15 mavzu):** Salomlashish, Tanishish, Oila, Raqamlar, Kundalik hayot, Ovqat, Ranglar, Havo, Hayvonlar, Do'kon, Restoran, Transport, Sog'liq, Ta'til, Telefon

**A2 (15 mavzu):** Kasblar, Ta'lim, Shahar, Sayohat, Bank, Uy-joy, Sport, Moda, Texnologiya, Tabiat, Sog'liqni saqlash, Ovqat madaniyati, Bayramlar, Do'stlik, Rejalashtirish

**B1 (15 mavzu):** Yangiliklar, Jamiyat, San'at, Sayohat tajribalari, Kasbiy rivojlanish, Ta'lim tizimi, Ekologiya, Sog'liq va sport, Oila va tarbiya, Iqtisodiyot, Texnologiyalar, Turizm, Milliy taomlar, Musiqa/Kino, Kelajak rejalari

**B2 (15 mavzu):** Global muammolar, Ilm-fan, Adabiyot, Iqtisodiy tahlil, Siyosat, Madaniy integratsiya, Psixologiya, Biznes boshqaruvi, Innovatsiyalar, Tarix, Ijtimoiy tarmoqlar, Kelajak kasblari, Migratsiya, Xalqaro munosabatlar, Shaxsiy rivojlanish

---

## 🔊 Audio Tizimi

- **TTS**: Google Cloud `de-DE-Wavenet-C` (ayol) yoki `de-DE-Wavenet-B` (erkak)
- **STT**: Web Speech API (`de-DE`, AI Mentor mikrofon uchun)
- **Effektlar**: Web Audio API (click, success, error, levelup, win)

---

## ✅ Kod Sifati Talablari

- TypeScript — type xato bo'lmasligi shart
- Barcha qurilmalarda responsive (320px+)
- Dark mode — to'liq qo'llab-quvvatlash
- Animatsiyalar — 60fps, silliq
- ARIA labellar — accessibility
- Lazy loading + code splitting — performance
- XSS protection + input validation — security

---

*Sprechen mit Spaß — Nemis tilini o'ynab o'rganing! 🇩🇪*
