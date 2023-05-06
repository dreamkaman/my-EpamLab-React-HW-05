import { screen } from '@testing-library/react';
import CourseCard from '../CourseCard';
import { renderWithProvider, mockedState } from 'utils/test-utils';

describe('Tests for CourseCard', () => {
	it('CourseCard should display title', () => {
		renderWithProvider(
			<CourseCard
				id={mockedState.courses[0].id}
				title={mockedState.courses[0].title}
				description={mockedState.courses[0].description}
				authors={'TestAuthor'}
				duration={mockedState.courses[0].duration}
				creationDate={mockedState.courses[0].creationDate}
			/>
		);
		expect(screen.getByText('Testing')).toBeInTheDocument();
	});
});
