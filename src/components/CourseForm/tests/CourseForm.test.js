import { screen, fireEvent } from '@testing-library/react';
import * as reactReduxHooks from 'redux/hooks.ts';
import * as reactHooks from 'react';
import CourseForm from '../CourseForm';
import { renderWithProvider } from 'utils/test-utils';

describe('Tests for CourseForm', () => {
	renderWithProvider(<CourseForm mode='create' />);

	screen.debug();

	it('CourseForm should show authors lists (all and course authors).', () => {
		expect(screen.getAllByText(/TestAuthor/).length).toBe(2);
	});

	it('CourseForm "Create author" click button should call dispatch.', () => {
		jest.mock('redux/hooks.ts');
		jest.mock('react');
		const dispatch = jest.fn();

		const mockedDispatch = jest.spyOn(reactReduxHooks, 'useAppDispatch');

		// const mockedUseState = jest.spyOn(reactHooks, 'useState');

		mockedDispatch.mockReturnValue(dispatch);

		renderWithProvider(<CourseForm mode='create' />);

		const btnCreateAuthor = screen.getByText('Create author');

		fireEvent.click(btnCreateAuthor);

		screen.debug();

		// expect(dispatch).toHaveBeenCalled();
	});
});
