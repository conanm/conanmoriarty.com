---
title: Software is an upside-down pyramid
publishDate: '2022-11-17'
excerpt: "Each additional circular 'brick' in the pyramid denotes dev expenditure of effort. In the diagram we show the initial project setup, then vertically each row on the pyramid is a feature or part of the product. Each additional feature that you add requires more effort to build as the pyramid of features grows upwards."
tags:
  - startup
  - software development
  - agile
seo:
  image:
    src: '/upside-down-pyramid-7.jpeg'
    alt: Complexity/priority/code
---

# Overview

**This is a love letter to small product/dev teams building from scratch trying to deliver value.**

_Some_ of the advice won't translate to bigger/enterprise level software. With that being said...

# "Software is an upside-down pyramid"

![upside-down pyramid 1](/upside-down-pyramid-1.gif)

## _Code written at the beginning of a project is the code written the quickest._

### Ratio of code to features as the project grows

Each additional circular 'brick' in the pyramid denotes dev expenditure of effort. In the diagram we show the initial project setup, then vertically each row on the pyramid is a feature or part of the product. Each additional feature that you add _requires more effort to build_ as the pyramid of features grows upwards.
After a while, all dev teams find themselves estimating something that _would be_ trivial if you were starting from scratch... but within the existing product it's somehow complicated. So we understand the first part: \***\*more features means more code means longer periods of time to develop.\*\***

Next we can use the pyramid to show that in every codebase there's different _aspects_ of code. Non-tech team mates and stakeholders don't really understand this. So let's visualise it:

![upside-down pyramid 2](/upside-down-pyramid-2.jpeg)

### Categorisation/organisation of the code

Devs like to categorise code depending on the language/design pattern/framework. So all of the code that is colour-coded simularly _lives in the same place in the codebase_. What does that mean? Multiple features reference the same part of the codebase, so when you touch that part of the codebase you can break stuff.
You can also run into scenarios \[in classic SCRUM/git-flow styles] where devs run off and work on something privately and accidentally do double work or touch the same part of the codebase to deliver _their_ feature and it creates a logjam when they merge the code.

So we understand that our project is a vertically growing, horizontally expanding pyramid where any new code that we write could be accidentally displacing bricks from lower levels. Anything else? Yep:

![upside-down pyramid 3](/upside-down-pyramid-3.jpeg)

### Author of code

Different devs touch different parts of the code. Certain devs are really happy to work on specific code (think of 'UI developers' vs. 'frontend developers').

How many times have you heard someone say "Let me handle this, I'm really good at building queues."

All devs on a team naturally gravitate towards certain aspects of the code... The senior who's made a ton of mistakes with persistence, state management, async code... The person who's an UI pro vs. the 15 year web dev pro who still somehow doesn't know CSS. etc.

So above I've numbered the chunks of code with devs #1 - #4... A couple of observations on the above:

