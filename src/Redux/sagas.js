import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";

// Worker saga: will be fired on FETCH_DATA_REQUEST actions
function* fetchData(action) {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/todos/"
    );
    yield put({ type: "FETCH_DATA_SUCCESS", payload: response.data });
  } catch (e) {
    yield put({ type: "FETCH_DATA_FAILURE", payload: e.message });
  }
}

// Watcher saga: spawns a new fetchData task on each FETCH_DATA_REQUEST
function* watchFetchData() {
  yield takeEvery("FETCH_DATA_REQUEST", fetchData);
}

// Root saga: combines all sagas
export default function* rootSaga() {
  yield all([watchFetchData()]);
}
