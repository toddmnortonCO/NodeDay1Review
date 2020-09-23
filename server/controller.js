const proSportsTeams = [
    {
        id: 0, 
        name: 'Cowboys',
        city: 'Dallas'
    },
    {
        id: 1,
        name: 'Seahawks',
        city: 'Seattle'
    },
    {
        id: 2,
        name: 'Broncos',
        city: 'Denver'
    },
    {
        id: 3,
        name: 'Eagles',
        city: 'Philadelphia'
    }
]; // Don't code above this line

let id = 4;

function getTeams(req, res) {
    res.status(200).send(proSportsTeams)
}

function addTeam(req, res) {
    console.log(req.body);
    const newTeam = {
        id,
        name: req.body.name,
        city: req.body.city,
    }

    proSportsTeams.push(newTeam);
    id++;

    res.status(200).send(newTeam)
}

module.exports = {
    getTeams,
    addTeam,
}