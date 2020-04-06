## Course Catalog

The Course Catalog application does not presently use a JSON to seed data. It only uses frontend data written in pure JavaScript. As such it can start by simply running `npm start`. The program will run on [http://localhost:3000](http://localhost:3000) and can be viewed through a browser.

## Seeded Users

In order to access the user-only portion of the app, one must navigate to the Sign In page using the header (or being forceably redirected from another url). There are three users with usernames `student1`, `student2`, and `student3`. Each has a password of `sitel`.

Because the app does not utilize a JSON server, no changes will be persisted after leaving the program or refreshing the page. However, state is managed with Redux, so changes (favoriting courses, logging out then back in) will persist. (Changes to a user's usernames, passwords, and contact information will not persist and is kept for display purposes only.)

Each student has different settings appropriated to it. student1 represents someone with access to all courses; student2 represents someone with access to all courses marked as introductory courses; student3 represents someone who has been provided with only limited access to a few courses. student3 has also completed one of their courses and it is marked on their profile and on that course's page with an icon.

## Views

Most views are incomplete at this time. The view found on the [course page](http://localhost:3000/courses) is the most complete with the view found on the [favorites page](http://localhost:3000/favorites) appearing very similar. Other views include:

* Home View: /home
* Course Info View: /courses/:id
* Sign in: /login
* Profile: /profile

Most views are only available when a user is logged in. Because of the non-persistance of the user, navigation must be made inside the application (not via the browser's navigation bar).

## Styling

The application makes use of Material UI components and uses their suggested theme & styling hooks pattern. Flexbox organization is used where appropriate to make the app as fairly friendly to small screens. The app is optimized for Google Chrome running on desktop.

## Other Mock Data Notes

Course names were taken from a course name generator.