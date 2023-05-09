import Courses from '../Courses';
import { screen } from '@testing-library/react';
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
});
