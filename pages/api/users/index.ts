import { NextApiRequest, NextApiResponse } from "next";

let users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Doe", email: "jane@example.com" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const { name, email } = req.body;
    const newUser = { id: Date.now().toString(), name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(405).end();
  }
}