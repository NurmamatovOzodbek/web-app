from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

# Telegram BotFather'dan olingan token
TOKEN = "8968852637:AAFhCM3n1Egwgt_0JlBbRsUMFRvmRAUNsE0"
# HTML faylingiz joylashtirilgan havola (Masalan: GitHub Pages / PythonAnywhere)
WEB_APP_URL = "https://username.github.io/index.html"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("IC3 GS6 Testini Boshlash 🚀", web_app=WebAppInfo(url=WEB_APP_URL))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "Salom! IC3 GS6 Imtihoniga tayyorlanish simulyatoriga xush kelibsiz.\nTestni boshlash uchun pastdagi tugmani bosing:",
        reply_markup=reply_markup
    )

if __name__ == '__main__':
    app = ApplicationBuilder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    print("Bot ishga tushdi...")
    app.run_polling()