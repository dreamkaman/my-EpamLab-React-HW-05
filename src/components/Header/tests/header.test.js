import { screen } from '@testing-library/react';
import Header from '../Header';

import { render } from 'utils/test-utils';

describe('Test for Header', () => {
	it('Header should have logo.', () => {
		render(<Header />);
		expect(screen.getByAltText('Programming courses')).toBeInTheDocument();
	});
	it("Header should have user's name.", () => {
		render(<Header />);
		expect(screen.getByText('TestUser')).toBeInTheDocument();
	});
});
