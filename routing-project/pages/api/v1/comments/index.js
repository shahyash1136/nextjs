function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Comments API" });
  }
}
export default handler;
