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

Got the sign up and login routes working. Redirection is a bit clunky, still. But I'm glad I found a way to get protected routing all nice and loaded and stuff. It's SUPER rudimentary, but it's mine. I made it. So that's cool.

Also, shit. I'm a fuckin idiot and exposed my URI to the world. EMERGENCY DELETION, BABY
REMEMBER TO CHANGE URI AND SECRET TOKEN BEFORE GOING LEGIT WITH THIS

Next Step: Add to the User model, and allow users to add meditation sessions, which can then be seen on their dashboard.

------------------------------------------------------------------------------------------------

V 0.0.6
We in the context api era now, baby. I'm not sure if I'm using it 100% correctly. But for simple state management, it seems to work well. I could just use a function to check if the token is still in local storage, I guess. But this takes up less code... I think. 

The biggest issue I have right now is that re-directs are a bit clunky. The component gets rendered and then redirects. I want the redirect to happen before the component renders. I think putting the redirect logic in the parent component could help with that. So I'll mess around with this a bit, until I figure out what the hell it is I'm doing. It doesn't seem right to have the token added to localstorage as a separate thing from the user context. 

Conditional Header Link Render dependent on logged status. I added a logout button that removes the token from localstorage, and returns everything to it's default, logged out state. It's a little fidgety, but I think with a bit more cleanup, it'll work.

Maybe I should add a landing page. The timer is the first thing you see. It's also not private. I'm not sure if I should private the route. 

I've also added super simple (and not totally done) backend routes to add meditations, update the user's character, and delete user accounts. CRUD, baby.

Next Step: Add the front-end for the routes I've made. 

------------------------------------------------------------------------------------------------

V 0.0.7
Kinda got some front-end connectivity going. It's really simple, but I think it's so cool that this works. We have full-blown CRUD now. Function to save meditation to history created. Character component gets information about the character and presents it. A delete account button that... does exactly what you think.

Also made some slight tweaks to the userModel for later.

Maybe I should destructure the user object in the context component, instead of sending it to components that require context wholesale? I should probably have all axios functions declared here, then just shove it all into an object.

Removed the 'About' component. If I'm gonna be using a landing page, it's redundant to have an about page. I'm not sure if I want to incorporate a sign up form on the landing page, or just have a CTA button.

Added a bit of styling to the home/landing page, and sign-in. Nothing too drastic. I also made a logo. 

Next Step:

Find a way to cleanly display dates on the front-end (will probably need to clean them up on the backend first). 
Style the character page and create a way to update the character info on the front-end. 
Also, should probably find a way to make jwts expire
Create a landing page


------------------------------------------------------------------------------------------------
V 0.0.8
I spent way too much time on getting a rudimentary landing page going, but we gotty. My code looks like dogshit, but I'm glad that I'm steadily making progress. Got some linking and re-direction set up, and I changed the name to ponder. Since we're getting kinda fishy anyway.

Next Step:
Revamp the character page. I think it's a bit too early to add all the gamification elements I'm thinking about, but I can't do any of it without first getting the character page up and running.


------------------------------------------------------------------------------------------------
V 0.0.9

I'm reusing code in a lot of places. The biggest offender is 
"if(!user) window.location = '/landing'"
I should find a way to cut that shit out.
Beyond reuse. It doesn't work great. If you reload, you'll get redirected to the landing page.
That's cause of the big issue I've been avoiding, and that's useContext ain't working like I thought.

GAME BREAKER: Trying to log in with a fake email breaks the site. This is a front-end issue. It's coming from the fact that the error message is an object, rather than a string. 
*I've just 'fixed' this. tbh, I'm not sure if it's the ideal way to handle this, but there ya go.

Added a very minor degree of front-end integration. There's a lot of code reuse between the signup and login routes, so they'll need to be refactored later. It also needs to actually list what the problem is.

It looks like any component that's currently using context re-renders about 4 times if there's a useEffect that checks for a user's status. 
*Turns out this is a 'feature' of using 'strict-mode'. The double render won't occur in production.

Realized that I probably don't need the meditated today boolean in the backend, since I can figure that out on the front-end. I've got it working front-side.

Added a tooltip for achievements. When you hover, it tells you what it is, and gives a little description. I'm not sure if i want to house achievement info on the front-end or backend. If it's front-end, I won't need to worry about extra processing, or storage. But on the backend, I'll be able to customize and timestamp the achievments. Leaning towards backend for now. 

