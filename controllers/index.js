// get all working hours
getAllHours = ((req, res) => {
  res.status(200).json({message: 'doctors here.....'});
})

findWorkingHours = ((req, res) => {
    res.status(200).json({message: 'working hours are...'});
})

bookWorkingHours = ((req, res) => {
    res.status(200).json({message: 'booked!!'})
})

addWorkingHours = ((req, res) => {
    res.status(200).json({message: 'hours added!'});
})

module.exports = {
    getAllHours,
    findWorkingHours,
    bookWorkingHours
}