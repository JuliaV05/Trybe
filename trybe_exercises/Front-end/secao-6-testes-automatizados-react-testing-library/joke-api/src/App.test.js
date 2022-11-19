// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});
it('fetches a new joke when button is clicked', async () => {
  const jokeOne = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  }
  const jokeTwo = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  }
   jest.spyOn(global, 'fetch');
   global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(jokeOne),
   });
    render(<App />);
    const newJoke = screen.getByRole('button', { name: 'New joke'})
  
  expect(await screen.findByText(jokeOne.joke)).toBeInTheDocument();
  expect(screen.queryByText(jokeTwo.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);

  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(jokeTwo),
   });

   userEvent.click(newJoke);

   expect(await screen.findByText(jokeTwo.joke)).toBeInTheDocument();
   expect(screen.queryByText(jokeOne.joke)).not.toBeInTheDocument();
   expect(global.fetch).toBeCalledTimes(2);

})