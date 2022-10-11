import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ employees, handdleEmployeecardClick, selectedTeam }) => {
  return (
    employees.map((employee) => (
      <TeamMemberCard employee={employee} handdleEmployeecardClick = {handdleEmployeecardClick} selectedTeam = {selectedTeam} />
    ))
  )
}
export default TeamMembers;
