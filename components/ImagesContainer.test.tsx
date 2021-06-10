import React from "react";
import ImagesContainer from "./ImagesContainer";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { ImageProps } from "../types";

configure({ adapter: new Adapter() });

describe('Is Gallery Component is Mounted', () => {
  it('renders Child component', () => {
    let imagesArray: ImageProps[]= [];

  const wrapper = shallow( <ImagesContainer imagesArray={imagesArray} /> );
    expect(wrapper.containsMatchingElement(<div className="gallery" />)).toEqual(true);
  });
});
