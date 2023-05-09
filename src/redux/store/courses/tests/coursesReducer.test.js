import { coursesReducer } from '../reducer';

const initialState = [
	{
		id: '83e563a1-a9f3-4f56-877f-ae22a66ee8c9',
		title: 'TestingTitle',
		description: 'TestingDescription',
		creationDate: '08/03/2021',
		duration: 180,
		authors: ['24699fc6-c7a3-4b53-994f-f30e5c444134'],
	},
];

const payload = {
	id: '83e563a1-a9f3-4f56-877f-ae22a66ee8c7',
	title: 'TestingTitle',
	description: 'TestingDescription-2',
	creationDate: '08/03/2021',
	duration: 230,
	authors: ['24699fc6-c7a3-4b53-994f-f30e5c444134'],
};

const mockedStateWithAddedItem = [
	{
		id: '83e563a1-a9f3-4f56-877f-ae22a66ee8c9',
		title: 'TestingTitle',
		description: 'TestingDescription',
		creationDate: '08/03/2021',
		duration: 180,
		authors: ['24699fc6-c7a3-4b53-994f-f30e5c444134'],
	},
	{
		id: '83e563a1-a9f3-4f56-877f-ae22a66ee8c7',
		title: 'TestingTitle',
		description: 'TestingDescription-2',
		creationDate: '08/03/2021',
		duration: 230,
		authors: ['24699fc6-c7a3-4b53-994f-f30e5c444134'],
	},
];

describe('Tests for coursesReducer', () => {
	const result = coursesReducer(initialState, {
		type: 'WRANG_ACTION_NAME',
		payload,
	});
	it('Reducer should return the initial state', () => {
		expect(result).toEqual(initialState);
	});

	const stateWithAddedItem = coursesReducer(initialState, {
		type: 'SET_NEW_COURSE',
		payload,
	});

	it('Reducer should handle SET_NEW_COURSE and returns new state', () => {
		expect(stateWithAddedItem).toEqual(mockedStateWithAddedItem);
	});

	const stateWithoutDeletedItem = coursesReducer(mockedStateWithAddedItem, {
		type: 'CLEAR_DELETED_COURSE',
		payload: '83e563a1-a9f3-4f56-877f-ae22a66ee8c7', //payload===id
	});
	console.log(stateWithoutDeletedItem);

	it('Reducer should handle CLEAR_DELETED_COURSE and returns new state', () => {
		expect(stateWithoutDeletedItem).toEqual(initialState);
	});
});
