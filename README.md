# Notification Service

A simple notification service built with NestJS for sending emails and SMS.

## Setup

```bash
yarn install
```

## Environment

Create a `.env` file:

```env
PORT=3000
```

## Run

```bash
# Development
yarn start:dev

# Production
yarn start:prod
```

## Run with Docker

```bash
# Build and run
docker-compose up --build

# Run in background
docker-compose up -d

# Stop
docker-compose down
```

## API

### Health Check
```
GET /health
```

Returns service status and basic information.
