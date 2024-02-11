---
title: "Don't build it: Social Networks"
publishDate: '2022-09-18'
excerpt: 'How to instantly add an order or magnitude to the complexity of all your features'
tags:
  - startup
  - software development
  - social network
seo:
  image:
    src: '/follow-button.jpeg'
    alt: Don't add this
---

# Overview

# What is a Social Network?

The minute you add THIS:
![follow](/follow-button.jpeg)
You've built a social network. Sorry. 🤷🏼‍♀️ I've had big long heated arguments with people who want to use terminology like 'platform' or 'solution' or 'marketplace' or whatever... If you follow, get notifications, interact with other users: it's a social network. I've been a part of a few social network projects, two I've engineered/architected myself (and learned the lessons) and once I was on a team building it out. Other times though, we opted simply for login + register and no user-to-user interactivity.

When you add the follow button... you add the idea of a feed, notifications, actions/interactions (like/comment)... You add the idea of feed aggregation, tailored feeds. You add NOTIFICATIONS. All this stuff is a nightmare to engineer. There's so many pieces of logic. Then there's localization. Then there's observability. Monitoring. Why did this user get this notification? It's a nightmare, trust me.

I know the title is "DON'T BUILD IT"... maybe you need to... But you better be really confident that you're delivering value that is proportional to the effort of engineering + maintaining it.

# Social networks

There's so many early stage startups who are working to deliver value quickly and without engineering where possible. As an entrepreneur I think that's great. I think we've unlocked so many bottlenecks to delivering the USP of the businesses that we build and we've democratized that with nocode tools.

I think the danger arises once VC money comes in and growth curves become important. Suddenly retention becomes important. How do we retain + capture value? You sign in and register. Then you do some key actions... like ... comment... follow.. subscribe... notification bell... whatever.

Again, it's not that it's wrong, it might just be that you're overlooking delivering actual product market fit to make a bet on social. It's a huge huge bet and as CTO if you don't explain it correctly to stakeholders it can backfire.

That was my experience at in a previous startup I cofounded. We were social more or less from the start... But I did a poor job of letting everyone understand what that actually means. We'd write out User Story spec's as best we could with given-when-thens but invariably we'd run into all these kind of edge cases that the stakeholders assumed were taken care of by APNS magically.

The thing that I learned during my time there was that it's absolutely vital that you communicate the price of _development_ but more importantly of _maintenance_ of features... Also what is FREE from the platform (iOS/Android/Chrome) and what is not. For example:

🆓 Push notifications that load in the background on a phone.... (Once you've written this code, Android, iOS or the browser will handle the rendering logic for you)

💰 Push notification aggregation.... knowing not to **deliver 100 push notifications for 100 likes of your post**... You need to build this out

The problem is non-tech founders or staff don't see the hidden complexity. While backend devs understand that there's overlapping crons running and caches, relational/graph databases and doc databases on the backend powering the hidden brain of this fairly trivial feature. It's trivial, by the way, because it's ubiquitous in large social apps.... But these are well established products with well established dev teams.

Let's take a sample app that is non-social and then let's social it up!

# Example app (Humid.it/y)

## Hours 1-25: MVP

Our example app is Humidity™️ which promises to deliver the most accurate and up to date humidity information for your town and a bunch of others. A simple app that serves a simple purpose. The first burst of work will be just to set up the MVP....

![follow](/simple_app_1.png)

From a tech perspective we:

- grab a React template/boilerplate
- hook up Airtable to a Weather API
- check we can use a GET request to render the data in the React app
- set up an automation (cronjob) in the Airtable project to poll the Weather API and update the data occasionally
- the React app let's you select your town from a dropdown

From a complexity rating: **PRETTY SIMPLE** , I would say.

And again: we've achieved what we set out to. Users can see humidity. Boom. That's the core functionality met.

## Hours 25-100: More features + Login

- "What if the app automatically locates you and shows the humidity in your country/town?"
- "We want to see the historical and future humidity information!"
- "I think it's a good idea to compare humidities across different countries."
- "Hows about we can log in and save our settings!"

So, complexity-wise... still a **SIMPLE APP**... But we have some new stuff. Notice, btw, the dev time triples at this point to bring this extra functionality. Why? There's so many extra reasons. When you build out 1 key feature on a fresh, new codebase it's almost trivial. Once that codebase becomes established you have to worry about scaling it - so modularising some parts, concerning yourself more with state management, we now also have a user auth aspect and the new concept of a 'logged in' or 'logged out' user. It just gets trickier. Then we test all this functionality in all of the different permutations and state and location.

## Hours 100-1000: Social Network Time!!!

- "What if I could add my friends so I could see their favorite cities to view humidity in?"
- "What if there was a feed that would show me all of the humidities of the past week and allow me to comment on it"
- "What if my friends got a push notification whenever I wrote a comment on the humidity of their city?"
- "What if we..." (you get it at this point)

This is where we get shot in the foot big time. 25 hours to build out 80% of the main use case of the app. 75 hours to build out a simple login + localization feature. Now we're spending 900 hours to build a mobile app with a newsfeed and comments and likes and subscribes and aggregations and suggestions and recommended friends to follow and onboarding and blah blah blah.

IT'S FINE: maybe your business idea scales amazingly this way. But this is the breakdown of labour. You got most of the job done in 25 hours and the rest is fluff. The rest is a VC fundraising round, growth curves, scaling the dev team, high burn rate, giant serverless costs etcetcetc

You don't really need it my point. And I didn't even mention the [cold start problem](https://www.coldstart.com/), the friction of getting people to register and download apps + register... [Unimpressive push notification statistics](https://www.businessofapps.com/marketplace/push-notifications/research/push-notifications-statistics/) in things like opt-in and conversion.

Unless it's a major value add that hugely improves someone's life: no-one wants your social network. No-one wants another app on their phone to write comments & subscribe to feeds. We have enough.

Stay small and lean. Deliver value. Build it out if you're certain your audience wants it.

## Refs/Reading

[A newsfeed with Elasticsearch](https://kuhess.github.io/presentations/a-news-feed-with-elasticsearch/index.html#/1) - mandatory reading for understanding doc db feeds with fan out on write vs. read.

[Stream](https://getstream.io/) - can't mention activity feeds without Stream.

[Blog on Slack's famous Push Noti flowchart](https://www.courier.com/blog/slack-notifications-flowchart-strategy/) - for communicating push noti complexity this diagram is extremely helpful. To us end users things like chat + notifications "just work" the the underlying logic + explanation is extremely intricate. Building and maintaining this requires a huge amount of time.
