# ML Gap slides

Put the final deck here as `slides.pdf`, commit it and push to `main`.

- It is **not** in `public/`, so nobody can download it early.
- `/mlgap/slides.pdf` serves it only after `SLIDES_UNLOCK_AT` in `lib/mlgap.ts`
  (24 Nov 2026, 13:30 Tashkent). Before that it redirects to `/mlgap`.
- `/mlgap` re-checks once a minute and switches "Slides go live right after the talk"
  to the download button by itself. No deploy is needed on the day.
- If `slides.pdf` is missing, the page stays in the pre-talk state even after the unlock time.
