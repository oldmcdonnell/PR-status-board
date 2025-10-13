# PR Status Board
Monitor open and closed GitHub PRs with real-time status updates and intelligent caching.


## Quick Start

You can access the live deployed version here:
  **[https://v57-tier3-team-38.onrender.com](https://v57-tier3-team-38.onrender.com)**

Login using your **GitHub account** — Login isn't required to use the website.

If you are a developer and want to run this project locally:

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd project-pr-team38
   ```

## Our Team

Everyone on your team should add their name along with a link to their GitHub
& optionally their LinkedIn profiles below. Do this in Sprint #1 to validate
your repo access and to practice PR'ing with your team *before* you start
coding!

- Eoin McDonnell: [GitHub](https://github.com/oldmcdonnell) / [LinkedIn](https://www.linkedin.com/in/mcdonnell-eoin)
- Marissa Lamothe: [GitHub](https://github.com/msrissaxox) / [LinkedIn](https://www.linkedin.com/in/marissalamothe/)
- Spandan Mahat : [GitHub](https://github.com/spandanmahat00) / [LinkedIn](https://linkedin.com/in/spandan-mahat-078662266)
- Trevor Topolski : [GitHub](https://github.com/Trevor-04) / [LinkedIn](https://linkedin.com/in/trevortopolski)

- Adelola Abioye: [GitHub](https://github.com/Adel-abio) / [LinkedIn](https://www.linkedin.com/in/adelola-abioye/)

## Overview

Welcome, Chingus!

Something all project teams seem to struggle with is getting their GitHub Pull Requests (PRs)
reviewed in a timely manner. Few things hold up team progress more than having changes
queued up waiting on other team members to review them.

Wouldn't it be helpful if teams had a PR status board customized to their team to help them
track not only PR's that are waiting review, but also PR's that have been completed? Yes, 
GitHub provides this, but it is very basic and teams need all the information they can get.

In this voyage, your team will design and build a web application, the _PR Status Board_,
to track current PR's waiting review as well as the history of PR's completed by the team.

Your objective is to create an application that will utilize GitHub's REST API to retrieve
current and historical PR status for the PR's created on your team repos. We'll provide you
with instructions on how to create a read-only API key so you will be able to access this 
information, as well as [sample code](https://github.com/chingu-voyages/voyage-project-pr-status/tree/main/src) to demonstrate how to retrieve this data through GitHub's API.

Since GitHub's API is _rate limited_ the first feature you implement must be to retrieve and
save the data returned so you can replay it to test your app, without having to access it
through the API while you are testing.

The _PR Status Board_ will help you build new _soft skills_ and refine your current role-based skills. It will also let you build new skills and experience using AI - but, more on this
below.

## General Instructions

This project is designed to be worked on by a team rather than an individual
Chingu. This means you and your team will need to thoroughly read and
understand the requirements and specifications below, **_and_** define and
manage your project following the _Agile Methodology_ defined in the
[Voyage Handbook](https://github.com/chingu-voyages/Handbook/blob/main/docs/guides/voyage/voyage.md#voyage-guide).

As you create this project make sure it meets all of the requirements, but once
you've reached your _Minimum Viable Project (MVP)_ state, start implementing the optional 
features or get creative and extend it in ways we haven't envisioned. In other words, use
the power of teamwork to make it distinctive and unique.

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and include:

   ```bash
   NEXT_PUBLIC_GITHUB_TOKEN=<xyz>
   NEXT_PUBLIC_GITHUB_ORG=<xyz>
   NEXT_PUBLIC_GITHUB_REPO_NAME=<xyz>
   GITHUB_CLIENT_ID=<generated_client_id>
   GITHUB_CLIENT_SECRET=<generated_client_secret>
   NEXTAUTH_SECRET=<generated_secret>
   NEXTAUTH_URL=http://localhost:3000
   ```

   These variables are required for GitHub OAuth login via `next-auth`.

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   npm start
   ```


## Major Features

* **GitHub Login:** Secure authentication using NextAuth and GitHub OAuth.
* **Open & Closed PR Views:**

  * Track open pull requests in real time.
  * View previously closed or merged PRs.
* **Advanced Filtering:**

  * Search by title, author, or PR status (`Unapproved`, `Pending`, `Requested changes`, `Approved`).
* **Sorting:**

  * Sort results by creation date, last update, or title.
* **Caching Mechanism:**

  * Uses browser **Local Storage** to cache results and minimize API requests.
* **Dynamic Time Display:**

  * Shows last activity in hours or days (e.g., “1 day 2 hours ago”).
* **Responsive UI:**

  * Clean, adaptive layout designed with TailwindCSS for desktop and mobile.
* **Deployed on Render** with automated build and serverless deployment.


## Tech Stack & Dependencies

**Framework:** Next.js (App Router)


**Language:** TypeScript


**Styling:** TailwindCSS


**Auth:** NextAuth (GitHub Provider)


**API Integration:** Octokit (GitHub REST API)


**Deployment:** Render (frontend & backend combined)


**Caching:** LocalStorage

Dependencies (see `package.json` for full list):

```json
"dependencies": {
  "@google/generative-ai": "^0.24.1",
  "next": "15.5.2",
  "next-auth": "^4.24.11",
  "octokit": "^5.0.3",
  "react": "19.1.0",
  "react-dom": "19.1.0"
},
"devDependencies": {
  "@eslint/eslintrc": "^3",
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "15.5.2",
  "tailwindcss": "^4",
  "typescript": "^5.9.2"
}
```


## Deployment

Deployed using **Render** for both frontend and backend.
Caching handled via local storage.

Live site:
🔗 **[https://v57-tier3-team-38.onrender.com](https://v57-tier3-team-38.onrender.com)**


## Our Team

- Eoin McDonnell: [GitHub](https://github.com/oldmcdonnell) / [LinkedIn](https://www.linkedin.com/in/mcdonnell-eoin)
- Marissa Lamothe: [GitHub](https://github.com/msrissaxox) / [LinkedIn](https://www.linkedin.com/in/marissalamothe/)
- Spandan Mahat : [GitHub](https://github.com/spandanmahat00) / [LinkedIn](https://linkedin.com/in/spandan-mahat-078662266)
- Trevor Topolski : [GitHub](https://github.com/Trevor-04) / [LinkedIn](https://linkedin.com/in/trevortopolski)
- Adelola Abioye: [GitHub](https://github.com/Adel-abio) / [LinkedIn](https://www.linkedin.com/in/adelola-abioye/)


## About Chingu

This project was built as part of **Chingu Voyage 57**.

Learn more: [https://www.chingu.io](https://www.chingu.io)
