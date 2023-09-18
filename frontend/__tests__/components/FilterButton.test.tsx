import { render, screen } from '@testing-library/react';
import FilterButton from '../../src/components/FilterButton';
import '@testing-library/jest-dom';

describe(FilterButton, () => {
  it('renders the component name', () => {
    render(<FilterButton/>);

    const nameElem = screen.getByText('FilterButton');

    expect(nameElem).toBeInTheDocument();
  })
})