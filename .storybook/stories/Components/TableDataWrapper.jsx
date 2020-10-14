import React, { Component } from "react";
import { sortBy } from "lodash";
import mockData from "../../mock";

export default class TableDataWrapper extends Component {
  constructor(props) {
    super(props);

    this.data = mockData(
      {
        name: /ks-console-\d{5}/,
        node: /node-\d{1}/,
        "status|+1": ["running", "pending"],
        podIP: "@ip",
        app: "kubesphere",
        startTime: "@date",
      },
      40
    );

    this.columns = [
      {
        title: "Group1",
        children: [
          {
            title: "Name",
            dataIndex: "name",
            sorter: true,
            search: true,
          },
          {
            title: "Node",
            dataIndex: "node",
            isHideable: true,
            width: "18%",
          },
          {
            title: "Status",
            dataIndex: "status",
            filters: [
              { text: "Running", value: "running" },
              { text: "Pending", value: "pending" },
            ],
            isHideable: true,
            search: true,
          },
          {
            title: "Pod IP",
            dataIndex: "podIP",
            isHideable: true,
            width: "15%",
          },
        ],
      },
      {
        title: "Group2",
        children: [
          {
            title: "Application",
            dataIndex: "app",
            isHideable: true,
            search: true,
            width: "15%",
          },
          {
            title: "Updated Time",
            dataIndex: "startTime",
            sorter: true,
            isHideable: true,
            width: 150,
          },
        ],
      },
    ];

    this.state = {
      list: {
        data: [],
        isLoading: false,
        selectedRowKeys: [],
        filters: {},
        sorter: {},
        pagination: { page: 1, total: 0, limit: 10 },
      },
    };
  }

  componentDidMount() {
    this.fetchList();
  }

  setSelectedRowKeys = (value) => {
    this.setState({ list: { ...this.state.list, selectedRowKeys: value } });
  };

  fetchList = ({ name, pagination = {}, filters = {}, sorter = {} } = {}) => {
    this.setState({ list: { ...this.state.list, isLoading: true } }, () => {
      setTimeout(() => {
        let data = [...this.data];

        if (name) {
          data = data.filter((item) => item.name.indexOf(name) !== -1);
        }

        const filterKeys = Object.keys(filters);
        if (filterKeys.length > 0) {
          data = data.filter((item) =>
            filterKeys.every((key) => filters[key] === item[key])
          );
        }

        if (sorter.field && sorter.order) {
          data = sortBy(data, [sorter.field]);
          if (sorter.order === "desc") {
            data = data.reverse();
          }
        }

        const total = data.length;
        const { page = 1, limit = 10 } = pagination;
        data = data.slice((page - 1) * limit, page * limit);

        this.setState({
          list: {
            ...this.state.list,
            data,
            filters,
            sorter,
            pagination: { total, page, limit },
            isLoading: false,
          },
        });
      }, 300);
    });
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        {children({
          list: this.state.list,
          columns: this.columns,
          fetchList: this.fetchList,
          setSelectedRowKeys: this.setSelectedRowKeys,
        })}
      </div>
    );
  }
}
