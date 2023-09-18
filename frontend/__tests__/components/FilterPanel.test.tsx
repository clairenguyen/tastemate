import { render, screen } from '@testing-library/react';
import FilterPanel from '../../src/components/FilterPanel';
import '@testing-library/jest-dom';

describe(FilterPanel, () => {
  it('renders the component name', () => {
    render(<FilterPanel/>);

    const nameElem = screen.getByText('FilterPanel');

    expect(nameElem).toBeInTheDocument();
  })
})