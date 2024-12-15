import { NextApiRequest, NextApiResponse } from "next";

let users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Doe", email: "jane@example.com" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { name, email } = req.body;
    users = users.map((user) =>
      user.id === id ? { ...user, name, email } : user
    );
    res.status(200).json({ id, name, email });
  } else if (req.method === "DELETE") {
    users = users.filter((user) => user.id !== id);
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}