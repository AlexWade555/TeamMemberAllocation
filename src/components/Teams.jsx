const Teams = ({ selectedTeam, handleTeamSelectionChange }) => {
  return (
            <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
              <option vaue="TeamA">TeamA</option>
              <option vaue="TeamB">TeamB</option>
              <option vaue="TeamC">TeamC</option>
              <option vaue="TeamD">TeamD</option>
            </select>
  )
}
export default Teams;
