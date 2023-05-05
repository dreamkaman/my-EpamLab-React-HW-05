import { screen } from '@testing-library/react';
import CourseCard from '../CourseCard';
import { render, mockedState } from 'utils/test-utils';

describe('Tests for CourseCard', () => {
	it('CourseCard should display title', () => {
		render(
			<CourseCard
				id={mockedState.courses[0].id}
				title={mockedState.courses[0].title}
				description={mockedState.courses[0].description}
				authors={mockedState.courses[0].authors}
				duration={mockedState.courses[0].duration}
				creationDate={mockedState.courses[0].creationDate}
			/>
			// <CourseCard />
		);
		expect(screen.getByText('Testing')).toBeInTheDocument();
	});
});
