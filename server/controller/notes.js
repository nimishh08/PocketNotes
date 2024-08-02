const { Notes } = require("../model/notes");

exports.fetchNotes = async(req, res) => {
  console.log("hello get");
  try{
    const notes = await Notes.find({});
    res.status(200).json(notes);
}catch(err){    
    console.log(err);
    res.status(400).json(err);
}
}

exports.postNotes = async(req, res) => {
  console.log("hello post")
  const notes = new Notes(req.body);
    try{
        const doc = await notes.save()
        res.status(201).json(doc);
    }catch(err){    
        console.log(err);
        res.status(400).json(err);
    }
}

exports.updateNotes = async(req, res) => {
  const {id} = req.params;
  try{
      const notes = await Notes.findByIdAndUpdate(id,req.body,{new:true});
      res.status(200).json(notes);
  }catch(err){    
      console.log(err);
      res.status(400).json(err);
  }
}
