---
home: false
---

# Project SilverNeedle

Project SilverNeedle (PSN) is the working title for the 2D fighting game I am building.

[GitHub](https://github.com/q-0q/ProjectSilverNeedle)

<lite-youtube videoid="i4s9gYyCaEM" params="start=0" />

## Design philosophies

### PSN's place in the Fighting Game landscape

PSN is mostly inspired by modern titles like [Guilty Gear -STRIVE-](https://www.youtube.com/watch?v=Agib6WswixU) and [Street Fighter 6](https://www.youtube.com/watch?v=X-C435HjNhg), but also draws from a deeper ancestry of games including [Asuka 120%](https://www.youtube.com/watch?v=CelJpojAZ8Y) and [Street Fighter III: Third Strike](https://www.youtube.com/watch?v=qjGOUb1JMDY).

In recent years, [interest in fighting games has not scaled with the growth of the gaming industry](https://trends.google.com/trends/explore?date=all&geo=US&q=fighting%20games&hl=en). I anectodally attribute this to their competitive & hardcore perception, which does not align with market trends favoring more casual and cooperative experiences, especially among younger audiences.

With PSN I am creating a small set of simple characters with distinct visual and gameplay identities, focusing on quality of content over quantity. This means PSN has simpler mechanics and controls than other studio titles. As a solo developer with a tighter time and resource budget, this design decision was necessary for the health of the project and is not motivated by the aforementioned casualization trend. Its effect on the reception of the game remains to be seen.

### Control scheme

PSN is a 5-button game. The buttons are `Light`, `Medium`, `Heavy`, `Special`, and `Grab`. The same button can be used for multiple actions depending on directional input; for example, for most characters, `Heavy` with no directional input is a high-damage finisher, while `Down` + `Heavy` is a combo-starting launcher.

Most games in the 2D Fighting genre implement [motion inputs](https://glossary.infil.net/?t=Motion%20Input). Motion inputs raise the execution barrier of certain player actions, which affects the feel of the gameplay and its percieved difficulty. Motion inputs also allows for more actions without needing to have lots of buttons, as the same buttons can be reused with different motions to create more inputs.

With PSN, directional inputs are used (such as `Down` + `Heavy` or `Back` + `Special`) but I have opted to not implement motion inputs for a few reasons.

First, PSN's characters are simple enough in their amount of options and mechanics to not need the increased amount of options that motion inputs provide. With 4 main attacking buttons and 5 primary input directions (4 cardinal directions as well as no direction) that already brings the potential number of attacks to 20. A character's moveset completely changes when they are in the air, so that then brings the number up to 40. If I really need more, then I can also use diagonal directions for an input as well. These numbers vastly exceed the amount I would need for even the most complex character I could ever want to design.

Second, implementing motion controls is a surprising involved task. You need to track a rolling log of directional input over some time horizon, and then validate that the direction history equates to some motion when an input is attempted. It's crucial that this input log is synced over the network to ensure deterministic behavior and prevent cheating, which can put a large strain on networking performance if not implemented carefully. Further, defining a "motion" is complicated. Guilty Gear -STRIVE- uses a [complex system of rules](https://www.dustloop.com/w/GGST/Esoterica#Motion_Input_Buffer) to precisely define these motions and control how strictly they need to be performed.

For these reasons, I deemed the cost of implementing motion inputs to outweight their gameplay benefits. I may revisit this decision later into the development cycle.

### Jumping

Across all fighting games, jumping into the air gives a player largely different properties than being on the ground, but how exactly characters behave in the air varies drastically across games.

In the Street Fighter franchise, characters cannot block in the air, and air mobility is extremely limited. This means jumping towards your opponent is high-risk option, and leads to the Street Fighter's gameplay being very grounded. Contrast this with the Guilty Gear franchise, where characters can not only block in the air, but also air-dash, multi-jump, and super-jump. In GG, players are strongly encouraged to be in the air, which leads to a very air-oriented gameplay loop.

From a game design perspective, a more air-oriented game is more difficult to create because it (literally) adds more dimensions to the gameplay, and new gameplay features must consider both grounded and aerial situations. An air-oriented game also tends to play faster than a grounded game as players generally have access to more mobility options.

For PSN, I am aiming for an in-between. Players are able to multi-jump and block in the air, which allows for more potent anti-air attacks to have a place in the game, and makes jumping less punishing. Characters by default, however, cannot dash in the air or super-jump. I hope this will keep PSN's gameplay loop more on the grounded-side, which will mean fewer variables I need to consider as the gameplay designer. Further, giving characters a lower baseline of aerial power allows room for certain characters to 

## Netcode

Project SilverNeedle uses [Photon Quantum](https://www.photonengine.com/quantum) as its netcode solution for implementing [client side prediction and rollback](https://www.snapnet.dev/docs/core-concepts/input-delay-vs-rollback/#rollback-client-side-prediction). The core game simulation happens inside Quantum's deterministic kernel, while Unity serves as a wrapper engine that captures user input, renders graphics, and plays audio.

Quantum handles the synchronization of state over the network and, save for some performance considerations required of the developer, acts mostly as a black-box that "just works". One major limitation of Quantum is that it can only sync data over the network in the form of primitive types (mainly numbers and booleans). This means generic class objects cannot be synchronized over the network -- at least not directly.

Game objects in PSN are implemented by [Wasp](../wasp/index.md) Finite State Machines (FSMs), which are large, complex, polymorphic objects in memory; however, the only data that needs to be synced to the network are an integer ID of the FSM's current state as well as an incrementing clock that represents the amount of time spent in the current state. Then, each frame, the client-side FSMs can read this data from the network and automatically assume the necessary state and its behavior, without needing to ever sync the FSM itself.

The result is a system that is performant, scalable, and flexible.

## How the engine works

trigger-based FSMs, polymorphic FSMs, polymorphic states, state bindings with priorities

## Animation workflow

started hand drawn, needed a more iterative approach, Blender rigging and animation, fake pixel setup with cel shading, script based batch processing sensitive to folder structures, unity-side batch importing