import Contact from "../models/Contact.js";

export const saveContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ message: "Contact message saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save contact message." });
  }
};
