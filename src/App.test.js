import React from 'react';
import renderer, { act } from 'react-test-renderer';

import App from './App';
import CreateTodo from './components/CreateTodo';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import Item from './components/Item';

describe('Item test', () => {
  const item = {
    title: "wash car",
    complete:false,
    taskId: "123"
  };
  const handleRemoveItem = jest.fn();
    let component = renderer.create(<Item item = {item} removeTask={handleRemoveItem}/>).root;
  
  it('render item with all properties', () => {
    expect(
      component.findByProps({type : "checkbox" }).props.checked
    ).toBe(false);
    expect(
      component.findByProps({type:"text"}).props.value
    ).toBe("wash car");
    expect(
      component.findAllByType("button").length
    ).toEqual(6);
  });

  it('calls removeTask on remove button click', () => {
    let deleteButton = component.findAllByType("button")[5];
  
    act(deleteButton.props.onClick);

    expect(handleRemoveItem).toHaveBeenCalledTimes(1);
    expect(handleRemoveItem).toHaveBeenCalledWith(item);

    expect(component.findAllByType(Item).length).toEqual(1);
  });
});

describe("Todo List test", () => {
  const itemList = [
    { 
      title: "wash car",
      complete:false,
      taskId: "123"
    },
    {
      title: "clean closet",
      complete: true,
      taskId: "456"
    }
  ];
  let component = renderer.create(<TodoList list = {itemList}/>).root;
  it('render correct number of items', () => {
    expect(
      component.findByProps({className : "list-group shadow-sm" }).children.length
    ).toEqual(itemList.length);   
  });
  it('items in list receive and show correct value from list', () => {
    const elementList = component.findAllByType(Item);
    elementList.forEach((el,index) => {
      let value = el.findByProps({type:"text"}).props.value;
      expect(value.includes(`${itemList[index].title}`)).toBe(true);
    });
  });
});

describe("CreateToDo test", () => {
  const handleSubmitNewtask = jest.fn();
  let component = renderer.create(<CreateTodo submitNewTask={handleSubmitNewtask}/>).root;
  let pseudoSpacesEvent = { 
    target: { value: "    " }
  };

  it('submit button enable when there are input', () => {
    
    act(() => {
      component.findAllByType('input')[0].props.onChange(pseudoSpacesEvent);
    });
    expect(
      component.findAllByType('button')[0].props.disabled
    ).toBe(false);
  });

  it('submit the empty input form', () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {
      preventDefault: mockPreventDefault
    };
    act(() => {
      component.findAllByType('input')[0].props.onChange(pseudoSpacesEvent);
      component.findAllByType('form')[0].props.onSubmit(mockEvent);
    });
    
    expect(mockPreventDefault).toHaveBeenCalledTimes(1);
    expect(
      component.findAllByType('small')[0].children.includes('Please make sure that your task content letters or/and numbers')
    ).toBe(true);
  });
});
