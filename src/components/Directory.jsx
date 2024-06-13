import React from 'react';

const Directory = ({ dataStructure, onAddFile, onAddFolder }) => {
    const renderDirectory = (items) => {
        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.children ? (
                            <>
                                <div>
                                    {item.title}
                                    <button onClick={() => onAddFile(item.title)}>Add File</button>
                                    <button onClick={() => onAddFolder(item.title)}>Add Folder</button>
                                </div>
                                {renderDirectory(item.children)}
                            </>
                        ) : (
                            <div>{item.title}</div>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            {renderDirectory(dataStructure)}
        </div>
    );
};

export default Directory;
