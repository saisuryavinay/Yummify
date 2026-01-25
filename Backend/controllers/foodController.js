import Food from "../models/Food.js";

export const getFoods = async (req, res) => {
  try {
    const { type, search } = req.query;
    let query = {};
    if (type) query.type = type;
    if (search) query.name = { $regex: search, $options: "i" };
    const foods = await Food.find(query);
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// one one add
export const addFood1 = async (req, res) => {
  try {
    const { name, title, type, price } = req.body;
    const food = await Food.create({ name, title, type, price });
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// more add
export const addFoods = async (req, res) => {
  try {
    const foods = await Food.insertMany(req.body);

    res.status(201).json({
      message: "Foods added successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Food.findByIdAndDelete(id); // also use for deletemany
    if (!deleted) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.status(200).json({ message: "Food deleted", deleted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
