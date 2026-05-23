# Lumière Estética — React + TypeScript + CSS Modules

Site da clínica de estética Lumière, reconstruído em React com TypeScript e CSS Modules.

## Estrutura do projeto

```
lumiere/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles/
    │   └── globals.css          # variáveis CSS, reset, animações globais
    ├── hooks/
    │   ├── useCursor.ts         # cursor personalizado animado
    │   └── useScrollReveal.ts   # hook de reveal por scroll
    └── components/
        ├── Navbar/
        │   ├── Navbar.tsx       + Navbar.module.css
        │   ├── Cursor.tsx       + Cursor.module.css
        ├── Hero/
        │   └── Hero.tsx         + Hero.module.css
        ├── Marquee/
        │   └── Marquee.tsx      + Marquee.module.css
        ├── About/
        │   └── About.tsx        + About.module.css
        ├── Services/
        │   └── Services.tsx     + Services.module.css
        ├── Team/
        │   └── Team.tsx         + Team.module.css
        ├── Numbers/
        │   └── Numbers.tsx      + Numbers.module.css
        ├── Location/
        │   └── Location.tsx     + Location.module.css
        ├── Testimonials/
        │   └── Testimonials.tsx + Testimonials.module.css
        ├── CTA/
        │   └── CTA.tsx          + CTA.module.css
        └── Footer/
            └── Footer.tsx       + Footer.module.css
```

## Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build
npm run preview
```

## Tecnologias

- **React 18** + **TypeScript**
- **Vite** (bundler)
- **CSS Modules** (escopo por componente)
- Fontes: Cormorant Garamond + Jost (Google Fonts)

## Personalização

- Cores: edite as variáveis em `src/styles/globals.css` (bloco `:root`)
- Conteúdo: cada componente tem seus dados inline (fácil de migrar para um CMS ou API)
- Imagens reais: substitua os gradientes de placeholder nos componentes `Hero`, `About` e `Team`
