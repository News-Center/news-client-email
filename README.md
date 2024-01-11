# General Purpose

The purpose of various news clients is to provide users with news updates from other sources than our website. Users have the flexibility to register for multiple services, one of which is the `news-client-email`. This allows users to receive news updates directly within the Discord platform, enhancing their ability to stay informed through diverse channels beyond conventional web interfaces.

# How it works

The news clients receive pertinent news updates from the news-manager. In particular, the email news client employs the Node.js library `nodemailer` to transmit these updates to users. The process unfolds through the following steps:

### News-Manager Interaction
News clients, such as `news-client-email`, communicate with the News Manager to retrieve the latest news updates. The clients initiate this interaction by making RESTful API calls to specific routes provided by the News Manager. These REST routes serve as endpoints through which the clients receive the desired news content.

### NodeMailer Integration
Leveraging the capabilities of the nodemailer library, the news-client-email efficiently structures and formats the news content for email delivery. The nodemailer library then interfaces with the email service to transmit the curated news messages to users' email addresses.
This integration ensures a smooth and reliable flow of news updates, enhancing the user experience by delivering timely and relevant information directly to their email inboxes.


# Setup

## Prerequisite

- Node.js Version 16
- npm Version 8

## Dev-Setup

1. Clone the repo

```bash
  git@github.com:News-Center/news-client-email.git
```

2. Install dependencies

```bash
  npm install
```

3. Setup the .env file (For a Quickstart copy the example from the `.env.example` file)
4. Start the application

```bash
  ubuntu run
  make up
```

## Production-Setup

Use `news-kraken` to deploy the entire application to a server. For more information see refer to the news-kraken
repository.

