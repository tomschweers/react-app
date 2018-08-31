import React from 'react'
import ReactTable from 'react-table'

const data = [
  {
    'ROW_SORT': '1',
    'MODEL_NAME': null,
    'QUANTITY': '1',
    'MODEL_XREF': 'BXCBC-CWE3-001A',
    'MODEL_DESC': null,
    'ITEM_DESC': 'BASE ASSY,XWE SINGLE NODE',
    'ITEM_COST': '3955.97',
    'CPQ_LINE_DOC_NUM': '-1',
    'ROW_LEVEL': null,
    'ITEM_NUMBER': '8-01770-01',
    'LINE_NUM': '1',
    'ITEM_PRICE': '12000.0',
    'ITEM_MARGIN': '8044.03'
  },
  {
    'ROW_SORT': '1',
    'MODEL_NAME': null,
    'QUANTITY': '1',
    'MODEL_XREF': 'BXCBC-ANCP-210B',
    'MODEL_DESC': null,
    'ITEM_DESC': 'XCELLIS,WORKFLOW EXTENDER,NIC,10GBE,OPTICAL,DUAL PORT,LOWPROFILE',
    'ITEM_COST': '659.88',
    'CPQ_LINE_DOC_NUM': '-1',
    'ROW_LEVEL': null,
    'ITEM_NUMBER': '8-01660-03',
    'LINE_NUM': '2',
    'ITEM_PRICE': '2160.0',
    'ITEM_MARGIN': '1500.12'
  },
  {
    'ROW_SORT': '1',
    'MODEL_NAME': null,
    'QUANTITY': '1',
    'MODEL_XREF': 'BXCBC-ANCT-210B',
    'MODEL_DESC': null,
    'ITEM_DESC': 'XCELLIS WORKFLOW EXTENDER,NIC,10GBE,TWINAX DUAL PORT,LOW PROFILE',
    'ITEM_COST': '496.01',
    'CPQ_LINE_DOC_NUM': '-1',
    'ROW_LEVEL': null,
    'ITEM_NUMBER': '8-01660-04',
    'LINE_NUM': '3',
    'ITEM_PRICE': '1680.0',
    'ITEM_MARGIN': '1183.99'
  }
]

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

const MyTable = () => (
  <div id="reactTable">
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize= {10}
      className={'-highlight -striped'}
      SubComponent={row => {
        return (
          <div>
            <ReactTable
              data={data}
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

export default MyTable
