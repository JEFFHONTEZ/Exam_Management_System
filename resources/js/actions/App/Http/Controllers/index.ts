import Auth from './Auth'
import DashboardController from './DashboardController'
import StudentsController from './StudentsController'
import TeacherController from './TeacherController'
import AdminController from './AdminController'
import UserController from './UserController'
import CourseController from './CourseController'
import UnitController from './UnitController'
import ExamController from './ExamController'
import QuestionController from './QuestionController'
import StudentExamController from './StudentExamController'
import ProctorEventController from './ProctorEventController'
import GradingController from './GradingController'
import Admin from './Admin'
import RevisionDocumentController from './RevisionDocumentController'
import Settings from './Settings'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    DashboardController: Object.assign(DashboardController, DashboardController),
    StudentsController: Object.assign(StudentsController, StudentsController),
    TeacherController: Object.assign(TeacherController, TeacherController),
    AdminController: Object.assign(AdminController, AdminController),
    UserController: Object.assign(UserController, UserController),
    CourseController: Object.assign(CourseController, CourseController),
    UnitController: Object.assign(UnitController, UnitController),
    ExamController: Object.assign(ExamController, ExamController),
    QuestionController: Object.assign(QuestionController, QuestionController),
    StudentExamController: Object.assign(StudentExamController, StudentExamController),
    ProctorEventController: Object.assign(ProctorEventController, ProctorEventController),
    GradingController: Object.assign(GradingController, GradingController),
    Admin: Object.assign(Admin, Admin),
    RevisionDocumentController: Object.assign(RevisionDocumentController, RevisionDocumentController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers