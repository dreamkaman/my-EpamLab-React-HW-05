import App from 'App';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProvider } from 'utils/test-utils';

describe('Tests for App', () => {
	it('CourseForm should be showed after a click on a button "Add new course".', () => {
		renderWithProvider(<App />);
		const addNewCourseBtn = screen.getByText('Add new course');
		expect(screen.queryByPlaceholderText('Enter description')).toBeNull();
		fireEvent.click(addNewCourseBtn);
		expect(
			screen.getByPlaceholderText('Enter description')
		).toBeInTheDocument();
	});
});
