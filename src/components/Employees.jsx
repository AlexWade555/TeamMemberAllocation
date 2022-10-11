import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className ="col-6">
          <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option vaue="TeamA">TeamA</option>
            <option vaue="TeamB">TeamB</option>
            <option vaue="TeamC">TeamC</option>
            <option vaue="TeamD">TeamD</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center mt-3 mb-3">
        <div class ="col-8">
          <div class="card-collection">
            {
            employees.map((employee) => (
              <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout':'card m-2')} style={{ cursor: "pointer"}} onClick ={handleEmployeeCardClick}>
                {(employee.gender === 'male')?<img src={maleProfile} className="card-img-top" alt="male profile"/>
                                              :<img src={femaleProfile} className="card-img-top" alt="female profile"/>}
                <div className='card-body'>
                  <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                  <p className='card-text'><b>Designation:</b> {employee.designation}</p>
                </div>
              </div>
            ))
          }
        </div>
       </div>
      </div>
    </main>
  )

}
export default Employees
