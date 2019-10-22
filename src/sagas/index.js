import { put, call, fork } from 'redux-saga/effects';

// sagas
export function fetchRequestsApi() {
	// return fetch(`https://my.api.mockaroo.com/KPMC.json?key=f5b8c5d0`)
	//   .then(response => response.json())
	//   .then(json => json);
	return columns;
}

export function fetchFormDataMock() {
	return preloadedState;
}

export function* fetchRequests() {
	yield put(requestRequests());
	const requests = yield call(fetchRequestsApi);
	yield put(receiveRequests(requests));
}

export function* getPageClicked(pageClicked) {
	yield put(setPageClicked(pageClicked));
}

export function* fetchFormData() {
	yield put(requestFormData());
	const formData = yield call(fetchFormDataMock);
	yield put(receiveFormData(formData));
}

export function* startup() {
	yield fork(fetchRequests);
	yield fork(setPageClicked);
	yield fork(fetchFormData);
}

export default function* root() {
	yield fork(startup);
}
