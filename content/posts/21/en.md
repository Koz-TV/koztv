---
tag: chess
title: "Do not register domains on Cloudflare if your audience is in Russia"
date: 2026-02-24
lang: en
original_link: "https://t.me/koztv/21"
slug: "do-not-register-domains-on-cloudflare-if-your-audience-is-in"
translated_from: "ru"
---

Cloudflare Registrar – probably the cheapest way to register a domain. Without markup, at cost. Sounds perfect, until one thing is discovered.

I registered chess.rodeo through Cloudflare. Everything worked until I was told: "my link doesn't open." I started investigating – it turned out that a number of Russian providers block Cloudflare at the NS server level. That is, the domain simply doesn't resolve. It's not that the site is unavailable, but that the domain itself cannot be found. To the user, this looks like "site does not exist."

For the same reason, it is also not worth proxying traffic through Cloudflare. Yes, the Cloudflare proxy has a lot of pros – DDoS protection, acceleration of loading by distributing static content from the server closest to the user, showing a cached version of the site when the server goes down (Always Online), and basic protection against typical attacks like SQL injections (WAF) – but if a portion of users in principle cannot reach you, the benefit of these pros is zero.

What can be done if you have already registered on Cloudflare:

• You can move to another registrar only 60 days after registration (ICANN requirement), and you will have to pay for an immediate one-year extension. Before – impossible.  
• On the Cloudflare free tier, you cannot change NS servers to others (non-Cloudflare ones). There is an option to enable Multi-provider DNS – we tried it. It works intermittently, when an unblocked NS is randomly selected. Better than nothing, but it cannot be called a stable solution.  
• You can take the paid Business tier ($200/mo) – only on it are custom NS servers available. But if you are paying $200 a month just to make the domain open normally in Russia, why register on Cloudflare at all?

Result: I switched to [Porkbun](https://porkbun.com/). There seem to be no blocks, I won't claim it 100%. If you are making a project for a Russian audience – take a registrar whose NS are not blocked. The $2 saved on the domain is not worth the lost users.

![](image1.bin)
