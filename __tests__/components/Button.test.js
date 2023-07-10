import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

describe('<Button />', () => {
    it('renders correctly', () => {
        const onPressMock = jest.fn();
        const buttonTitle = "Test Button";
        const rendertest = renderer.create(
          <Button onPress={onPressMock} buttonTitle={buttonTitle} />
        );
        console.log(rendertest.toJSON());
    })
})