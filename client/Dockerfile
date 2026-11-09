# 1. Базовый образ Node.js
FROM node:22-alpine

# 2. Рабочая директория внутри контейнера
WORKDIR /app

# 3. Копируем package.json и package-lock.json
COPY package*.json ./

# 4. Устанавливаем зависимости
RUN npm ci

# 5. Копируем остальные файлы проекта
COPY . .

# 6. Открываем порт приложения
EXPOSE 5173

# 7. Запускаем приложение
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]