const { FamilyMember } = require('../models/')

const getAllFamMemb = async (req, res) => {
  try {
    const members = await FamilyMember.find({})
    res.json(members)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMemberById = async (req, res) => {
  try {
    const { id } = req.params
    const selMemb = await FamilyMember.findById(id)
    return res.json({ selMemb })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addNewMember = async (req, res) => {
  let selMember = await FamilyMember.findById(req.params.id)
  let newMember = await FamilyMember.create(req.body)
  if (req.params.relation === 1) {
    selMember.children.push(newMember)
    selMember.save()
    res.send(selMember)
  } else if (req.params.relation === 2) {
    selMember.siblings.push(newMember)
    newMember.siblings.push(selMember)
    selMember.save()
    res.send(selMember)
    res.send(newMember)
  } else if (req.params.relation === 3) {
    selMember.spouse.push(newMember)
    newMember.spouse.push(selMember)
    selMember.save()
    res.send(selMember)
    res.send(newMember)
  }
}

module.exports = {
  getAllFamMemb,
  getMemberById,
  addNewMember
}
