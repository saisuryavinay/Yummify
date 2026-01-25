import Data from "../Models/data.js";

export const adddata = async (req, res) => {
  try {
    const dataadded = await Data.create(req.body);
    res.status(201).json(dataadded);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getdata = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletedata = async (req, res) => {
  try {
    const deleted = await Data.findByIdAndDelete(req.params.id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateData = async (req,res) =>{
  try{
      const update = await Data.findByIdAndUpdate(req.params.id,req.body)
  }
  catch(err){
    res.status(500).json(err)
  }
}
