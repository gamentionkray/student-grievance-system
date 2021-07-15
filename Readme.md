# STUDENT GRIEVANCE SYSTEM

_Student Grievance System is built on the Smart India Hackathon topic. The front end of the project is created using ReactJS's framework NextJS. For the back end, the ExpressJS framework is used. The database used in the project is MySQL._

---

> To start using, follow these steps:
>
> **1. For front end:**
>
> > a. cd client
>
> > b. npm install _OR_ yarn install
>
> > c. npm run dev _OR_ yarn run dev
>
> **2. For back end:**
>
> > a. cd server
>
> > b. npm install _OR_ yarn install
>
> > c. npm run dev _OR_ yarn run dev

```diff
! Note:- You need to have MySQL installed and running locally on your machine.
```

> To learn how to install XAMPP server on windows 10, click [here](https://youtu.be/-f8N4FEQWyY)

#### Configure your port, add a .env file on the server, and configure the database host, user, password, and database_name accordingly.

---

**API endpoints till current update**

| Operation     | API route          | HTTP method |
| ------------- | ------------------ | ----------- |
| User Register | /api/auth/register | POST        |
| User Login    | /api/auth/login    | POST        |

---

###### **_Even though the NextJS framework is used, we have used ExpressJS as the backend to make the web app easy to be deployed and to keep the logic of the front end and the back end separate._**
