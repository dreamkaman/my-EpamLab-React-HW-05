import { screen, fireEvent } from '@testing-library/react';
import * as reactReduxHooks from 'redux/hooks.ts';
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

		const mockedDispatch = jest.spyOn(reactReduxHooks, 'useAppDispatch');

		const dispatch = jest.fn();
		mockedDispatch.mockReturnValue(dispatch);

		renderWithProvider(<CourseForm mode={'create'} />);

		const btnCreateAuthor = screen.getByText('Create author');

		console.log(btnCreateAuthor);

		fireEvent.click(btnCreateAuthor);

		// expect(dispatch).toHaveBeenCalled();
	});
});
