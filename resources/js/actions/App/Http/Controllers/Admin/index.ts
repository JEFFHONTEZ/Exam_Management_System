import LogController from './LogController'
import SystemSettingsController from './SystemSettingsController'
import ProctoringEventController from './ProctoringEventController'

const Admin = {
    LogController: Object.assign(LogController, LogController),
    SystemSettingsController: Object.assign(SystemSettingsController, SystemSettingsController),
    ProctoringEventController: Object.assign(ProctoringEventController, ProctoringEventController),
}

export default Admin