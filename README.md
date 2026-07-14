# deeco

Deeco is a project on a mission to democratize web-3 adoption by providing e-commerce platforms with multiple payment channels - but with a main focus on Web3/Blockchain payments.

Think "Shopify + Crypto(web3/blockchain)" - and even more.

Amidst all it's different challenges, Web3 continues to struggle in it's strides for more acceptance and adoption. Deeco is a project that will take e-commerce to the next level - bringing cryptocurrency payments right to the corridors of every-day e-commerce users..

#### The project seeks to solve two(2) main problems.

1. The problem of limits - blockings and watchings: Limits set by financial institutions, can truly be advantageous, but these limits might sometimes be exploited to the disadvantage of the customers. Deeco is a project that removes all those blocking limits like credit card deposit and transfer limits. It provides the everyday e-commerce user with the power of so much freedom, transparency, and even security - if the smart contracts are well-developed and audited.

2. The problem of public exclusion: Many folks out there, have probably only been hearing about cryptocurrency, blockchain and web3, but have never had a full experience or even a basic knowledge of the many awesome benefits of these innovations.
   My intentional entrance into the web3 and the blockchain world, left me wowed at the many awesome superpowers of web3 and blockchain technology. Being able to build a platform like deeco where public interaction can be easily enhanced, to bring more public inclusion from regular people on the streets, is truly a pleasure.

## Build stack/technologies

> This repository consist of both the client/front-end and server/backend aspects of the project.

Being a one man team in this hackathon made building deeco very challenging. It was an experience of a lifetime. "deeco" was built with so much 💝 by me(@Okpainmo) and the hackathon team at jobjo.co, below is a list of the main awesome technologies that I used.

1. NextJs/ReactJs
2. TailwindCSS
3. React contect API
4. NodeJs/Express(fully typed with Typescript).
5. Google Firebase/Firestore
6. Solidity
7. Hardhat/Ethers
8. Mumbai(polygon) testnet.
9. Alchemy
10. Fake store API
11. Metamask
12. And More.

> The smart contract was deployed to the Mumbai(polygon) testnet via alchemy.

> MATIC token/coin was used as the default currency for shopping on deeco.

> Please note, that the deeco project is fully and superbly responsive. It fits extremely well on different screen sizes.

## Live site(stand-alone store POC) - The main project POC front-end not deployed yet.

> The project is hosted live. You can explore it via this link - https://deeco.vercel.app. Just take note to keep your metamask wallet handy.

> Please use a PC for the best experience.

## Live demo

> For the Soonami Venturethon: https://youtu.be/VXQnWK5BfSE

> You can watch a live demo of the initial POC of the project here - https://www.awesomescreenshot.com/video/13008461?key=e8314a86270462007152e3b172ec00aa - checkout the demo video(of the stand-alone store) to get wowed even further.

## Screenshots

Below are some awesome screenshots from deeco.

![deeco screenshot-1](./client/assets/images/landingpage.png)

![deeco screenshot-3](./client/assets/images/Signuppage.png)

![deeco screenshot-2](./client/assets/images/loginpage.png)

![deeco screenshot-4](./client/assets/images/dashboard.png)

![deeco screenshot-6](./client/assets/images/products-dashboard.png)

![deeco screenshot-5](./client/assets/images/payout-dashboard.png)

## Setting up for development

Below, are some simple setups to help you set up a local development environment for deeco.

### Client/Front-end - Run the following commands to start the front-end server locally.

1. Run the following command to pull the client/front-end image from Docker.

```
docker pull okpainmo/deeco-frontend-server-image:latest
```

2. Run the following command to start the project frontend in a Docker container.

```
docker run -d -p 3000:3001 --name deeco-frontend-server okpainmo/deeco-frontend-server-image:latest
```

### Server/Backend - Run the following commands to start the backend server locally.

1. Run the following command to pull the server/backend image from Docker.

```
docker pull okpainmo/deeco-backend-server-image:latest
```

2. Run the following command to start the project BACKEND in a Docker container.

```
docker run -d -p 5000:8080 -e DB_URI="mongodb+srv://team-access:j2ujj8SvnzsFdOPZ@be-db-core-1.icqldz8.mongodb.net/POC_DB-core?retryWrites=true&w=majority" -e JWT_SECRET="NwCWWGrcsD5oCQbLqBP2Usy9KxGJIXtd" -e JWT_LIFETIME="1H" --name deeco-backend-server deeco-backend-server-image

```

> You MIGHT need to take some more setups. If you ever get into any issues, just create a github issue, I'll respond as soon as possible. I'll also be just a twitter DM or an email way.

- Twitter: https://twitter.com/AJ_Okpainmo

- Email: okpainmoandrew@gmail.com

- Phone: +234 90 5373 9194
