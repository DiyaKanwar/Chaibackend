require('dotenv').config()
const express = require('express')
// import express from "express" 
const app = express()
const githubData = {
  "login": "DiyaKanwar",
  "id": 160303724,
  "node_id": "U_kgDOCY4KbA",
  "avatar_url": "https://avatars.githubusercontent.com/u/160303724?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DiyaKanwar",
  "html_url": "https://github.com/DiyaKanwar",
  "followers_url": "https://api.github.com/users/DiyaKanwar/followers",
  "following_url": "https://api.github.com/users/DiyaKanwar/following{/other_user}",
  "gists_url": "https://api.github.com/users/DiyaKanwar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DiyaKanwar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DiyaKanwar/subscriptions",
  "organizations_url": "https://api.github.com/users/DiyaKanwar/orgs",
  "repos_url": "https://api.github.com/users/DiyaKanwar/repos",
  "events_url": "https://api.github.com/users/DiyaKanwar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DiyaKanwar/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Diya Kanwar",
  "company": "Chandiagrh University",
  "blog": "https://diya-kanwar-portfolio-craft.vercel.app/",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "Hi, I am Diya Kanwar , an aspiring Front End Developer",
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-02-17T05:34:22Z",
  "updated_at": "2026-04-01T08:10:10Z"
}

const port = 4000
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send('diyakan')
})
app.get('/login',(req,res)=>{
res.send('<h1> please login as diya</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2> codeee <h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
