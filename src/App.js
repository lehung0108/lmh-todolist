import React, { useState, useMemo } from 'react';

import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import ListTasksTable from './components/ListTasksTable';
import Control from './components/Control';

import initListTasks from './mock/State';

function App() {

  const [listTasks, setListTasks] = useState(initListTasks);
  const [orderBy, setOrderBy] = useState('name');
  const [orderDir, setOrderDir] = useState('asc');
  const [searchText, setSearchText] = useState('');


  const onSelectSort = (orderBy, orderDir) => {
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  }

  const onChangeSearch = (text) => {
    setSearchText(text);
  }

  const handleAddNewTask = ({id, name, level}) => {
    listTasks.push({
      id, name, level
    })
    setListTasks([...listTasks]);
  }


  const listTaskSearch = useMemo(() => {

    return listTasks.filter(task => {
      return task.name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1;
    })
    
  }, [searchText, listTasks])

  const listTaskSortAndSearch = useMemo(() => {

    let returnIndex = 1;  // default desc

    if(orderDir === 'asc') returnIndex = -1;

    listTaskSearch.sort((a, b) => {
      if(a[orderBy] < b[orderBy]) return returnIndex
      else if(a[orderBy] > b[orderBy]) return (-1)*returnIndex
      return 0
    });
    return [...listTaskSearch];

  }, [orderBy, orderDir ,listTaskSearch])

  const injectedPropsControl = {
    orderBy,
    orderDir,
    searchText,
    onSelectSort,
    onChangeSearch,
    handleAddNewTask
  }


  return (
    <Container>
     <Header/>
     <Control {...injectedPropsControl}/>
     <ListTasksTable listTasks={listTaskSortAndSearch}/>
    </Container>
  );
}

export default App;
