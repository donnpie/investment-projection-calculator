import React from 'react'

export default function TableRowDisplay({period, year, age, ob, contributions, interestOnContributions, interestOnOpeningBalance, closingBalance}) {
    const nfObject = new Intl.NumberFormat('en-US');
    return (
        <tr key={period}>
            <td>{period}</td>
            <td>{year}</td>
            <td>{age}</td>
            <td>{nfObject.format(Math.round(ob))}</td>
            <td>{nfObject.format(Math.round(contributions))}</td>
            <td>{nfObject.format(Math.round(interestOnContributions))}</td>
            <td>{nfObject.format(Math.round(interestOnOpeningBalance))}</td>
            <td>{nfObject.format(Math.round(closingBalance))}</td>
        </tr>
    )
}

