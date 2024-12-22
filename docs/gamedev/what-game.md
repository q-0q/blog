Feb 27, 2024

# What game should I make?
## Game projects I've worked so far, how I felt about them

- Red Cube's Jumpy Adventure
	- **Like**: learning the engine. Doing everything wrong. No goals.
	- **Dislike**: How small scale and simple it was.
- Parkour Game
	- **Like**: unique feel and aesthetic. Fine tuning the feeling of the movement. Sense of dynamic motion. Aesthetic.
	- **Dislike**: Messiness of character control code. Lack of meaningful gameplay elements.
- dungeonballs
	- **Like**: unique feel and aesthetic. planet / gravity system. movement around planets. Atmosphere. RPG elements (NPCs, & dialogue)
	- **Dislike**: messiness of character code overlapping with enemy code. Poorly implemented class boundaries (player vs entity vs enemy) that made development difficult. UI system interacting with pixel camera. Building UI. RPG elements (inventory). Spherical levels made constructing levels in-engine very difficult.
- word hunt
	- **Like**: use of shaders. Code structure. 
	- **Dislike**: not original, multiplayer.
- blokus duo
	- **Like**: learned about multiplayer.
	- **Dislike**: multiplayer.
- ornament
	- **Like**: dipped my toes into FSM design. Learned so much about Godot, Tilemaps. Scene transitioning.
	- **Dislike**: Scale is too large for what I can accomplish right now. FSM is not the cleanest.
- Melody Temple
	- **Like**: level structure. Clear idea that I executed to completion. Understood plan from the beginning.
	- Dislike: Aesthetic was weaker than I'd hoped. Core gameplay elements are ripped straight from Celeste.
- grapplegrinder
	- **Like**: FSMs are getting somewhat better.
	- **Dislike**: Lack of direction.
## Overall, what makes me love a project?
- Freedom to experiment, but a high-level direction that is well defined
- Movement based games, 2D and 3D platformers
- A strong visual aesthetic
- Original gameplay elements
- A manageable developer experience
## Overall, what makes me hate a project?
- Messy, unmanageable code
- "Looks cool, but isn't really a game" putting style & gimmicks before gameplay
- Multiplayer

## Putting it all together

I need to make a singleplayer movement-based platformer with a strong aesthetic and original gameplay elements. I must be willing to continuously refactor code even when it seems like it is a waste of time, otherwise the project will die.

## What I really want to make

Revisit the dungeonballs theme. 3D, microplanet based platformer with gravity elements. Throw out the inventory rpg stuff but keep the in game dialogue. Need to invest time in developing some tools to assist in level creation in-engine. maybe some kind of "cursor" object we can place on a planet, causing it to orient itself in such a way that causes the cursor to be pointing straight up.

Gameplay idea
- you are a little moon spirit tasked with traveling to barren moons and reinvigorating them with life.
- you do so by placing life-supplying crystal hearts of the moons into pedestals.
	- 3 types of crystals:
		- fragments - not used to replenish moons, but used to unlock abilities. 
		- hearts - used to replenish moons, altering them and allowing continuation. to be used, must be physically picked up and placed, like orbs in Cocoon.
		- essences - used to replenish the great moons. when interacted with, player becomes empowered and can spend it to complete a story event, replenishing a great moon.
- life crystals can be found by exploring and completing parts of the story. 
- high level story:
	- keep it simple
	- to protect the system from great evil, you must awaken the great celestial guardian by replenishing the 5 great moons to their former glory.
	- the game is a journey across the 5 moons, find-a-thon style with finding life crystals
- story crystal examples:
	- space pirates have stolen moon crystals and you must retrieve them.
	- npc interactions
	- puzzles
	- 