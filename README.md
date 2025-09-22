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
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
TWILIO_ACCOUNT_SID=your-sid
TWILIO_AUTH_TOKEN=your-token
```

## Run

```bash
# Development
yarn start:dev

# Production
yarn start:prod
```

## API

### Send Email
```
POST /notifications/email
{
  "to": "user@example.com",
  "subject": "Hello",
  "body": "Message"
}
```

### Send SMS
```
POST /notifications/sms
{
  "to": "+1234567890",
  "message": "Hello"
}
```
