## Talk introduction: 2.5–3 minutes

Give me a thumbs up if you can hear me. Excellent.

Ladies, gentlemen, and those that do not adhere to a Victorian sense of either taxonomy or decorum:

Welcome! If you, like most people, didn't read the talk description, you would be excused for expecting this talk to be about my brand new S.N.A.K.E. principle of software development:

Single responsibility
No surprises
Asynchronous
Komposable
Entirely written in JavaScript

Or *maybe* you’re here thinking this talk is going to introduce snakeJS, a new Broccoli plugin that makes JavaScript whitespace sensitive.

Or maybe this is *finally* my chance to objectively prove that what your code *really* needs is snake *case*! And tabs! And Hungarian Notation.

Sadly, it’s not that talk.

*This* talk will be about AI—minus the marketing, hype, and groaning—real JavaScript that miraculously manages to be fun to write; and "jokes", where we will use all that groaning we removed from the AI parts of the talk.

To do all of that, we’re going to play a video game.

Who here has *played* Snake, or otherwise knows the rules?
Who here played Snake on one of these? (Awesome. I’ve found my tribe.)
Who here played *this* version? (Whoa. Come say hi.)

For the uninitiated, here are the rules:
- Each :snap: game :snap: of Snake :snap: is comprised of a series of turns.
- Each turn, your snake moves forward in the direction it's facing.
- Pressing an arrow key changes the direction the snake is facing to match: pressing "Right" makes the snake face right, not turn right.
- If your snake's head collides with this version's Macguffin—a fruit or a number or what-have-you—it grows in length by one: while the rest of the snake moves forward, the rearmost section duplicates itself.
- If your snake's head collides with anything else—the walls, another part of your snake—it dies.
- Your goal is to last as long as possible under these conditions, ostensibly with some manner of score attached.

👏🏻 Give me another thumbs up if you're still with me. Yes, this will be a thing. If you're ever confused, though, do two things: 1) don't react, so I know I've lost you, and 2) please ask me later. I'd be delighted to clarify anything that might still be unclear after 30 minutes of *this*. [Gestures at self.]

Part of that confusion might be that this talk is *ruthlessly* cut down from a longer, live-r version that is both a work in progress and a conversion from Rust. Thank you all for being my Guinea Pigs, but the same rules apply.

If this is a JavaScript talk, this is where I start teaching you how to make your own Snake game, right? We’re going to talk about sockets, rendering, client-server optimistic whizbangery and latency and…?

No.

Instead we’re going to flip *that* talk inside-out and upside-down, shake out its lunch money, and write some code that *plays* Snake. To be specific, we’re going to make a Battlesnake.

## Personal introduction: 1.5 minutes

Though if you'll excuse me, I've already skipped the worst part: the introduction. Who am I? Where do I exchange my time and talents for money? Can you work there, too? Should you *care*?

In order, that's:
- Schoon
- Squad
- Maybe
- Probably not.

Hi. My name is actually Michael Schoonmaker, but nobody calls me that because it's too long, too formal, and there are too many other middle-aged white dudes named "Michael" running around. Instead, folks call me Schoon.

I have the honor of being the CTO of a startup called Squad, working on a React Native app that helps people make, keep, and grow friendships. We're launching a new offering for NBA fans, and I will likely be hiring for one more later this year. If you're interested, come find me.

I also do make games, but away from a screen. I make board games under the name Legacy of Play, and moreover I help _other folks_ make games as an advisor to UNPUB, a nonprofit focused on supporting indie game designers of all stripes.

Pertinent to this talk I *also* happen to be in the 28th percentile of all Battlesnake players, but I don't like to brag about it. [That's not 28th ranked. That 28th _percentile._ That's not good.]

## Battlesnake introduction: 3.5 minutes

What is this "Battlesnake" thing, then? Battlesnake is an implementation of multiplayer Snake where, as they say, "code is your controller". This makes sense from a game design perspective, because human-controlled multiplayer Snake would either slow to a crawl or be a chaotic mess, both for reasons outside the scope of this talk.

Using code, though, sidesteps this issue entirely: players are competing to create the best Snake-playing AI, not to be the best at playing Snake themselves.

How does that work? How do you "play" Battlesnake?

