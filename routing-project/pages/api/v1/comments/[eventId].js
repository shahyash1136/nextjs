export default function handler(res, req) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    //add server side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      !text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    console.log(email, name, text);
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    res.status(201).json({ message: "Added comment", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", text: "A first comment!" },
      { id: "c2", name: "Manuel", text: "A Second comment!" },
    ];
    res.status(200).json({ comments: dummyList });
  }
}
