import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const mockedState = {
	user: {
		isAuth: true,
		name: 'TestUser',
		email: 'test@test.com',
		token: 'testToken',
		role: 'user',
	},
	courses: [
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
	],
	authors: [
		{
			id: '24699fc6-c7a3-4b53-994f-f30e5c444134',
			name: 'TestAuthor',
		},
	],
};

export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

export const mockedState2 = {
	user: {
		isAuth: true,
		name: 'TestUser',
		email: 'test@test.com',
		token: 'testToken',
		role: 'user',
	},
	courses: [],
	authors: [
		{
			id: '24699fc6-c7a3-4b53-994f-f30e5c444134',
			name: 'TestAuthor',
		},
	],
};

export const mockedStore2 = {
	getState: () => mockedState2,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

export const renderWithProvider = (component, store = mockedStore) =>
	render(
		<Provider store={store}>
			<BrowserRouter>{component}</BrowserRouter>
		</Provider>
	);
