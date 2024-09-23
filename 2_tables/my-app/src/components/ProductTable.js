import React, { useState } from 'react';

const ProductTable = () => {
  const [rowData, setRowData] = useState([
    { col1: '', col2: '', col3: 0 },
  ]);

  // Function to handle input changes in Col1 and Col2
  const handleInputChange = (index, field, value) => {
    const updatedRowData = rowData.map((row, i) => {
      if (i === index) {
        const newRow = {
          ...row,
          [field]: value,
        };

        // Update col3 (product) when col1 or col2 changes
        newRow.col3 = newRow.col1 && newRow.col2 ? newRow.col1 * newRow.col2 : 0;
        
        return newRow;
      }
      return row;
    });

    setRowData(updatedRowData);
  };

  // Function to add new rows
  const addRow = () => {
    setRowData([...rowData, { col1: '', col2: '', col3: 0 }]);
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Product (Col1 * Col2)</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  value={row.col1}
                  onChange={(e) => handleInputChange(index, 'col1', e.target.value)}
                  placeholder="Enter number"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.col2}
                  onChange={(e) => handleInputChange(index, 'col2', e.target.value)}
                  placeholder="Enter number"
                />
              </td>
              <td>{row.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
    </div>
  );
};

export default ProductTable;
