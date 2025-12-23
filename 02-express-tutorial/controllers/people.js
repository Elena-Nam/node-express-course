const { people } = require('../data')

const getPeople = (req, res) => {
res.json(people)
}

const addPerson = (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name" })
  }
    people.push({ id: people.length + 1, name: req.body.name });
    res
      .status(201)
      .json({ success: true, name: req.body.name });
}

const getPersonById = (req, res) => {
  const idToFind = parseInt(req.params.id); 
  const person = people.find((p) => p.id === idToFind);
  if(person){
    return res
        .status(200)
        .json(person)
  }
    return res
      .status(404)
      .json({ message: "That person was not found."})
}

const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === parseInt(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === parseInt(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
}

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === parseInt(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== parseInt(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
  getPeople, 
  addPerson, 
  getPersonById, 
  deletePerson,
  updatePerson
}