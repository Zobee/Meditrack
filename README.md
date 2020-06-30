---MEDITRACK---

V. 0.0.1
It's a glorified countdown timer currently.
Using hooks, I've managed to make a pretty simple countdown timer. In time, I'm hoping to 
actually make this a useful webapp. Buuut that's well away. Small, incremental steps for now.

Next Steps:
*Set timer to use minutes instead of seconds.
*Keep track of time meditated, most likely will need to start building a backend
*User Authentication
*Gamification elements that actually make this a worthwhile meditation app.

------------------------------------------------------------------------------------------------
V. 0.0.2

New Feature: ...minutes

Got the minutes working! It took a minute (ha) to actually get the progress bar moving, but I'm glad I got it. The display should count down the minutes and seconds, and accurately display them in the middle radial thing. Next phase is the time management. Doesn't seem too hard after that.


------------------------------------------------------------------------------------------------
V. 0.0.3

Header
TimeUp
Super Rudimentary login/sign up routes
Also routing

I'll clean these up, make them look all nice and presentable and shit. Then i'll move on to the backend. I anticipate a lot of backtracking as I think of new features. I just need to ensure that I maintain small, achievable goals with this one. 

Next Step: Style the header, finished page, and login/signup components
Next Next Step: Create a User Model and build up a tiny backend

Currently the timer page is the first thing that pops up. Maybe change that to a landing page instead. That's way later though. 

The other thing I need to do is figure out how the character is gonna work. I'm thinking gym-rat style. Where your relationship with your v-pet increases the more you meditate. You can buy it clothing/decorative items, have conversations with it. I want it to be the thing that greets you when you start the app. It'll ask you a question about how you're feeling, and will cater a particular type of meditation based on your response. Again, that's hella far away. I've got a bunch to do before I get there. The biggest obstacle is probably me getting bored. Which is why I really need to focus on small, attainable goals for now.

-----------------------------------------------------------------------------------------------
V 0.0.4

Added a basic backend login/sign up route with JOI validation and JWT authentication, with MongoDB as the backend database. I'll need to refactor the code later, but learning about hashing passwords, and building auth middleware was an interesting learning experience. I'm not 100% sure about how to hook it up to the front-end properly, but I've got some ideas.

I'll need to learn about redirection and routing after making requests. I'll probably also want to learn more about how hashing with bcrypt and JWT actually works under the hood, if I wanna turn this into a public app.  

Next Step: Sign up and login routes on the front-end. Sign up should re-direct to login page, and login should redirect to the user's dashboard. Maybe figure out how to fire an email to the new user with their credentials, but that seems a bit above my pay-grade right now.


------------------------------------------------------------------------------------------------
V 0.0.5

Controlled state for front-end signup/login pages. 
Added labels.