import { screen } from '@testing-library/react';
import Header from '../Header';

import { renderWithProvider } from 'utils/test-utils';

describe('Test for Header', () => {
	it('Header should have logo.', () => {
		renderWithProvider(<Header />);
		expect(screen.getByAltText('Programming courses')).toBeInTheDocument();
	});
	it("Header should have user's name.", () => {
		renderWithProvider(<Header />);
		expect(screen.getByText('TestUser')).toBeInTheDocument();
	});
});
