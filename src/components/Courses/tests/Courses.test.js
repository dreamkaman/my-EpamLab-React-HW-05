import Courses from '../Courses';
import { screen, fireEvent } from '@testing-library/react';
import { mockedStore2, renderWithProvider } from 'utils/test-utils';
import * as router from 'react-router';

const navigate = jest.fn();

beforeEach(() => {
	jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
});

describe('Tests for Courses', () => {
	it('Courses should display amount of CourseCard equal length of courses array.', () => {
		renderWithProvider(<Courses />);
		expect(screen.getAllByText('TestingTitle').length).toBe(2);
	});

	it('Courses should display Empty container if courses array length is 0.', () => {
		renderWithProvider(<Courses />, mockedStore2);
		expect(screen.getByText('There are no courses yet')).toBeInTheDocument();
	});

	it('CourseForm page should be showed after a click on a button "Add new course"', () => {
		renderWithProvider(<Courses />);
		const btnAddNewCourse = screen.getByText('Add new course');
		fireEvent.click(btnAddNewCourse);
		expect(navigate).toHaveBeenCalledWith('/courses/add');
	});
});
