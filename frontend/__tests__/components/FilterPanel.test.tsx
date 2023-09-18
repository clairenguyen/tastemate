import { render, screen } from '@testing-library/react';
import FilterPanel from '../../src/components/FilterPanel';
import FilterButton from '@/components/FilterButton';
import '@testing-library/jest-dom';

describe(FilterPanel, () => {
  it('renders a dietary restrictions FilterButton', () => {
    render(<FilterPanel/>);

    expect(screen.getByText('Vegan')).toBeInTheDocument();
  })
})