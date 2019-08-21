import React from "react";

const Standings = ({ handleClick, items }) => {
  return (
    <div className="App">
      <img
        alt="Premier-League-Logo"
        src="http://www.cliffordfrench.co.uk/wp-content/uploads/2015/06/logo-premier-league-white.png"
      />
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team Name</th>
            <th>W</th>
            <th>L</th>
            <th>D</th>
            <th>Played</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {items.map(row => (
            <tr
              onClick={handleClick.bind(this, row.team_id)}
              className="child"
              key={row.team_id}
              id={row.team_id}
            >
              <td>{row.overall_league_position} </td>
              <td>{row.team_name}</td>
              <td>{row.overall_league_W} </td>
              <td>{row.overall_league_L} </td>
              <td>{row.overall_league_D} </td>
              <td>{row.overall_league_payed} </td>
              <td>{row.overall_league_PTS} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Standings;


