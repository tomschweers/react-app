import React from 'react'
import ReactTable from 'react-table'
import ExpodedBOM from '../api'

const columns = [{
  Header: 'Row Sort',
  accessor: 'ROW_SORT'
}, {
  Header: 'Model Name',
  accessor: 'MODEL_NAME'
},
{
  Header: 'Quantity',
  accessor: 'QUANTITY'
},
{
  Header: 'Model Xref',
  accessor: 'MODEL_XREF'
},
{
  Header: 'Model Desc',
  accessor: 'MODEL_DESC'
},
{
  Header: 'Item Desc',
  accessor: 'ITEM_DESC'
},
{
  Header: 'Item Cost',
  accessor: 'ITEM_COST'
},
{
  Header: 'CPQ Line Doc Num',
  accessor: 'CPQ_LINE_DOC_NUM'
},
{
  Header: 'Row Level',
  accessor: 'ROW_LEVEL'
},
{
  Header: 'Item Number',
  accessor: 'ITEM_NUMBER'
},
{
  Header: 'Line Number',
  accessor: 'LINE_NUM'
},
{
  Header: 'Item Price',
  accessor: 'ITEM_PRICE'
},
{
  Header: 'Item Margin',
  accessor: 'ITEM_MARGIN'
}
]

const NestedTable = () => (
  <div id="reactTable">
    <ReactTable
      data={ExpodedBOM}
      columns={columns}
      defaultPageSize= {10}
      className={'-highlight -striped'}
      SubComponent={row => {
        return (
          <div>
            <ReactTable
              data={ExpodedBOM}
              columns={columns}
              minRows={0}
              showPagination={false}
            >
              {(state, makeTable, instance) => {
                return (
                  <div
                    style={{
                      overflow: 'hidden',
                      paddingLeft: '35px'
                    }}
                  >
                    {makeTable()}
                  </div>
                )
              }}
            </ReactTable>
          </div>
        )
      }
      }
    />
  </div>
)

export default NestedTable
