# GitHub README Badge

## Foydalanish

Har bir GitHub repo README.md fayliga qo'shing:

```markdown
[![Made by Bekhruz](https://img.shields.io/badge/Made_by-Bekhruz_Nutfilloev-C8A96E?style=flat-square&labelColor=0a0a0a)](https://bnutfilloyev.uz)
```

Ko'rinishi: [![Made by Bekhruz](https://img.shields.io/badge/Made_by-Bekhruz_Nutfilloev-C8A96E?style=flat-square&labelColor=0a0a0a)](https://bnutfilloyev.uz)

---

## Boshqa variantlar

### Minimal (faqat domain)
```markdown
[![bnutfilloyev.uz](https://img.shields.io/badge/portfolio-bnutfilloyev.uz-C8A96E?style=flat-square&labelColor=0a0a0a)](https://bnutfilloyev.uz)
```

### ML Engineer badge
```markdown
[![ML Engineer](https://img.shields.io/badge/ML_Engineer-Bekhruz_Nutfilloev-C8A96E?style=flat-square&logo=pytorch&logoColor=white&labelColor=0a0a0a)](https://bnutfilloyev.uz)
```

---

## Sayt footer uchun (HTML)

`components/badge/madeby.html` faylini copy-paste qiling `</body>` dan oldin.

## React/Next.js loyihalar uchun

```tsx
import MadeBy from '@/components/badge/MadeBy'

// layout.tsx yoki _app.tsx ichiga:
<MadeBy />                              // dark, bottom-right (default)
<MadeBy theme="light" />               // light background saytlar uchun
<MadeBy position="bottom-left" />      // chap burchak
```
