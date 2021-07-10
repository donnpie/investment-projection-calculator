

const TableDisplay = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Period</th>
                    <th>Year</th>
                    <th>Age</th>
                    <th>Opening balance</th>
                    <th>Contributions</th>
                    <th>Interest on contributions</th>
                    <th>Interest on OB</th>
                    <th>Closing balance</th>
                </tr>
            </thead>
            <tbody id="table-body">
            </tbody>
        </table>
    )
}

export default TableDisplay;