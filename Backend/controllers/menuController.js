import Food from "../models/Menu.js";

export const getMenu = async (req, res) => {
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
export const addMenu = async (req, res) => {
  try {
    const { title, filter } = req.body;
    const food = await Food.create({title, filter });
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// more add
export const addMenus = async (req, res) => {
  try {
    const foods = await Food.insertMany(req.body);

    res.status(201).json({
      message: "Menus added successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMenu = async (req, res) => {
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
