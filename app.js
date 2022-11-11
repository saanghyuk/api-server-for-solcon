const express = require("express");

const app = express();
var path = require("path");

// const path = require("path");
//
var http = require("http");
setInterval(function() {
  http.get("https://ab180-members-api-server.herokuapp.com/api/members");
}, 600000);

// __dirname = "front";
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const db = require("./models/index");
const { Member } = db;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/members", async (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = await Member.findAll({ where: { team: team } });
    res.send(teamMembers);
  } else {
    // Model-related commands return promise
    const members = await Member.findAll();
    res.send(members);
  }
  // res.send(members);
});

app.get("/api/members/:id", async (req, res) => {
  const { id } = req.params;
  const member = await Member.findOne({ where: { id: id } });
  if (member) {
    res.send(member);
  } else {
    res.status(404).send({ message: "There is no such member" });
  }
});

// 무조건 리스트로 넣어야 함.
app.post("/api/members", async (req, res) => {
  const newMember = req.body;
  if (newMember.length == 1) {
    const member = Member.build(newMember[0]);
    await member.save();
    res.send(newMember);
  } else {
    result = await Member.bulkCreate(newMember);
    res.send(`${newMember.length} rows are created`);
  }
});

// app.put("/api/members/:id", async (req, res) => {
//   const { id } = req.params;
//   const newInfo = req.body;
//   const result = await Member.update(newInfo, { where: { id: id } });
//   if (result[0]) {
//     res.send({ message: `${result[0]} row(s) affected` });
//   } else {
//     res.status(404).send({ message: "There is no member with the id" });
//   }
// });

app.put("/api/members/:id", async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  const member = await Member.findOne({ where: { id } });
  if (member) {
    Object.keys(newInfo).forEach(prop => {
      member[prop] = newInfo[prop];
    });
    await member.save();
    res.send(member);
  } else {
    res.status(404).send({ message: "There is no member with the id!" });
  }
});

// app.delete('/api/members/:id', async (req, res) => {
//   const { id } = req.params;
//   const member = await Member.findOne({ where: { id } });
//   if (member) {
//     const result = await member.destroy();
//     res.send({ message: `1 row(s) deleted` });
//   } else {
//     res.status(404).send({ message: 'There is no member with the id!' });
//   }
// });

app.delete("/api/members/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCount = await Member.destroy({ where: { id: id } });
  if (deletedCount) {
    res.send({ message: `${deletedCount} row(s) deleted` });
  } else {
    res.status(404).send({ message: "There is no member with the id" });
  }
});

app.delete("/api/members", async (req, res) => {
  await Member.destroy({ where: {}, truncate: true });
  res.send({ message: `All rows deleted` });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening...");
});
