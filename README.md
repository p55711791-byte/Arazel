# TSWW — سایت سرور تیم اسپیک

سایت تک‌صفحه‌ای فارسی با تم مشکی/نقره‌ای برای سرور تیم اسپیک **tsww.ir:6360** — آماده استقرار روی GitHub Pages.

## استقرار
1. فایل‌ها را در ریشه ریپو (یا پوشه `docs`) قرار دهید.
2. GitHub: Settings → Pages → Source: شاخه `main`، پوشه root (یا docs).
3. آدرس: `https://<username>.github.io/<repo>/`

## فایل‌ها
- `index.html` — صفحه اصلی (اتصال، رنک‌ها، تماس)
- `style.css` — تم مشکی/نقره‌ای، RTL
- `script.js` — کپی آدرس سرور با fallback
- `assets/logo.png` — لوگو

## نکات مهم
- لینک اتصال: `ts3server://tsww.ir?port=6360`
- در صورت باز نشدن، دکمه «کپی آدرس سرور» (Clipboard API + fallback با execCommand).
- ⚠️ قیمت رنک‌ها **نمونه (PlaceHolder)** هستند؛ در `index.html` داخل `<p class="price">` جایگزین کنید.
- ⚠️ **لینک تماس PlaceHolder** است؛ در `index.html` عنصر `#contactLink` را با لینک واقعی (تلگرام/دیسکورد و...) جایگزین کنید.
- ⚠️ **تعداد آنلاین نمایش داده نمی‌شود**؛ نمایش آن به بک‌اند نیاز دارد (TeamSpeak ServerQuery یا API واسط). هر عدد آنلاین در یک سایت استاتیک معتبر نیست.
