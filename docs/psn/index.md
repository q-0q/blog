---
home: false
---

# Project SilverNeedle

Project SilverNeedle (PSN) is the working title for the 2D fighting game I am building.

[GitHub](https://github.com/q-0q/ProjectSilverNeedle)

<lite-youtube videoid="i4s9gYyCaEM" params="start=0" />

## Design philosophies

PSN is mostly inspired by modern titles like [Guilty Gear -STRIVE-](https://www.youtube.com/watch?v=Agib6WswixU) and [Street Fighter 6](https://www.youtube.com/watch?v=X-C435HjNhg), but also draws from a deeper ancestry of games including [Asuka 120%](https://www.youtube.com/watch?v=CelJpojAZ8Y) and [Street Fighter III: Third Strike](https://www.youtube.com/watch?v=qjGOUb1JMDY).

In recent years, [interest in fighting games has not scaled with the growth of the gaming industry](https://trends.google.com/trends/explore?date=all&geo=US&q=fighting%20games&hl=en). I anectodally attribute this to their competitive & hardcore perception, which does not align with market trends favoring more casual and cooperative experiences, especially among younger audiences.

With PSN I am creating a small set of simple characters with distinct visual and gameplay identities, focusing on quality of content over quantity. This means PSN has simpler mechanics and controls than other studio titles. As a solo developer, this design decision was necessary for the health of the project and is not motivated by the aforementioned casualization trend. Maybe it will coincidentally resonate with inexperienced players and be a smash hit in an untapped market. Alternatively, it could alienate its only potential audience, the hardcore crowd, and end up failing completely.

As someone with no marketing or publishing experience, I must remind myself to ignore these thoughts and focus solely on simply creating the best game I believe I am capable of creating.

## Netcode

Project SilverNeedle uses [Photon Quantum](https://www.photonengine.com/quantum) as its netcode solution for implementing [client side prediction and rollback](https://www.snapnet.dev/docs/core-concepts/input-delay-vs-rollback/#rollback-client-side-prediction). The core game simulation happens inside Quantum's deterministic kernel, while Unity serves as a wrapper engine that captures user input, renders graphics, and plays audio.

Quantum handles the synchronization of state over the network and, save for some performance considerations required of the developer, acts mostly as a black-box that "just works". One major limitation of Quantum is that it can only sync data over the network in the form of primitive types (mainly numbers and booleans). This means generic class objects cannot be synchronized over the network -- at least not directly.

Game objects in PSN are implemented by [Wasp](../wasp/index.md) Finite State Machines (FSMs), which are large, complex, polymorphic objects in memory; however, the only data that needs to be synced to the network are an integer ID of the FSM's current state as well as an incrementing clock that represents the amount of time spent in the current state. Then, each frame, the client-side FSMs can read this data from the network and automatically assume the necessary state and its behavior, without needing to ever sync the FSM itself.

The result is a system that is performant, scalable, and flexible.

## How the engine works

trigger-based FSMs, polymorphic FSMs, polymorphic states, state bindings with priorities

## Animation workflow

started hand drawn, needed a more iterative approach, Blender rigging and animation, fake pixel setup with cel shading, script based batch processing sensitive to folder structures, unity-side batch importing