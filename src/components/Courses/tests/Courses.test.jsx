import Courses from '../Courses';
import { screen, fireEvent } from '@testing-library/react';
import { mockedStore2, renderWithProvider } from 'utils/test-utils';

describe('Tests for Courses', () => {
	it('Courses should display amount of CourseCard equal length of courses array.', () => {
		renderWithProvider(<Courses />);
		expect(screen.getAllByText('TestingTitle').length).toBe(2);
	});

	it('Courses should display Empty container if courses array length is 0.', () => {
		renderWithProvider(<Courses />, mockedStore2);
		expect(screen.getByText('There are no courses yet')).toBeInTheDocument();
	});

	it('CourseForm should be showed after a click on a button "Add new course".', () => {
		renderWithProvider(<Courses />);
		const addNewCourseBtn = screen.getByText('Add new course');
		// screen.debug(addNewCourseBtn);
		// expect(
		// 	screen.getByPlaceholderText('Enter description')
		// ).not.toBeInTheDocument();
		fireEvent.click(addNewCourseBtn);
		screen.debug();
		// expect(
		// 	screen.getByPlaceholderText('Enter description')
		// ).toBeInTheDocument();
	});
});
