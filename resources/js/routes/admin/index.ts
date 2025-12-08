import logs from './logs'
import systemSettings from './system-settings'
import proctor from './proctor'

const admin = {
    logs: Object.assign(logs, logs),
    systemSettings: Object.assign(systemSettings, systemSettings),
    proctor: Object.assign(proctor, proctor),
}

export default admin