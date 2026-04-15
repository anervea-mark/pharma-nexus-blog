FROM node:20-alpine AS frontend
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM python:3.11-slim
WORKDIR /app
RUN pip install fastapi uvicorn[standard] --no-cache-dir
COPY --from=frontend /app/dist /app/static
COPY main.py /app/main.py
EXPOSE 8000
CMD ["uvicorn","main:app","--host","0.0.0.0","--port","8000"]