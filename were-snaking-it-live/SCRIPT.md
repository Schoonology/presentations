## Talk introduction: 2.5–3 minutes

Clap once if you can hear me. Clap twice if you're in the back row.

---

Welcome! If you, like most people, didn't read the talk description, you would be excused for expecting this talk—_We're Snakin' It Live!_—to be about my brand new S.N.A.K.E. principle of software development.

Or *maybe* you’re here thinking this talk is going to introduce snakeJS, a new Broccoli plugin that makes JavaScript whitespace sensitive. Like Python? Get it?

Or maybe this is *finally* my chance to objectively prove that what your code *really* needs is snake *case*! And tabs! And Hungarian Notation.

Sadly, it’s not that talk.

---

*This* talk will be about AI—minus the marketing, hype, and all that groaning—real JavaScript that miraculously manages to be fun to write; and "jokes", where we will reintroduce all that groaning we removed from the AI parts.

---

To do all of that, we’re going to play a video game.

- Who here has *played* a game of Snake, or otherwise knows the rules?
- Who here played Snake on one of these, a Nokia 6110? (Awesome. I’ve found my tribe.)
- Who here played *this* version? (Whoa. Come say hi.)

---

For the uninitiated, here are the rules:
- Each :snap: game :snap: of Snake :snap: continues like a ticking clock.
- Each tick, your snake moves forward in the direction it's facing.
- Press an arrow key to change the direction of the snake to match: pressing "Right" makes the snake face right, not turn right.
- If your snake collides with the Macguffin—a fruit or a number or what-have-you—it grows.
- If your snake collides with anything else—the walls, another part of your snake—it dies.
- Your goal is to last as long as possible under these conditions.

---

👏🏻 Clap once if you're still with me. Yes, this will be a thing. You'll stay awake, and anyone in 126 and in the hallway will think my talk is _so good_ that you can't keep from clapping.

If you're ever confused, though, do two things: 1) don't clap, so I know I'm losing all of you, and 2) come ask me later. I'd be delighted to clarify anything that might still be unclear after 40 minutes of *this*. [Gestures at self.]

---

If this is a JavaScript talk, this is where I start teaching you how to make your own Snake game, right? We’re going to talk about sockets, rendering, client-server optimistism and latency and…?

No. This is also not _that_ talk.

---

Instead we’re going to flip *that* talk inside-out and upside-down, shake out its lunch money, and write some code that *plays* Snake. We’re going to make a Battlesnake.

---

## Personal introduction: 1.5 minutes

Though if you'll excuse me, I've already skipped the worst part of my talks: the introduction!

---

Hi. My name is Michael Schoonmaker, but nobody calls me that because it's too long, too formal, and there are too many other middle-aged white dudes named "Michael" running around. Instead, folks call me Schoon.

I have the honor and privilege of being a freelance consultant, but my interest in today's subject comes from making games. These days I make games under the name Legacy of Play, but more importantly I help _other people_ make games as an advisor to UNPUB.

If you like tabletop games of any kind, come join us next weekend up in my neck of the woods: after 4 cross-country moves; myself, my beautiful wife, our two amazing kids and our dog now live just up the road---in Baltimore, Maryland.

---

Pertinent to this talk I *also* happen to be in the Top 20—*percent*—of all Battlesnake players.

---

## Battlesnake introduction: 3.5 minutes

What is this "Battlesnake" thing, then?

Battlesnake is live, multiplayer Snake. The rules are the mostly same, and the goal is mostly the same, with a _few_ additions:

---

Food:

- Each Snake MUST eat something every 100 ticks, or it dies of starvation.
- Each tick is 500 milliseconds, so your snake has a little under a minute to live without food.
- For a standard match, food spawns once every 3 seconds or so on average.

---

Collisions:

- If a Snake hits the usual stuff: walls, itself, it dies.
- If two Snakes collide head-to-head, the smaller Snake dies.
- Otherwise—in the case of a tie—both die.

---

And you can play it right now, at play.battlesnake.com.

Insert a joke about this talk being over, cue laughter—I said cue laughter—and I've bought us all about a half-hour more vacation time.

