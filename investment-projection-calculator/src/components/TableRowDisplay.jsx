import React from 'react'

export default function TableRowDisplay() {
    return (
        <tr key={row.period}>
            <td>{row.period}</td>
            <td>{row.year}</td>
            <td>{row.age}</td>
            <td>{nfObject.format(Math.round(row.openingBalance))}</td>
            <td>{nfObject.format(Math.round(row.contributions))}</td>
            <td>{nfObject.format(Math.round(row.getInterestOnContributions(settings.growthRate)))}</td>
            <td>{nfObject.format(Math.round(row.getInterestOnOpeningBalance(settings.growthRate)))}</td>
            <td>{nfObject.format(Math.round(row.getClosingBalance(settings.growthRate)))}</td>
        </tr>
    )
}
