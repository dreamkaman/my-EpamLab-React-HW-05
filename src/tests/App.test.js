import App from 'App';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProvider } from 'utils/test-utils';

describe('Tests for App', () => {
	it('CourseForm should be showed after a click on a button "Add new course".', () => {
		renderWithProvider(<App />);
		const addNewCourseBtn = screen.getByText('Add new course');
		screen.debug();
		expect(screen.queryByPlaceholderText('Enter description')).toBeNull();
		fireEvent.click(addNewCourseBtn);
		screen.debug();
		expect(
			screen.getByPlaceholderText('Enter description')
		).toBeInTheDocument();
	});
});
