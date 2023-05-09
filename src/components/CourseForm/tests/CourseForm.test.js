import { screen } from '@testing-library/react';
import CourseForm from '../CourseForm';
import { renderWithProvider } from 'utils/test-utils';

describe('Tests for CourseForm', () => {
	renderWithProvider(<CourseForm mode={'create'} />);

	it('CourseForm should show authors lists (all and course authors).', () => {
		expect(screen.getAllByText(/TestAuthor/).length).toBe(2);
	});
});
