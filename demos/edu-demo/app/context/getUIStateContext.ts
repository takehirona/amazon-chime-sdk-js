import React from 'react';

const context = React.createContext();

export default function getUIStateContext() {
  return context;
}