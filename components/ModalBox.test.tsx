import React from "react";
import ModalBox from "./ModalBox";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });


it('renders Modal component given the props', () => {
  const setshowModal = jest.fn();
  let images = [];
  let initialPage = 1;

  const container = shallow(<ModalBox images={images} initialPage={initialPage} setshowModal={setshowModal}>Hello world</ModalBox>);
 

  const overlay = container.find('.modal');
  expect(overlay).toHaveLength(1);

});
