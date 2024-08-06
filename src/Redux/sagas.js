import { call, put, takeEvery, all } from "redux-saga/effects";
import axios from "axios";

function* fetchData() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/todos/"
    );
    yield put({
      type: "FETCH_DATA_SUCCESS",
      payload: {
        data: response.data,
      },
    });
  } catch (e) {
    yield put({ type: "FETCH_DATA_FAILURE", payload: e.message });
  }
}

function* watchFetchData() {
  yield takeEvery("FETCH_DATA_REQUEST", fetchData);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
