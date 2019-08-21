import React from 'react';

  
const Fixtures = ({items2, i}) => {

            const filteredItems = items2.filter(item =>{
      return item.match_hometeam_id === i || item.match_awayteam_id === i;})
    
            return (<div className="App">
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Home Team</th>
                  <th></th>
                  <th></th>
                  <th>Away Team</th>
                </tr>
              </thead>
              <tbody>
                {
                  filteredItems.map(row => (
                    <tr className="second" key={row.match_id}>
                      <td>{row.match_hometeam_name}</td>
                      <td>{row.match_hometeam_score}</td>
                      <td>{row.match_awayteam_score}</td>
                      <td>{row.match_awayteam_name} </td>
                    </tr>
                      ))
                }
              </tbody>
              </table>
            </div>
            );

}
 
export default Fixtures;
