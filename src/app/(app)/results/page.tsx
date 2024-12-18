'use client'

import { useState } from 'react'

export default function Component() {
  const [highlightedCell, setHighlightedCell] = useState<any>({ row: null, col: null, mainCol: null })

  const mainColumns = ['Original Text', 'GPT Summary', 'Claude Summary', 'Llama Summary']
  const subColumns = ['Coherence', 'Clarity', 'Relevance', 'Correctness', 'Average']

  const data = [
    {
      originalText: 'Lorem ipsum dolor',
      gptSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
      claudeSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
      llamaSummary: { coherence: 3, clarity: 4, relevance: 4, correctness: 4, average: 3.75 },
    },
    {
      originalText: 'Sed do eiusmod ',
      gptSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
      claudeSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
      llamaSummary: { coherence: 4, clarity: 3, relevance: 5, correctness: 4, average: 4 },
    },
    {
      originalText: 'Ut enim ad ',
      gptSummary: { coherence: 3, clarity: 4, relevance: 5, correctness: 4, average: 4 },
      claudeSummary: { coherence: 5, clarity: 5, relevance: 4, correctness: 5, average: 4.75 },
      llamaSummary: { coherence: 4, clarity: 4, relevance: 3, correctness: 5, average: 4 },
    },
    {
      originalText: 'Lorem ipsum dolor',
      gptSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
      claudeSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
      llamaSummary: { coherence: 3, clarity: 4, relevance: 4, correctness: 4, average: 3.75 },
    },
    {
      originalText: 'Sed do eiusmod ',
      gptSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
      claudeSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
      llamaSummary: { coherence: 4, clarity: 3, relevance: 5, correctness: 4, average: 4 },
    },
    {
      originalText: 'Ut enim ad ',
      gptSummary: { coherence: 3, clarity: 4, relevance: 5, correctness: 4, average: 4 },
      claudeSummary: { coherence: 5, clarity: 5, relevance: 4, correctness: 5, average: 4.75 },
      llamaSummary: { coherence: 4, clarity: 4, relevance: 3, correctness: 5, average: 4 },
    },
    {
      originalText: 'Lorem ipsum dolor',
      gptSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
      claudeSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
      llamaSummary: { coherence: 3, clarity: 4, relevance: 4, correctness: 4, average: 3.75 },
    },
    {
      originalText: 'Sed do eiusmod ',
      gptSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
      claudeSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
      llamaSummary: { coherence: 4, clarity: 3, relevance: 5, correctness: 4, average: 4 },
    },
    {
      originalText: 'Ut enim ad ',
      gptSummary: { coherence: 3, clarity: 4, relevance: 5, correctness: 4, average: 4 },
      claudeSummary: { coherence: 5, clarity: 5, relevance: 4, correctness: 5, average: 4.75 },
      llamaSummary: { coherence: 4, clarity: 4, relevance: 3, correctness: 5, average: 4 },
    },
    {
      originalText: 'Lorem ipsum dolor',
      gptSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
      claudeSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
      llamaSummary: { coherence: 3, clarity: 4, relevance: 4, correctness: 4, average: 3.75 },
    },
    {
      originalText: 'Sed do eiusmod ',
      gptSummary: { coherence: 5, clarity: 4, relevance: 5, correctness: 4, average: 4.5 },
      claudeSummary: { coherence: 4, clarity: 5, relevance: 4, correctness: 5, average: 4.5 },
      llamaSummary: { coherence: 4, clarity: 3, relevance: 5, correctness: 4, average: 4 },
    },
    {
      originalText: 'Ut enim ad ',
      gptSummary: { coherence: 3, clarity: 4, relevance: 5, correctness: 4, average: 4 },
      claudeSummary: { coherence: 5, clarity: 5, relevance: 4, correctness: 5, average: 4.75 },
      llamaSummary: { coherence: 4, clarity: 4, relevance: 3, correctness: 5, average: 4 },
    },
  ]

  const isHighlighted = (rowIndex:any, colIndex:any, mainColIndex:any = null) => {
    if (highlightedCell.row === null && highlightedCell.col === null) return false;
    
    if (mainColIndex !== null) {
      return mainColIndex === highlightedCell.mainCol || (colIndex !== null && colIndex === highlightedCell.col);
    }

    if (rowIndex === null) {
      return colIndex === highlightedCell.col;
    }

    if (rowIndex === highlightedCell.row && colIndex === highlightedCell.col) {
      return 'intersection';
    }

    if (rowIndex === highlightedCell.row && colIndex < highlightedCell.col) {
      return 'row';
    }

    if (colIndex === highlightedCell.col && rowIndex < highlightedCell.row) {
      return 'column';
    }

    return false;
  }

  return (
    <div className="w-full h-[500px] overflow-auto relative max-w-[calc(100vw-2rem)]">
      <table className="w-full border-collapse select-none">
        <thead className="sticky top-0 z-20">
          <tr>
            <th className="sticky left-0 top-0 z-30 bg-gray-200 p-2 text-left font-bold border border-gray-300 w-[300px]">
              {mainColumns[0]}
            </th>
            {mainColumns.slice(1).map((col, index) => (
              <th
                key={col}
                colSpan={5}
                className={`bg-gray-200 p-2 text-left font-bold border border-gray-300 transition-colors duration-150 ${
                  isHighlighted(null, null, index + 1) ? 'bg-yellow-100' : ''
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
          <tr>
            <th className="sticky left-0 top-[41px] z-30 bg-gray-100 p-2 text-left font-semibold border border-gray-300 w-[300px]"></th>
            {mainColumns.slice(1).map((col, mainIndex) =>
              subColumns.map((subCol, subIndex) => (
                <th
                  key={`${col}-${subCol}`}
                  className={`bg-gray-100 p-2 text-left font-semibold border border-gray-300 transition-colors duration-150 ${
                    isHighlighted(null, mainIndex * 5 + subIndex + 1) === 'column' ? 'bg-yellow-100' : ''
                  }`}
                >
                  {subCol}
                </th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td
                className={`sticky left-0 z-10 bg-white p-2 border border-gray-300 transition-colors duration-150 w-[300px] ${
                  isHighlighted(rowIndex, 0) === 'row' ? 'bg-green-100' : ''
                }`}
                onMouseEnter={() => setHighlightedCell({ row: rowIndex, col: 0, mainCol: 0 })}
                onMouseLeave={() => setHighlightedCell({ row: null, col: null, mainCol: null })}
              >
                {row.originalText}
              </td>
              {Object.entries(row)
                .slice(1)
                .map(([key, summary], summaryIndex) =>
                  Object.entries(summary).map(([subKey, value], subIndex) => {
                    const colIndex = summaryIndex * 5 + subIndex + 1;
                    const highlightType = isHighlighted(rowIndex, colIndex);
                    let bgColor = '';
                    if (highlightType === 'intersection') {
                      bgColor = 'bg-red-100';
                    } else if (highlightType === 'row') {
                      bgColor = 'bg-green-100';
                    } else if (highlightType === 'column') {
                      bgColor = 'bg-yellow-100';
                    }
                    return (
                      <td
                        key={`${key}-${subKey}`}
                        className={`p-2 border border-gray-300 transition-colors duration-150 ${bgColor}`}
                        onMouseEnter={() =>
                          setHighlightedCell({
                            row: rowIndex,
                            col: colIndex,
                            mainCol: summaryIndex + 1,
                          })
                        }
                        onMouseLeave={() => setHighlightedCell({ row: null, col: null, mainCol: null })}
                      >
                        {value}
                      </td>
                    );
                  })
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}