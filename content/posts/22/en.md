---
title: "Update to the story about Cloudflare and chess.rodeo."
date: 2026-03-09
lang: en
original_link: "https://t.me/koztv/22"
slug: "update-to-the-story-about-cloudflare-and-chessrodeo"
translated_from: "ru"
---

After my last post, I removed Cloudflare entirely: I transferred the domain to Porkbun and routed traffic directly to the server.

It seemed like that was the end of it.

However, I accidentally noticed while on my home PC without VPN that the site wasn't loading completely; the number of games module was hidden for some reason. I went to investigate.

From the server side, everything looks fine:  
`curl https://chess.rodeo`  
responds quickly, the API is working, and there are no errors.

I started looking at the connections and saw a strange picture:

TCP to the server is established,  
the TLS handshake passes,  
but then some HTTP requests hang.

In other words, the connection was established, but there is no response.

At first, I thought it was something on my end. I checked Caddy, the backend, the logs—I tried everything—but nothing helped.

I contacted the host. They said everything is normal on their side and they don't see any network issues.

In the end, I decided to route traffic through a proxy, set up caching, and request limits along the way—and everything started working.

It seems that for some ISPs, the HTTP/HTTPS traffic was breaking somewhere along the route to the server. It works via a different route. Meanwhile, ping works, and SSH establishes fine. You could think everything is okay and not even know you have a problem.

**Ideally, of course, you shouldn't rely on a single route and a single IP. You need a proxy or CDN with multiple entry points so traffic can take different paths. And wrap everything in monitoring (hello Sentry) and analytics.**

![](image1.bin)
