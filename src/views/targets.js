import React, {useState, useEffect} from "react";
import ReactTable from "react-table";
import FuzzySearch from "fuzzy-search";
import dateFormat from "dateformat";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormSelect,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";
import {baseUrl} from '../baserUrl'

import PageTitle from "../components/common/PageTitle";
import RangeDatePicker from "../components/common/RangeDatePicker";

function Targets(props)  {

    const [pageSizeOptions, setPageSizeOptions] = useState([5, 10, 15, 20, 25, 30])
    const [pageSize, setPageSize] = useState(10)
    const [tableData, setTableData] = useState(null)
    const [searcher, setSearcher] = useState(null)

    /**
     *  Get the all the targets with their type data
     */
    async function getTarget(){
        const response = await fetch(baseUrl+'targets?filter={"include":["targetType"]}',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            //Authorization: 'Bearer ' + props.token
        }
        })
        if(response.status===200){
            const data = await response.json()
            console.log('targets: ', data)
            //generate the data Table here
        }else{
            console.log('getTargets error ', response.status)
        }
    }

  useEffect(()=>{
    // Initialize the fuzzy searcher.
     setSearcher(new FuzzySearch(tableData, ["customer", "status"], {
        caseSensitive: false
      }))
      getTarget()
  },[])


  /**
   * Returns the appropriate status class for the `Status` column.
   */
  function getStatusClass(status) {
    //needs to add more statuses  
    const statusMap = {
      Cancelled: "danger",
      Complete: "success",
      Pending: "warning"
    };

    return `text-${statusMap[status]}`;
  }

  /**
   * Handles the page size change event.
   */
  function handlePageSizeChange(e) {
    this.setState({
      ...this.state,
      pageSize: e.target.value
    });
  }

  /**
   * Handles the global search.
   */
  function handleFilterSearch(e) {
    this.setState({
      ...this.state,
      tableData: this.searcher.search(e.target.value)
    });
  }

    const tableColumns = [
      {
        Header: "#",
        accessor: "id",
        maxWidth: 60,
        className: "text-center"
      },
      {
        Header: "Date",
        accessor: "date",
        className: "text-center",
        minWidth: 200,
        Cell: row =>
          dateFormat(new Date(row.original.date), "dddd, mmmm dS, yyyy")
      },
      {
        Header: "Customer",
        accessor: "customer",
        className: "text-center"
      },
      {
        Header: "Products",
        accessor: "products",
        maxWidth: 100,
        className: "text-center"
      },
      {
        Header: "Status",
        accessor: "status",
        maxWidth: 100,
        Cell: row => (
          <span className={this.getStatusClass(row.original.status)}>
            {row.original.status}
          </span>
        ),
        className: "text-center"
      },
      {
        Header: "Total",
        accessor: "total",
        maxWidth: 100,
        Cell: row => <span className="text-success">{row.original.total}</span>,
        className: "text-center"
      },
      {
        Header: "Actions",
        accessor: "actions",
        maxWidth: 300,
        minWidth: 180,
        sortable: false,
        Cell: row => (
          <ButtonGroup size="sm" className="d-table mx-auto">
            <Button theme="white" onClick={() => this.handleItemConfirm(row)}>
              <i className="material-icons">&#xE5CA;</i>
            </Button>
            <Button
              theme="white"
              onClick={() => this.handleItemViewDetails(row)}
            >
              <i className="material-icons">&#xE870;</i>
            </Button>
            <Button theme="white" onClick={() => this.handleItemEdit(row)}>
              <i className="material-icons">&#xE254;</i>
            </Button>
            <Button theme="white" onClick={() => this.handleItemDelete(row)}>
              <i className="material-icons">&#xE872;</i>
            </Button>
          </ButtonGroup>
        )
      }
    ];

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Transaction History" subtitle="Dashboards" className="text-sm-left mb-3" />
          <Col sm="4" className="d-flex ml-auto my-auto">
            <RangeDatePicker className="justify-content-end" />
          </Col>
        </Row>
        <Card className="p-0">
          <CardHeader className="p-0">
            <Container fluid className="file-manager__filters border-bottom">
              <Row>
                {/* Filters :: Page Size */}
                <Col className="file-manager__filters__rows d-flex" md="6">
                  <span>Show</span>
                  <FormSelect
                    size="sm"
                    value={pageSize}
                    onChange={handlePageSizeChange}
                  >
                    {pageSizeOptions.map((size, idx) => (
                      <option key={idx} value={size}>
                        {size} rows
                      </option>
                    ))}
                  </FormSelect>
                </Col>

                {/* Filters :: Search */}
                <Col className="file-manager__filters__search d-flex" md="6">
                  <InputGroup seamless size="sm" className="ml-auto">
                    <InputGroupAddon type="prepend">
                      <InputGroupText>
                        <i className="material-icons">search</i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <FormInput onChange={handleFilterSearch} />
                  </InputGroup>
                </Col>
              </Row>
            </Container>
          </CardHeader>
          <CardBody className="p-0">
            <div className="">
              <ReactTable
                columns={tableColumns}
                data={tableData}
                pageSize={pageSize}
                showPageSizeOptions={false}
                resizable={false}
              />
            </div>
          </CardBody>
        </Card>
      </Container>
    );
  
}

export default Targets;
