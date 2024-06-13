import { useState } from 'react';
import './App.css';
import Directory from './components/Directory';

function App() {
  const [directoryStructure, setDirectoryStructure] = useState([
    {
      title: 'Folder1',
      children: [
        {
          title: 'File1'
        },
        {
          title: 'File2',
          children: [
            {
              title: 'subFile1'
            }
          ]
        }
      ]
    },
    {
      title: 'Folder2',
      children: [
        {
          title: 'File1'
        }
      ]
    }
  ]);

  const handleAddFile = (folderName) => {
    const updateStructure = (structure) => {
      return structure.map(item => {
        if (item.title === folderName) {
          return {
            ...item,
            children: [...(item.children || []), { title: 'NewFile' }]
          };
        } else if (item.children) {
          return {
            ...item,
            children: updateStructure(item.children)
          };
        }
        return item;
      });
    };

    setDirectoryStructure(updateStructure(directoryStructure));
  };

  const handleAddFolder = (folderName) => {
    const updateStructure = (structure) => {
      return structure.map(item => {
        if (item.title === folderName) {
          return {
            ...item,
            children: [...(item.children || []), { title: 'NewFolder', children: [] }]
          };
        } else if (item.children) {
          return {
            ...item,
            children: updateStructure(item.children)
          };
        }
        return item;
      });
    };

    setDirectoryStructure(updateStructure(directoryStructure));
  };

  return (
    <>
      <Directory dataStructure={directoryStructure} onAddFile={handleAddFile} onAddFolder={handleAddFolder} />
    </>
  );
}

export default App;
