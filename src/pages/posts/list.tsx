import {
  List,
  Table,
  TextField,
  useTable,
  IResourceComponentsProps,
  getDefaultSortOrder,
  DateField,
  TagField,
  // Space,
  // EditButton,
  // DeleteButton,
  // useMany,
  // useSelect,
  // FilterDropdown,
  // Select,
  // ShowButton,
} from "@pankod/refine";
import { ILeads } from "interfaces";
import { useEffect } from "react";
import axios from 'axios'

export const PostList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorter } = useTable<ILeads>({
    initialSorter: [
      {
        field: "id",
        order: "desc",
      },
    ],
  });

  useEffect(() => {
    console.log(axios.defaults.headers);
  }, [])


  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="name"
          key="name"
          title="Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("name", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="occupation"
          key="occupation"
          title="Occupation"
          render={(value) => <TagField value={value} />}
          defaultSortOrder={getDefaultSortOrder("occupation", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="product_interest"
          key="product_interest"
          title="Product Interest"
          render={(value) => <DateField value={value} />}
          defaultSortOrder={getDefaultSortOrder("product_interest")}
          sorter
        />
        <Table.Column
          dataIndex="phone1"
          key="phone1"
          title="Phone"
          render={(value) => <DateField value={value} />}
          defaultSortOrder={getDefaultSortOrder("phone1")}
          sorter
        />
        <Table.Column
          dataIndex="postal_province_name"
          key="postal_province_name"
          title="Province"
          render={(value) => <DateField value={value} />}
          defaultSortOrder={getDefaultSortOrder("postal_province_name")}
          sorter
        />
      </Table>
    </List>
  );
}