Much like Spiderman late on the way to his second shift as a bartender, each Snake runs as a web server. The Battlesnake service sends four requests, and your server's response defines what your Snake does:

- The first, Info, defines the appearance of your Snake. Your response—a 200 OK with a JSON body—defines the head, the tail, the color, and who's to blame for creating this monster.
- The second, Start, notifies your Snake they've been entered into a new game, along with the rules of that game. No response aside from a 200 OK needed.
- The fourth, End, notifies your Snake that the game is over. Again: no response other than a courtesy 200 OK.
- The third, Move, provides the updated board state, and should be responded to with an absolute direction: UP, DOWN, LEFT, or RIGHT.

The rules change slightly, too: on top of the normal Snake rules...

- Each Snake MUST eat something every 100 ticks, or it dies of starvation.
- Each Snake SHOULD respond within 500ms. If it doesn't, it'll repeat the last Move response it provided.
- If two Snakes collide head-to-head, the smaller Snake SHALL die. Otherwise—in the case of a tie—both SHALL die.
- On-screen joke about [IEEE RFC 2119](https://www.rfc-editor.org/rfc/rfc2119)

👏🏻👏🏻 Again, thumbs up if this is all clear as mud so far. Amazing.

Before we go too much further, let's see this in action, huh? This is the Snake we're going to build today, as I Julia Child a snake I put in the oven earlier:

[Replay]

This snake uses the three techniques we're going to learn:

- **Flood filling** to avoid tight spaces
- **Path finding** to seek out food
- **Height maps** to understand nuances in the board

Disclaimer: I don't work on Battlesnake. I don't work at DevCycle, the folks who support it. I don't think anyone in either group even knows I exist.

So why am I blathering on about this for _30 whole minutes_?

In no uncertain terms, it's become my belief that playing Battlesnake has become the _best_ way to mess around with code; to _play_ with code.

- Want to learn a new web framework? Build a Snake with it.
- Want to learn how to optimize JavaScript, or any other language? Take that Snake, and try to respond as fast as possible.
- Want to learn the AI techniques that have rapidly taken over the center of the board, and the programming game along with it? Build _two_ Snakes with different techniques, and have them face each other. You could use a neural network for one, and a generative adversarial network or generative per-trained transformer (this is what GPT stands for) on the other.
- And something I've learned as an adult and a parent and a musician and a game designer is that if I want to _want to_ do something, the best way to do that is through play.

You don't even have to publish them or compete on a Leaderboard! The Battlesnake team has provided simple tools to run games locally, and all the demonstrations and replays you'll see today use those same tools.

Furthermore they're open source. I had to tweak each of those tools—one in Go and one in SvelteKit—to support my talk format, *and you can, too!*

## First snake: 2 minutes of talking; 7 minutes total?

If it's that easy—and the Playbill says I'm live coding this—we should be able to make a Snake right now, right?

Okay. Let's.

Let's make a Snake that follows those basic rules, even if it's not going to do very well. Our strategy will be simple: You can’t go wrong if you always go RIGHT.

So let's hop over to zsh, and create a folder. We'll create a new Node project, and install Express and Typescript. While we're on the terminal, let's create our `server.ts` file and start a watcher to restart the server as it changes.

In our `server.ts` file, we'll create our four routes, and respond with the correct results in each case. First things first, though, what should we *call* our snake? Throw something in chat. [Audience participation.]

- GET /
- POST /start
- POST /move
- POST /end

👏🏻👏🏻👏🏻 [If they don't clap, hold my hand to my ear.]

[Have snippets for each route.]
[Have an npm template for new Snakes?]

To test this we'll run the `battlesnake` CLI, we'll put our new Snake in an empty room all by itself with no food, and watch it die.

Success!

Back in our slides, we can see what happened. Sure enough, the Snake always went RIGHT, and hit the wall.

Double success!

👏🏻👏🏻👏🏻 [If they don't clap, hold my hand to my ear.]

## Graphs

What if we _don't_ want to hit the wall? For that, we're going to have introduce some tool we can use to think.

Before *that*, though, one quick aside for any folks who don't have the misfortune of a formal Computer Science education: we're going to talk about "graphs".

Not _this_ kind. This kind. This is a graph. This is another graph. Y'all might be familiar with "trees", which are a subset. Trees are to graphs what paper people are to pieces of paper: technically, this is a piece of paper, and it'll take ink exactly as well as the piece of paper it was made out of, but if the person sitting next to you asked you for a piece of paper to take notes on during this _flawless and hilarious_ talk, this is strictly the Chaotic Evil option.

In case either of these words fall out of my big mouth in the next twenty minutes, a "node" is any the _places_ on a graph (or a tree), and the "edges" are these lines that go from one to the next. This is where we could talk about "directed" graphs, "cyclic" or "acyclic" graphs, "subgraphs", and "coloring", but we're not going to.

What we _are_ going to do is acknowledge that our playing board is a funky sort of graph: every space on our board is one of those nodes, connected to every adjacent space with an edge. If those lovers of Greek letters and Arabic numbers—[math nerds]—have come up with any tool for _working with graphs_, we can now use it to play Battlesnake. You know, the way God intended mathematics to be used.

👏🏻 You know what to do.

## Flood fill

Now that we've discovered this new toolbox under a desk over in the math department, let's go back to our snake and its tendency to try and Kool-Aid Man itself off our board.

The root cause is that while we currently get the board state every Move, we don't yet use that data to make our decision. We'll start with the simplest, called "flood fill". For those of us old enough to remember MS Paint, this is the algorithm used for this tool, the "bucket".

- We start with a space.
- If that space is clear—no walls, no snakes—that's 1.
- Mark it off, and recurse: checking in each direction from _that_ space.
- If we run out of unmarked spaces we can check, we're done. Pop the stack, and add up the size of that area.
- So we do this flood-filling for every direction we might head in, compare the sizes, and pick the biggest, safest region.
- If there’s a tie, we can bias toward a given direction for now, though we'll have a better answer for this later.
- Here's as good a place as any to describe the coordinate space of Battlesnake, too: 0,0 is in the lower-left corner, with Y increasing to the top, and X increasing to the right. This only really matters _now_, and only because we need to agree with the API on what "up" and "right" _mean_.

If we let this run, you'll see that the snake completely avoids both the walls and itself, and will turn _away_ from small gaps where it might get stuck.

[Replay]

👏🏻👏🏻👏🏻

## A* to find food

Now our snake lives long enough to _starve to death_. Glorious.

How do we find food? Real snakes may have an incredible sense of smell, but our Snake wouldn't be able to see a burger and fries right in front of its face. There could be someone _microwaving fish one space away_, and it wouldn't even notice.

Fortunately, like taking surfing lessons in a banana suit, we're told exactly where the food sits on the board. So how do we _use_ that knowledge to make our Snake actually eat it?

Because the first step of solving any programming problem is knowing what to Google (or what to type into SlitherGPT), the domain of problem we're talking about is called "path finding", or "pathing" for short.

We're going to use a variant of Dijkstra's algorithm for this, called A*. It's called that because [computer scientists] are *famously* good at naming things.

What makes A-star a little more complicated than flood filling is all the terminology and bookkeeping it uses, so let's start there:

- As we go, we'll be "scoring" spaces. Score is an abstract term here, but it really means "how hard is it to get to this space from where we started"? We're only really worried about distance right now: each space we have to move is 1 more "point" in the score.
- The first step of that is to use a "heuristic function", [math-hippie-]speak for "we're going to guess".
- We'll keep track of the best-known score: called[ G be]cause [mathematicians] are secretly jealous of the English department and all their fancy-pants _letters_ and stuff. We'll keep track of this "G score" for every space on the grid—Or, if you both remember and prefer the technically correct names, nodes in our graph—along with the _previous_ space we used to accomplish that score.
- Finally the "open set" is a [priority queue] of all the spaces we're actually interested in. As we go along, we want to consider the _next, lowest_ score; the next space that we think would be the easiest to get to from where we started. We'll [add ]

👏🏻👏🏻👏🏻

The algorithm, then, much like some thrilling trip to the DMV, comes down to filling out these forms.

[Coding:]

- At every step, we want to look at the lowest-scored space in our open set.
- If that space is the space we're looking to path to, we can build that path out of those "previous spaces".
- If it's _not_ our goal, we need to open up Pathfinding NextDoor and ask it about its neighbors.
- We score the journey from our current space to the neighbor, add that to the current space's score, and see if that's an improvement over our previous best.
- If it isn't throw it out. We already have a better route to that space.
- If it _is_ an improvement, add it to our G scores, and update that map of "previous" spaces.
- We continue this until there are no spaces left to consider, by which point we will have our route.

👏🏻👏🏻👏🏻

One piece I elided there was the heuristic function itself, and here it is. What I want to point out is that it's simple to the point of being naive, but we only need it to be good enough to help us choose what order to look at our open set.

More specifically, as long as it...

- Sorts our open set from best to worst
- Produces scores that are equal to or worse than the real thing

...our [math nerd] friends _guarantee_ us this will find the _best_ path to our goal.

Let's see this in action.

[Replays]

👏🏻👏🏻👏🏻

Our snake will now find food consistently, and like some odd chimera between a snake and a goldfish, it will live until it has eaten enough food to literally no longer fit in the space provided.
## Gray area

Thirdly, like a couple of dogs walking to the park in fall, autumn leaves cascading down to the ground in every direction... let's talk about the gray area.

Remember, A* is about finding the _optimal_ path to a _known_ goal. And our flood fill algorithm was about finding the _safest_ choice based on the information we had at the time. But much of improving at a game—Snake or otherwise—comes down to making better decisions in the gray area in between words like "safe" and "optimal".

So I'll leave you with one more technique, that I call "height mapping". If I was smarter or paid better attention in school, I might remember that it would _technically_ be called something like a tuned bias heuristic for Hart-Nilsson-Raphael search. But I didn't. And I'm not. And like two halves of a HARIBO Twin Snake, you're stuck with me, just as I’m stuck with a wife and two kids that like those disgusting things.

But first, you might be thinking, "Hold up, Schoon. I know you're talking about AI [Aibo], but you didn't really talk about AI [Spot] like Julian did," to which I say, "Welcome back! Julian gave a whole talk on it and everything."

But okay, okay, let's talk about neural networks.

I know it's a hot enough topic right now [Hot Topic] that you've seen everyone and their poodle explain how these things work, and I'm not going to rehash Julian's excellent explanation now, but I can remind you that a neural network aims to replicate some of the way our own neurons work by connecting a graph of nodes cleverly _called_ "neurons" with weights and edges.

Like Julian said you have a series of "input neurons" on one side, each layer of neurons looks at the previous layer, and through these weights and edges contributes to the next layer. Finally a series of "output neurons" gives some fuzzy answer.

👏🏻👏🏻👏🏻

As a mathematical tool, it is incredibly powerful! So why did I just waste 20 minutes of your life talking about something _other than_ CNNs, GANs, GPTs, and other TLAs?!?

I told you what this layer is called: the "input" layer. And I told you what this layer is called: the "output" layer. Do you know what these layers are actually called?

Hidden layers.

I didn't teach you about neural networks because they have a pernicious risk to them.

While those weights I described _could_ be hand-tuned, nobody does that. Instead, they feed "training data" into the network—a "training set" of known inputs and outputs—and ask the system to balance its own weights until the network would generate the same results. Theoretically after this training process, you could feed "novel" data into the inputs, and get a reasonable output. Most training processes test this assumption with a _second_ set of known inputs and outputs, continuing to demonstrate the boundless creativity of mathematicians and AI researchers in being called the "testing set".

👏🏻👏🏻👏🏻

Now, what happens if you deploy this network, feed it real world input, and it produces an output that you don't expect?

Anybody know?

You *shrug*.

Why does GPT-17 continue to hallucinate some wildly counterfactual output when asked about such-and-such a topic? Shrug.

Why did another self-driving car slowly lurch-and-stop, lurch-and-stop, lurch-and-stop through an active and roped-off crime scene? Shrug.

Why did Apple Maps send me down a dirt road, when the highway was _right there?_ Well, okay, that's a bad example. It's actually just using a path finding algorithm like we've already talked about.

But more importantly and back to the point at hand, _why did my snake go RIGHT when clearly LEFT was the right choice?_ Shrug.

So for today and for now and while our goal is to "play and have fun" and not to "win at all costs", we're going to make like a peanut with a Geiger counter and avoid the [computationally expensive] and environmentally catastrophic elephant in the room.

👏🏻👏🏻👏🏻

## Height maps

Back to height maps.

What we want to do is take all the information: other snakes, walls, food, and the like, and compile a “height” that accounts for all of them simultaneously. “Higher” terrain means riskier terrain, and “lower”, safer. All else being equal, our snake slithers “downhill”.

I lied earlier. There is one more rule in Battlesnake, and it has to do with "hazards".

The _reason_ your snake dies after 100 turns of no eating is that each tick, it loses 1 Health. And wheres Food restores a Snake's health to 100—in addition to growing it by one—a Hazard will _reduce_ the Snake's health by some amount; typically bringing the total "damage" of a turn to 15.

👏🏻👏🏻👏🏻

The "height" we can use for our heightmap, then, can correspond to the literal risk to our snake's health. There's not even a new algorithm here, we need only to worry about data structures:

- Battlesnake gives us the structure that best supports their needs as an API provider: we get a width, a height, and an Array each for Snakes, Foods, and Hazards.
- What we _want_ to do is look at one space on the grid, and see what lives there.
- What we _will_ do is loop through these arrays we're given, and compile our own Map of locations to heights.
- As we loop through the Hazards and Snakes, we'll increase the height.
- As we loop through the Foods, we'll decrease it.
- And for good measure, we can "bump out" the wall a little bit, and add a touch of height to every space near the edges.
- We can add some smoothing, which encourages our snake not only to not share space with something dangerous, but to actively move away.

Before we see this in action, remember the "scoring" discussion around A* earlier? Now we have an even better score: height. Rather than add 1 for each space, we can add the height of that space. While we're playing Hungry, Hungry Snakes and gobbling up all the food, we'll use the literal path of least resistance.

👏🏻👏🏻👏🏻

To really show this in action, here's a custom map that generates a series of mazes, with a piece of food as the "goal" of each maze. Make it to the food, the maze resets.

[Replay]

Look at that! We're playing the game, and we're playing reasonably well. We won't win the majority of our matches (most Snakes don't), but but we'll win a few.

👏🏻👏🏻👏🏻

## Next steps

If we wanted to make it better, though, what would we do?

First up, the basics:

1. Decision-making. Our snake wants food like Joe Biden wants to be cool, but it doesn't have to be that way. We could elect someone who's _not_ an octogenarian white dude to the White House, and teach our snake to prioritize survival over its bacchanalian feast.
2. Frameworks. We wrote this in vanilla Express, but could you write this more succinctly the framework you use every day?
3. Languages. We wrote this in TypeScript, but there are Snakes are written in Kotlin, C++, Python, Go, Rust, Java, and even Bash (#!/bin/shnake). However there are actually very few Snakes competing with JavaScript right now, and I think that's a shame.
4. Hosting. We ran today's snakes on this laptop, but "competitive" snakes (serious airquotes there) use long-running boxes in the cloud somewhere, like DigitalOcean, or Linode, or even Oracle Cloud. [I know!] What about the other end of the spectrum? How small of a device could you get a Snake to run on?

Getting more advanced:

- We could try minimax to make decisions. Minimax is a completely orthogonal approach to what we did today: powerful like a neural network, but still tractable. It requires simulating the game's potential outcomes, which makes it _way_ out of scope for a talk like this, but it's commonly used in games like Battlesnake.
- Genetic algorithms use a generational process that's easy to audit. You could use one to weigh priorities, or to find a better height map.
- And if you _are_ considering generative AI, I'd again recommend a platform like Battlesnake as a low-risk sandbox to learn and to experiment. Some folks already are.

👏🏻👏🏻👏🏻 (I promise, this is the last one.)

## Head to head

But even without all that, how good is our snake already? Well, let's put it through its paces. Let's wrap this up, and play a little Battlesnake!

I mentioned that there are four primary Game Modes in Battlesnake, but we're going to stick with the smallest and simplest: Duel. And to make things more interesting, we'll throw another Snake in the ring. This is the Snake I keep in competition, written in Rust.

[Replay]

If I've convinced you to try Battlesnake, check it out at play.battlesnake.com. If you have any questions about anything I've talked about today, ping me on the charmCityJS or Baltimore Tech Slacks, or send me an email.
