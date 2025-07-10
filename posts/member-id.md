---
title: "I Built a Member ID System That Nobody Actually Needs"
date: "2025-07-10"
description: "When your community needs member cards, you build a full-stack crypto system with QR codes and Wallet integration. Obviously."
---

So my university club [Neuland Ingolstadt e.V.](https://neuland-ingolstadt.de) needed member cards. Simple, right? Just print some cards with names on them. 

Nope. I built a full-stack cryptographic identity system with QR codes directly in our Neuland Next App. But also Apple and Google Wallet integration, and enough security to make a bank jealous. Because apparently, that's what happens when you have exam stress and don't want to study.

## The Problem

Neuland wanted to have a member identification system for a long time. You know, the kind of thing you solve with a laminated piece of paper and a Sharpie. But somewhere between "we need member cards" and "let's build this," my brain went: "What if we made it *digital*?" Especially since we are a computer science club. So here it is: The most overengineered solution to a problem that didn't actually exist.

## What I Actually Built

Instead of just printing some cards, I created:
- A Rust backend with ECDSA cryptography to issue the QR codes
- JWT token validation for issuing the QR codes
- A Next.js frontend with real-time QR scanning and statistics
- Apple and Google Wallet integration

The thing generates cryptographically signed QR codes that you can scan with your phone. It's like a digital passport, but for a university club.

## The Features

- **QR Codes with Cryptography**: Because regular QR codes are too mainstream. These are signed with ECDSA P-256 so they cannot be modified without being detected. Totally overkill for "is this person actually in our club?"

- **Wallet Integration**: Everyone seems to want their club membership in their digital wallet, so I made it happen. Since wallet QR codes can’t rotate like those in the app, the scanner frontend includes a toggle to disable wallet scanning during high-security events. (What even is a high-security event?)

- **Real-time Camera Scanning**: The frontend has live camera feed scanning. If valid QR codes are detected, it shows the encoded member information. But also detects invalid or duplicate QR codes. And of course there are many many settings to configure the scanner, like the camera resolution, the scanning interval or even sound effects.

- **Dashboard with Statistics**: The frontend shows the scan history and the member information, stored locally in the session storage.
This data can be exported as CSV, which might be useful for event organizers, but honestly I dont know why you would need this.

- **Time-based QR Rotation**: To prevent replay attacks and ensure data freshness, the QR codes in the app rotate every few days.
The app also includes smooth animations that make it easy to spot attempts to deceive the system, for example by showing a static screenshot instead of a live QR code.

- **Offline Scanning**: The scanner verifies QR codes using a public key, allowing it to function entirely offline, fast, reliable and without any server-side processing.

- **Public Access**: Because no login system is required, the scanner is open to everyone. Whether you're a club member or just a curious visitor, anyone can scan and explore how the system works.

## The Tech Stack

- **Backend**: Rust with Actix-web (because performance)
- **Frontend**: Next.js 15 with React 19 (because modern)
- **Cryptography**: ECDSA signatures (because why not?)
- **QR Processing**: Base45 encoding with CBOR serialization (because efficiency)
- **Deployment**: Docker with Nginx (because containers are cool)

I'm pretty sure this is the most secure way to prove you're a member of a university club, that meets once a week.

## The Current Status

The scanner is now live at [id.neuland-ingolstadt.de](https://id.neuland-ingolstadt.de).

The digital membership card is seamlessly integrated into the [Neuland Next App](https://neuland.app), securely stored in a hidden member area protected by our Authentik login system.

Has anyone actually used it seriously? Not really.\
Do we have any real use cases for it? Not really.\
Is it still cool? Absolutely.

But hey, at least it's ready for when the apocalypse comes and we need to verify club membership with cryptographic certainty.

## What I Learned

1. **Scope Creep is Real**: Started with "member cards," ended with a cryptographic identity system.

2. **Rust is Actually Pretty Cool**: Writing the backend in Rust was surprisingly fun, even if it's probably overkill.

3. **QR Codes are More Complex Than They Look**: Base45 encoding, CBOR serialization, compression... who knew?

4. **Apple Wallet Integration is Surprisingly Simple**: Once you figure out the PKPass format, it's actually straightforward.

5. **Nobody Cares About Your Overengineered Solutions**: But that's okay, because building them is fun anyway.

## Future Improvements

Currently, the app refreshes the QR code every two days using updated data from the backend. In the future, it would be great to implement offline QR code rotation - similar to 2FA codes - that updates every 30 seconds without requiring a network connection.

Additionally, enhancing the scanner with an admin login feature would allow authorized users to fetch extended data directly from the backend, enabling more advanced use cases.

Physical membership cards would also be a great addition for those who prefer a tangible option, but for now card printers remain a bit too pricey.

---

*P.S. The project is open source on [GitHub](https://github.com/neuland-ingolstadt/member-id) if you want to see the full extent of this madness. Feel free to contribute.*