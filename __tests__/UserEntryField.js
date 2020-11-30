import 'react-native';
import React from 'react';
import UserEntryField from '../components/UserEntryField';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<UserEntryField />);
});