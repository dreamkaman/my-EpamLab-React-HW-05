import Courses from '../Courses';
import { screen } from '@testing-library/react';
import { renderWithProvider } from 'utils/test-utils';

describe('Tests for Courses', () => {
	it('CourseCard should display title', () => {
		renderWithProvider(<Courses />);
		expect(screen.getByText('TestingTitle')).toBeInTheDocument();
	});
	// it(' Courses should display amount of CourseCard equal length of courses array.', () => {});
});
