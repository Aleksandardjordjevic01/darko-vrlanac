# Serene Memorial Design - Next.js + TypeScript + Tailwind CSS

Projekat je uspešno migriran sa Vite + React Router na **Next.js 15** sa **TypeScript** i **Tailwind CSS v3**.

## 🚀 Tehnologije

- **Next.js 15** - React framework sa App Router
- **TypeScript** - Tipizacija
- **Tailwind CSS v3** - Styling framework
- **Radix UI** - Pristupačne UI komponente
- **Lucide React** - Ikone
- **React Query** - Server state management
- **React Hook Form** + **Zod** - Forme i validacija

## 📁 Struktura Projekta

```
src/
├── app/                  # Next.js App Router stranice
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Početna stranica (/)
│   ├── o-nama/          # O nama stranica
│   ├── usluge/          # Usluge stranica
│   ├── vozila/          # Vozila stranica
│   ├── katalog/         # Katalog stranica
│   ├── galerija/        # Galerija stranica
│   ├── kontakt/         # Kontakt stranica
│   ├── providers.tsx    # React Query provider
│   └── globals.css      # Globalni stilovi
├── components/          # React komponente
│   ├── ui/             # Radix UI komponente
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Stats.tsx
│   ├── Vehicles.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── PageHeader.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility funkcije
└── assets/             # Slike i Assets

```

## 🎨 Dizajn

Dizajn i stilovi su **zadržani** sa prethodne verzije:
- Crno-bela šema boja sa elegantnim akcentima
- Playfair Display serif font za naslove
- Inter sans-serif font za telo
- Glass-morphism efekti
- Smooth animacije i tranzicije
- Responsivni dizajn

## 📦 Instalacija i Pokretanje

```bash
# Instalacija zavisnosti
npm install

# Pokretanje development servera
npm run dev

# Build za produkciju
npm run build

# Pokretanje production servera
npm start
```

Server će biti dostupan na: **http://localhost:3000**

## 🔧 Ključne Promene u Migraciji

### 1. **Routing**
- ❌ `react-router-dom` → ✅ **Next.js App Router**
- Stranice su premeštene iz `src/pages/` u `src/app/`
- Svaka ruta ima svoj folder sa `page.tsx` fajlom

### 2. **Client vs Server Components**
- Komponente koje koriste hooks (`useState`, `useEffect`, itd.) imaju `'use client'` direktivu
- Server komponente su default u Next.js App Router

### 3. **Link Komponente**
- ❌ `<Link to="/path">` → ✅ `<Link href="/path">`
- ❌ `useLocation()` → ✅ `usePathname()`

### 4. **Fonts**
- Fontovi se sada učitavaju kroz `next/font/google`
- Font varijable dodane u `tailwind.config.ts`

### 5. **Metadata**
- SEO metadata se definiše kroz `metadata` export u `layout.tsx`

### 6. **Images**
- Preporučuje se korišćenje `next/image` umesto `<img>` tagova za optimizaciju

## 🎯 Sledeći Koraci (Preporuke)

1. **Optimizacija Slika**: Zameni `<img>` sa `next/image` komponentom
2. **SEO**: Dodaj metadata na svaku stranicu
3. **Environment Variables**: Prebaci konfiguraciju u `.env` fajlove
4. **API Routes**: Koristi Next.js API routes za backend funkcionalnosti
5. **Deployment**: Deploy na Vercel za najbolje performanse

## 📝 Napomene

- Sve postojeće UI komponente (Shadcn/ui) su zadržane
- Stilovi su migrirani sa Tailwind v3 (v4 je još uvek experimental)
- React Query provider je enkapsuliran u Client Component
- PostCSS konfiguracija je podešena za Tailwind CSS

---

**Status Migracije**: ✅ Kompletno  
**Test**: ✅ Development server radi  
**Datum**: 15. Februar 2026
