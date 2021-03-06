export interface taskState {
  alertShow?: boolean;
  infoModalShow?: boolean;
  infoObj?: IinfoObj | null;
  modalShow?: boolean;
  newTasks: any[],
  inProgressTasks: any[],
  doneTasks: any[],
  loading: boolean;
  error: null | string;
  id?: number;
  name?: string;
  description?: string;
  priority?: string;
  dateFinish?: null | Date;
  dateWasMade?: null | Date;
}

export enum TaskActionTypes {
  FETCH_TASKS = 'FETCH_TASKS',
  FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS',
  FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR',
  SET_AUTH = 'SET_AUTH',
  TOGGLE_MODAL = 'TOGGLE_MODAL',
  TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL',
  SAVE_TASK = 'SAVE_TASK',
  SAVE_DATE_WAS_MADE = 'SAVE_DATE_WAS_MADE',
  SAVE_DATE_FINIHED = 'SAVE_DATE_FINIHED',
  UPDATE_NEW_TASKS = 'UPDATE_NEW_TASKS',
  UPDATE_PROGRESS_TASKS = 'UPDATE_PROGRESS_TASKS',
  UPDATE_DONE_TASKS = 'UPDATE_DONE_TASKS',
  SAVE_OBJECT_FOR_INFO = 'SAVE_OBJECT_FOR_INFO',
  ALERT_SHOW = 'ALERT_SHOW',
  SAVE_TASKS_REDUX_FROM_DB = 'SAVE_TASKS_REDUX_FROM_DB',
  SAVE_TASK_REDUX = 'SAVE_TASK_REDUX',
  SAVE_NEW_TASKS_REDUX_FROM_DB = 'SAVE_NEW_TASKS_REDUX_FROM_DB',
  SAVE_PROGRESS_TASKS_REDUX_FROM_DB = 'SAVE_PROGRESS_TASKS_REDUX_FROM_DB',
  SAVE_DONE_TASKS_REDUX_FROM_DB = 'SAVE_DONE_TASKS_REDUX_FROM_DB',
}
interface IinfoObj {
  id?: number;
  name?: string;
  description?: string;
  priority?: string;
  dateFinish?: null | Date;
  dateWasMade?: null | Date;
}
interface FetchTaskAction {
  type: TaskActionTypes.FETCH_TASKS;
}
interface saveTaskRedux {
  type: TaskActionTypes.SAVE_TASK_REDUX;
  payload: any
}
interface saveNewTasksToReduxFromDb {
  type: TaskActionTypes.SAVE_NEW_TASKS_REDUX_FROM_DB;
  payload: any
}
interface saveProgressTasksToReduxFromDb {
  type: TaskActionTypes.SAVE_PROGRESS_TASKS_REDUX_FROM_DB;
  payload: any
}
interface saveDoneTasksToReduxFromDb {
  type: TaskActionTypes.SAVE_DONE_TASKS_REDUX_FROM_DB;
  payload: any
}
interface FetchTaskSuccessAction {
  type: TaskActionTypes.FETCH_TASKS_SUCCESS;
  payload: any[];
}
interface FetchTaskErrorAction {
  type: TaskActionTypes.FETCH_TASKS_ERROR;
  payload: string;
}
interface setAuth {
  type: TaskActionTypes.SET_AUTH;
  payload: boolean;
}
interface toggleModal {
  type: TaskActionTypes.TOGGLE_MODAL;
  payload: boolean;
}
interface toggleInfoModal {
  type: TaskActionTypes.TOGGLE_INFO_MODAL;
  payload: boolean;
}
interface saveTask {
  type: TaskActionTypes.SAVE_TASK;
  payload: object;
}
interface saveDateWasMade {
  type: TaskActionTypes.SAVE_DATE_WAS_MADE;
  payload: Date;
}
interface saveDateFinished {
  type: TaskActionTypes.SAVE_DATE_FINIHED;
  payload: Date;
}
interface updateNewTasks {
  type: TaskActionTypes.UPDATE_NEW_TASKS;
  payload: [];
}
interface updateProgressTasks {
  type: TaskActionTypes.UPDATE_PROGRESS_TASKS;
  payload: [];
}
interface updateDoneTasks {
  type: TaskActionTypes.UPDATE_DONE_TASKS;
  payload: [];
}

interface saveObjectForInfo {
  type: TaskActionTypes.SAVE_OBJECT_FOR_INFO;
  payload: {};
}
interface alertShow {
  type: TaskActionTypes.ALERT_SHOW;
  payload: boolean;
}

export type TaskAction =
  | FetchTaskAction
  | FetchTaskSuccessAction
  | FetchTaskErrorAction
  | setAuth
  | toggleModal
  | saveTask
  | saveDateWasMade
  | saveDateFinished
  | updateNewTasks
  | updateProgressTasks
  | updateDoneTasks
  | saveObjectForInfo
  | toggleInfoModal
  | alertShow
  | saveTaskRedux
  | saveNewTasksToReduxFromDb
  | saveProgressTasksToReduxFromDb
  | saveDoneTasksToReduxFromDb;