[Sit down.]

---

Wait, what's that say? "Where... code... is... your..."

Dang it.

---

Well, I suppose this _is_ a tech conference. And I did promise you JavaScript. So let's write some JavaScript, then, huh?

---

> You know, I first heard about this Battlesnake game from an _investor_. (I'll keep them anonymous to protect the innocent.) And no matter how much respect I have for that person, they weren't the sort that I was going to take video game recommendations from. Know what I mean?
>
> We all have that friend who recommends the movie that gets good after the first hour, or the book that's been out of print for 10 years, or who fires up Zelda: Ocarina of Time every year for their birthday because that's when gaming "peaked".
>
> But I wound up wanting to design a game with programming, so after the contemporaries like CodeWars and Screeps, I remembered this dumb Snake game, and I opened up the website. The goal was clear enough: write some code that plays Snake like it's still 1991. Fine.
>
> But where's the editor? I don't get it.
>
> - Where do I write whatever God-forsaken language they've designed just for this?
> - Where do I unlock a "turn left" block with some horrific in-game currency and microtransactions?

---

But I was wrong. This wasn't just some dumb Snake game.

And much like Spiderman, late on the way to his second shift as a bartender,---each Snake actually _runs as a web server_. The Battlesnake service sends four requests, and your server's response defines what your Snake does:

> "That was awful. That was your worst one yet." —My wife

---

- The first, a sort of "Info" route, defines the appearance of your Snake. Your response defines the head, the tail, the color, and who's to blame for creating this offense against nature.
- The second, Start, notifies your Snake they've been entered into a new game, along with the rules of that game. The third notifies that a game has Ended. Neither expects more of a response than a courtesy 200 OK.
- The last, Move, is the workhorse: you get an updated view of the board, and respond with a direction: UP, DOWN, LEFT, or RIGHT.

---

👏🏻👏🏻 Clap twice if this is all clear as mud so far. Amazing.

Before we go too much further, let's see this in action, huh? This is the Snake we're going to build today, as I Julia Child a snake I put in the oven earlier:

[Replay]

---

This snake uses the three techniques we're going to learn:

- **Flood filling** to avoid tight spaces
- **Path finding** to seek out food
- **Height mapping** to better understand any nuances on the board

These are the same techniques used in the live AI of video games. And I know video game developers and web developers love to pretend that the work they do is special and unique to their corner of the programming game, but my career disagrees. And this is a web conference, so you're getting a talk on video game development.

---

One last disclaimer: I don't work on Battlesnake. I'm not a core contributor, I don't run tournaments, and I'm just a lurker on Discord. Until I warned them I was giving this talk, it's entirely likely no one there even knew I existed.

So why am I the one blathering on about this for _40 whole minutes_?

---

When I finally did try the game my friend the investor recommended—when I finally fired up NodeJS and wrote a really bad Snake—I quickly realized this has to be the _best_ way to mess around with code; to _play_ with code.

- Want to learn a new web framework? Build a Snake with it.
- Want to learn how to optimize JavaScript, or any other language? Take that Snake, and try to respond as fast as possible.
- Want to learn the AI techniques that have rapidly taken over the center of the board in our collective "programming game"? Build _two_ Snakes with different techniques, and have them face each other. You could use a neural network for one, and a generative per-trained transformer (this is what GPT stands for) on the other.

---

That, and it's just fun. The community is kind, and curious, and welcoming, and it's one of the most mutualistic and positive tech spaces on the Internet. I don't understand how this kind of thing still exists.

> The docs could definitely need to be updated, any suggestions are welcome!
> Thanks for the clarification. 👍
> I feel a real sense of community
> Thanks a lot for your time btw, appreciate that

---

You don't even have to publish them or compete on a Leaderboard! The Battlesnake team provides the tools to run your own games locally, and all the demonstrations and replays you'll see today use those same tools.

Furthermore they're open source. I had to tweak each of those tools—one in Go and one in SvelteKit—to support my talk format, *and you can, too!*

---

## First snake: 2 minutes of talking; 7 minutes total?

If I'm going to tell you it's that easy, and the Playbill says I'm live-coding this, we should be able to make a Snake right now, right?

Okay. Let's.

Let's make a Snake that follows those basic rules, even if it's not going to do very well.

So let's hop over to VS Code. There's a little mise en place here, as I've already created a new Node project and installed Express and Typescript. On the terminal we've got a watcher to restart the server as it changes.

---

In our `server.ts` file, we'll create our four routes, and respond with the correct results in each case.

- GET /
- POST /start
- POST /end
- POST /move

---

Our strategy is known as "You can’t go wrong if you always go RIGHT".

To test this we'll use this `run` script to run the `battlesnake` CLI. We'll put our new Snake in an empty room all by itself with no food, and watch it die.

---

Success!

Back in our slides, we can see what happened. Sure enough, the Snake always went RIGHT, and hit the wall.

Double success!

👏🏻 [If they don't clap, hold my hand to my ear.]

---

## Graphs

What if we _don't_ want to hit the wall? For that, we're going to have introduce some tool we can use to think.

---

Before *that*, though, one quick aside for any folks who don't have the misfortune of a formal Computer Science education: we're going to talk about "graphs".

Not _this_ kind. This kind. This is a graph. This is another graph. Y'all might be familiar with "trees", which are a subset. Trees are to graphs what paper people are to pieces of paper: technically, this is a piece of paper, and it'll take ink exactly as well as the piece of paper it was made out of, but if the person sitting next to you asked you for a piece of paper to take notes on during this _flawless and hilarious_ talk, this is strictly---the Chaotic Evil option.

---

In case either of these words fall out of my big mouth in the next twenty minutes, a "node" is any the _places_ on a graph (or a tree), and the "edges" are these lines that go from one to the next. This is where we could talk about "directed" graphs, "cyclic" or "acyclic" graphs, "subgraphs", and "coloring", but we're not going to.

---

What we _are_ going to do is acknowledge that our playing board is a funky sort of graph: every space on our board is one of those nodes, connected to every adjacent space with an edge. If those lovers of Greek letters and Arabic numbers—[math nerds]—have come up with any tool for _working with graphs_, we can now use it to play Battlesnake. You know, the way God intended mathematics to be used.

---

👏🏻 You know what to do.

---

## Flood fill

Now that we've discovered this new toolbox under a desk over in the math department, let's go back to our snake and its tendency to try and Kool-Aid Man itself off our board.

---

The root cause is that while we currently get the board state every Move, we don't yet use that data to make our decision.

---

We'll start with the simplest, called "flood fill". For those of us old enough to remember MS Paint, this is the algorithm used for this tool, the "bucket".

---

- We start with a space.
- If that space is clear—no walls, no snakes—that's 1.
- Mark it off, and recurse: checking in each direction from _that_ space.
- If we run out of unmarked spaces we can check, we're done. Pop the stack, and add up the size of that area.
- So we do this flood-filling for every direction we might head in, compare the sizes, and pick the biggest, safest region.
- If there’s a tie, we can bias toward a given direction for now, though we'll have a better answer for this later.

If we let this run, you'll see that the snake completely avoids both the walls and itself, and will turn _away_ from small gaps where it might get stuck.

[Replay]

👏🏻

Now our snake lives long enough to _starve to death_. Glorious.

---

## A* to find food

How do we find food? Real snakes may have an incredible sense of smell, but our Snake wouldn't be able to see a burger and fries right in front of its face.

---

There could be someone _microwaving fish one space away_, and it wouldn't even notice.

Fortunately, like taking surfing lessons in a banana suit,--- we're told exactly where the food sits on the board. So how do we _use_ that knowledge to make our Snake actually eat it?

Because the first step of solving any programming problem is knowing what to Google (or what to ask Slither-GPT),---the domain of problem we're talking about is called "path finding".

---

We're going to use a variant of Dijkstra's algorithm for this, called A*. It's called that because [computer scientists] are *famously* good at naming things.

What makes A-star a little more complicated than flood filling is all the terminology and bookkeeping it uses, so let's start there:

---

- As we go, we'll be "scoring" spaces. Score is an abstract term here, but it really means "how hard is it to get to or from this space"? We're only really worried about distance right now: each space we have to move is 1 more "point" in the score.
- The first step of that is to use a "heuristic function", mathematician-speak for "we're going to guess".
- We'll keep track of the best-known score—called G for some reason—for every space on the grid—Or, if you both remember and prefer the technically correct names, nodes in our graph—along with the _previous_ space we used to accomplish that score.
- Finally the "open set" is a priority queue of all the spaces we're still interested in. As we go along, we want to consider the _next, lowest_ score; the next space from which we think it would be the easiest to get to the exit.

The algorithm, then, like buying your very own Barbie Dream House, comes down to filling out all these forms.

[Coding:]

- We set up each of those data structures I've described.
- At every step, we want to look at the lowest-scored space in our open set.
- If that space is the space we're looking to path to, we're done! Build that path out of those "previous spaces", and get outta here.
- If it's _not_ our goal, we need to open up Pathfinding NextDoor and ask it about its neighbors.
- We score the journey from our current space to each neighbor, add that to the current space's score, and see if that's an improvement over our previous best.
- If it isn't throw it out. We already have a better route to that space.
- If it _is_ an improvement, add it to our G scores, and update that map of "previous" spaces.
- We continue this until there are no spaces left to consider, by which point we will have our route or it's unreachable.

👏🏻

---

One piece I elided there was the heuristic function itself, and here it is. What I want to point out is that it's simple to the point of being naive, but we only need it to be good enough to help us choose what order to look at our open set.

---

More specifically, as long as it...

- Sorts our open set from best to worst
- Produces scores that are equal to or worse than the real thing
- (Good Vibes Only) Strictly positive

...our [math nerd] friends _guarantee_ us this will find the _best_ path to our goal.

---

Let's see this in action.

[Replays]

👏🏻👏🏻👏🏻

That's so kind of you to applaud for our little Snake! It finds food consistently, and like some odd chimera between a snake and a goldfish, it will now live until it has eaten enough food to literally no longer fit in the space provided.

---

## Gray area

We covered flood filling to understand the difference between wide open plains and NYC apartments.

We covered path finding to understand how we might get to that NYC apartment from a wide open plain.

Thirdly, like a couple of dogs walking through Central Park in fall, autumn leaves in every direction...---let's talk about gray areas.

---

Remember, A* is about finding the _optimal_ path to a _known_ goal. And our flood fill algorithm was about finding the _safest_ choice between a set of directions. But much of improving at a game—Snake or otherwise—comes down to making better decisions in the gray area in between words like "safe" and "optimal".

---

So I'll leave you with one more technique, that I call "height mapping". If I was smarter or paid better attention in school, I might have named it after myself or some other white dude or included words like "tuning" or "bias". But I didn't. And I'm not. And like two halves of a HARIBO Twin Snake,---you're stuck with me, just as I’m stuck with a wife and two kids that like those disgusting things.

---

But first, you might be thinking, "Hold up, Schoon. You talked about AI [Aibo], but you didn't really talk about AI [Spot]," to which I'd say, "Fair enough."

---

So let's talk about neural networks.

I know it's a hot enough topic right now [Hot Topic] that you've seen everyone and their poodle explain how these and Large Language Models work, but I'm going to give you the basics again anyway.

---

A neural network aims to replicate some of the way our own neurons work by connecting a graph of nodes cleverly _called_ "neurons" with weights and edges. You have a series of "input neurons" on one side, each layer of neurons looks at the previous layer, and through these weights and edges contributes to the next layer. Finally a series of "output neurons" gives some fuzzy answer.

As a mathematical tool, it is incredibly powerful! So why did I just waste 20 minutes of your life talking about something _other than_ CNNs, GANs, GPTs, and other TLAs?!?

---

I accidentally left behind my case of props, but _this_ is a Donkey Car, and it drives itself using a neural network powered by a library called Tensorflow. It's designed to race against other autonomous cars its size, and the one that I built is _very_ cool. Thank you for saying so.

---

I told you what this layer is called: it's the "input" layer. For this car, it's built from what it sees in the camera up front.

And I told you what this layer is called: the "output" layer. How much throttle should it give? How far left or right should it steer?

Do you know what these layers are actually called?

Hidden layers.

I didn't teach you about neural networks because they have a pernicious risk to them. And I'm not talking about the collective carbon costs of running something like Chat-GPT, using more power than a developed nation to help you optimize a SQL query.

No, *this* risk lies in the "hidden" part of those hidden layers.

While those weights I described _could_ be hand-tuned, nobody does that. Instead, they feed "training data" into the network—a "training set" of known inputs and outputs—and ask the system to balance its own weights until the network would generate the same results. I drive the car around, and it's paying attention to any relationship between the camera feed and the controller inputs.

Theoretically after this training process, you could feed "novel" data into the inputs, and get a reasonable output. Most training processes test this assumption with a _second_ set of known inputs and outputs, continuing to demonstrate the boundless creativity of mathematicians and AI researchers in being called the "testing set".

Now, what happens if you deploy this network, feed it real world input, and it produces an output that you don't expect? What happens when I tell this car to go, and it careens STRAIGHT into the nearest ditch?

Anybody know?

---

You *shrug*.

Why did GPT-17 hallucinate some horrible, offensive, or wildly counterfactual output when asked about such-and-such a topic? Shrug.

Why did a much BIGGER self-driving car slowly lurch through an active and roped-off crime scene? Shrug.

Why did Apple Maps send me down a dirt road, when the highway was _right there?_ Well, okay, that's a bad example. It's actually just using a path finding algorithm like we've already talked about.

But more importantly and back to the point at hand, _why did my snake go RIGHT when clearly LEFT was the right choice?_ Shrug.

---

I'll tell you a secret: what I _am_ teaching you today _is_ AI, but it's AI that a human can observe and understand, _live_. I told you as much at the top: these same tools are used _today_ in games from Baldur's Gate to Minecraft, they're older than Doom and the odds are good that GOTY 2030 will use them, too.

---

Your marketing team can still call it "AI" with _all_ the branding, while you use techniques that keep a human in the loop, that a human can fix, and whose decisions are clear to the *brilliant* humans *like you* that build it and maintain it.

---

So for today and for now and while our goal is more "play and have fun" than "win at all costs", we're going to make like a peanut with a Geiger counter and avoid the radioactive elephant in the room.

---

## Height maps

Back to height maps.

---

What we want to do is take all the information: other snakes, walls, food, and the like, and compile a “height” that accounts for all of them simultaneously. “Higher” terrain means riskier terrain, and “lower”, safer. All else being equal, our snake slithers “downhill”.

---

I lied earlier. [Though if you ask a small child, _it's not lying_, I simply didn't tell you the truth.] There's one more rule in Battlesnake, and it has to do with "hazards".

---

The _reason_ your snake dies after 100 turns with no food is that every time it moves, it loses 1 Health. And whereas Food restores a Snake's health to 100, a Hazard will _reduce_ the Snake's health by some amount; typically bringing the total "damage" of a Move to 15.

---

The "height" we can use for our heightmap, then, should correspond to the literal risk to a snake's health.

Remember the "scoring" discussion around A* earlier? Now we have an even better score: height. Rather than add 1 for each space, we can add the height of that space, so that the _easiest_ route to our food is also the "shortest" path as far as A* is concerned.

---

There's not even a new algorithm here, we need only to worry about data structures:

- Battlesnake gives us the structure that best supports their needs as an API provider: we get a width, a height, and an Array each for Snakes, Foods, and Hazards.
- What we _want_ to do is look at one space on the grid, and see what lives there.
- What we _will_ do is loop through these arrays we're given, and compile our own Map of locations to heights.

---

- As we loop through the Hazards and Snakes, we'll increase the height.
- As we loop through the Foods, we'll decrease it. Remembering back to A*, we need to be careful that this doesn't make the height _negative_.
- And for good measure, we can "bump out" the wall a little bit, adding a touch of height and keeping our Snake away from the edges.

👏🏻👏🏻

To really show this in action, here's a custom map that generates a series of mazes made of out hazards, with a piece of food as the "goal" of each maze. Make it to the food, the maze resets.

Let's see what happens.

[Replay]

Hmm... that last bit is a little weird, but maybe it's just proof that we really did write this in JavaScript.

And with that we're playing the game, and we're playing reasonably well. We won't win the majority of our matches (most Snakes don't), but but we'll win a few.

👏🏻

## Next steps

If we wanted to make it even better, though, what would we do?

First up, the basics:

1. Decision-making. Our snake wants food like Joe Biden wants to be cool, but it doesn't have to be that way. We could elect someone who's _not_ an octogenarian white dude to the White House, and teach our snake to prioritize survival over its bacchanalian feast.
2. Frameworks. We wrote this in vanilla Express, but I'm sure you could write this more succinctly in whatever framework you actualy use every day.
3. Languages. We wrote this in TypeScript, but there are Snakes are written in Kotlin, C++, Python, Go, Rust, Java, and even Bash (#!/bin/shnake). There are actually very few Snakes competing with JavaScript right now, and I think that's a shame.
4. Hosting. We ran today's snakes on this laptop, but "competitive" snakes (serious airquotes there) use long-running boxes in the cloud somewhere, like DigitalOcean, or Linode, or even Oracle Cloud. [I know!] What about the other end of the spectrum? How small of a device could you get a Snake to run on?

Getting more advanced on the techniques side:

- There's a technique called "minimax" we could use to make decisions. Minimax is a completely orthogonal approach to what we did today, as it relies on simulating the game's potential outcomes. That makes it _way_ out of scope for a talk like this, but it's commonly used in games like chess, Go, and Battlesnake.
- Genetic algorithms are a generational process that's more straightforward than it gets described. We could use one to weigh the priorities our snake uses, or to find a better height map.
- And if you _are_ considering generative AI, I'd again recommend a platform like Battlesnake as a low-risk sandbox to learn and to experiment. I may not be an expert, but I am convinced there is _some_ way to make neural networks more observable in production, which would address one of their core weaknesses.

👏🏻👏🏻👏🏻 (I promise, this is the last one.)

## Head to head

But even without all that, how good is our snake already? Well, let's put it through its paces. Let's play some Battlesnake!

I mentioned that there are four primary Game Modes in Battlesnake: Duel, Standard, Royale, and Constrictor.

Let's start with the smallest and the simplest: Duel. And to make things more interesting, we'll throw another Snake in the ring. This is the Snake I keep in competition, written in Rust.

[Replay]

Awesome! How about a Standard match, and this time we'll use one copy from each stage of today's talk against that same Rust model (who does a little more). Same as its predecessor: last snake still slithering wins.

[Replay]

Constrictor is a little different: there's no need to eat, because your Snake perpetually grows. I don't expect our Snake will _thrive_ in that environment: the priorities are completely different, and more about maximizing "use of space" than a typical match.

[Replay]

Royale is where things get _interesting_: we'll have Hazards again, which descend on the center of the board as time goes on. Our Snake will need to manage its quest for food against their risk to life and...well, I guess it's not "limbs", because it's a snake, but you get the idea.

[Replay]

Bonus round! On top of Leaderboards, the Battlesnake community regularly runs Tournaments, and the last few used a new game mode, called "Snail". Each Snake leaves a slime trail behind it. That trail is made up of Hazards, is as long as the Snake, and has more of those Hazards stacked up nearest the tail.

[Replay]

I know I keep using words like "simple" to lull you into a potentially false sense of security, but I don't want to lose sight of what we did together today.

So where do I think you go from here? Ideally, upstairs. The keynote is next.

If I've convinced you to try Battlesnake, though, check it out at play.battlesnake.com. (That part wasn't a joke.) If you have any questions about anything I've talked about today, come find me around the conference or send me an email.

Thank you all so much for your time and attention today. It was a generous gift, and it was an honor to be here.

👏🏻👏🏻👏🏻👏🏻
👏🏻👏🏻👏🏻👏🏻
👏🏻👏🏻👏🏻👏🏻