- Dev 1 is a jack of all trades and their code is everywhere... their style is everywhere across every aspect of the code (even though they're not necessarily an expert in everything). This will likely mean rewrites as new devs join the team and provide best practices.
- As the project grows, the devs that wrote the initial code write less code... Maybe they're leaving the company...

But the **_key point to hone in on is that delivering a feature at the top of the pyramid means interacting with and changing code that was written earlier and perhaps written by a different author._**

This is the key to why regressions occur. Check this diagram for a clear example:

![upside-down pyramid 4](/upside-down-pyramid-4.jpeg)

### Adding a feature to the project

So when we're touching the _green_ code (the part of the codebase where we handle state/lifecycle of the User, for example... so 'logged in' vs 'logged out' etc.), we're potentially breaking as many as 4 live features. We deliver a wonderful, fancy onboarding where we save a bunch of user preferences.... but we risk, for example, breaking the login for our existing userbase in the production app. This has to be extensively tested adding huge complexity.

![upside-down pyramid 5](/upside-down-pyramid-5.jpeg)

## Age of code

Code get old! Especially in things like web or mobile development! This is a nightmare. In the diagram above you can see old code as circles that are darkened or fading out.

Coding is worse than the goddamned fashion industry for changes. Style changes, mass adoption of libs/dependencies, Apple + Google moving their proprietary languages forward once a year deprecating old code and mandating the adoption of new code, styles and languages means that code actually never gets a change to really age. That being said, all projects have their elephant's graveyard of old stuff and as you work,
you sometimes are _forced_ to rework or update that old code. **THIS ADDS TO DELAYS!** I need to rework/refactor the code I wrote in 2019 because it simply doesn't work anymore (e.g. a Facebook login, an old API integration, some ObjC code). So let's illustrate that below\...

In the example above we had to update certain features. Notice also that that when you update one ASPECT of the code you're often updating it across features (see dev #2 updated the state management system and dev #1 updated business logic across 3 features recently).
It would be fantastic if we could somehow communicate this to product, stakeholders, managers, etc... right?

# Suggestions for teams

## For complexity estimations...

Estimating complexity just by throwing it out to the room (e.g. planning poker or tshirt sizes) doesn't really work and when it does it's by fluke. Or by taking advantage of people by getting them to commit to something you know to be unrealistic and flogging them with 60 hour work weeks. However, here are some useful questions people you can ask in planning:

- **What aspects of the codebase does this touch?** (This is important because it gets people thinking about the areas that need to be worked on, enhanced, new things to add as well as how tough it is to work in the framework of the project setup)
  - **How healthy are those areas/domains/layers?**
- **What existing features could this possibly impact?** (you're getting blast radius here)
- **Who is the owner/main author of those areas/domains/layers/code?**

## Encourage this type of feedback from devs:

- "Since we're touching the repository for database access I'd really like to add Prisma because it'll reduce the amount of lines of code and speed us up when we're writing DB queries and right now we're doing it all manually..." **(gives you speed/agility)**
- "If I'm going to add Google as a login + registration mechanism it'd be really good to clean up some of the first time sign-in logic and maybe add some tests..." **(prevents a potential disaster, touches old code)**
- "If we're building out a new popup for the search screen I'd like to do it in SwiftUI." **(future-proofs code, devs learn new things that they will be forced to adopt in the future anyway)**

These three bullets? **These are your 'refactoring' User Stories.** Don't do that old trick of 'rewarding devs' with 2 days to refactor at the end of a sprint.

As you're listening to the feedback you're getting from devs as their estimate new features and you need to be furiously scribbling or spamming JIRA tickets or whatever. You're giving visibility, priority and owning the health of the project. This is far superior than sending devs off in a corner to aimlessly 'refactor'. They're actually refactoring/reworking and improving things. It has a big effect on project health.

## Ask developers this:

**"Where/what is the biggest mess?"**

Almost always you'll get the same answer from everyone. It's not throwing anyone under a bus, it's just "what can we fix?" Maybe ask that actually, that's more diplomatic. "Where is the biggest place in the project we could improve?"

## Develop a system to track features in projects

The fundamental aspects of the feature tracking system for a project are what we discussed in the pyramid. They're:

- Feature
- Author
- Age (created time or last time it was reworked)
- Area (of project/arch/whatever... e.g. 'UI code')
- Health rating (could be 5 star, good/bad/needs work, whatever)

Shouldn't take long, won't take long to maintain... Get your devs to edit it out at the end of Sprints or once a month or whatever. You can bang it out in Notion quickly. Check it out:

![imaginary app feature list](/app-feature-list.png)

## Is there a way to speed up feature delivery and have a healthy codebase?

Yes there is: **_delete features_**.

\***\*This is really the best possible tip I can give to CTOs and PMs.\*\***

Be OK with killing stuff.

In fact: encourage it.

Let's go back to the pyramid one more time:

![upside-down pyramid 6](/upside-down-pyramid-6.gif)

At the bottom of the pyramid we have the absolute must haves code-wise (e.g. project setup, CI/CD, login/registration/push notifications/whatever) and stacked directly on top come the actual features that actually add value.

Use analytics + product metrics to figure out what’s important and understand that in a perfect world your pyramid looks like this:

![upside-down pyramid 7](/upside-down-pyramid-7.jpeg)

1. Core value above everything, should be very healthy and ideally very lean.
2. Useful/secondary features that are commonly used in the product/api/service. Lean on metrics for this…
3. Stack features that might work out on top (priority-wise) and last into the codebase…. But **treat** this like a stack… Last in first out.

I hope this was of use! Devs show this to your PO. POs show this to your devs.

Delete features. Cut compile times. Stay lean. Deliver often.

Watch devs eyes light up.
