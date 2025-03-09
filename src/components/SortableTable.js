// import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import {
  FaArrowUpWideShort,
  FaArrowDownWideShort,
  FaArrowDownUpAcrossLine,
} from "react-icons/fa6";
import Table from "./Table";
import useSort from "../hooks/use-sort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const getIcons = (label) => {
    if (label !== sortBy) {
      return (
        <div className="mr-1">
          <FaArrowDownUpAcrossLine />
        </div>
      );
    }

    if (sortOrder === null) {
      return (
        <div className="mr-1">
          <FaArrowDownUpAcrossLine />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <FaArrowUpWideShort />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <FaArrowDownWideShort />
        </div>
      );
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => {
            setSortColumn(column.label);
          }}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  console.log(config);
  console.log(updatedConfig);

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

export default SortableTable;