Also, I'll need to make a separate Achievement component to dynamically render them.

Added streak functionality and date-checking in the character page.

TL:DR Lots of cleanup and error fixing. My code's a mess, but we're getting somewhere. I need to get better at organizing this.

Next Step: Finish the character page. I keep jumping between design and functionality. It's getting somewhere, though.


------------------------------------------------------------------------------------------------
V 0.0.10 - Road to MVP

Created an 'Achievement' component. It's using dummy data right now, but I'll create a set of achievements later. I need to find a way to determine whether an achievement has been... achieved yet.

Fixed the streak function to work regardless of time of day.

Split the status elements (stats, calendar, metrics, achievements) into their own separate components. A bit of clean-up/refactoring

I need to add an achievements object to the backend user model. Then routes to add achievements. I think I'll make it so that achievements on the front and back use the same id numbers. So you earn an achievement, an object with an id corresponding to that achievement, and the date that achievement was earned is pushed to the achievements backend array.

Right now, the Achievements and Status components are stoopit, and don't meaningfully interact with the backend at all. I've created an 'add achievement route on the backend'

Also the styling is pretty bad, not gonna lie.

I'm spending too much time trying to figure out how stats and items are gonna work. For now, I'll put them on the backburner and just focus on reaching MVP. For that I'll need:

*A robust calendar
*Data visualization elements for stats
*The egg screen on sign-up
*Better character edit/delete components
*An overhaul of the timer component for guidance during meditations
*The conversation mechanic
*Achievements that actually work

The above are enough to keep me busy for a while, and once I have them going, I'll feel more comfortable in gauging interest. I'll get back to the more gamey aspects later, but these are the most pressing right now.

Let's break these down:

The Calendar
*Display a calendar with the days meditated filled in
*List the current and longest streaks both textually and visually
*The duration/frequency of meditations on any given day determines how saturated the filled in mark on the calendar is (like github's # of commits)
*Has the ability to scroll back to look through previous months

Stats Data
*Visually displays the number of times meditated, frequency of meditation, and minutes meditated
*Kinda like how fitness trackers display calorie information. Day-by-day, month-by-month, year-by-year comparisons
*Option to display data in different formats. Textually, bar graph, chart, etc

Sign-up Egg
*After signing up, but before logging in, you get shown a simple animation of an egg hatching. The egg hatches into a random v-pet avatar of a random colour, and with a random name. You have the option of making a change to the name/colour of the avatar on this screen
*Adds a bit of intrigue, and (ideally) imposes an immediate connection between the user and their meditation pal
*Thinking I'm gonna need some MASSIF error handling here. What if the user closes the browser at this point? Is there a default I revert to?

Better character edit/delete components
*Separate into individual components?
*Edit allows you to change name, colour, maybe species, and maybe allows you to change some of the previous conversation options you've input prior
*Delete component's gotta be HEART-ASS-WRENCHING, with several safegaurds in place (maybe implement a security question type deal)

Timer Overhaul
*I'm thinking I don't actually need the progress-ring. Sad, cause that was the impetus for this whole project
*Meditation should be 'guided' by your pet. It pops up to ask you some questions, and starts the meditation
*Screen dims on start, the display disappears, and guided meditation text will appear intermittently. The frequency and content depends on the type of meditation being performed
*Map pause to spacebar, remove the button entirely
*Maybe I should limit the time input, or turn it into a select option
*The TimerEnd component needs a lot of design work
*Maybe have ambient visuals, like bubbles floating along, or something.
*I'll need a sound to signify the end of the meditation

Conversations
*The initial meditation start conversation
*Occasional conversation on character screen
*The screen dims, and your character pops up, a text box appears with the content of what the character is saying. Click/tap to proceed
*Sometimes, the character will prompt you with a question. Either multiple choice, or with an input. I'll need to find a way to design that visually
*Character conversations will help to engage the user. Answers to questions may be used during the meditation
*I'll need to house those answers on the backend

Achievements
*Achievement Unlocked modals
*A cleaner display page
*More achievements
*Fix the backend so that it actually works

Beyond that, I haven't even started on responsive/mobile design. That's another aspect that's gonna take some time.

Next Step: Get Achievements running