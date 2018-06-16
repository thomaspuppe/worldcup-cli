// import fetch from 'node-fetch';
const fetch = require('node-fetch');

fetch('http://worldcup.sfg.io/matches/today')
    .then(res => res.json())
    .then(json => {
    	for (index in json) {
    		
    		const match = json[index]

    		if ( match.status == 'future' ) {
    			console.log(`${match.home_team.country} – ${match.away_team.country}`)
    		} else {
    			console.log(`${match.home_team.code} ${match.home_team.goals} : ${match.away_team.goals} ${match.away_team.code}`)
    		}
    	}

    });


/*

match.status : future / completed / in progress
match.winner_code: team.code
match.away_team_events : 
	time: 90'+6'
	type_of_event: 
		substitution-in
		yellow-card
		goal

*/